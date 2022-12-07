import React from 'react'
import LoadingPage from '../../../LoadingPage/LoadingPage'
import CardCategories from './CardCategories/index'
import styles from "./listaCategorias.module.css"



export default function ListaCategorias({categoryInfo}) {

if (!categoryInfo) {
  return <LoadingPage/>
}

  return (
  <div className={styles.categories_container}>
    <h2 className={styles.title}>Buscar por tipo de alojamiento</h2>

      <div className={styles.container}>
          {categoryInfo.map((c, index) => <CardCategories  key={index} categoria={c}/>)}
      </div>
      
    </div>
  )
}