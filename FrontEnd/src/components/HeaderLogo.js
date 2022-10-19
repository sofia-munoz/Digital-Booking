import React from "react";
import logo from "../assets/img/logo1.png"

export default function HeaderLogo () {
    return (
            <div className="logo">
                <img src={logo} alt="logo"/>
                <h1>Sentite como en tu hogar</h1>
            </div>
    )
}