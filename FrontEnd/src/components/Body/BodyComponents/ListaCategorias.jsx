import React from 'react'
import category from "../../../mocks/api/categories.json"
import CardCategories from '../BodyComponents/CardCategories/index'
import styles from "./listaCategorias.module.css"

export default function Categorias() {
  return (
    <>
    <h2 className={styles.title}>Buscar por tipo de alojamiento</h2>
      <div className={styles.container}>
          {category.map((c) => <CardCategories key={c.id} category={c}/>)}
      </div>
    </>
  )
}