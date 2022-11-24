import React, {useContext} from "react";
import styles from "./headerUserLogged.module.css";
import { userInfoContext } from "../../App";

export default function HeaderUserLogged ({handleLogOut}) {
const userInfo = useContext(userInfoContext)
    
    return (
        <div className={styles.header_user_logged}>
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
    )
}