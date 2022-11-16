package com.example.demo.proyecto.dto;

import com.example.demo.proyecto.model.Imagen;
import com.example.demo.proyecto.model.Producto;

import java.util.List;

public class ProductoDto {
    Producto producto;
    List<Imagen> imagenes;

    public ProductoDto() {
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    public List<Imagen> getImagenes() {
        return imagenes;
    }

    public void setImagenes(List<Imagen> imagenes) {
        this.imagenes = imagenes;
    }
}
