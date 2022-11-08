package com.example.demo.proyecto.service;

import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ReferentialIntegrityException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.proyecto.model.Imagen;
import com.example.demo.proyecto.repository.ImagenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ImagenService {
    @Autowired
    private ImagenRepository imagenRepository;

    public ImagenService(ImagenRepository imagenRepository) {
        this.imagenRepository = imagenRepository;
    }

    public Imagen guardar(Imagen imagen) {
        return imagenRepository.save(imagen);
    }


    public List<Imagen> imagenesByProducto(Integer idProducto){
        try {
            return imagenRepository.findImagenesByProductParams(idProducto);
        } catch(Exception ex){
            return null;
        }
    }

    public Imagen buscar(Integer id) throws ResourceNotFoundException {
        Optional<Imagen> imagen = imagenRepository.findById(id);
        if(imagen.isEmpty()){
            throw new ResourceNotFoundException("No existe una imagen con el ID: " + id);
        }
        return imagen.get();
    }


    public String eliminar(Integer id) throws ReferentialIntegrityException, ResourceNotFoundException, BadRequestException {
        try {
            buscar(id);
            imagenRepository.deleteById(id);
            return "Imagen eliminado";
        } catch (DataIntegrityViolationException ex) {
            throw new ReferentialIntegrityException("No se puede eliminar el registro ya que es referencia de otra entidad: " + ex.getMessage());
        }
    }

    public List<Imagen> buscarTodos(){
        return imagenRepository.findAll();
    }

    public Imagen actualizar(Imagen imagen)throws ResourceNotFoundException{
        buscar(imagen.getId());
        return imagenRepository.save(imagen);
    }
}
