import React, {useState, useEffect} from "react";
import styles from './productPage.module.css'
import BloqueHeader from "./ProductComponents/BloqueHeader";
import BloqueLocation from "./ProductComponents/BloqueLocation"
import Gallery from "../Gallery/Gallery";
import Description from "./ProductComponents/Description";
import ProductDetail from "./ProductComponents/ProductDetail";
import PolicyAndRules from "./ProductComponents/PolicyAndRules";
import Reservation from "./ProductComponents/Reservation";
import ProductImageGallery from "./ProductComponents/ProductImageGallery"
import useScreenSize from "../../hooks/useScreenSize";
import { useParams } from "react-router-dom";

export default function ProductPage () {
    const [product, setProduct] = useState(null)
    const { id } = useParams();
    const { width } = useScreenSize();
    const urlProductId = 'http://localhost:3000/productos/'+id
    const settings ={
                   method: 'GET',
                   headers: {
                          'Content-Type': 'application/json'
                   } 
                  }

    useEffect(() => {
            // fetch(urlProductId, settings)
            //   .then((response) => response.json())
            //   .then(data => setProduct(data))
            //   .then(() => {console.log("Kari: "+product)})
            //   .catch((err) => console.error(err))
            Promise.resolve().then(async function(){
              try{
                  const response = await fetch (urlProductId, settings)
                  const data = await response.json()
                  await setProduct(data) 
                  console.log("ProductPage dentro del try del fetch ", product, data)
              } catch (error){
                  console.error(error)
              }
            })
    }, [  ])
    
    if(!product){
        return (<></>)
    }

    return (
        <>
            <BloqueHeader product={product} />
            <BloqueLocation product={product}/>
            {width<1023?<Gallery productId={product.id}/>:<ProductImageGallery productId={product.id}/>}
            <Description product={product}/>
            <ProductDetail product={product}/>
            <PolicyAndRules product={product}/>
            <Reservation product={product}/>
        </>
    )}
