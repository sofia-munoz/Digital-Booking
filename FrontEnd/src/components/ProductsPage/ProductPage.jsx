import React, {useState, useEffect} from "react";
import { Routes, Route, useParams } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";
import ProductInformation from "./ProductInformation";
import BookingPage from "../BookingPage/BookingPage"

export default function ProductPage () {
    const [product, setProduct] = useState(null)
    const { id } = useParams();
    const [images, setImages] = useState()
    const [checkin, setCheckin] = useState('-/-/-')
    const [checkout, setCheckout] = useState('-/-/-')

    const urlProductId = 'http://52.14.221.16:8080/productos/'+id
    const settings ={
                   method: 'GET',
                   headers: {
                          'Content-Type': 'application/json'
                   } 
                  }

    useEffect(() => {
            Promise.resolve().then(async function(){
              try{
                  const response = await fetch (urlProductId, settings)
                  const data = await response.json()
                  setProduct(data.producto) 
                  setImages(data.imagenes)
              } catch (error){
                  console.error(error)
              }
            })
    }, [  ])
    
    if(!product){
        return (<LoadingPage/>)
    }

    return (
        <>
            <Routes>
                <Route path='/' element={<ProductInformation images={images} product={product} handleCheckIn = {setCheckin} handleCheckOut = {setCheckout}  checkin={checkin} checkout={checkout} />}/>
                <Route path='/booking-detail' element={<BookingPage handleCheckIn = {setCheckin} handleCheckOut = {setCheckout} product={product} checkin={checkin} checkout={checkout}/>} /> 
            </Routes>
            
        </>
    )}
