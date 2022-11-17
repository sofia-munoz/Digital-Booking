import React from "react";
import { Link } from "react-router-dom";
import pathBackButton from "../../../../assets/pathBack.png"
import styles from './bloqueHeader.module.css'


export default function BloqueHeader ({goBack, product}) {
    return (
            <div className={styles.bloque_header}>
                <div className={styles.info_container}>
                    <div className={styles.title_category}>
                        {product.categoria.titulo.toUpperCase()} 
                    </div>
                    <div className={styles.title_product}>
                        { product.titulo} 
                    </div>
                </div>
                <Link to={goBack} ><img src={pathBackButton} alt="Back" className={styles.bloque_header_back}/></Link>
            </div>
)}