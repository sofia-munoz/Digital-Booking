package com.example.demo.proyecto.model;

import javax.persistence.*;

@Entity
@Table(name = "provincias")
public class Provincia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String provincia;


    public Provincia() {
    }

    public Provincia(Integer id, String provincia) {
        this.id = id;
        this.provincia = provincia;
    }

    public Provincia(String provincia) {
        this.provincia = provincia;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getProvincia() {
        return provincia;
    }

    public void setProvincia(String provincia) {
        this.provincia = provincia;
    }
}
