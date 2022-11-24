package com.example.demo.proyecto.dto;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalDateTime;

public class ReservaRequest {
    private LocalDateTime fechaInicial;
    private LocalDateTime fechaFinal;
    @NotNull(message = "debe asociar un producto valido")
    private Integer idProducto;
    private Integer idUsuario;

    public LocalDateTime getFechaInicial() {
        return fechaInicial;
    }

    public void setFechaInicial(LocalDateTime fechaInicial) {
        this.fechaInicial = fechaInicial;
    }

    public LocalDateTime getFechaFinal() {
        return fechaFinal;
    }

    public void setFechaFinal(LocalDateTime fechaFinal) {
        this.fechaFinal = fechaFinal;
    }

    public Integer getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(Integer idProducto) {
        this.idProducto = idProducto;
    }

    public Integer getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(Integer idUsuario) {
        this.idUsuario = idUsuario;
    }
}
