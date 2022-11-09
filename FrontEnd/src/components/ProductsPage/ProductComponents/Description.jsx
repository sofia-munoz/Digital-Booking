import React from "react";
import styles from '../productPage.module.css'


export default function Description ({product}) {
    return (            
            <div className={styles.description}>
                <h2>Disfrutá de {product.ciudad.ciudad}</h2>
                <hr/>
                <p>{product.descripcion}</p>
            </div>
    )}