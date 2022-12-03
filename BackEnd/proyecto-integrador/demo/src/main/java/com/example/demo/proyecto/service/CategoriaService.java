package com.example.demo.proyecto.service;

import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ReferentialIntegrityException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.proyecto.dto.CategoriaDto;
import com.example.demo.proyecto.model.Categoria;
import com.example.demo.proyecto.repository.CategoriaRepository;
import com.example.demo.proyecto.util.MapperUtil;
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
    private MapperUtil mapperUtil;

    public CategoriaService(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }

    public CategoriaDto guardar(CategoriaDto categoria) {
        return mapperUtil.map(categoriaRepository.save(mapperUtil.map(categoria, Categoria.class)),CategoriaDto.class);
    }

    public CategoriaDto buscar(Integer id) throws ResourceNotFoundException {
        Optional<Categoria> categoria = categoriaRepository.findById(id);
        if(categoria.isEmpty()){
           throw new ResourceNotFoundException("No existe una categoria con el ID: " + id);
        }
        return mapperUtil.map(categoriaRepository.findById(id), CategoriaDto.class);
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

    public List<CategoriaDto> buscarTodos(){
        return mapperUtil.mapAll(categoriaRepository.findAll(), CategoriaDto.class);
    }

    public CategoriaDto actualizar(CategoriaDto categoria)throws ResourceNotFoundException{
        buscar(categoria.getId());
        return mapperUtil.map(categoriaRepository.save(mapperUtil.map(categoria, Categoria.class)),CategoriaDto.class);
    }

}


