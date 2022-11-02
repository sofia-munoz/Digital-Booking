//package com.example.demo.proyecto.model;
//
//import javax.persistence.*;
//import java.util.HashSet;
//import java.util.Set;
//
//
//@Entity
//@Table(name = "caracteristicas")
//public class Caracteristica {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Set<Caracteristica> caracteristicas;
//
//    @ManyToMany(mappedBy = "caracteristica")
//    private Set<Producto> productos;
//
//
//    public Caracteristica(Set<Caracteristica> caracteristicas, Set<Producto> productos) {
//        this.caracteristicas = caracteristicas;
//        this.productos = productos;
//    }
//
//    public Caracteristica() {
//
//    }
//
//    public void agregarCaracteristica(Caracteristica caracteristica){
//        this.caracteristicas.add(caracteristica);
//    }
//  //caracteristicas
//}
