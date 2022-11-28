package com.example.demo.proyecto.dto;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class ReservaDto {
    private Integer id;
    private LocalDateTime start;
    private LocalDateTime end;
    private Integer idProducto;
    private Integer idUsuario;
}

