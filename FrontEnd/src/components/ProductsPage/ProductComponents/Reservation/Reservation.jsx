import React, { useContext } from "react";
import CalendarProduct from "./CalendarProduct";
import styles from './reservation.module.css';
import{useNavigate } from 'react-router-dom'
import { userContext } from "../../../../App";

export default function Reservation ({handleCheckIn, handleCheckOut, product}) {
    const userLogged = useContext(userContext)
    const navigate = useNavigate();
    const productTitle = product.titulo.replace(/ /g,'-')
  
    const HandleNavigate = ()=>{
        if (userLogged) {
            navigate("/products/id="+product.id+"/"+productTitle+"/booking-detail", window.scroll(0, 0)); 
        } else { 
            localStorage.setItem("idProduct", product.id);
            localStorage.setItem("nameProduct", productTitle);
            navigate("/login", window.scroll(0, 0));
        }
    }

    return (
        <div className={styles.reservation}>
            <h2>Fechas Disponibles</h2>
            <div className={styles.reservation_container}>
                <div className={styles.calendar_product}>
                <CalendarProduct handleCheckIn = {handleCheckIn} handleCheckOut = {handleCheckOut}/>
                </div>
                <div className={styles.reservation_start}>
                    <p>Agregá tus fechas de viaje para obtener precios exactos</p>
                    <button onClick={HandleNavigate}>Iniciar reserva</button>
                </div>
            </div>

        </div>
    )}