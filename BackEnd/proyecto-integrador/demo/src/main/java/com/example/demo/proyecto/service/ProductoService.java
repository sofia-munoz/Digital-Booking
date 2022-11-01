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
            throw new ResourceNotFoundException("No existe un turn con el ID: " + id);
        }
        return producto.get();
    }

    
    public List<Producto> productobycategoria(Integer id_categoria){
        List<Producto> productosEncontrados = buscarTodos();
        for (Producto producto: productosEncontrados
             ) {
            if (producto.getId_categoria().equals(id_categoria)){
                return productoRepository.findProductoByCategoriaParams(id_categoria);
            }
        }
        return null;
    }

    //hacer un buscar con id de categoría, id ciudad y la fecha

    public String eliminar(Integer id) throws ReferentialIntegrityException, ResourceNotFoundException, BadRequestException {
        try {
            buscar(id);
            productoRepository.deleteById(id);
            return "Producto eliminado";
        } catch (DataIntegrityViolationException ex) {
            throw new ReferentialIntegrityException("No se puede eliminar el registro ya que es referencia de otra entidad: " + ex.getMessage());
        }
    }

    public List<Producto> buscarTodos(){
        return productoRepository.findAll();
    }

    public Producto actualizar(Producto producto)throws ResourceNotFoundException{
        buscar(producto.getId());
        return productoRepository.save(producto);
    }

}
