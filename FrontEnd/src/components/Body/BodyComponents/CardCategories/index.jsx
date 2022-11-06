import React from "react";
import styles from "./cardCategories.module.css"

const CardCategories = ({category}) => {
    return (
      <div className={styles.card}>
        <div>
          <img className={styles.image} src={category.imagen} alt="imagen de un hotel"/>
        </div>
        <div>
          <h3 className={styles.title}>{category.titulo}</h3>
          <p className={styles.description}>{category.descripcion}</p>
        </div>
      </div>
    )
  }

  export default CardCategories;