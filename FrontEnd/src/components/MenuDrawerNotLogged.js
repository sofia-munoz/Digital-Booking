import React from "react";
import Facebook from "../assets/img/facebook.png";
import LinkedIn from "../assets/img/linkedin.png";
import Twitter from "../assets/img/twitter.png";
import Instagram from "../assets/img/instagram.png";
import {Link, useLocation} from "react-router-dom";
import "../styles/MenuDrawerNotLogged.css";

export default function MenuDrawerNotLogged ({ handleModalMenu}) {
    const location = useLocation();
    
    return (
            <div className="menu-drawer-not-logged">
                <div className="body-menu-drawer-not-logged">
                    <div className="barra-menu-drawer">
                        <button className="cerrar-menu-drawer" onClick={handleModalMenu}>X</button>
                        <p className="tittle-menu-drawer">MENÚ</p>
                    </div>
                    <div className="login-register-section">
                            {location.pathname!="/register" ? <Link to='/register'><button className="btnRegisterMobile" onClick={handleModalMenu}>Crear cuenta</button></Link> : <></>}
                            {location.pathname=="/" ? <hr/> : <></>}
                            {location.pathname!="/login" ? <Link to='/login'><button className="btnLoginMobile" onClick={handleModalMenu}>Iniciar sesión</button></Link> : <></>}
                    </div>
                </div>
                <div className="footer-menu-drawer">
                    <img src={Facebook} alt="Facebook"/>
                    <img src={LinkedIn} alt="LinkedIn"/>
                    <img src={Twitter} alt="Twitter"/>
                    <img src={Instagram} alt="Instagram"/>
                </div>
            </div>
    )
}