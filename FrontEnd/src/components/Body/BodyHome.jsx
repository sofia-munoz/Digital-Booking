import React from "react";
import Buscador from "./BodyComponents/Buscador/Buscador";
import ListaCategorias from "./BodyComponents/Categorias/ListaCategorias";
import ListaRecomendados from "./BodyComponents/Resultados/ListaRecomendados.jsx";
import { Route, Routes, } from "react-router-dom";
import ListaProductosPorCiudad from "./BodyComponents/Resultados/ListaProductosPorCiudad"
import ListaProductosPorCategoria from "./BodyComponents/Resultados/ListaProductosPorCategoria"
import ListaProductosPorFecha from "./BodyComponents/Resultados/ListaProductosPorFecha"

export default function BodyHome() {

  localStorage.removeItem('idProducto')
  
  return (
    <>
      <Buscador />
      <ListaCategorias />
      <Routes>  
          <Route path="/" element={<ListaRecomendados/>}/>
          <Route path="/filter-by-category/id=:id/*" element={<ListaProductosPorCategoria/>}/>          
          <Route path="/filter-by-city/id=:id/*" element={<ListaProductosPorCiudad/>}/>
          <Route path="/filter-by-date/:startDate/:endDate" element={<ListaProductosPorFecha/>}/>
      </Routes>
    </>
  )
} 

