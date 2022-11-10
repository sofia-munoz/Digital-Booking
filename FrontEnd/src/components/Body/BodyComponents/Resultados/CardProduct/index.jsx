import React from "react";
import styles from "./cardProduct.module.css"
import heart from "../../../../../assets/favorite.png"
import ubi from "../../../../../assets/ubication.png"
import points from "../../../../../assets/points.png"
import wifi from "../../../../../assets/wifi.png"
import swim from "../../../../../assets/swim.png"
import { Link } from "react-router-dom";


const CardProduct = ({producto}) => {
  const descriptionCard = producto.descripcion.slice(0,101)
    return (
      <div className={styles.card}>
        <div className={styles.cardHeader}>
            <img className={styles.image} src={producto.imagenPrincipalURL} alt="imagen de un hospedaje"/>
            <img className={styles.favourite} src={heart} alt="imagen corazon"/>
        </div>
        <div className={styles.cardBody}>
          <div className={styles.puntuation}>
            <p className={styles.category}>{producto.categoria.titulo}</p>
            {/* {Array(4).fill(<img className={styles.star} src={star} alt="imagen estrella"/>)} */}
          </div>
            <h3 className={styles.title}>{producto.titulo}</h3>
            <img className={styles.puntaje} src={points} alt="imagen puntaje"/>
            <div className={styles.ubication}>
              <img className={styles.ubi} src={ubi} alt="imagen ubicacion"/>
              <p className={styles.distance}>{producto.ciudad.ciudad}</p>
              <p className={styles.distance}>&nbsp; - &nbsp;{producto.ubicacion}</p>
              <p className={styles.link}>&nbsp; - &nbsp;MOSTRAR EN EL MAPA</p>
            </div>
            <div className={styles.icons}>
              <img className={styles.icon} src={wifi} alt="imagen wifi"/>
              <img className={styles.icon} src={swim} alt="imagen nadando"/>
            </div>
            <div className={styles.text}>
              <p>{descriptionCard}</p> 
            </div>
            <Link to={`/products/${producto.id}`}><p className={styles.link}>más...</p></Link>
            <Link to={`/products/${producto.id}`}><button className={styles.button}>Ver más</button></Link>

        </div>        
      </div>
    )
  }

  export default CardProduct;