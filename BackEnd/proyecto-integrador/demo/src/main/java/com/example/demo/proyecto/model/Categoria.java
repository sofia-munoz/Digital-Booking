package com.example.demo.proyecto.model;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "categorias")
public class Categoria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String titulo;
    private String descripcion;
    private String imagenURL;

    private transient int totalProductos;

//variable virtual no se guarda en base de datos
    // Pablo:-->>> Aquí me habia corregido, no era virtual (Eso es para .Net), en java se usa el transient. Esto lo que hace es que no lo considera
    // para guardar en la base de datos. Es decir que no debería darte error si no existe la columna en la base de datos.





    public Categoria(Integer id, String titulo, String descripcion, String imagenURL){
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imagenURL = imagenURL;
    }

    public Categoria(String titulo, String descripcion, String imagenURL){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imagenURL = imagenURL;
    }

    public Categoria(){

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

    public int getTotalProductos() {
        return totalProductos;
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
