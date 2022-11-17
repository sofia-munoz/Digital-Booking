import React, {useState, useEffect} from "react";
import { Routes, Route, useParams } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";
import ProductInformation from "./ProductInformation";
import BookingPage from "../BookingPage/BookingPage"

export default function ProductPage () {
    const [product, setProduct] = useState(null)
    const { id } = useParams();
    const [images, setImages] = useState()

    const urlProductId = 'http://localhost:3000/productos/'+id
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
                <Route path='/' element={<ProductInformation images={images} product={product} />}/>
                <Route path='/booking-detail' element={<BookingPage product={product} />} /> 
            </Routes>
            
        </>
    )}
