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

  const [urlProductos, setUrlProductos] = useState([])
  const urlCategorias = 'http://localhost:3000/categorias'
  const urlCiudades = 'http://localhost:3000/ciudades'
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
              }, [  ])

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

