package com.example.demo.proyecto.repository;

import com.example.demo.proyecto.model.Ciudad;
import com.example.demo.proyecto.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CiudadRepository extends JpaRepository<Ciudad,Integer> {


}
