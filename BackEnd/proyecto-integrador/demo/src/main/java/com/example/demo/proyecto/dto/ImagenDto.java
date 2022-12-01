package com.example.demo.proyecto.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ImagenDto {
    private Integer id;
    private String titulo;
    private String URL;
    private Integer idProducto;
}
