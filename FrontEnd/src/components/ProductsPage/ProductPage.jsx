import React, {useState, useEffect, useMemo, useCallback} from "react";
import BloqueHeader from "./ProductComponents/BloqueHeader/BloqueHeader";
import BloqueLocation from "./ProductComponents/BloqueLocation/BloqueLocation"
import Gallery from "../Gallery/Gallery";
import Description from "./ProductComponents/Description/Description";
import ProductDetail from "./ProductComponents/ProductDetails/ProductDetail";
import PolicyAndRules from "./ProductComponents/Policy/PolicyAndRules";
import Reservation from "./ProductComponents/Reservation/Reservation";
import ProductImageGallery from "./ProductComponents/DesktopGallery/ProductImageGallery"
import useScreenSize from "../../hooks/useScreenSize";
import { useParams } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";

export default function ProductPage () {
    const [showGallery, setShowGallery] = useState()
    const [product, setProduct] = useState(null)
    const [images, setImages] = useState()
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
            Promise.resolve().then(async function(){
              try{
                  const response = await fetch (urlProductId, settings)
                  const data = await response.json()
                  setProduct(data) 
                  setImages(data.imagenes)
                  console.log("ProductPage dentro del try del fetch ", product, data)
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
        images={imagesArray}
      },
      [showGallery]
    )

    
    if(!product){
        return (<LoadingPage/>)
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
                <ProductDetail productAmenity={product.producto.caracteristicasDelProducto}/>
                <PolicyAndRules/>
                <Reservation/>
            </>)}
        </>
    )}
