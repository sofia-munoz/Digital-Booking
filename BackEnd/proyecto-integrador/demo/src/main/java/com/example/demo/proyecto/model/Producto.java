package com.example.demo.proyecto.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Set;


@Entity
@Table(name = "productos")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String titulo;
    private String tituloDescripcion;
    @Column(length=500)
    private String descripcion;
    private String disponibilidad;
    private String imagenPrincipalURL;
    private String ubicacion;

    @OneToMany(mappedBy = "producto")
    @JsonIgnore
    private Set <Imagen> imagenes;

    @ManyToMany
    @JoinTable(
            name= "caracteristicaPorProducto",
            joinColumns = @JoinColumn(name="id_producto"),
            inverseJoinColumns =
                    @JoinColumn(name = "id_caracteristica")
    )
    private Set<Caracteristica> caracteristicasDelProducto;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_politica", nullable = false)
    private Politica politica;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_ciudad", nullable = false)
    private Ciudad ciudad;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_provincia",nullable = false)
    private Provincia provincia;


//    @JsonIgnoreProperties
//            ({"hibernateLazyInitializer", "handler"})
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_categoria",nullable = false)
    private Categoria categoria;

    public Producto(){}

    public Producto(Integer id, String titulo, String tituloDescripcion, String descripcion, String disponibilidad, String imagenPrincipalURL, String ubicacion, Set<Imagen> imagenes, Set<Caracteristica> caracteristicasDelProducto, Politica politica, Ciudad ciudad, Provincia provincia, Categoria categoria) {
        this.id = id;
        this.titulo = titulo;
        this.tituloDescripcion = tituloDescripcion;
        this.descripcion = descripcion;
        this.disponibilidad = disponibilidad;
        this.imagenPrincipalURL = imagenPrincipalURL;
        this.ubicacion = ubicacion;
        this.imagenes = imagenes;
        this.caracteristicasDelProducto = caracteristicasDelProducto;
        this.politica = politica;
        this.ciudad = ciudad;
        this.provincia = provincia;
        this.categoria = categoria;
    }

    public Producto(String titulo, String tituloDescripcion, String descripcion, String disponibilidad, String imagenPrincipalURL, String ubicacion, Set<Imagen> imagenes, Set<Caracteristica> caracteristicasDelProducto, Politica politica, Ciudad ciudad, Provincia provincia, Categoria categoria) {
        this.titulo = titulo;
        this.tituloDescripcion = tituloDescripcion;
        this.descripcion = descripcion;
        this.disponibilidad = disponibilidad;
        this.imagenPrincipalURL = imagenPrincipalURL;
        this.ubicacion = ubicacion;
        this.imagenes = imagenes;
        this.caracteristicasDelProducto = caracteristicasDelProducto;
        this.politica = politica;
        this.ciudad = ciudad;
        this.provincia = provincia;
        this.categoria = categoria;
    }

    public Producto(String titulo, String tituloDescripcion, String descripcion, String disponibilidad, String imagenPrincipalURL, String ubicacion, Set<Caracteristica> caracteristicasDelProducto, Politica politica, Ciudad ciudad, Provincia provincia, Categoria categoria) {
        this.titulo = titulo;
        this.tituloDescripcion = tituloDescripcion;
        this.descripcion = descripcion;
        this.disponibilidad = disponibilidad;
        this.imagenPrincipalURL = imagenPrincipalURL;
        this.ubicacion = ubicacion;
        this.caracteristicasDelProducto = caracteristicasDelProducto;
        this.politica = politica;
        this.ciudad = ciudad;
        this.provincia = provincia;
        this.categoria = categoria;
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

    public String getTituloDescripcion() {
        return tituloDescripcion;
    }

    public void setTituloDescripcion(String tituloDescripcion) {
        this.tituloDescripcion = tituloDescripcion;
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

    public String getImagenPrincipalURL() {
        return imagenPrincipalURL;
    }

    public void setImagenPrincipalURL(String imagenPrincipalURL) {
        this.imagenPrincipalURL = imagenPrincipalURL;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }

    public Set<Imagen> getImagenes() {
        return imagenes;
    }

    public void setImagenes(Set<Imagen> imagenes) {
        this.imagenes = imagenes;
    }

    public Set<Caracteristica> getCaracteristicasDelProducto() {
        return caracteristicasDelProducto;
    }

    public void setCaracteristicasDelProducto(Set<Caracteristica> caracteristicasDelProducto) {
        this.caracteristicasDelProducto = caracteristicasDelProducto;
    }

    public Politica getPolitica() {
        return politica;
    }

    public void setPolitica(Politica politica) {
        this.politica = politica;
    }

    public Ciudad getCiudad() {
        return ciudad;
    }

    public void setCiudad(Ciudad ciudad) {
        this.ciudad = ciudad;
    }

    public Provincia getProvincia() {
        return provincia;
    }

    public void setProvincia(Provincia provincia) {
        this.provincia = provincia;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }
}

