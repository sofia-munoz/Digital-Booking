import React from 'react'
import CardCategories from '../BodyComponents/CardCategories/index'
import styles from "./listaCategorias.module.css"
import { Link } from 'react-router-dom'

export default function ListaCategorias({info}) {

  return (
  <div className={styles.categories_container}>
    <h2 className={styles.title}>Buscar por tipo de alojamiento</h2>
      <div className={styles.container}>
          {info.map((c, index) => <CardCategories key={index} categoria={c}/>)}
      </div>
    </div>
  )
}