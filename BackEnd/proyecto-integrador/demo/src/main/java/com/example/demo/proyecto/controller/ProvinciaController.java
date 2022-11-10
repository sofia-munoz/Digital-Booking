package com.example.demo.proyecto.controller;

import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ReferentialIntegrityException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.proyecto.model.Provincia;
import com.example.demo.proyecto.service.ProvinciaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/provincias")
public class ProvinciaController {
    @Autowired
    private ProvinciaService provinciaService;

    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity<Provincia> buscar(@PathVariable Integer id) throws ResourceNotFoundException {
        return ResponseEntity.ok(provinciaService.buscar(id));
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id) throws ReferentialIntegrityException, ResourceNotFoundException, BadRequestException {
        provinciaService.eliminar(id);
        return ResponseEntity.ok().body("Se Eliminó la provincia con id: " + id);
    }

    @CrossOrigin
    @GetMapping
    public ResponseEntity<List<Provincia>> buscarTodos(){
        return ResponseEntity.ok(provinciaService.buscarTodos());
    }

    @CrossOrigin
    @PostMapping
    public ResponseEntity<Provincia> guardar(@RequestBody Provincia provincia){
        return ResponseEntity.ok(provinciaService.guardar(provincia));
    }

    @CrossOrigin
    @PutMapping
    public ResponseEntity<Provincia> actualizar(@RequestBody Provincia provincia) throws ResourceNotFoundException {
        return ResponseEntity.ok(provinciaService.actualizar(provincia));
    }

}
