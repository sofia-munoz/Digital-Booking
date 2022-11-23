import React from "react";
import styles from "./headerUserLogged.module.css";

export default function HeaderUserLogged ({handleLogOut}) {
    const userName = localStorage.getItem('userName')
    const userLastName = localStorage.getItem('userLastName')
    const userAvatar = localStorage.getItem('userAvatar')
    return (
        <div className={styles.header_user_logged}>
                <div className={styles.avatar_header}>
                    <p>{userAvatar}</p>
                </div>
                
                <div className={styles.userInfo_header}>
                    <p className={styles.userGreet_header}>Hola,</p>
                    <p className={styles.userName_header}>{userName} {userLastName}</p>
                </div>
                <div className={styles.cerrar_header}>
                <p onClick={handleLogOut}>X</p>
                </div>
        </div>
    )
}