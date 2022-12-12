import React from 'react'
import { useState,useEffect, useContext } from 'react'
import BloqueHeader from '../ProductsPage/ProductComponents/BloqueHeader/BloqueHeader'
import { userInfoContext } from '../../App'
import ProductList from '../ProductList/ListaProductos'
import styles from './MyBookingPage.module.css'
import NoProductsFound from '../NoProductsFound/NoProductsFound'
import { GoBeaker } from 'react-icons/go'

export default function MyBookingPage () {
    const userInfo = useContext(userInfoContext)
    
    const infoHeader = {
        title: "Detalle de reservas"
        } 

    const [bookingList, setBookingList] = useState([])
    const [productsNotFound, setProductsNotFound] = useState(false)

    const url = 'http://52.14.221.16:8080/reservas/byUsuario/'+userInfo.id
    const settings ={
                   method: 'GET',
                   headers: {
                          'Content-Type': 'application/json'
                   } 
                  }

    useEffect(() => {
            Promise.resolve().then(async function(){
              try{
                  const response = await fetch (url, settings)
                  const data = await response.json()
                  setBookingList(data) 
                  console.log("DATA BOOKING", data)
                  if (data.lenght===0){
                    setProductsNotFound(true)
                  }
              } catch (error){
                  console.error(error)
                  setProductsNotFound(true)
              }
            })
    }, [  ])

    const productInfo = bookingList.map((p)=>{
        let object = p.producto
        object.checkin = p.start
        object.checkout = p.end
        return object
    })


    console.log("BOOKINGLIST", bookingList)
    console.log("PRODUCTINFO", productInfo)
    return (
    <>
        <BloqueHeader header={infoHeader}/>
        <div className={styles.greet_container}>
            <h1>Hola, {userInfo.name}!</h1>
        </div>
        <ProductList productInfo={productInfo} title={"Estas son tus reservas:"} message={"Aún no has efectuado ninguna reserva!"} goBack={true}/>
        {productsNotFound&&(
        <NoProductsFound message={"Aún no has efectuado ninguna reserva!"} goBack={true}/>
         )}
    </>
  
    )
}