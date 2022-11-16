import React from "react";
import ubicationIcon from "../../../../assets/ubication.png"
import styles from './bloqueLocation.module.css'



export default function BloqueHeader ({product}) {
    return (
            <div className={styles.bloque_location}>
                <img src={ubicationIcon} alt="ubication icon" className={styles.bloque_location_icon}/>
                
                <div className={styles.bloque_location_info}>
                    <p>{product.producto.ciudad.ciudad}, {product.producto.provincia.provincia}, Argentina</p>
                    <p>{product.producto.ubicacion}</p>
                </div>
            </div>
    )}