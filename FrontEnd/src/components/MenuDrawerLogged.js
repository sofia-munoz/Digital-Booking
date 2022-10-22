import React from "react";
import Facebook from "../assets/img/facebook.png";
import LinkedIn from "../assets/img/linkedin.png";
import Twitter from "../assets/img/twitter.png";
import Instagram from "../assets/img/instagram.png";
import AvatarMobile from "../assets/img/avatarMobile.png"

export default function MenuDrawerLogged () {
    return (
            <>
                <div className="barraMenuMobile">
                    <button className="cerrar">X</button>
                    <div className="greet">
                            <div className="avatar">
                            <p>UN</p>
                            </div>
                    <h3 className="userGreet">Hola,</h3>
                    <h3 className="userName">userName</h3>
                    </div>
                </div>
                <div className="cerrarSesionMenu">
                    <span><p>¿deseas </p><p id="cerrarSesion" link to='' >cerrar sesión</p><p>?</p></span>
                    <hr/>
                </div>
                <div className="redes">
                    <img src={Facebook} alt="Facebook" link to=''/>
                    <img src={LinkedIn} alt="LinkedIn" link to=''/>
                    <img src={Twitter} alt="Twitter" link to=''/>
                    <img src={Instagram} alt="Instagram" link to=''/>
                </div>
            </>
    )
}