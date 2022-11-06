import React from "react";
import styles from "./cardProduct.module.css"
import heart from "../../../../assets/favorite.png"

import star from "../../../../assets/star.png"
import ubi from "../../../../assets/ubication.png"
import points from "../../../../assets/points.png"
import wifi from "../../../../assets/wifi.png"
import swim from "../../../../assets/swim.png"


const CardProduct = ({producto}) => {
    return (
      <div className={styles.card}>
        <div className={styles.cardHeader}>
            <img className={styles.image} src={producto.img} alt="imagen de un hospedaje"/>
            <img className={styles.favourite} src={heart} alt="imagen corazon"/>
        </div>
        <div className={styles.cardBody}>
          <div className={styles.puntuation}>
            <p className={styles.category}>{producto.category}</p>
            <img className={styles.star} src={star} alt="imagen estrella"/>
            <img className={styles.star} src={star} alt="imagen estrella"/>
            <img className={styles.star} src={star} alt="imagen estrella"/>
            <img className={styles.star} src={star} alt="imagen estrella"/>
            <img className={styles.star} src={star} alt="imagen estrella"/>
          </div>
            <h3 className={styles.title}>{producto.title}</h3>
            <img className={styles.puntaje} src={points} alt="imagen puntaje"/>
            <div className={styles.ubication}>
              <img className={styles.ubi} src={ubi} alt="imagen ubicacion"/>
              <p className={styles.distance}>A 940 m del centro - </p>
              <p className={styles.link}>MOSTRAR EN EL MAPA</p>
            </div>
            <div className={styles.icons}>
              <img className={styles.icon} src={wifi} alt="imagen wifi"/>
              <img className={styles.icon} src={swim} alt="imagen nadando"/>
            </div>
            <div className={styles.text}>
              <p>{producto.description}</p>
            </div>
            <p className={styles.link}>más...</p>
            <div className={styles.button}>
              <button text={"Ver más"} type={"button"} styling={"secondary"}/>
            </div> 
        </div>        
      </div>
    )
  }

  export default CardProduct;