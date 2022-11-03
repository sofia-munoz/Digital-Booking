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
    private String descripcion;
    private String disponibilidad;
    private String politica;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_roducto", nullable = false)
    private Ciudad ciudad;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_provincia", nullable = false)
    private Provincia provincia;

//    @JsonIgnoreProperties
//            ({"hibernateLazyInitializer", "handler"})
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_categoria",nullable = false)
    private Categoria categoria;

    public Producto(){}

    public Producto(Integer id, String titulo, String descripcion, String disponibilidad, String politica, Ciudad ciudad, Provincia provincia, Categoria categoria) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.disponibilidad = disponibilidad;
        this.politica = politica;
        this.ciudad = ciudad;
        this.provincia = provincia;
        this.categoria = categoria;
    }

    public Producto(String titulo, String descripcion, String disponibilidad, String politica, Ciudad ciudad, Provincia provincia, Categoria categoria) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.disponibilidad = disponibilidad;
        this.politica = politica;
        this.ciudad = ciudad;
        this.provincia = provincia;
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

    public Ciudad getCiudad() {
        return ciudad;
    }

    public void setCiudad(Ciudad ciudad) {
        this.ciudad = ciudad;
    }

    public Provincia getProvincia() {
        return provincia;
    }

    public void setProvincia(Provincia provincia) {
        this.provincia = provincia;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }
}
