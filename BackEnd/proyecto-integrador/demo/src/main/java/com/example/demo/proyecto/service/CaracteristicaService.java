package com.example.demo.proyecto.service;

import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ReferentialIntegrityException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.proyecto.model.Caracteristica;
import com.example.demo.proyecto.repository.CaracteristicaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CaracteristicaService {
    @Autowired
    private CaracteristicaRepository caracteristicaRepository;

    public CaracteristicaService(CaracteristicaRepository caracteristicaRepository) {
        this.caracteristicaRepository = caracteristicaRepository;
    }

    public Caracteristica guardar(Caracteristica caracteristica) {
        return caracteristicaRepository.save(caracteristica);
    }

    public Caracteristica buscar(Integer id) throws ResourceNotFoundException {
        Optional<Caracteristica> caracteristica = caracteristicaRepository.findById(id);
        if(caracteristica.isEmpty()){
            throw new ResourceNotFoundException("No existe una caracteristica con el ID: " + id);
        }
        return caracteristica.get();
    }


    public String eliminar(Integer id) throws ReferentialIntegrityException, ResourceNotFoundException, BadRequestException {
        try {
            buscar(id);
            caracteristicaRepository.deleteById(id);
            return "Caracteristica eliminado";
        } catch (DataIntegrityViolationException ex) {
            throw new ReferentialIntegrityException("No se puede eliminar el registro ya que es referencia de otra entidad: " + ex.getMessage());
        }
    }

    public List<Caracteristica> buscarTodos(){
        return caracteristicaRepository.findAll();
    }

    public Caracteristica actualizar(Caracteristica caracteristica)throws ResourceNotFoundException{
        buscar(caracteristica.getId());
        return caracteristicaRepository.save(caracteristica);
    }
}
