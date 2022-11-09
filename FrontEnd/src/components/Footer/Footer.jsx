import React from "react";
import Facebook from "../../assets/img/facebookDesktop.png";
import LinkedIn from "../../assets/img/linkedinDesktop.png";
import Twitter from "../../assets/img/twitterDesktop.png";
import Instagram from "../../assets/img/instagramDesktop.png";
import styles from "./Footer.module.css"

export default function Footer () {
    return (
        <div className={styles.footer}>
            <p>©2022 Digital Booking</p>
            <div className={styles.redesFooter}>
                <img src={Facebook} alt="Facebook" />
                <img src={LinkedIn} alt="LinkedIn"/>
                <img src={Twitter} alt="Twitter"/>
                <img src={Instagram} alt="Instagram"/>
            </div>
        </div>
    )
}