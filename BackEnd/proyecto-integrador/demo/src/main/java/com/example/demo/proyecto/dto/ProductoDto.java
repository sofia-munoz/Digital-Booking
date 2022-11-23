package com.example.demo.proyecto.dto;

import com.example.demo.proyecto.model.Imagen;
import com.example.demo.proyecto.model.Producto;

import java.util.List;

public class ProductoDto {
    Producto producto;
    List<ImagenDto> imagenes;
    List<ReservaDto> reservas;

    public ProductoDto() {
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    public List<ImagenDto> getImagenes() {
        return imagenes;
    }

    public void setImagenes(List<ImagenDto> imagenes) {
        this.imagenes = imagenes;
    }

    public List<ReservaDto> getReservas() {
        return reservas;
    }

    public void setReservas(List<ReservaDto> reservas) {
        this.reservas = reservas;
    }
}
