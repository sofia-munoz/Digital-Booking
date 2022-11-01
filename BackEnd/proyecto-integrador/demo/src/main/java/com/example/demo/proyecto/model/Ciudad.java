package com.example.demo.proyecto.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.Set;

@Entity
@Table(name = "ciudades")
public class Ciudad {
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

    //bidireccional me permite crear la logica de listar todos los productos
    //al seleccionar una ciudad
    //Una ciudad puede tener muchos productos
//    @OneToMany(mappedBy = "ciudad")
//    @JsonIgnore
//    private Set<Producto> productos;


    //Tengo dudas de como debe ser la inyección de ciudades, debe ser una lista de ciudades
    //O debo tener una lista fija?





}
