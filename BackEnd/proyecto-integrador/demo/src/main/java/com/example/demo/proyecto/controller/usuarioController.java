package com.example.demo.proyecto.controller;

import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ReferentialIntegrityException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.proyecto.model.Usuario;
import com.example.demo.proyecto.service.ProvinciaService;
import com.example.demo.proyecto.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins="*")
@RequestMapping("/usuarios")
public class usuarioController {
    @Autowired
    private UsuarioService usuarioService;


    @GetMapping("/{id}")
    public ResponseEntity<Usuario> buscar(@PathVariable Integer id) throws ResourceNotFoundException {
        return ResponseEntity.ok(usuarioService.buscar(id));
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id) throws ReferentialIntegrityException, ResourceNotFoundException, BadRequestException {
        usuarioService.eliminar(id);
        return ResponseEntity.ok().body("Se Eliminó la usuario con id: " + id);
    }


    @GetMapping
    public ResponseEntity<List<Usuario>> buscarTodos(){
        return ResponseEntity.ok(usuarioService.buscarTodos());
    }


    @PostMapping
    public ResponseEntity<Usuario> guardar(@RequestBody Usuario usuario){
        return ResponseEntity.ok(usuarioService.guardar(usuario));
    }


    @PutMapping
    public ResponseEntity<Usuario> actualizar(@RequestBody Usuario usuario) throws ResourceNotFoundException {
        return ResponseEntity.ok(usuarioService.actualizar(usuario));
    }
}
