import React from 'react'
import styles from "./BookingList.module.css"
import BookingCard from "./BookingCard/BookingCard"

export default function BookingList() {   

  return (
    <div className={styles.recomendation}>
    <h2 className={styles.title}>Mis Reservas</h2>
      <div className={styles.container}>
          {bookingInfo.map((b, index) => <BookingCard key={index} booking={b}/>)}
      </div>
    </div>
  )
}