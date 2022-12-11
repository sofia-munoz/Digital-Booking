import React, {useContext, useEffect, useState} from 'react'
import { userInfoContext } from "../../../App";
import styles from './MyProductsDisplay.module.css'
import { Link } from 'react-router-dom';
import ListaProductos from '../../ProductList/ListaProductos';

export default function MyProductsPage () {
    const userInfo = useContext(userInfoContext)
    const [myProducts, setMyProducts] = useState()
    const urlProductos = 'http://52.14.221.16:8080/productos/byUsuario/'+userInfo.id
    const settings ={
                   method: 'GET',
                   headers: {
                          'Content-Type': 'application/json'
                   } 
                  }

    useEffect(() => {
            Promise.resolve().then(async function(){
              try{
                  const response = await fetch (urlProductos, settings)
                  const data = await response.json()
                  setMyProducts(data) 
              } catch (error){
                console.error(error)
              }
            })
    },[])  
    

    return (
    <>
        <div className={styles.new_product}>
            <Link to='/my-products/my-new-product'><button>Crear nueva propiedad</button></Link>
        </div>
        <div className={styles.my_product_list}>
            <ListaProductos productInfo={myProducts} title={"Mis productos"}/>
        </div>
    </>
  )
}
