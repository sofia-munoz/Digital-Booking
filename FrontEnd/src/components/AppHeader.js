import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderUserLogged from "./HeaderUserLogged";
import {Link} from "react-router-dom"
import menu from "../assets/img/menu.png"
import "../styles/appHeader.css"

export default function AppHeader (props) {
    return (
        <header>
            <HeaderLogo/>
            <div className="userDisplay">
                {false&&(<HeaderUserLogged/>)}
                {true&&(
                        <>
                        {!props.hideLogin&&(<Link to='/register'><button className="btnRegister" id="btnRegister" >Crear cuenta</button></Link>)}
                        {!props.hideRegister&&(<Link to='/login'><button className="btnLogin" id="btnLogin" >Iniciar sesión</button></Link>)}
                        </>
                )}
                <img className="mobileMenu" src={menu} alt="menu"/>
            </div>
        </header>
    )
}