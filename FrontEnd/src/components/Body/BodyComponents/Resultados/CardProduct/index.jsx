import React from "react";
import styles from "./cardProduct.module.css"
import heart from "../../../../../assets/favorite.png"
import ubi from "../../../../../assets/ubication.png"
import points from "../../../../../assets/points.png"
import wifi from "../../../../../assets/wifi.png"
import swim from "../../../../../assets/swim.png"
import { Link } from "react-router-dom";
import star from "../../../../../assets/star.png"
 
const CardProduct = ({producto}) => {
  const descriptionCard = producto.descripcion.slice(0,101)
    return (
      <div className={styles.card}>
        
        {/* image container */}
        <div className={styles.cardPicture}>
            <div className={styles.main_image_container}>
              <img className={styles.image} src={producto.imagenPrincipalURL} alt="imagen de un hospedaje"/>
            </div>
            {/* <img className={styles.favourite} src={heart} alt="imagen corazon"/> */}
        </div>

        {/* body information */}
        <div className={styles.cardBody}>
          <div className={styles.header}>
            <div className={styles.title_container}>
              <div className={styles.category_container}>
                <p className={styles.category}>{producto.categoria.titulo}</p>
                {/* <img className={styles.star} src={star} alt="star"/> */}
              </div>
              <h3 className={styles.title}>{producto.titulo}</h3>
            </div>
            <div className={styles.punctuation_container}>
              <img className={styles.punctuation} src={points} alt="imagen puntaje"/>
            </div>
          </div>  

          <div className={styles.ubication}>
              <img className={styles.ubi} src={ubi} alt="icono ubicacion"/>
              <p className={styles.distance}>{producto.ciudad.ciudad}&nbsp; - &nbsp;{producto.ubicacion} <span className={styles.link}>&nbsp; - &nbsp;MOSTRAR EN EL MAPA</span></p>
          </div>
            
          <div className={styles.icons}>
              <img className={styles.icon} src={wifi} alt="imagen wifi"/>
              <img className={styles.icon} src={swim} alt="imagen nadando"/>
          </div>

            <div className={styles.description}>
              <p>{descriptionCard}...
              <Link to={`/products/${producto.id}`}><span className={styles.link}>más...</span></Link></p>
            </div>
            <Link to={`/products/${producto.id}`}><button className={styles.button}>Ver más</button></Link>

        </div>        
      </div>
    )
  }

  export default CardProduct;