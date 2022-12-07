import React, {useContext, useState} from "react";
import styles from "./headerUserLogged.module.css";
import { userInfoContext } from "../../App";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function HeaderUserLogged ({handleLogOut}) {
const userInfo = useContext(userInfoContext)
const [buttonText, setButtonText] = useState('')
const [profilePath, setProfilePath] = useState('')

useEffect(()=>{
    if (userInfo.idRole===2) {
        setButtonText('Mis Reservas'); 
        setProfilePath('/my-bookings')
    }else{
        setButtonText('Mis Productos');
        setProfilePath('/my-products')
    }
}, [userInfo])
    


    return (
        <div className={styles.header_user_logged}>
            <div className={styles.user_profile}>
                <Link to={profilePath}><button>Mis Productos</button></Link>
            </div>
            <div className={styles.userInformation}>
                <div className={styles.avatar_header}>
                    <p>{userInfo.avatar}</p>
                </div>
                
                <div className={styles.userInfo_header}>
                    <p className={styles.userGreet_header}>Hola,</p>
                    <p className={styles.userName_header}>{userInfo.name} {userInfo.lastName}</p>
                </div>
                <div className={styles.cerrar_header}>
                <p onClick={handleLogOut}>X</p>
                </div>
            </div>
        </div>
    )
}