package com.example.demo.proyecto.repository;

import com.example.demo.proyecto.model.Ciudad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CiudadRepository extends JpaRepository<Ciudad,Integer> {
}
