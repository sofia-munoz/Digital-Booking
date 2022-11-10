package com.example.demo.proyecto.controller;


import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ReferentialIntegrityException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.proyecto.dto.ProductoDto;
import com.example.demo.proyecto.model.Producto;
import com.example.demo.proyecto.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/productos")
public class productoController {
    @Autowired
    private ProductoService productoService;

    //buscar todo junto categoría, ciudad y fecha desde y hasta, si son nulos no filtrar

    @CrossOrigin(origins="http://grupo5-0521ptc6n2.s3-website.us-east-2.amazonaws.com:80")
    @GetMapping("/byCategoria/{id}")
    public ResponseEntity<List<Producto>> buscarPorCategoría(@PathVariable Integer id){
        return ResponseEntity.ok(productoService.productoByCategoria(id));
    }

    @CrossOrigin(origins="http://grupo5-0521ptc6n2.s3-website.us-east-2.amazonaws.com:80")
    @GetMapping("/byProvincia/{id}")
    public ResponseEntity<List<Producto>> buscarPorProvincia(@PathVariable Integer id){
        return ResponseEntity.ok(productoService.productoByProvincia(id));
    }

    @CrossOrigin(origins="http://grupo5-0521ptc6n2.s3-website.us-east-2.amazonaws.com:80")
    @GetMapping("/byCiudad/{id}")
    public ResponseEntity<List<Producto>> buscarPorCiudad(@PathVariable Integer id){
        return ResponseEntity.ok(productoService.productoByCiudad(id));
    }

    @CrossOrigin(origins="http://grupo5-0521ptc6n2.s3-website.us-east-2.amazonaws.com:80")
    @GetMapping("/{id}")
    public ResponseEntity<ProductoDto> buscar(@PathVariable Integer id) throws ResourceNotFoundException {
        return ResponseEntity.ok(productoService.buscar(id));
    }

    @CrossOrigin(origins="http://grupo5-0521ptc6n2.s3-website.us-east-2.amazonaws.com:80")
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id) throws ReferentialIntegrityException, ResourceNotFoundException, BadRequestException {
        productoService.eliminar(id);
        return ResponseEntity.ok().body("Se Eliminó el producto con id: " + id);
    }

    @CrossOrigin(origins="http://grupo5-0521ptc6n2.s3-website.us-east-2.amazonaws.com:80")
    @GetMapping("/inicio")
    public ResponseEntity<List<Producto>> randomProducts(){
        return ResponseEntity.ok(productoService.eightRandomProducts());
    }

    @CrossOrigin(origins="http://grupo5-0521ptc6n2.s3-website.us-east-2.amazonaws.com:80")
    @GetMapping
    public ResponseEntity<List<Producto>> buscarTodos(){
        return ResponseEntity.ok(productoService.buscarTodos());
    }

    @CrossOrigin(origins="http://grupo5-0521ptc6n2.s3-website.us-east-2.amazonaws.com:80")
    @PostMapping
    public ResponseEntity<Producto> guardar(@RequestBody Producto producto){
        return ResponseEntity.ok(productoService.guardar(producto));
    }

    @CrossOrigin(origins="http://grupo5-0521ptc6n2.s3-website.us-east-2.amazonaws.com:80")
    @PutMapping
    public ResponseEntity<Producto> actualizar(@RequestBody Producto producto) throws ResourceNotFoundException {
        return ResponseEntity.ok(productoService.actualizar(producto));
    }
}
