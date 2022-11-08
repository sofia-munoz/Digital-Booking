import React from "react";
import styles from '../productPage.module.css';
import kitchen from '../../../assets/amenities/kitchen.png';
import air from '../../../assets/amenities/air.png';
import car from '../../../assets/amenities/car.png';
import wifi from '../../../assets/amenities/freewifi.png';
import pet from '../../../assets/amenities/pet.png';
import smokedetector from '../../../assets/amenities/smokedetector.png';
import tv from '../../../assets/amenities/tv.png';
import swimming from '../../../assets/amenities/swimming.png';


export default function ProductDetail (productId) {

    return (
        <div className={styles.detail_container}>
            <h2>Qué ofrece este lugar?</h2>
            <hr />
            <div className={styles.amenities_container}>
                {productId&&(<div className={styles.amenity}>
                    <img src={kitchen} alt="kitchen"/>
                    <p>Cocina</p>
                </div>)}
                {productId&&(<div className={styles.amenity}>
                    <img src={air} alt="air"/>
                    <p>Aire acondicionado</p>
                </div>)}
                {productId&&(
                <div className={styles.amenity}>
                    <img src={car} alt="car"/>
                    <p>Estacionamiento</p>
                </div>)}
                {productId&&(
                <div className={styles.amenity}>
                    <img src={wifi} alt="wifi"/>
                    <p>Wifi</p>
                </div>)}
                {productId&&(
                <div className={styles.amenity}>
                    <img src={pet} alt="pet"/>
                    <p>Apto mascotas</p>
                </div>)}
                {productId&&(
                <div className={styles.amenity}>
                    <img src={smokedetector} alt="smoke"/>
                    <p>Detector de humo</p>
                </div>)}
                {productId&&(
                <div className={styles.amenity}>
                    <img src={tv} alt="tv"/>
                    <p>Televisor</p>
                </div>)}
                {productId&&(
                <div className={styles.amenity}>
                    <img src={swimming} alt="swim"/>
                    <p>Pileta</p>
                </div>)}              
            </div>
        </div>
    )}