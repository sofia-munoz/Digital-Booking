package com.example.demo.proyecto.controller;

import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.proyecto.dto.ReservaDto;
import com.example.demo.proyecto.dto.ReservaRequest;
import com.example.demo.proyecto.model.Producto;
import com.example.demo.proyecto.model.Reserva;
import com.example.demo.proyecto.model.jwt.Usuario;
import com.example.demo.proyecto.service.ReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reservas")
@CrossOrigin(origins="*")
public class ReservaController {
    @Autowired
    private ReservaService reservaService;

    @GetMapping("/{id}")
    public ResponseEntity<List<ReservaDto>> buscar(@PathVariable Integer id) {
        List<ReservaDto> reserves = reservaService.buscarPorProductoId(id);
        if(!reserves.isEmpty()){
            return ResponseEntity.ok(reserves);
        }else return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @PostMapping
    public ResponseEntity<ReservaDto> guardar(@RequestBody ReservaRequest reserva) throws BadRequestException {
        return new ResponseEntity<ReservaDto>(
                reservaService.guardar(reserva),
                HttpStatus.CREATED);
    }

}
