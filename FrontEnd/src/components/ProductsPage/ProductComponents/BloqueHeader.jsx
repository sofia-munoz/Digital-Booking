import React from "react";
import { Link } from "react-router-dom";
import pathBack from "../../../assets/pathBack.png"
import styles from '../productPage.module.css'


export default function BloqueHeader () {
    return (
            <div className={styles.bloque_header}>
                <div className={styles.info_container}>
                    <div className={styles.title_category}>
                        HOTEL
                    </div>
                    <div className={styles.title_product}>
                        Hermitage Hotel 
                    </div>
                </div>
                <Link to="/"><img src={pathBack} alt="Back" className={styles.bloque_header_back}/></Link>
            </div>
)}