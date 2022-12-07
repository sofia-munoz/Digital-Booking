import React, {useContext} from 'react'
import { userInfoContext } from "../../../App";
import styles from './MyProductsDisplay.module.css'
import { Link } from 'react-router-dom';
import ListaProductos from '../../Body/BodyComponents/Resultados/ListaProductos';

export default function MyProductsPage () {
    const userInfo = useContext(userInfoContext)
    return (
    <>
        <div className={styles.new_product}>
            <Link to='/my-products/my-new-product'><button>Crear nueva propiedad</button></Link>
        </div>
        <div className={styles.my_product_list}>
            <ListaProductos/>
        </div>
    </>
  )
}
