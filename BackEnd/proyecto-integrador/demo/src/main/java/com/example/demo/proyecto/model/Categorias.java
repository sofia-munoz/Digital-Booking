package com.example.demo.proyecto.model;
import javax.persistence.*;

@Entity
@Table(name = "categorias")
public class Categorias {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "categorias_secuencia")
    private Integer id;
    private String titulo;
    private String descripcion;
    private String imagenURL;

    public Categorias(Integer id, String titulo, String descripcion, String imagenURL){
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imagenURL = imagenURL;
    }

    public Categorias(){

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

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getImagenURL() {
        return imagenURL;
    }

    public void setImagenURL(String imagenURL) {
        this.imagenURL = imagenURL;
    }
    @Override
    public String toString() {
        return "Categorias{" +
                "id=" + id +
                ", titulo='" + titulo + '\'' +
                ", descripcion='" + descripcion + '\'' +
                ", imagenURL='" + imagenURL + '\'' +
                '}';
    }
}
