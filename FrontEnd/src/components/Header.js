import React, { useContext } from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderUserLogged from "./HeaderUserLogged";
import {Link} from "react-router-dom"
import menu from "../assets/img/menu.png"
import "../styles/Header.css"
import {userContext1} from '../App'


export default function Header ({hideLogin, hideRegister, handleModalMenu} ) {

    const userL = useContext(userContext1);
    console.log("user Header: "+ userL);

    return (
        <header>
            <HeaderLogo/>
            <div className="userDisplay">
                {userL&&(<HeaderUserLogged/>)}
                {!userL&&(
                    <>
                    {(!hideLogin && !hideRegister)&&
                        <>
                            <Link to='/register'><button className="btnRegister">Crear cuenta</button></Link>
                            <Link to='/login'><button className="btnLogin">Iniciar sesión</button></Link>
                        </>
                    }
                    {hideRegister&&(<Link to='/register'><button className="btnRegister">Crear cuenta</button></Link>)}
                    {hideLogin&&(<Link to='/login'><button className="btnLogin">Iniciar sesión</button></Link>)}
                    </>
                )}
                <img className="mobileMenu" src={menu} alt="menu" onClick={handleModalMenu} />
            </div>
        </header>
    )
}