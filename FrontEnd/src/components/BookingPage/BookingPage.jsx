import React from "react";
import BloqueHeader from "../ProductsPage/ProductComponents/BloqueHeader/BloqueHeader";
import CalendarProduct from "../ProductsPage/ProductComponents/Reservation/CalendarProduct";
import styles from "./BookingPage.module.css"
import ubicationIcon from "../../assets/ubication.png"

export default function ProductPage ({product}) {
const goBack = '/products/'+product.id
    return(
        <>  
            <BloqueHeader product={product} goBack={goBack}/>
            <div className={styles.container}>   
                <div className={styles.first_column}>
                    <div className={styles.user_data}>
                        <h3> Confirmá tus datos</h3>
                        <form></form>
                    </div>
                    <div className={styles.calendar_select}>
                        <h3> Confirmá tu fecha de reserva</h3>
                        <CalendarProduct/>
                    </div>
                    <div className={styles.checkIn_hour}>
                        <h3> Confirmá tu hora de llegada</h3>
                        <form></form>                        
                    </div>
                </div>
                <div className={styles.second_column}>
                    <div className={styles.bloque_detail}>
                        <h3>Detalle de la reserva</h3>
                        <div className={styles.detail_picture}>
                            <img src={product.imagenPrincipalURL} alt="imagen principal del alojamiento" />    
                        </div>
                        <div className={styles.detail_information}>
                            <h5 className={styles.categoria}>{product.categoria.titulo.toUpperCase()}</h5>
                            <h4>{product.titulo}</h4>
                            <div className={styles.location}>
                                <img src={ubicationIcon} alt="ubication icon" className={styles.bloque_location_icon}/>
                                <div className={styles.bloque_location_info}>
                                    <p>{product.ciudad.ciudad}, {product.provincia.provincia}, Argentina</p>
                                    <p>{product.ubicacion}</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.detail_checkin_checkout}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )}
