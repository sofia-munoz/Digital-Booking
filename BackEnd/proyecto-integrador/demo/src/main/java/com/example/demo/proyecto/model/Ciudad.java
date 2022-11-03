package com.example.demo.proyecto.model;



import javax.persistence.*;


@Entity
@Table(name = "ciudades")
public class Ciudad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String ciudad;

    public Ciudad(Integer id, String ciudad) {
        this.id = id;
        this.ciudad = ciudad;
    }

    public Ciudad(String ciudad) {
        this.ciudad = ciudad;
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