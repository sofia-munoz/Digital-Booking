package com.example.demo.proyecto.repository.jwt;

import com.example.demo.proyecto.model.jwt.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;


@Repository
@Transactional
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
    Usuario findByEmail(String email);

    @Modifying
    @Query("update Usuario u set u.ciudad = ?1 where u.id = ?2")
    void setCiudadForUsuario(String ciudad, int id);
}
