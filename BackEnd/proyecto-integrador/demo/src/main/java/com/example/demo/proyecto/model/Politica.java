
package com.example.demo.proyecto.model;


import javax.persistence.*;

@Entity
@Table(name="politicas")
public class Politica {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String normas;
    private String seguridad;
    private String cancelacion;

    public Politica(Integer id, String normas, String seguridad, String cancelacion) {
        this.id = id;
        this.normas = normas;
        this.seguridad = seguridad;
        this.cancelacion = cancelacion;
    }

    public Politica(String normas, String seguridad, String cancelacion) {
        this.normas = normas;
        this.seguridad = seguridad;
        this.cancelacion = cancelacion;
    }

    public Politica() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNormas() {
        return normas;
    }

    public void setNormas(String normas) {
        this.normas = normas;
    }

    public String getSeguridad() {
        return seguridad;
    }

    public void setSeguridad(String seguridad) {
        this.seguridad = seguridad;
    }

    public String getCancelacion() {
        return cancelacion;
    }

    public void setCancelacion(String cancelacion) {
        this.cancelacion = cancelacion;
    }
}
