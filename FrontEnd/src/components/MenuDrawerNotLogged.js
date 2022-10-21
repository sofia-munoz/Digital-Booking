import React from "react";
import Facebook from "../assets/img/facebook.png";
import LinkedIn from "../assets/img/linkedin.png";
import Twitter from "../assets/img/twitter.png";
import Instagram from "../assets/img/instagram.png";

export default function MenuDrawerNotLogged () {
    return (
            <>
                <div className="barraMenuMobile">
                    <button className="cerrar">X</button>
                    <h3 className="usuarioMobile">MENÚ</h3>
                </div>
                <div>
                    <div>
                    <p link to='' >Crear cuenta</p>
                    <hr/>
                    <p link to=''>Iniciar sesión</p>
                    </div>
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