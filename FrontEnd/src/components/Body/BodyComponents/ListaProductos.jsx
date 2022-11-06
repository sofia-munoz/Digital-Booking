import React from 'react'
import productos from "../../../mocks/api/listado.json"
import CardProduct from './CardProduct/index'
import styles from "./listaProductos.module.css"

export default function Productos() {
  return (
    <div className={styles.recomendation}>
    <h2 className={styles.title}>Recomendaciones</h2>
      <div className={styles.container}>
          {productos.map((p) => <CardProduct key={p.id} producto={p}></CardProduct>)}
      </div>
    </div>
  )
}