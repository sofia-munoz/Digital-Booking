import React from "react";
import logo from "../assets/img/logo1.png";
import { Link } from "react-router-dom";
import "../styles/headerLogo.css"

export default function HeaderLogo () {
    return (
            <div className="logo">
                <Link to='/'><img src={logo} alt="logo"/></Link>
                <p>Sentite como en tu hogar</p>
            </div>
    )
}