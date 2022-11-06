import React from "react";
import Calendar from "../../Body/BodyComponents/BuscadorComponents/Calendar";
import styles from '../productPage.module.css'


export default function Reservation () {
    return (
        <div className={styles.reservation}>
            <h2>Fechas Disponibles</h2>
            <div className={styles.reservation_container}>
                <div>Hola</div>
                <div className={styles.reservation_start}>
                    <p>Agregá tus fechas de viaje para obtener precios exactos</p>
                    <button>Iniciar reserva</button>
                </div>
            </div>

        </div>
    )}