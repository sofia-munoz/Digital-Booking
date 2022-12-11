import React from "react";
import styles from "./BookingCard.module.css"
import ubi from "../../../assets/ubication.png"
import { Link } from "react-router-dom";
 
const BookingCard = ({booking, producto}) => {

  const productTitle = producto.titulo.replace(/ /g,'-')

    return (
      <div className={styles.card}>
        
        {/* image container */}
        <div className={styles.cardPicture}>
            <div className={styles.main_image_container}>
              <img className={styles.image} src={producto.imagenPrincipalURL} alt="imagen de un hospedaje"/>
            </div>
        </div>

        {/* body information */}
        <div className={styles.cardBody}>
            <div className={styles.title_container}>
              <div className={styles.category_container}>
                <p className={styles.category}>{producto.categoria.titulo}</p>
              </div>
              <h3 className={styles.title}>{producto.titulo}</h3>
            </div>
            {/* <div className={styles.punctuation_container}>
              <img className={styles.punctuation} src={points} alt="imagen puntaje"/>
            </div> */} 

          <div className={styles.ubication}>
              <img className={styles.ubi} src={ubi} alt="icono ubicacion"/>
              <p className={styles.distance}>{producto.ciudad.ciudad}&nbsp; - &nbsp;{producto.ubicacion}</p>
          </div>
            
          <div className={styles.icons}>
              {RenderAmenitiesCard()}
          </div>

            <div className={styles.description}>
              <p>{descriptionCard}
              {/* <Link to={`/products/id=${producto.id}/${productTitle}`} onClick={() => {window.scroll(0, 0); }}><span className={styles.link}>más...</span></Link> */}</p>
            </div>
            <Link to={`/products/id=${producto.id}/${productTitle}`} onClick={() => {window.scroll(0, 0); }}><button className={styles.button}>Ver más</button></Link>

        </div>        
      </div>
    )
  }

  export default BookingCard;