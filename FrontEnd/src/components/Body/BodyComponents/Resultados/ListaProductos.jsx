import React from 'react'
import CardProduct from './CardProduct/index'
import styles from "./listaProductos.module.css"

export default function Productos({productInfo}) {

  return (
    <div className={styles.recomendation}>
    <h2 className={styles.title}>Resultados de la busqueda</h2>
      <div className={styles.container}>
          {productInfo.map((p, index) => <CardProduct key={index} producto={p}></CardProduct>)}
      </div>
    </div>
  )
}