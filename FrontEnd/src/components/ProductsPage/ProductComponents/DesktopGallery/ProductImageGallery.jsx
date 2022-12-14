import React from "react";
import { Link } from "react-router-dom";
import styles from './desktopGallery.module.css'


export default function ProductImageGallery ({images, onClick}) {



    return (
        <div className={styles.main_product_galery}>
            <div className={styles.main_picture}><img src={images[0]}/></div>
            <div className={styles.second_column_pictures}>
                <img src={images[1]}/>
                <img src={images[2]}/>
            </div>
            <div className={styles.second_column_pictures}>    
                <img src={images[3]}/>
                <img src={images[4]}/>
            </div>
            <button className={styles.ver_mas} onClick={onClick}>Ver mas</button>
        </div>
       
    )}
