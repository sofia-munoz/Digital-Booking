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

    @CrossOrigin(origins="http://grupo5-0521ptc6n2.s3-website.us-east-2.amazonaws.com:80")
    @GetMapping("/{id}")
    public ResponseEntity<Provincia> buscar(@PathVariable Integer id) throws ResourceNotFoundException {
        return ResponseEntity.ok(provinciaService.buscar(id));
    }

    @CrossOrigin(origins="http://grupo5-0521ptc6n2.s3-website.us-east-2.amazonaws.com:80")
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id) throws ReferentialIntegrityException, ResourceNotFoundException, BadRequestException {
        provinciaService.eliminar(id);
        return ResponseEntity.ok().body("Se Eliminó la provincia con id: " + id);
    }

    @CrossOrigin(origins="http://grupo5-0521ptc6n2.s3-website.us-east-2.amazonaws.com:80")
    @GetMapping
    public ResponseEntity<List<Provincia>> buscarTodos(){
        return ResponseEntity.ok(provinciaService.buscarTodos());
    }

    @CrossOrigin(origins="http://grupo5-0521ptc6n2.s3-website.us-east-2.amazonaws.com:80")
    @PostMapping
    public ResponseEntity<Provincia> guardar(@RequestBody Provincia provincia){
        return ResponseEntity.ok(provinciaService.guardar(provincia));
    }

    @CrossOrigin(origins="http://grupo5-0521ptc6n2.s3-website.us-east-2.amazonaws.com:80")
    @PutMapping
    public ResponseEntity<Provincia> actualizar(@RequestBody Provincia provincia) throws ResourceNotFoundException {
        return ResponseEntity.ok(provinciaService.actualizar(provincia));
    }

}
