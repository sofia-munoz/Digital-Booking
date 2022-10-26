import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderUserLogged from "./HeaderUserLogged";
import {Link} from "react-router-dom"
import menu from "../assets/img/menu.png"
import "../styles/Header.css"
import { userContext } from "../App";
import { useContext } from "react";



export default function Header ({ handleUserLogged, hideLogin, hideRegister, handleModalMenu} ) {
    const userLogged = useContext(userContext)
    
    return (
        <header>
            <HeaderLogo/>
            <div className="userDisplay">
                {userLogged&&(<HeaderUserLogged handleUserLogged={handleUserLogged}/>)}
                {!userLogged&&(
                   <>
                    {!hideLogin&&(<Link to='/register'><button className="btnRegister">Crear cuenta</button></Link>)}
                    {!hideRegister&&(<Link to='/login'><button className="btnLogin">Iniciar sesión</button></Link>)}
                    </>
                )}

                <img className="mobileMenu" src={menu} alt="menu" onClick={handleModalMenu} />
            </div>
        </header>
    )
}