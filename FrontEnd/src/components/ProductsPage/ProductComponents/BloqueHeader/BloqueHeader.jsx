import React from "react";
import { Link } from "react-router-dom";
import pathBack from "../../../../assets/pathBack.png"
import styles from './bloqueHeader.module.css'


export default function BloqueHeader ({product}) {
    return (
            <div className={styles.bloque_header}>
                <div className={styles.info_container}>
                    <div className={styles.title_category}>
                        {product.producto.categoria.titulo.toUpperCase()} 
                    </div>
                    <div className={styles.title_product}>
                        { product.producto.titulo} 
                    </div>
                </div>
                <Link to="/"><img src={pathBack} alt="Back" className={styles.bloque_header_back}/></Link>
            </div>
)}