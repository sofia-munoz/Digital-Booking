package com.example.demo.proyecto.repository;

import com.example.demo.proyecto.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductoRepository extends JpaRepository<Producto,Integer> {


    @Query("FROM Producto p WHERE p.categoria.id = ?1")
    List<Producto> findProductoByCategoriaParams(Integer categoriaId);


//generar metodo sql para recibir categoria id y devuelva los productos por categoría
    //ciudad
    //fecha
}
