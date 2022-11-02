package com.example.demo.proyecto.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;


@Entity
@Table(name = "productos")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String titulo;
    private String ubicacion;
    private String descripcion;
    private String disponibilidad;
    private String politica;

//    @JsonIgnoreProperties
//            ({"hibernateLazyInitializer", "handler"})
    @ManyToOne
    @JoinColumn(name = "id_categoria",nullable = false)
    private Categoria categoria;



    public Producto(){}
    public Producto(Integer id, String titulo, String ubicacion, String descripcion, String disponibilidad, String politica, Categoria categoria) {
        this.id = id;
        this.titulo = titulo;
        this.ubicacion = ubicacion;
        this.descripcion = descripcion;
        this.disponibilidad = disponibilidad;
        this.politica = politica;
        this.categoria = categoria;
    }

    public Producto(String titulo, String ubicacion, String descripcion, String disponibilidad, String politica, Categoria categoria) {
        this.titulo = titulo;
        this.ubicacion = ubicacion;
        this.descripcion = descripcion;
        this.disponibilidad = disponibilidad;
        this.politica = politica;
        this.categoria = categoria;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getDisponibilidad() {
        return disponibilidad;
    }

    public void setDisponibilidad(String disponibilidad) {
        this.disponibilidad = disponibilidad;
    }

    public String getPolitica() {
        return politica;
    }

    public void setPolitica(String politica) {
        this.politica = politica;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setIdCategoria(Categoria categoria) {
        this.categoria = categoria;
    }



}
