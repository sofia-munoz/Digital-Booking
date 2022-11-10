package com.example.demo.proyecto.controller;

import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ReferentialIntegrityException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.proyecto.model.Ciudad;
import com.example.demo.proyecto.model.Producto;
import com.example.demo.proyecto.service.CiudadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ciudades")
public class ciudadController {
    @Autowired
    private CiudadService ciudadService;

    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity<Ciudad> buscar(@PathVariable Integer id) throws ResourceNotFoundException {
        return ResponseEntity.ok(ciudadService.buscar(id));
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id) throws ReferentialIntegrityException, ResourceNotFoundException, BadRequestException {
        ciudadService.eliminar(id);
        return ResponseEntity.ok().body("Se Eliminó la provincia con id: " + id);
    }

    @CrossOrigin
    @GetMapping
    public ResponseEntity<List<Ciudad>> buscarTodos(){
        return ResponseEntity.ok(ciudadService.buscarTodos());
    }

    @CrossOrigin
    @PostMapping
    public ResponseEntity<Ciudad> guardar(@RequestBody Ciudad ciudad){
        return ResponseEntity.ok(ciudadService.guardar(ciudad));
    }

    @CrossOrigin
    @PutMapping
    public ResponseEntity<Ciudad> actualizar(@RequestBody Ciudad ciudad) throws ResourceNotFoundException {
        return ResponseEntity.ok(ciudadService.actualizar(ciudad));
    }
}
