package com.example.demo.proyecto.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "ciudades")
public class Ciudad {
    private Integer id;
    private String ciudad;

    @ManyToOne
    @JoinColumn(name = "provincia_id", nullable = false)
    private Provincia provincia;

    public Ciudad(Integer id, String ciudad, Provincia provincia) {
        this.id = id;
        this.ciudad = ciudad;
        this.provincia = provincia;
    }

    public Ciudad(String ciudad, Provincia provincia) {
        this.ciudad = ciudad;
        this.provincia = provincia;
    }

    public Ciudad() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }
}