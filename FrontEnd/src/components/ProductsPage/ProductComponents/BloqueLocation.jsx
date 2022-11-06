import React from "react";
import ubicationIcon from "../../../assets/ubication.png"
import styles from '../productPage.module.css'



export default function BloqueHeader () {
    return (
            <div className={styles.bloque_location}>
                <img src={ubicationIcon} alt="ubication icon" className={styles.bloque_location_icon}/>
                
                <div className={styles.bloque_location_info}>
                    <p>Provincia, ciudad, Argentina</p>
                    <p>ubicación</p>
                </div>
            </div>
    )}