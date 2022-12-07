import React, {useContext} from 'react'
import BloqueHeader from '../ProductsPage/ProductComponents/BloqueHeader/BloqueHeader'
import { userInfoContext } from "../../App";
import { Route, Routes } from 'react-router-dom';
import MyProductsDisplay from './MyProductsComponents/MyProductsDisplay';
import MyNewProduct from './MyNewProduct'

export default function MyProductsPage () {

    const userInfo = useContext(userInfoContext)
    const info = {
        titulo: "Administración de propiedades"
    }  
  
    return (
    <>
        <BloqueHeader info={info}/>
        <Routes>
            <Route path="/" element={<MyProductsDisplay/>}/>
            <Route path="/my-new-product" element={<MyNewProduct/>}/>
        </Routes>
    </>
  )
}
