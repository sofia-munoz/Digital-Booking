package com.example.demo.proyecto.service;

import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ReferentialIntegrityException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.proyecto.model.Ciudad;
import com.example.demo.proyecto.model.Producto;
import com.example.demo.proyecto.repository.CiudadRepository;
import com.example.demo.proyecto.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class CiudadService {
    @Autowired
    private CiudadRepository ciudadRepository;

    public CiudadService(ProductoRepository ciudad) {this.ciudadRepository = ciudadRepository;}

    public Ciudad guardar(Ciudad ciudad) {
        return ciudadRepository.save(ciudad);
    }

    public Ciudad buscar(Integer id) throws ResourceNotFoundException {
        Optional<Ciudad> ciudad = ciudadRepository.findById(id);
        if(ciudad.isEmpty()){
            throw new ResourceNotFoundException("No existe un turn con el ID: " + id);
        }
        return ciudad.get();
    }

    public List<Ciudad> ciudadesByProvincias(Integer idProvincia){
        try {
            return ciudadRepository.findCiudadesByProvinciaParams(idProvincia);
        } catch(Exception ex){
            return null;
        }
    }



    //hacer un buscar con id de categoría, id ciudad y la fecha

    public String eliminar(Integer id) throws ReferentialIntegrityException, ResourceNotFoundException, BadRequestException {
        try {
            buscar(id);
            ciudadRepository.deleteById(id);
            return "Ciudad eliminada";
        } catch (DataIntegrityViolationException ex) {
            throw new ReferentialIntegrityException("No se puede eliminar el registro ya que es referencia de otra entidad: " + ex.getMessage());
        }
    }

    public List<Ciudad> buscarTodos(){
        return ciudadRepository.findAll();
    }

    public Ciudad actualizar(Ciudad ciudad)throws ResourceNotFoundException{
        buscar(ciudad.getId());
        return ciudadRepository.save(ciudad);
    }

}
