import React from 'react'
import styles from "./BookingList.module.css"
import BookingCard from "./BookingCard/BookingCard"

export default function BookingList({bookingList}) {   

  return (
    <div className={styles.recomendation}>
    <h2 className={styles.title}>Mis Reservas</h2>
      <div className={styles.container}>
          {bookingList.map((booking, index) => <BookingCard key={index} booking={booking}/>)}
      </div>
    </div>
  )
}