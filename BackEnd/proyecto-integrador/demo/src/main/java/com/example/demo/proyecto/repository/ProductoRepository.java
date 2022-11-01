package com.example.demo.proyecto.repository;

import com.example.demo.proyecto.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductoRepository extends JpaRepository<Producto,Integer> {


    @Query("SELECT * FROM Producto p WHERE p.categoria = :idCategorias")
    List<Producto> findProductoByCategoriaParams(
            @Param("idCategorias") Integer id
    );


//generar metodo sql para recibir categoria id y devuelva los productos por categoría
    //ciudad
    //fecha
}
