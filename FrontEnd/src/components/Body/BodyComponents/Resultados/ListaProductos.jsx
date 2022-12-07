import React, {useEffect, useState} from 'react'
import { useParams, useLocation } from 'react-router-dom'
import CardProduct from './CardProduct/index'
import styles from "./listaProductos.module.css"
import LoadingPage from '../../../LoadingPage/LoadingPage'
import ListaCategorias from '../Categorias/ListaCategorias'

export default function ListaProductos() {

const location = useLocation()
const [productInfo, setProductInfo] = useState([])
const settings ={
                  method: 'GET',
                  headers: {
                        'Content-Type': 'application/json'
                  } 
                }

const {id} = useParams()
const {startDate} = useParams()
const {endDate} = useParams()
const [urlProductos, setUrlProductos] = useState('')
const [title, setTitle] = useState('')

useEffect(()=>{
if (location.pathname.includes('date') && location.pathname.includes('city')){
    setUrlProductos('http://52.14.221.16:8080/productos/filter?idCiudad='+id+'&fechaInicial='+startDate+'&fechaFinal='+endDate)
    setTitle("Resultados de la búsqueda")
} else if (location.pathname.includes('city')){
    setUrlProductos('http://52.14.221.16:8080/productos/byCiudad/'+id)
    setTitle("Resultados de la búsqueda")
} else if (location.pathname.includes('date')) {
    setUrlProductos('http://52.14.221.16:8080/productos/filter?fechaInicial='+startDate+'&fechaFinal='+endDate)
    setTitle("Resultados de la búsqueda")
} else if (location.pathname.includes('category')){
    setUrlProductos('http://52.14.221.16:8080/productos/byCategoria/'+id)
    setTitle("Resultados de la búsqueda")
} else {
  setUrlProductos('http://52.14.221.16:8080/productos/filter')
  setTitle("Recomendaciones")
}

}, [location.pathname])



    useEffect(() => {
        if(urlProductos===[]) return;
            Promise.resolve().then(async function(){
              try{
                  const response = await fetch (urlProductos, settings)
                  const data = await response.json()
                  setProductInfo(data) 
                  console.log("DATA EN INICIO ", data)
              } catch (error){
                console.error(error)
              }
            })
              }, [urlProductos])     

  if(productInfo===[] || !productInfo ){
    return
  }
  
  console.log("PRODUCTO ListaCategorias ", productInfo)
  
  return (
    <div className={styles.recomendation}>
    <h2 className={styles.title}>{title}</h2>
      <div className={styles.container}>
          {productInfo.map((p, index) => <CardProduct key={index} producto={p}></CardProduct>)}
      </div>
    </div>
  )
}