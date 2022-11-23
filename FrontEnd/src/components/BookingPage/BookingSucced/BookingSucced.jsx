import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './BookingSucced.module.css'
import img from './Vector.png'

const BookingSucced = ({handleBookingSucced}) => {
  const navigate = useNavigate()

  const handleButton = ()=>{
    handleBookingSucced(false)
    navigate("/")
  }

  return (
    <div className={styles.modal}>
      
      <div className={styles.campo}>
      <img src={img } alt="/" border="0" />
      <p className={styles.mensaje}>Muchas Gracias </p>
      <span className={styles.text}>su reserva se ha realizado con exito </span>

      <button className={styles.button} onClick={handleButton} >Aceptar</button>
      
      </div>
      
      </div>
  )
}

export default BookingSucced