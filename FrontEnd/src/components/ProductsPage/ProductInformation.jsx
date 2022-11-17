import React, {useState, useEffect, useMemo, useCallback} from "react";
import BloqueLocation from "./ProductComponents/BloqueLocation/BloqueLocation"
import Gallery from "../Gallery/Gallery";
import Description from "./ProductComponents/Description/Description";
import ProductDetail from "./ProductComponents/ProductDetails/ProductDetail";
import PolicyAndRules from "./ProductComponents/Policy/PolicyAndRules";
import Reservation from "./ProductComponents/Reservation/Reservation";
import ProductImageGallery from "./ProductComponents/DesktopGallery/ProductImageGallery"
import useScreenSize from "../../hooks/useScreenSize";
import BloqueHeader from "./ProductComponents/BloqueHeader/BloqueHeader";

export default function ProductInformation ({product, images}) {
    
    const [showGallery, setShowGallery] = useState()
    const { width } = useScreenSize();
    const goBack = '/'
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

    return (
        <>
            <BloqueHeader goBack={goBack}  product={product} />
            <BloqueLocation product={product}/>
            {
                width<1023 || showGallery ? 
                <Gallery images={imagesArray} showGallery={showGallery} onClick={handleShowGallery} />:
                <ProductImageGallery onClick={handleShowGallery} images={imagesArray} />
            }
            { !showGallery&&(<>
                <Description product={product}/>
                <ProductDetail productAmenity={product.caracteristicasDelProducto}/>
                <PolicyAndRules/>
                <Reservation product={product}/>
            </>)}
            
        </>
    )}