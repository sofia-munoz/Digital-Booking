package com.example.demo.proyecto.repository;

import com.example.demo.proyecto.model.Caracteristica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CaracteristicaRepository extends JpaRepository<Caracteristica,Integer> {
}
