
package com.example.demo.proyecto.repository;

import com.example.demo.proyecto.model.Imagen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImagenRepository  extends JpaRepository<Imagen,Integer> {
}

