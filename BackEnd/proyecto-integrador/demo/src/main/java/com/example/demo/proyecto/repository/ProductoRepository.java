package com.example.demo.proyecto.repository;

import com.example.demo.proyecto.model.Producto;


import com.example.demo.proyecto.model.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ProductoRepository extends JpaRepository<Producto,Integer> {


    @Query("FROM Producto p WHERE p.categoria.id = ?1")
    List<Producto> findProductoByCategoriaParams(Integer categoriaId);

    @Query("FROM Producto p WHERE p.ciudad.id = ?1")
    List<Producto> findProductoByCiudadParams(Integer ciudadId);

    @Query("FROM Producto p WHERE p.provincia.id = ?1")
    List<Producto> findProductoByProvinciaParams(Integer provinciaId);

    @Query(value = "SELECT * FROM productos ORDER BY RAND() LIMIT 8 ",nativeQuery = true)
    List<Producto> randomProductsAndLimit();
    @Query(value = "SELECT * FROM productos as p JOIN reservas as r ON p.id = r.id_producto "
            + "where ((fecha_inicial between ?1 AND ?2) OR (fecha_final between ?1 AND ?2)) "
            + "OR ((?1 between fecha_inicial AND fecha_final) OR (?2 between fecha_inicial AND fecha_final))"
            , nativeQuery = true)
    List<Producto> findAllByFechaInicialLessThanEqualAndFechaFinalGreaterThanEqual(LocalDateTime endDate, LocalDateTime startDate);

}
