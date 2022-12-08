import React, {useContext} from 'react'
import BloqueHeader from '../ProductsPage/ProductComponents/BloqueHeader/BloqueHeader'
import { userInfoContext } from "../../App";
import { Route, Routes, useNavigate } from 'react-router-dom';
import MyProductsDisplay from './MyProductsComponents/MyProductsDisplay';
import MyNewProduct from './MyNewProduct'
import { useEffect } from 'react';

export default function MyProductsPage () {
    const navigate = useNavigate()
    const userInfo = useContext(userInfoContext)
    
    useEffect(()=>{
        if(userInfo.idRole!==1){
            navigate('/')
        }
    }, [userInfo.idRole])
    
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
