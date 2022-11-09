package com.example.demo.proyecto.model;

import javax.persistence.*;


@Entity
@Table(name = "imagenes")
public class Imagen {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String titulo;
    private String URL;

    @ManyToOne
    @JoinColumn(name="id_producto",nullable = false)
    private Producto producto;


    public Imagen(){}

    public Imagen(Integer id, String titulo, String URL, Producto producto) {
        this.id = id;
        this.titulo = titulo;
        this.URL = URL;
        this.producto = producto;
    }

    public Imagen(String titulo, String URL, Producto producto) {
        this.titulo = titulo;
        this.URL = URL;
        this.producto = producto;
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

    public String getURL() {
        return URL;
    }

    public void setURL(String URL) {
        this.URL = URL;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }
}
