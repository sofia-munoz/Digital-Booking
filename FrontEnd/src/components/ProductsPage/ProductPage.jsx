import React from "react";
import styles from './productPage.module.css'
import BloqueHeader from "./ProductComponents/BloqueHeader";
import BloqueLocation from "./ProductComponents/BloqueLocation"
import fav from '../../assets/favBlack.png';
import share from "../../assets/share.png";
import Gallery from "../Gallery/index";
import Description from "./ProductComponents/Description";
import ProductDetail from "./ProductComponents/ProductDetail";
import PolicyAndRules from "./ProductComponents/PolicyAndRules";
import Reservation from "./ProductComponents/Reservation";

export default function ProductPage () {
    
    return (
        <>
            <BloqueHeader/>
            <BloqueLocation/>
            <div className={styles.icon_share_fav}>
                <img src={share} alt="share" />
                <img src={fav} alt="favorite"/>
            </div>
            <Gallery/>        
            <Description/>
            <ProductDetail/>
            <PolicyAndRules/>
            <Reservation/>
        </>
    )}
