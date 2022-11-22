import React from 'react'
import styles from '../BookingPage.module.css'
import CalendarProduct from '../../ProductsPage/ProductComponents/Reservation/CalendarProduct'

const BookingDateSelector = ({handleCheckIn, handleCheckOut, booking}) => {
  return (
        <div className={styles.calendar_select}>
            <h3> Confirmá tu fecha de reserva</h3>
            <div className={styles.booking_date_calendar_container}>
            <CalendarProduct handleCheckIn = {handleCheckIn} handleCheckOut = {handleCheckOut}  booking={booking}/>
            </div>
        </div>
  )
}

export default BookingDateSelector          
          
          
         