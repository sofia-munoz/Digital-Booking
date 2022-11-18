package com.example.demo.proyecto.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
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

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_categoria",nullable = false)
    private Categoria categoria;

    @OneToMany(mappedBy = "producto")
    @JsonIgnore
    private Set <Imagen> imagenes;

    @OneToMany(mappedBy = "producto")
    @JsonIgnore
    private Set <Reserva> reservas;



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
}

