import React from "react";
import styles from "./cardCategories.module.css"

const CardCategories = ({categoria}) => {
    return (
      <div className={styles.card}>
        <div>
          <img className={styles.image} src={categoria.imagenURL} alt="imagen del hospedaje"/>
        </div>
        <div>
          <h3 className={styles.title}>{categoria.titulo}</h3>
          <p className={styles.description}>{categoria.descripcion}</p>
        </div>
      </div>
    )
  }

  export default CardCategories;