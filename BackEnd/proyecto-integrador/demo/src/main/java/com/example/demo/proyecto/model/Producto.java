package com.example.demo.proyecto.model;

import javax.persistence.*;


@Entity
@Table(name = "productos")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String titulo;
    private String ubicacion;
    private String descripcion;
    private String disponibilidad;
    private String politica;
    private Integer id_categoria;



    public Producto(Integer id, String titulo, String ubicacion, String descripcion, String disponibilidad, String politica, Integer idCategoria) {
        this.id = id;
        this.titulo = titulo;
        this.ubicacion = ubicacion;
        this.descripcion = descripcion;
        this.disponibilidad = disponibilidad;
        this.politica = politica;
        this.id_categoria = idCategoria;
    }

    public Producto(String titulo, String ubicacion, String descripcion, String disponibilidad, String politica, Integer idCategoria) {
        this.titulo = titulo;
        this.ubicacion = ubicacion;
        this.descripcion = descripcion;
        this.disponibilidad = disponibilidad;
        this.politica = politica;
        this.id_categoria = idCategoria;
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

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getDisponibilidad() {
        return disponibilidad;
    }

    public void setDisponibilidad(String disponibilidad) {
        this.disponibilidad = disponibilidad;
    }

    public String getPolitica() {
        return politica;
    }

    public void setPolitica(String politica) {
        this.politica = politica;
    }

    public Integer getId_categoria() {
        return id_categoria;
    }

    public void setId_categoria(Integer id_categoria) {
        this.id_categoria = id_categoria;
    }

    //    public com.example.demo.proyecto.model.Categoria getCategoria() {
//        return categoria;
//    }
//
//    public void setCategoria(com.example.demo.proyecto.model.Categoria categoria) {
//        this.categoria = categoria;
//    }

//Muchos productos pueden tener una sola ciudad
//    @ManyToOne(fetch = FetchType.EAGER)
//    @JoinColumn(name = "producto_id")
//    private Ciudad ciudad;
//
//    @OneToMany(cascade = CascadeType.ALL )
//    @JoinColumn(name= "producto_id")
//    private Set<Imagen> imagenes;
    //hacer cambios para mejorar la performance
    //controler obtener categoía por producto, devuelve listado categoría
    //guardar producto por categoría aplico logica de abajo
//    @ManyToMany
//    @JoinTable(
//            name="caractaristicasYProductos",
//            joinColumns = @JoinColumn(name="id_producto"),
//            inverseJoinColumns =
//                    @JoinColumn(name="id_caracteristica")
//    )
//    @JsonIgnore
//    private Set<Caracteristica> caracteristica;



    //minimo dos productos por categorias

}
