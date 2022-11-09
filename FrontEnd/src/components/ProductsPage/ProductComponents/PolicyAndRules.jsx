import React from "react";
import styles from '../productPage.module.css'


export default function PolicyAndRules () {
    return (
        <div className={styles.info_policy}>
            <h2>Qué tenés que saber?</h2>
            <hr />
            
            <div className={styles.policy_container}>
            <div className={styles.container_responsive}>
                    <div className={styles.normas}>
                        <h3>Normas de la casa</h3>
                        <p>Check-out: 10:00</p>
                        <p>No se permiten fiestas</p>
                        <p>No fumar</p>
                    </div>
                    <div className={styles.seguridad}>
                        <h3>Salud y Seguridad</h3>
                        <p>Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus</p>
                        <p>Detector de humo</p>
                        <p>Depósito de seguridad</p>
                    </div>
                </div>
                <div className={styles.container_responsive}>
                <div className={styles.cancelacion}>
                    <h3>Políticas de cancelación</h3>
                    <p>Posibilidad de cancelar hasta 24hs antes de la reserva</p>              
                </div>
                </div>
            </div>
        </div>
    )}