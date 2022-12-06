package com.example.demo.proyecto.util;

import com.example.demo.proyecto.dto.ImagenDto;
import com.example.demo.proyecto.dto.ProductoRequest;
import com.example.demo.proyecto.dto.ReservaDto;
import com.example.demo.proyecto.dto.ReservaRequest;
import com.example.demo.proyecto.model.*;
import com.example.demo.proyecto.model.jwt.Usuario;

import java.util.Set;

public class Mapper {

    public static ReservaDto MapReserva(Reserva reserva){
        ReservaDto dto = new ReservaDto();
        dto.setId(reserva.getId());
        dto.setStart(reserva.getFechaInicial());
        dto.setEnd(reserva.getFechaFinal());
        dto.setIdProducto(reserva.getProducto().getId());
        dto.setIdUsuario(reserva.getUsuario().getId());

        return  dto;
    }

    public static Reserva MapReserva(ReservaRequest r, Producto producto, Usuario usuario){
        Reserva reserva = new Reserva();
        reserva.setFechaInicial(r.getFechaInicial());
        reserva.setFechaFinal(r.getFechaFinal());
        reserva.setProducto(producto);
        reserva.setUsuario(usuario);

        return reserva;
    }

    public static ImagenDto MapImagen(Imagen imagen){
        ImagenDto imagenDto = new ImagenDto();
        imagenDto.setId(imagen.getId());
        imagenDto.setTitulo(imagen.getTitulo());
        imagenDto.setURL(imagen.getURL());
        imagenDto.setIdProducto(imagen.getProducto().getId());

        return imagenDto;
    }

    public static Producto MapProducto(ProductoRequest prod, Set<Caracteristica> caracteristicas, Politica politica, Ciudad ciudad, Provincia provincia, Categoria categoria){
        Producto producto = new Producto();
        producto.setTitulo(prod.getTitulo());
        producto.setTituloDescripcion(prod.getTituloDescripcion());
        producto.setDescripcion(prod.getDescripcion());
        producto.setDisponibilidad(prod.getDisponibilidad());
        producto.setImagenPrincipalURL(prod.getImagenesURL().get(0));
        producto.setUbicacion(prod.getUbicacion());
        producto.setCaracteristicasDelProducto(caracteristicas);
        producto.setPolitica(politica);
        producto.setCiudad(ciudad);
        producto.setCategoria(categoria);
        if(provincia.getProvincia()!=null)
            producto.setProvincia(provincia);
        return producto;
    }
}
