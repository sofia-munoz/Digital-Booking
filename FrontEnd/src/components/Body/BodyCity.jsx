import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Buscador from "./BodyComponents/Buscador/Buscador";
import ListaCategorias from "./BodyComponents/Categorias/ListaCategorias";
import ListaProductos from "./BodyComponents/Resultados/ListaProductos.jsx";
import LoadingPage from "../LoadingPage/LoadingPage";


  // const urlCategorias = 'http://52.14.221.16:8081/categorias'
  // const urlProductos = 'http://52.14.221.16:8081/productos'



export default function BodyHome() {
  
  const { id } = useParams();
  

  const urlCategorias = 'http://localhost:3000/categorias'
  const urlCity = 'http://localhost:3000/productos/byCiudad/'+id
  const urlCiudades = 'http://localhost:3000/ciudades'
  const settings ={
                   method: 'GET',
                   headers: {
                          'Content-Type': 'application/json'
                   } 
                  }

  const [productInfo, setProductInfo] = useState([])
  const [categoryInfo, setCategoryInfo] = useState([])
  const [city, setCity] = useState();
  const [citySelected, setCitySelected] = useState(null);

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
                  console.log("urlCategorias response: "+response)
                  const data = await response.json()
                  console.log("urlCategorias data: "+data)
                  setCategoryInfo(data) 
              } catch (error){
                  console.error(error)
              }
            })
              }, [])
    
    useEffect(() => {
            Promise.resolve().then(async function(){
              try{
                  const response = await fetch (urlCity, settings)
                  console.log("urlProductos response: "+response)
                  const data = await response.json()
                  console.log("urlProductos data: "+data)
                  setProductInfo(data) 
              } catch (error){
                  console.error(error)
              }
            })
              }, [id])

    if(productInfo==0){
        return (<LoadingPage/>)
    }

  return (
    <>
      <Buscador cityList={city}/>
      <ListaCategorias info={categoryInfo} />
      <ListaProductos productInfo={productInfo}/>
    </>
  )
} 

