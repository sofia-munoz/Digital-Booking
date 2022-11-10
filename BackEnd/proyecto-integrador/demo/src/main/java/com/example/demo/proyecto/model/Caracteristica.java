package com.example.demo.proyecto.model;

import javax.persistence.*;
import java.util.Set;


@Entity
@Table(name = "caracteristicas")
public class Caracteristica {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String caracteristica;
    private String iconoURL;

//
//    @ManyToMany(mappedBy = "caracteristicaPorProducto")
//    private Set<Producto> productos;


    public Caracteristica() {

    }

    public Caracteristica(Integer id, String caracteristica, String iconoURL) {
        this.id = id;
        this.caracteristica = caracteristica;
        this.iconoURL = iconoURL;
    }

    public Caracteristica(String caracteristica, String iconoURL) {
        this.caracteristica = caracteristica;
        this.iconoURL = iconoURL;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCaracteristica() {
        return caracteristica;
    }

    public void setCaracteristica(String caracteristica) {
        this.caracteristica = caracteristica;
    }

    public String getIconoURL() {
        return iconoURL;
    }

    public void setIconoURL(String iconoURL) {
        this.iconoURL = iconoURL;
    }
}
