package com.example.demo.proyecto.repository;

import com.example.demo.proyecto.model.Imagen;
import com.example.demo.proyecto.model.Producto;
import com.example.demo.proyecto.model.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface ReservaRepository extends JpaRepository<Reserva,Integer> {
    @Query(" SELECT r FROM Reserva r WHERE r.producto.id = ?1")
    List<Reserva> findReservasByProductParams(Integer productoId);
    List<Reserva> findAllByFechaInicialLessThanEqualAndFechaFinalGreaterThanEqual(LocalDateTime endDate, LocalDateTime startDate);
}
