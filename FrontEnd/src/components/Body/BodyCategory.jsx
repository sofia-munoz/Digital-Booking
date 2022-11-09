import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Buscador from "./BodyComponents/Buscador";
import ListaCategorias from "./BodyComponents/ListaCategorias";
import ListaProductos from "./BodyComponents/ListaProductos.jsx";


  // const urlCategorias = 'http://52.14.221.16:8081/categorias'
  // const urlProductos = 'http://52.14.221.16:8081/productos'



export default function BodyHome() {
  
  const { id } = useParams();

  const [city, setCity] = useState(null);
  const urlCategorias = 'http://localhost:3000/categorias'
  const urlProductos = 'http://localhost:3000/productos/byCategoria/'+id
  const settings ={
                   method: 'GET',
                   headers: {
                          'Content-Type': 'application/json'
                   } 
                  }

  const [productInfo, setProductInfo] = useState([])
  const [categoryInfo, setCategoryInfo] = useState([])

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
                  const response = await fetch (urlProductos, settings)
                  console.log("urlProductos response: "+response)
                  const data = await response.json()
                  console.log("urlProductos data: "+data)
                  setProductInfo(data) 
              } catch (error){
                  console.error(error)
              }
            })
              }, [id])

  return (
    <>
      <Buscador setCity={setCity} city={city}/>
      <ListaCategorias info={categoryInfo} />
      <ListaProductos productInfo={productInfo}/>
    </>
  )
} 

