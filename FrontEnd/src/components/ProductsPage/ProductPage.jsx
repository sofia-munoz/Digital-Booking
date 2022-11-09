import React, {useState, useEffect, useMemo, useCallback} from "react";
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
    const [showGallery, setShowGallery] = useState()
    const [product, setProduct] = useState(null)
    const [images, setImages] = useState()
    const { id } = useParams();
    const { width } = useScreenSize();
    const urlProductId = 'http://localhost:3000/productos/'+id
    const urlImages = 'http://localhost:3000/imagenes/byProducto/'+id
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
                  await setProduct(data) 
                  console.log("ProductPage dentro del try del fetch ", product, data)
              } catch (error){
                  console.error(error)
              }
            })
    }, [  ])


    
        useEffect(() => {
            Promise.resolve().then(async function(){
              try{
                  const response = await fetch (urlImages, settings)
                  const data = await response.json()
                  await setImages(data) 
                  console.log("Imagenes dentro del try del fetch ", images, data)
              } catch (error){
                  console.error(error)
              }
            })
    }, [  ])

    const imagesArray = useMemo(()=>{
        if(images){
            return images.map((image)=>image.url)
        }
    },[images])

    const handleShowGallery = useCallback(
      () => {
        setShowGallery(!showGallery)
      },
      [showGallery]
    )

    
    if(!product){
        return (<></>)
    }

    return (
        <>
            <BloqueHeader product={product} />
            <BloqueLocation product={product}/>
            {
                width<1023 || showGallery ? 
                <Gallery images={imagesArray} showGallery={showGallery} onClick={handleShowGallery} />:
                <ProductImageGallery onClick={handleShowGallery} images={imagesArray} />
            }
            { !showGallery&&(<>
                <Description product={product}/>
                <ProductDetail productAmenity={product.caracteristicasDelProducto}/>
                <PolicyAndRules product={product}/>
                <Reservation product={product}/>
            </>)}
        </>
    )}
