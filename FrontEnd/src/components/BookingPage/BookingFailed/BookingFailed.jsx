import React from 'react'
import styles from './BookingFailed.module.css'


const ReservaExitosa = ({handleAcceptFailed}) => {

  return (
    <div className={styles.modal}>
      
      
      <div className={styles.campo}>
      
      <p className={styles.mensaje}>Lo sentimos! </p>
      <span className={styles.text}>Su reserva NO se ha realizado con exito.</span>
      <span className={styles.text}>Por favor, intente más tarde</span>
      <button className={styles.button} onClick={handleAcceptFailed} >Aceptar</button>
      
      </div>
      
      </div>
  )
}

export default ReservaExitosa
