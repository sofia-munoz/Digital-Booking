package com.example.demo.proyecto.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "imagenes")
public class Imagen {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String titulo;
    private String URL;
    @ManyToOne
    @JoinColumn(name="id_producto",nullable=false)
    private Producto producto;

    public Imagen(Integer id, String titulo, String URL) {
        this.id = id;
        this.titulo = titulo;
        this.URL = URL;
    }

    public Imagen(String titulo, String URL) {
        this.titulo = titulo;
        this.URL = URL;
    }

    public Imagen(){
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
}
