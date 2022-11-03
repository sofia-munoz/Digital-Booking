package com.example.demo.proyecto.repository;

import com.example.demo.proyecto.model.Ciudad;
import com.example.demo.proyecto.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductoRepository extends JpaRepository<Producto,Integer> {


    @Query("FROM Producto p WHERE p.categoria.id = ?1")
    List<Producto> findProductoByCategoriaParams(Integer categoriaId);

    @Query("FROM Producto p WHERE p.ciudad.id = ?1")
    List<Producto> findProductoByCiudadParams(Integer ciudadId);

    @Query("FROM Producto p WHERE p.provincia.id = ?1")
    List<Producto> findProductoByProvinciaParams(Integer provinciaId);

//generar metodo sql para recibir categoria id y devuelva los productos por categoría
    //ciudad
    //fecha
}
