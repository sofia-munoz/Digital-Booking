package com.example.demo.proyecto.controller;

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

//    @PostMapping
//    public ResponseEntity<Map<String,Object>> create(@RequestBody Usuario usuario){
//        Map<String, Object> response = new HashMap<>();
//        String passWEncrypt = passwordEncoder.encode(usuario.getPassword());
//        usuario.setPassword(passWEncrypt);
//        response.put("respuesta", usuarioService.guardar(usuario));
//        return ResponseEntity.ok(response);
//    }

    //add 201 code ()
    //password encripted (ok)
//    @ResponseStatus(code = HttpStatus.CREATED)
    @PostMapping
    public ResponseEntity<Usuario> guardar(@RequestBody Usuario usuario){
        String passWEncrypt = passwordEncoder.encode(usuario.getPassword());
        usuario.setPassword(passWEncrypt);
        usuarioService.guardar(usuario);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }


//    @GetMapping("/{id}")
//    public ResponseEntity<Usuario> buscar(@PathVariable Integer id) throws ResourceNotFoundException {
//        return ResponseEntity.ok(usuarioService.buscar(id));
//    }

//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<String> eliminar(@PathVariable Integer id) throws ReferentialIntegrityException, ResourceNotFoundException, BadRequestException {
//        usuarioService.eliminar(id);
//        return ResponseEntity.ok().body("Se Eliminó la usuario con id: " + id);
//    }
//
//
//    @GetMapping
//    public ResponseEntity<List<Usuario>> buscarTodos(){
//        return ResponseEntity.ok(usuarioService.buscarTodos());
//    }

//    @PutMapping
//    public ResponseEntity<Usuario> actualizar(@RequestBody Usuario usuario) throws ResourceNotFoundException {
//        return ResponseEntity.ok(usuarioService.actualizar(usuario));
//    }
}
