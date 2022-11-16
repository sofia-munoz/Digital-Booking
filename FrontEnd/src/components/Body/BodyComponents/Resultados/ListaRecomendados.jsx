import React, {useEffect, useState} from 'react';
import CardProduct from './CardProduct/index';
import styles from "./listaProductos.module.css";

export default function Productos() {
  
const urlProductos = 'http://localhost:3000/productos/inicio'
const [productInfo, setProductInfo] = useState([])
const settings ={
              method: 'GET',
              headers: {
                      'Content-Type': 'application/json'
                   } 
              }

    useEffect(() => {
        if(urlProductos===[]) return;
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
              }, [urlProductos])
  
  return (
    <div className={styles.recomendation}>
    <h2 className={styles.title}>Recomendaciones</h2>
      <div className={styles.container}>
          {productInfo.map((p, index) => <CardProduct key={index} producto={p}></CardProduct>)}
      </div>
    </div>
  )
}