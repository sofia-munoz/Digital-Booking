package com.example.demo.proyecto.model;

import com.example.demo.proyecto.model.jwt.Usuario;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "reservas")
public class Reserva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer id;

    private LocalDate fechaInicial;

    private LocalDate fechaFinal;

    private LocalTime HoraLLegada;

    @ManyToOne
    @JoinColumn(name = "id_producto", nullable = false)
    private Producto producto;

    @ManyToOne
    @JoinColumn(name = "id_usuario", nullable = false)
    private Usuario usuario;

    public Reserva() {
    }
    public Reserva(Integer id, LocalDate fechaInicial, LocalDate fechaFinal, LocalTime horaLLegada, Producto producto, Usuario usuario) {
        this.id = id;
        this.fechaInicial = fechaInicial;
        this.fechaFinal = fechaFinal;
        HoraLLegada = horaLLegada;
        this.producto = producto;
        this.usuario = usuario;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public LocalDate getFechaInicial() {
        return fechaInicial;
    }

    public void setFechaInicial(LocalDate fechaInicial) {
        this.fechaInicial = fechaInicial;
    }

    public LocalDate getFechaFinal() {
        return fechaFinal;
    }

    public void setFechaFinal(LocalDate fechaFinal) {
        this.fechaFinal = fechaFinal;
    }

    public LocalTime getHoraLLegada() {
        return HoraLLegada;
    }

    public void setHoraLLegada(LocalTime horaLLegada) {
        HoraLLegada = horaLLegada;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
}
