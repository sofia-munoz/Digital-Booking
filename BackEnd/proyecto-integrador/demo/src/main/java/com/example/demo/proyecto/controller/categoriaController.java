package com.example.demo.proyecto.controller;

import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ReferentialIntegrityException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.proyecto.model.Categoria;
import com.example.demo.proyecto.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/categorias")
public class categoriaController {

    @Autowired
    private CategoriaService categoriaService;


    @GetMapping("/{id}")
    public ResponseEntity<Categoria> buscar(@PathVariable Integer id) throws ResourceNotFoundException {
        return ResponseEntity.ok(categoriaService.buscar(id));
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id) throws ReferentialIntegrityException, ResourceNotFoundException, BadRequestException {
        categoriaService.eliminar(id);
        return ResponseEntity.ok().body("Se Eliminó la categoría con id: " + id);
    }


    @GetMapping
    public ResponseEntity<List<Categoria>> buscarTodos(){
        return ResponseEntity.ok(categoriaService.buscarTodos());
    }


    @PostMapping
    public ResponseEntity<Categoria> guardar(@RequestBody Categoria categoria){
        return ResponseEntity.ok(categoriaService.guardar(categoria));
    }


    @PutMapping
    public ResponseEntity<Categoria> actualizar(@RequestBody Categoria categoria) throws ResourceNotFoundException {
        return ResponseEntity.ok(categoriaService.actualizar(categoria));
    }
}

