import React from 'react'
import { useState,useEffect, useContext } from 'react'
import BloqueHeader from '../ProductsPage/ProductComponents/BloqueHeader/BloqueHeader'
import { userInfoContext } from '../../App'

export default function MyBookingPage () {
    const userInfo = useContext(userInfoContext)
    
    const infoHeader = {
        title: "Detalle de mis reservas"
        } 
    
    const [bookingList, setBookingList] = useState([])
    
    // const url = 'http://52.14.221.16:8080/reservas/byUsuario/'+userInfo.id
    // const settings ={
    //                method: 'GET',
    //                headers: {
    //                       'Content-Type': 'application/json'
    //                } 
    //               }

    // useEffect(() => {
    //         Promise.resolve().then(async function(){
    //           try{
    //               const response = await fetch (urlProductId, settings)
    //               const data = await response.json()
    //               setProduct(data.producto) 
    //               setImages(data.imagenes)
    //               setDaysBooked(data.reservas)
    //           } catch (error){
    //               console.error(error)
    //           }
    //         })
    // }, [  ])

    return (
    <>
        <BloqueHeader header={infoHeader}/>
        <UserBooking/>
    </>
  
    )
}
