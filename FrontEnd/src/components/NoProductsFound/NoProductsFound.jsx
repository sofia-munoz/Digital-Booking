import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NoProductsFound.module.css'
import failed from '../../assets/error.png'

/**
 * Descripcion
 * 
 * @param message string. Explains the product wasn't found
 * @param goBack boolean. Displays or not a "go to home page" button
 * 
 */


export default function NoProductsFound({message, goBack}) {
  return (
    <div className={styles.container_notFound}>
        
        <div className={styles.secondary_container}>
            <img src={failed}/>
            <h3>{message}</h3>
            {goBack&&(<Link to='/'><button>Volver al Inicio</button></Link>)}
        </div>
    </div>
  )
}
