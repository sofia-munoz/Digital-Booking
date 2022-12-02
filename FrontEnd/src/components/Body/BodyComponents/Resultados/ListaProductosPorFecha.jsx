import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import CardProduct from './CardProduct/index'
import styles from "./listaProductos.module.css"

export default function ListaProductosPorFecha() {

const [productInfo, setProductInfo] = useState([])
const settings ={
                  method: 'GET',
                  headers: {
                        'Content-Type': 'application/json'
                  } 
                }
console.log("hola")

const {startDate} = useParams()
const {endDate} = useParams()


    const urlProductos = 'http://52.14.221.16:8080/productos/fechas?fechaInicial='+startDate+'&fechaFinal='+endDate

    console.log(urlProductos)
    
    useEffect(() => {
        if(urlProductos===[]) return;
            Promise.resolve().then(async function(){
              try{
                console.log("urlProductos ",urlProductos)
                  const response = await fetch (urlProductos, settings)
                  console.log("karina ", response)
                  const data = await response.json()
                  console.log("karina ", data)
                  setProductInfo(data) 
              } catch (error){
                console.error(error)
              }
            })
              }, [urlProductos])          

  return (
    <div className={styles.recomendation}>
    <h2 className={styles.title}>Resultados de la busqueda</h2>
      <div className={styles.container}>
          {productInfo.map((p, index) => <CardProduct key={index} producto={p}></CardProduct>)}
      </div>
    </div>
  )
}