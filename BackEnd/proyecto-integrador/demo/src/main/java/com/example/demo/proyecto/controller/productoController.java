package com.example.demo.proyecto.controller;


import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ReferentialIntegrityException;
import com.example.demo.exception.ResourceNotFoundException;
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

    @GetMapping("/byCategoria/{id}")
    public ResponseEntity<List<Producto>> buscarPorCategoría(@PathVariable Integer id){
        return ResponseEntity.ok(productoService.productoByCategoria(id));
    }
    @GetMapping("/byProvincia/{id}")
    public ResponseEntity<List<Producto>> buscarPorProvincia(@PathVariable Integer id){
        return ResponseEntity.ok(productoService.productoByProvincia(id));
    }
    @GetMapping("/byCiudad/{id}")
    public ResponseEntity<List<Producto>> buscarPorCiudad(@PathVariable Integer id){
        return ResponseEntity.ok(productoService.productoByCiudad(id));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Producto> buscar(@PathVariable Integer id) throws ResourceNotFoundException {
        return ResponseEntity.ok(productoService.buscar(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id) throws ReferentialIntegrityException, ResourceNotFoundException, BadRequestException {
        productoService.eliminar(id);
        return ResponseEntity.ok().body("Se Eliminó el producto con id: " + id);
    }

    @GetMapping("/inicio")
    public ResponseEntity<List<Producto>> randomProducts(){
        return ResponseEntity.ok(productoService.eightRandomProducts());
    }

    @GetMapping
    public ResponseEntity<List<Producto>> buscarTodos(){
        return ResponseEntity.ok(productoService.buscarTodos());
    }

    @PostMapping
    public ResponseEntity<Producto> guardar(@RequestBody Producto producto){
        return ResponseEntity.ok(productoService.guardar(producto));
    }

    @PutMapping
    public ResponseEntity<Producto> actualizar(@RequestBody Producto producto) throws ResourceNotFoundException {
        return ResponseEntity.ok(productoService.actualizar(producto));
    }
}
