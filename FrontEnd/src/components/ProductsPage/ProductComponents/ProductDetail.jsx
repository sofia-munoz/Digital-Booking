import React from "react";
import styles from '../productPage.module.css'
import ProductDetailItem from "./ProductDetailItem";


export default function ProductDetail () {
    return (
        <div className={styles.detail_container}>
            <h2>Qué ofrece este lugar?</h2>
            <hr />
            {/* <ProductDetailItem/> */}
        </div>
    )}