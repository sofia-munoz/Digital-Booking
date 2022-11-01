package com.example.demo.proyecto.repository;

import com.example.demo.proyecto.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductoRepository extends JpaRepository<Producto,Integer> {


    @Query("SELECT Producto.titulo FROM Productos p WHERE p.id_categoria = :id_categoria")
    List<Producto> findProductoByCategoriaParams(
            @Param("id_categoria") Integer id
    );


//generar metodo sql para recibir categoria id y devuelva los productos por categoría
    //ciudad
    //fecha
}
