package com.example.demo.proyecto.service;

import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ReferentialIntegrityException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.proyecto.model.Provincia;
import com.example.demo.proyecto.repository.ProvinciaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProvinciaService {
    @Autowired
    private ProvinciaRepository provinciaRepository;

    public ProvinciaService(ProvinciaRepository provinciaRepository) {this.provinciaRepository = provinciaRepository;}

    public Provincia guardar(Provincia provincia) {
        return provinciaRepository.save(provincia);
    }

    public Provincia buscar(Integer id) throws ResourceNotFoundException {
        Optional<Provincia> provincia = provinciaRepository.findById(id);
        if(provincia.isEmpty()){
            throw new ResourceNotFoundException("No existe una provincia con el ID: " + id);
        }
        return provincia.get();
    }


//    public List<Provincia> productobycategoria(Integer idCategoria){
//        try {
//            return provincia.findProductoByCategoriaParams(idCategoria);
//        } catch(Exception ex){
//            return null;
//        }
//    }

    //hacer un buscar con id de categoría, id provincia y la fecha

    public String eliminar(Integer id) throws ReferentialIntegrityException, ResourceNotFoundException, BadRequestException {
        try {
            buscar(id);
            provinciaRepository.deleteById(id);
            return "Provincia eliminada";
        } catch (DataIntegrityViolationException ex) {
            throw new ReferentialIntegrityException("No se puede eliminar el registro ya que es referencia de otra entidad: " + ex.getMessage());
        }
    }

    public List<Provincia> buscarTodos(){
        return provinciaRepository.findAll();
    }

    public Provincia actualizar(Provincia provincia)throws ResourceNotFoundException{
        buscar(provincia.getId());
        return provinciaRepository.save(provincia);
    }

}
