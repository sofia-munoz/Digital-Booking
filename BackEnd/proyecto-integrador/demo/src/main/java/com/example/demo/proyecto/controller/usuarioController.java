package com.example.demo.proyecto.controller;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.proyecto.model.jwt.Usuario;
import com.example.demo.proyecto.service.jwt.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins="*")
public class usuarioController {
    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private PasswordEncoder passwordEncoder;

//
    @PostMapping
    public ResponseEntity<Usuario> guardar(@RequestBody Usuario usuario){
        String passWEncrypt = passwordEncoder.encode(usuario.getPassword());
        usuario.setPassword(passWEncrypt);
        return new ResponseEntity<Usuario>(
                usuarioService.guardar(usuario),
                HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Usuario> actualizar(@RequestBody Usuario usuario) throws ResourceNotFoundException {
        return ResponseEntity.ok(usuarioService.actualizar(usuario));
    }
}
