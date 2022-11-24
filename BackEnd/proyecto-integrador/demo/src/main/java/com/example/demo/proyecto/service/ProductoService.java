package com.example.demo.proyecto.service;


import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ReferentialIntegrityException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.proyecto.dto.ImagenDto;
import com.example.demo.proyecto.dto.ProductoDto;
import com.example.demo.proyecto.dto.ReservaDto;
import com.example.demo.proyecto.model.Imagen;
import com.example.demo.proyecto.model.Producto;
import com.example.demo.proyecto.model.Reserva;
import com.example.demo.proyecto.repository.ProductoRepository;
import com.example.demo.proyecto.repository.ImagenRepository;
import com.example.demo.proyecto.repository.ReservaRepository;
import com.example.demo.proyecto.util.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;


import java.awt.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.List;

@Service
public class ProductoService  {

    @Autowired
    private ProductoRepository productoRepository;
    @Autowired
    private ImagenRepository imagenRepository;
    @Autowired
    private ReservaRepository reservaRepository;

    public ProductoService(ProductoRepository productoRepository, ImagenRepository imagenRepository, ReservaRepository reservaRepository) {
        this.productoRepository = productoRepository;
        this.imagenRepository = imagenRepository;
        this.reservaRepository = reservaRepository;
    }

    public Producto guardar(Producto producto) {
        return productoRepository.save(producto);
    }

    public ProductoDto buscar(Integer id) throws ResourceNotFoundException {
        ProductoDto response = new ProductoDto();
        Optional<Producto> producto = productoRepository.findById(id);
        if(producto.isEmpty()){
            throw new ResourceNotFoundException("No existe un producto con el ID: " + id);
        }
        response.setProducto(producto.get());

        List<Imagen> imagenes = imagenRepository.findImagenesByProductParams(producto.get().getId());
        List<ImagenDto> imagenDtos = new ArrayList<>();
        imagenes.forEach(i -> imagenDtos.add(Mapper.MapImagen(i)));
        response.setImagenes(imagenDtos);

        List<ReservaDto> reservaDtos = new ArrayList<ReservaDto>();
        List<Reserva> reservas = reservaRepository.findReservasByProductParams(id);
        reservas.forEach(r -> reservaDtos.add(Mapper.MapReserva(r)));
        response.setReservas(reservaDtos);

        return response;
    }

    public List<Producto> productoByCategoria(Integer idCategoria){
        try {
            return productoRepository.findProductoByCategoriaParams(idCategoria);
        } catch(Exception ex){
                return null;
            }
    }

    public List<Producto> eightRandomProducts(){
        try {
            return productoRepository.randomProductsAndLimit();
        } catch(Exception ex){
            return null;
        }
    }

    public List<Producto> buscarTodos(){
        return productoRepository.findAll();
    }

    public List<Producto> productoByCiudad(Integer idCiudad){
        try {
            return productoRepository.findProductoByCiudadParams(idCiudad);
        } catch(Exception ex){
            return null;
        }
    }

    public List<Producto> productoByProvincia(Integer idProvincia){
        try {
            return productoRepository.findProductoByProvinciaParams(idProvincia);
        } catch(Exception ex){
            return null;
        }
    }

    public String eliminar(Integer id) throws ReferentialIntegrityException, ResourceNotFoundException, BadRequestException {
        try {
            buscar(id);
            productoRepository.deleteById(id);
            return "Producto eliminado";
        } catch (DataIntegrityViolationException ex) {
            throw new ReferentialIntegrityException("No se puede eliminar el registro ya que es referencia de otra entidad: " + ex.getMessage());
        }
    }


    public Producto actualizar(Producto producto)throws ResourceNotFoundException{
        buscar(producto.getId());
        return productoRepository.save(producto);
    }

    public List<Producto> productosDisponibles(String fechaInicial, String fechaFinal){
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        LocalDateTime fInicial = LocalDateTime.parse(fechaInicial, formatter);
        LocalDateTime fFinal = LocalDateTime.parse(fechaFinal, formatter);

        List<Producto> productosNoDisp = productoRepository.findAllByFechaInicialLessThanEqualAndFechaFinalGreaterThanEqual(fInicial, fFinal);
        Set<Integer> idProdNoDisp = new HashSet<>();
        productosNoDisp.forEach(p->idProdNoDisp.add(p.getId()));
        List<Producto> productos = productoRepository.findAll();
        List<Producto> productosDisponibles = new ArrayList<>();
        productos.forEach(producto -> {
            if(!idProdNoDisp.contains(producto.getId()))
                productosDisponibles.add(producto);

        });
        return  productosDisponibles;
    }

}
