import React from "react";
import { Link } from "react-router-dom";
import pathBack from "../../../assets/pathBack.png"
import styles from '../productPage.module.css'


export default function BloqueHeader ({product}) {
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
                <Link to="/"><img src={pathBack} alt="Back" className={styles.bloque_header_back}/></Link>
            </div>
)}