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

import java.time.LocalDateTime;
import java.util.List;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/productos")
public class productoController {
    @Autowired
    private ProductoService productoService;

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
    public ResponseEntity<ProductoDto> buscar(@PathVariable Integer id) throws ResourceNotFoundException {
        return ResponseEntity.ok(productoService.buscar(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id) throws ReferentialIntegrityException, ResourceNotFoundException, BadRequestException {
        productoService.eliminar(id);
        return ResponseEntity.ok().body("Se Eliminó el producto con id: " + id);
    }

//user
    @GetMapping("/inicio")
    public ResponseEntity<List<Producto>> randomProducts(){
        return ResponseEntity.ok(productoService.eightRandomProducts());
    }

//public
    @GetMapping
    public ResponseEntity<List<Producto>> buscarTodos(){
        return ResponseEntity.ok(productoService.buscarTodos());
    }

    //admin
    @PostMapping
    public ResponseEntity<Producto> guardar(@RequestBody Producto producto){
        return ResponseEntity.ok(productoService.guardar(producto));
    }

    @PutMapping
    public ResponseEntity<Producto> actualizar(@RequestBody Producto producto) throws ResourceNotFoundException {
        return ResponseEntity.ok(productoService.actualizar(producto));
    }

    @GetMapping("/{fechaInicio}/{fechaFinal}")
    public ResponseEntity<List<Producto>> buscarPorCategoría(@PathVariable String fechaInicio, @PathVariable String fechaFinal){
        return ResponseEntity.ok(productoService.productosDisponibles(fechaInicio, fechaFinal));
    }
}
