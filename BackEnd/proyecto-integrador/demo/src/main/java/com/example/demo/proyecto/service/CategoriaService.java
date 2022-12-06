package com.example.demo.proyecto.service;

import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ReferentialIntegrityException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.proyecto.model.Categoria;
import com.example.demo.proyecto.repository.CategoriaRepository;

import com.example.demo.proyecto.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.dao.DataIntegrityViolationException;

import java.util.List;
import java.util.Optional;


@Service
public class CategoriaService {

    @Autowired
    private CategoriaRepository categoriaRepository;
    @Autowired
    private ProductoRepository productoRepository;

    public CategoriaService(CategoriaRepository categoriaRepository, ProductoRepository productoRepository) {
        this.categoriaRepository = categoriaRepository;
        this.productoRepository = productoRepository;
    }

    public Categoria guardar(Categoria categoria) {
        return categoriaRepository.save(categoria);
    }

    public Categoria buscar(Integer id) throws BadRequestException {
        Optional<Categoria> categoria = categoriaRepository.findById(id);
        if(categoria.isEmpty()){
           throw new BadRequestException("No existe una categoria con el ID: " + id);
        }
        Categoria categoriaDB = categoria.get();
        categoriaDB.setTotalProductos(productoRepository.findProductoByCategoriaParams(id).size());
        categoriaDB.setDescripcion(String.valueOf(categoriaDB.getTotalProductos() + " " + categoriaDB.getTitulo().toLowerCase()));

        return categoriaDB;
    }

    public String eliminar(Integer id) throws ReferentialIntegrityException, ResourceNotFoundException, BadRequestException {
        try {
            buscar(id);
            categoriaRepository.deleteById(id);
            return "Categoria eliminada";
        } catch (DataIntegrityViolationException ex) {
            throw new ReferentialIntegrityException("No se puede eliminar el registro ya que es referencia de otra entidad: " + ex.getMessage());
        }
    }

    public List<Categoria> buscarTodos(){
        return categoriaRepository.findAll();
    }

    public Categoria actualizar(Categoria categoria) throws BadRequestException {
        buscar(categoria.getId());
        return categoriaRepository.save(categoria);
    }

}


