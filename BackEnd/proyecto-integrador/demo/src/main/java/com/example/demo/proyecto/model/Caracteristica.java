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

//
//    @ManyToMany(mappedBy = "caracteristicaPorProducto")
//    private Set<Producto> productos;


    public Caracteristica(Integer id, String caracteristica) {
        this.id = id;
        this.caracteristica = caracteristica;
    }

    public Caracteristica(String caracteristica) {
        this.caracteristica = caracteristica;
    }

    public Caracteristica() {

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
}
