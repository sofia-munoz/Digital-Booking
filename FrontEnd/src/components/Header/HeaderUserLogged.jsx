import React, {useContext, useState} from "react";
import styles from "./headerUserLogged.module.css";
import { userInfoContext } from "../../App";
import { useNavigation } from "react-router-dom";

export default function HeaderUserLogged ({handleLogOut}) {
const userInfo = useContext(userInfoContext)
const [buttonText, setButtonText] = useState('')
const [profilePath, setProfilePath] = useState('')
const navigate = useNavigation()
    
    if (userInfo.idRole===2) {
        setButtonText('Mis Reservas'); 
        setProfilePath('/my-bookings')
    }else{
        setButtonText('Mis Productos');
        setProfilePath('/my-products')
    }
     
    const HandleUserProfile=()=> {
        navigate(profilePath)
    }


    return (
        <div className={styles.header_user_logged}>
            <div className={styles.user_profile}>
                <button onClick={HandleUserProfile()}>{buttonText}</button>
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