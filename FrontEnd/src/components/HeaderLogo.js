import React from "react";
import logo from "../assets/img/logo1.png"
import "../styles/headerLogo.css"

export default function HeaderLogo () {
    return (
            <div className="logo">
                <img src={logo} alt="logo"/>
                <p>Sentite como en tu hogar</p>
            </div>
    )
}