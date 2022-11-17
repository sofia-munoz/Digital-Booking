package com.example.demo.proyecto.service;

import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ReferentialIntegrityException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.proyecto.model.Usuario;
import com.example.demo.proyecto.repository.UsuarioRepository;
import com.example.demo.proyecto.repository.UsuarioRepository;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class UsuarioService implements UserDetailsService{

    private UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return usuarioRepository.findByEmail(email).get();
    }

    public Usuario guardar(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public Usuario buscar(Integer id) throws ResourceNotFoundException {
        Optional<Usuario> usuario = usuarioRepository.findById(id);
        if(usuario.isEmpty()){
            throw new ResourceNotFoundException("No existe un usuario con el ID: " + id);
        }
        return usuario.get();
    }

    public String eliminar(Integer id) throws ReferentialIntegrityException, ResourceNotFoundException, BadRequestException {
        try {
            buscar(id);
            usuarioRepository.deleteById(id);
            return "Usuario eliminada";
        } catch (DataIntegrityViolationException ex) {
            throw new ReferentialIntegrityException("No se puede eliminar el registro ya que es referencia de otra entidad: " + ex.getMessage());
        }
    }

    public List<Usuario> buscarTodos(){
        return usuarioRepository.findAll();
    }

    public Usuario actualizar(Usuario usuario)throws ResourceNotFoundException{
        buscar(usuario.getId());
        return usuarioRepository.save(usuario);
    }

}
