import React from "react";
import styles from "./BookingCard.module.css"
import ubi from "../../../assets/ubication.png"
import { Link } from "react-router-dom";
import DateDisplayer from "../../DateDisplayer/DateDisplayer";
import Reservation from "../../ProductsPage/ProductComponents/Reservation/Reservation";
 
const BookingCard = ({booking}) => {
console.log("AmenityList", booking.producto.caracteristicasDelProducto)
    return (
      <div className={styles.card}>
        
        {/* image container */}
        <div className={styles.cardPicture}>
            <div className={styles.main_image_container}>
              <img className={styles.image} src={booking.producto.imagenPrincipalURL} alt="imagen de un hospedaje"/>
            </div>
        </div>

        {/* body information */}
            <div className={styles.cardBody}>
              {/* title container */}
            <div className={styles.title_container}>
              <div className={styles.category_container}>
                <p className={styles.category}>{booking.producto.categoria.titulo}</p>
              </div>
              <h3 className={styles.title}>{booking.producto.titulo}</h3>
            </div>

            <div className={styles.ubication}>
                <img className={styles.ubi} src={ubi} alt="icono ubicacion"/>
                <p className={styles.distance}>{booking.producto.ciudad.ciudad}&nbsp; - &nbsp;{booking.producto.ubicacion}</p>
            </div>
            {/* Amenity icons */}
            <div className={styles.amenities}>
              {booking.producto.caracteristicasDelProducto.map((amenity, i)=>
                      <div key={amenity.id} className={styles.amenity}>
                        <img src={amenity.iconoURL} alt={amenity.caracteristica} />
                      </div>)}
            </div>
              {/* description */}
            <div className={styles.description}>
              <p className={styles.description_title}>{booking.producto.tituloDescripcion}</p>
              <p>{booking.producto.descripcion}</p>
            </div>

              {/* Booking dates */}
            <div className={styles.booking_date}>
              <p>Check in:</p>
              <DateDisplayer date={booking.start}/>
            </div>
            <div className={styles.booking_date}>
              <p>Check out:</p>
              <DateDisplayer date={booking.end}/>
            </div>
  
        </div>        
      </div>
    )
  }

  export default BookingCard;