import React, {useState, useEffect} from "react";
import Buscador from "./BodyComponents/Buscador/Buscador";
import ListaCategorias from "./BodyComponents/Categorias/ListaCategorias";
import { Route, Routes, } from "react-router-dom";
import ListaProductos from "./BodyComponents/Resultados/ListaProductos"

export default function BodyHome() {

  localStorage.removeItem('idProduct')
  localStorage.removeItem('nameProduct')
  const [categoryInfo, setCategoryInfo] = useState([])
  const [cityList, setCityList] = useState();
  const urlCiudades = 'http://52.14.221.16:8080/ciudades'
  const urlCategorias = 'http://52.14.221.16:8080/categorias'
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
                  setCityList(data) 
              } catch (error){
                  console.error(error)
              }
            })
            // eslint-disable-next-line react-hooks/exhaustive-deps
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
            // eslint-disable-next-line react-hooks/exhaustive-deps
              }, [])

  return (
    <>
      <Buscador cityList={cityList} />
      <ListaCategorias categoryInfo={categoryInfo} />
      <Routes>  
          <Route path="/" element={<ListaProductos/>}/>
          <Route path="/filter-by-category/id=:id/*" element={<ListaProductos/>}/>          
          <Route path="/filter-by-city/id=:id/*" element={<ListaProductos/>}/>
          <Route path="/filter-by-date/from=:startDate/to=:endDate" element={<ListaProductos/>}/>
          <Route path="/filter-by-city-and-date/id=:id/:cityName/from=:startDate/to=:endDate" element={<ListaProductos/>}/>
      </Routes>
    </>
  )
} 

