import React from "react";
import { Link } from "react-router-dom";
import styles from '../productPage.module.css'


export default function BloqueHeader () {
    return (
        <div className={styles.main_product_galery}>
            <div className={styles.main_picture}>Imagenes</div>
            <div className={styles.secondary_pictures}></div>
        </div>
       
    )}