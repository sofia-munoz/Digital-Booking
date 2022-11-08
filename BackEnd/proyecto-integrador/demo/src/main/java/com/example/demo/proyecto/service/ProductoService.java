package com.example.demo.proyecto.service;


import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ReferentialIntegrityException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.proyecto.model.Producto;
import com.example.demo.proyecto.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class ProductoService  {

    @Autowired
    private ProductoRepository productoRepository;

    public ProductoService(ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }

    public Producto guardar(Producto producto) {
        return productoRepository.save(producto);
    }

    public Producto buscar(Integer id) throws ResourceNotFoundException {
        Optional<Producto> producto = productoRepository.findById(id);
        if(producto.isEmpty()){
            throw new ResourceNotFoundException("No existe un producto con el ID: " + id);
        }
        return producto.get();
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

//    public List<Producto> productoByProvincia(Integer idProvincia){
//        try {
//            return productoRepository.findProductoByProvinciaParams(idProvincia);
//        } catch(Exception ex){
//            return null;
//        }
//    }

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

}
