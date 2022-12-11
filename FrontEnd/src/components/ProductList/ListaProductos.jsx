import React from 'react'
import CardProduct from './ProductCard/CardProduct'
import styles from "./listaProductos.module.css"

export default function ListaProductos({productInfo, title, userOwnsProduct}) {   

  return (
    <div className={styles.recomendation}>
    <h2 className={styles.title}>{title}</h2>
      <div className={styles.container}>
          {productInfo.map((p, index) => <CardProduct key={index} producto={p} userOwnsProduct={userOwnsProduct}></CardProduct>)}
      </div>
    </div>
  )
}