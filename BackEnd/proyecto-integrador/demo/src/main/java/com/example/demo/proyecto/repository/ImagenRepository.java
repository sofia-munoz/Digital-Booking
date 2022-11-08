
package com.example.demo.proyecto.repository;

import com.example.demo.proyecto.model.Imagen;
import com.example.demo.proyecto.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.awt.*;
import java.util.List;

@Repository
public interface ImagenRepository  extends JpaRepository<Imagen,Integer> {

    @Query("FROM Imagen i WHERE i.producto.id = ?1")
    List<Imagen> findImagenesByProductParams(Integer productoId);

}

