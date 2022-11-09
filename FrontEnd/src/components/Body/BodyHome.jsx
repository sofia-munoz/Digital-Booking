import React, {useState, useEffect} from "react";
import Buscador from "./BodyComponents/Buscador";
import ListaCategorias from "./BodyComponents/ListaCategorias";
import ListaRecomendados from "./BodyComponents/ListaRecomendados.jsx";


  // const urlCategorias = 'http://52.14.221.16:8081/categorias'
  // const urlProductos = 'http://52.14.221.16:8081/productos'

  const urlCategorias = 'http://localhost:3000/categorias'
  const urlProductos = 'http://localhost:3000/productos'
  const settings ={
                   method: 'GET',
                   headers: {
                          'Content-Type': 'application/json'
                   } 
                  }

export default function BodyHome() {
  
  const [productInfo, setProductInfo] = useState([])
  const [categoryInfo, setCategoryInfo] = useState([])

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

  return (
    <>
      <Buscador />
      <ListaCategorias info={categoryInfo} />
      <ListaRecomendados productInfo={productInfo}/>
    </>
  )
} 

