import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import CardProduct from './CardProduct/index'
import styles from "./listaProductos.module.css"

export default function ListaProductosPorCiudad() {

const [productInfo, setProductInfo] = useState([])
const settings ={
                  method: 'GET',
                  headers: {
                        'Content-Type': 'application/json'
                  } 
                }

const {id} = useParams()

  const urlProductos = 'http://localhost:3000/productos/byCiudad/'+id

    useEffect(() => {
        if(urlProductos===[]) return;
            Promise.resolve().then(async function(){
              try{
                console.log("urlProductos ",urlProductos)
                  const response = await fetch (urlProductos, settings)
                  const data = await response.json()
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