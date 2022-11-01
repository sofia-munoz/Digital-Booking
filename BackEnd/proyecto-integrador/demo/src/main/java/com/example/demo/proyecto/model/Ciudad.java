//package com.example.demo.proyecto.model;
//
//import com.fasterxml.jackson.annotation.JsonIgnore;
//
//import javax.persistence.Entity;
//import javax.persistence.OneToMany;
//import javax.persistence.Table;
//import java.util.Set;
//
//@Entity
//@Table(name = "ciudades")
//public class Ciudad {
//    private Integer id;
//    private String ciudades;
//
//    //bidireccional me permite crear la logica de listar todos los productos
//    //al seleccionar una ciudad
//    //Una ciudad puede tener muchos productos
//    @OneToMany(mappedBy = "ciudad")
//    @JsonIgnore
//    private Set<Producto> productos;
//
//
//    //Tengo dudas de como debe ser la inyección de ciudades, debe ser una lista de ciudades
//    //O debo tener una lista fija?
//    public Ciudad(Set<Ciudad> ciudades) {
//        this.ciudades = ciudades;
//    }
//
//    public Ciudad() {
//
//    }
//
//    public void agregarCiudad(Ciudad ciudad){
//        this.ciudades.add(ciudad);
//    }
//
//
//}
