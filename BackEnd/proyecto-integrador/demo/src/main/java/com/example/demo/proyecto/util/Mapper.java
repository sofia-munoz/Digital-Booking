package com.example.demo.proyecto.util;

import com.example.demo.proyecto.dto.ReservaDto;
import com.example.demo.proyecto.dto.ReservaRequest;
import com.example.demo.proyecto.model.Producto;
import com.example.demo.proyecto.model.Reserva;
import com.example.demo.proyecto.model.jwt.Usuario;

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
}
