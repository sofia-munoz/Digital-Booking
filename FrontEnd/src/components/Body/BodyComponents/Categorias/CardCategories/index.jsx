import React from "react";
import styles from "./cardCategories.module.css"
import { Link } from "react-router-dom";

const CardCategories = ({categoria}) => {
    return (
          <div className={styles.card}>
              <Link to={`/category/${categoria.id}`}><div>
                <img className={styles.image} src={categoria.imagenURL} alt="imagen del hospedaje"/>
              </div></Link>
              <Link to={`/category/${categoria.id}`}><div>
                <h3 className={styles.title}>{categoria.titulo}</h3>
                <p className={styles.description}>{categoria.descripcion}</p>
              </div></Link>
          </div>
    )}

  export default CardCategories;