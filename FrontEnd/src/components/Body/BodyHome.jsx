import React, {useState, useEffect} from "react";
import Buscador from "./BodyComponents/Buscador/Buscador";
import ListaCategorias from "./BodyComponents/Categorias/ListaCategorias";
import ListaRecomendados from "./BodyComponents/Resultados/ListaRecomendados.jsx";
import LoadingPage from "../LoadingPage/LoadingPage"

  // const urlCategorias = 'http://52.14.221.16:8081/categorias'
  // const urlProductos = 'http://52.14.221.16:8081/productos'

export default function BodyHome() {
  
  const [productInfo, setProductInfo] = useState([])
  const [categoryInfo, setCategoryInfo] = useState([])
  const [city, setCity] = useState();
  const [citySelected, setCitySelected] = useState([]);
  
  const urlCategorias = 'http://localhost:3000/categorias'
  const urlProductos = 'http://localhost:3000/productos'
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
                  console.log("urlCiudades response: "+response)
                  const data = await response.json()
                  console.log(data)
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
                  console.log(response)
                  const data = await response.json()
                  console.log(data)
                  setCategoryInfo(data) 
              } catch (error){
                  console.error(error)
              }
            })
              }, [  ])
    
    useEffect(() => {
            Promise.resolve().then(async function(){
              try{
                  const response = await fetch (urlProductos, settings)
                  console.log(response)
                  const data = await response.json()
                  console.log(data)
                  setProductInfo(data) 
              } catch (error){
                  console.error(error)
              }
            })
              }, [  ])
  
    if(productInfo==0){
        return (<LoadingPage/>)
    }
  
  return (
    <>
      <Buscador cityList={city}/>
      <ListaCategorias info={categoryInfo} />  
      <ListaRecomendados productInfo={productInfo}/>
    </>
  )
} 

