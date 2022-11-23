import React, {useState, useEffect} from "react";
import Buscador from "./BodyComponents/Buscador/Buscador";
import ListaCategorias from "./BodyComponents/Categorias/ListaCategorias";
import ListaRecomendados from "./BodyComponents/Resultados/ListaRecomendados.jsx";
import { Route, Routes, } from "react-router-dom";
import ListaProductosPorCiudad from "./BodyComponents/Resultados/ListaProductosPorCiudad"
import ListaProductosPorCategoria from "./BodyComponents/Resultados/ListaProductosPorCategoria"

export default function BodyHome() {

  const [categoryInfo, setCategoryInfo] = useState([])
  const [city, setCity] = useState();
  localStorage.removeItem('idProducto')
  const urlCategorias = 'http://52.14.221.16:8080/categorias'
  const urlCiudades = 'http://52.14.221.16:8080/ciudades'
  const settings ={
                   method: 'GET',
                   headers: {
                          'Content-Type': 'application/json'
                   } 
                  }

    useEffect(() => { 
            Promise.resolve().then(async function(){
              try{
                  const response = await fetch (urlCiudades, settings)
                  const data = await response.json()
                  setCity(data) 
              } catch (error){
                  console.error(error)
              }
            })
            }, [])
    
    useEffect(() => {
            Promise.resolve().then(async function(){
              try{
                  const response = await fetch (urlCategorias, settings)
                  const data = await response.json()
                  setCategoryInfo(data) 
              } catch (error){
                  console.error(error)
              }
            })
              }, [])

  return (
    <>
      <Buscador cityList={city}/>
      <ListaCategorias info={categoryInfo} />
      <Routes>  
          <Route path="/" element={<ListaRecomendados/>}/>
          <Route path="/category/:id" element={<ListaProductosPorCategoria/>}/>          
          <Route path="/city/:id" element={<ListaProductosPorCiudad/>}/>
      </Routes>
    </>
  )
} 

