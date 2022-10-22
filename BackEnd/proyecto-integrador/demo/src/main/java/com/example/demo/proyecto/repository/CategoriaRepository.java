package com.example.demo.proyecto.repository;

import com.example.demo.proyecto.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepository extends JpaRepository<Categoria,Integer> {
}
