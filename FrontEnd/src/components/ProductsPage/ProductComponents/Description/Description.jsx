import React from "react";
import styles from './description.module.css'


export default function Description ({product}) {
    return (            
            <div className={styles.description}>
                <h2>Disfrutá de {product.producto.ciudad.ciudad}</h2>
                <hr/>
                <p>{product.producto.descripcion}</p>
            </div>
    )}