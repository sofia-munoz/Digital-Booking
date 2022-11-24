// package com.example.demo.proyecto.model;
//
//import javax.persistence.*;
//import javax.validation.constraints.NotBlank;
//
// public class CategoriaPayload {
//
//        private Integer id;
//        @NotBlank(message = "debe cargar un titulo")
//        private String titulo;
//        private String descripcion;
//        private String imagenURL;
//
//        public Categoria(Integer id, String titulo, String descripcion, String imagenURL){
//            this.id = id;
////            this.titulo = titulo;
//            this.descripcion = descripcion;
//            this.imagenURL = imagenURL;
//        }
//
//        public Categoria(String titulo, String descripcion, String imagenURL){
//            this.titulo = titulo;
//            this.descripcion = descripcion;
//            this.imagenURL = imagenURL;
//        }
//
//        public Categoria(){
//
//        }
//
//
//        public Integer getId() {
//            return id;
//        }
//
//        public void setId(Integer id) {
//            this.id = id;
//        }
//
//        public String getTitulo() {
//            return titulo;
//        }
//
//        public void setTitulo(String titulo) {
//            this.titulo = titulo;
//        }
//
//        public String getDescripcion() {
//            return descripcion;
//        }
//
//        public void setDescripcion(String descripcion) {
//            this.descripcion = descripcion;
//        }
//
//        public String getImagenURL() {
//            return imagenURL;
//        }
//
//        public void setImagenURL(String imagenURL) {
//            this.imagenURL = imagenURL;
//        }
//        @Override
//        public String toString() {
//            return "Categorias{" +
//                    "id=" + id +
//                    ", titulo='" + titulo + '\'' +
//                    ", descripcion='" + descripcion + '\'' +
//                    ", imagenURL='" + imagenURL + '\'' +
//                    '}';
//        }
//    }
//
//}
////*