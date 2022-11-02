package com.example.demo.proyecto.model;

public class Provincia {

    private Integer id;
    private String Provincia;

    public Provincia(Integer id, String provincia) {
        this.id = id;
        Provincia = provincia;
    }

    public Provincia(String provincia) {
        Provincia = provincia;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getProvincia() {
        return Provincia;
    }

    public void setProvincia(String provincia) {
        Provincia = provincia;
    }
}
