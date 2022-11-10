package com.example.demo.proyecto.controller;


import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ReferentialIntegrityException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.proyecto.model.Imagen;
import com.example.demo.proyecto.model.Producto;
import com.example.demo.proyecto.service.CategoriaService;
import com.example.demo.proyecto.service.ImagenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/imagenes")
public class imagenController {
    @Autowired
    private ImagenService imagenService;

    @CrossOrigin(origins="http://grupo5-0521ptc6n2.s3-website.us-east-2.amazonaws.com:80")
    @GetMapping("/{id}")
    public ResponseEntity<Imagen> buscar(@PathVariable Integer id) throws ResourceNotFoundException {
        return ResponseEntity.ok(imagenService.buscar(id));
    }

    @CrossOrigin(origins="http://grupo5-0521ptc6n2.s3-website.us-east-2.amazonaws.com:80")
    @GetMapping("/byProducto/{id}")
    public ResponseEntity<List<Imagen>> findImagenesByProduct(@PathVariable Integer id){
        return ResponseEntity.ok(imagenService.imagenesByProducto(id));
    }

    @CrossOrigin(origins="http://grupo5-0521ptc6n2.s3-website.us-east-2.amazonaws.com:80")
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id) throws ReferentialIntegrityException, ResourceNotFoundException, BadRequestException {
        imagenService.eliminar(id);
        return ResponseEntity.ok().body("Se Eliminó la imagen con id: " + id);
    }

    @CrossOrigin(origins="http://grupo5-0521ptc6n2.s3-website.us-east-2.amazonaws.com:80")
    @GetMapping
    public ResponseEntity<List<Imagen>> buscarTodos(){
        return ResponseEntity.ok(imagenService.buscarTodos());
    }

    @CrossOrigin(origins="http://grupo5-0521ptc6n2.s3-website.us-east-2.amazonaws.com:80")
    @PostMapping
    public ResponseEntity<Imagen> guardar(@RequestBody Imagen imagen){
        return ResponseEntity.ok(imagenService.guardar(imagen));
    }

    @CrossOrigin(origins="http://grupo5-0521ptc6n2.s3-website.us-east-2.amazonaws.com:80")
    @PutMapping
    public ResponseEntity<Imagen> actualizar(@RequestBody Imagen imagen) throws ResourceNotFoundException {
        return ResponseEntity.ok(imagenService.actualizar(imagen));
    }

}
