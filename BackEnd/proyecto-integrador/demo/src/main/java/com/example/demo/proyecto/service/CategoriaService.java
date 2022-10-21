package com.example.demo.proyecto.service;

import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ReferentialIntegrityException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.proyecto.model.Categoria;
import com.example.demo.proyecto.repository.CategoriaRepository;

import org.springframework.stereotype.Service;
import org.springframework.dao.DataIntegrityViolationException;

import java.util.List;
import java.util.Optional;


@Service
public class CategoriaService {



    private CategoriaRepository categoriaRepository;

    private CategoriaService categoriaService;

    public CategoriaService(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }

    public Categoria guardar(Categoria categoria) {
        return categoriaRepository.save(categoria);
    }

    public Categoria buscar(Integer id) throws ResourceNotFoundException {
        Optional<Categoria> categoria = categoriaRepository.findById(id);
        if(categoria.isEmpty()){
           throw new ResourceNotFoundException("No existe un turn con el ID: " + id);
        }
        return categoria.get();
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

    public Categoria actualzar(Categoria categoria)throws ResourceNotFoundException{
        buscar(categoria.getId());
        return categoriaRepository.save(categoria);
    }

}


