import React, { useContext } from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderUserLogged from "./HeaderUserLogged";
import {Link, useLocation} from "react-router-dom"
import menu from "../../assets/img/menu.png"
import styles from "./Header.module.css"
import { userContext } from "../../App";




export default function Header ({ handleLogOut, handleModalMenu} ) {
    const userLogged = useContext(userContext)
    const location = useLocation();
    
    return (
        <header>
            <HeaderLogo/>
            <div className={styles.userDisplay}>
                {userLogged&&(<HeaderUserLogged handleLogOut={handleLogOut}/>)}
                {!userLogged&&(
                   <>
                    {location.pathname!="/register" ? (<Link to='/register'><button className={styles.btnRegister}>Crear cuenta</button></Link>) :<></>}
                    {location.pathname!="/login" ? (<Link to='/login'><button className={styles.btnLogin}>Iniciar sesión</button></Link>):<></>}
                    </>
                )}

                <img className={styles.mobileMenu} src={menu} alt="menu" onClick={handleModalMenu} />
            </div>
        </header>
    )
}