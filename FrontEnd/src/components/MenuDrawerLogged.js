import React from "react";
import Facebook from "../assets/img/facebook.png";
import LinkedIn from "../assets/img/linkedin.png";
import Twitter from "../assets/img/twitter.png";
import Instagram from "../assets/img/instagram.png";
import "../styles/menuDrawerLogged.css";
import { Link } from "react-router-dom";

export default function MenuDrawerLogged ({handleLogOut, handleModalMenu}) {
    const userName = localStorage.getItem('userName')
    const userLastName = localStorage.getItem('userLastName')
    const userAvatar = localStorage.getItem('userAvatar')
    return (
            <div className="menu-drawer-logged">
                    <div className="barra-menu-drawer-logged">
                                    <button className="cerrar-menu-drawer" onClick={handleModalMenu}>X</button>
                                    <div className="greet-menu-drawer-container">
                                            <div className="avatar-menu-drawer">
                                                <p>{userAvatar}</p>
                                            </div>
                                            <h3 className="userGreet-menu-drawer">Hola,</h3>
                                            <h3 className="userName-menu-drawer">{userName} {userLastName}</h3>
                                            
                                    </div>
                    </div>
                    <div className="footer-container">
                        <div className="log-out-menu-drawer">
                            <span className="log-out-text" >
                                <p>¿deseas &nbsp;</p>
                                <Link to='/'><p className="log-out-color-text-menu-drawer" onClick={handleLogOut}> cerrar sesión </p></Link>
                                <p>?</p>
                            </span>
                            <hr/>
                        </div>
                        <div className="redes-menu-drawer">
                            <img src={Facebook} alt="Facebook"/>
                            <img src={LinkedIn} alt="LinkedIn"/>
                            <img src={Twitter} alt="Twitter"/>
                            <img src={Instagram} alt="Instagram"/>
                        </div>
                    </div>
            </div>
    )
}