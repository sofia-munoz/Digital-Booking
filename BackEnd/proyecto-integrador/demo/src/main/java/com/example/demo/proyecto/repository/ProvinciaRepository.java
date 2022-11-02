package com.example.demo.proyecto.repository;

import com.example.demo.proyecto.model.Provincia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProvinciaRepository extends JpaRepository<Provincia,Integer> {
}
