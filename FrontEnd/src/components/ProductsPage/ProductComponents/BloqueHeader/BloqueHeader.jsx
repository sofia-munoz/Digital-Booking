import React from "react";
import { useLocation, useNavigate  } from "react-router-dom";
import pathBackButton from "../../../../assets/pathBack.png"
import styles from './bloqueHeader.module.css';


export default function BloqueHeader ({info, preview}) {
    const location = useLocation();

    const navigate = useNavigate();
    const HandleGoBack = ()=>{
        if (location.pathname.includes('/booking-detail')){
            navigate(location.pathname.slice(0, -15))
        } else if (preview){
            navigate('')
        } else {
            navigate('/')
        }
    }

    

    return (
            <div className={styles.bloque_header}>
                <div className={styles.info_container}>
                    {info.categoria&&(<div className={styles.title_category}>
                        {info.categoria.titulo.toUpperCase()} 
                    </div>)}
                    <div className={styles.title_product}>
                        { info.titulo} 
                    </div>
                </div>
                <img src={pathBackButton} alt="Back" className={styles.bloque_header_back} onClick={HandleGoBack}/>
            </div>
)}