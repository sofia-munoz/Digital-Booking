import React from "react";
import "../styles/headerUserLogged.css";
import {Link} from "react-router-dom";

export default function HeaderUserLogged (props) {
    return (
        <>
                <div className="avatar">
                    <p>UN</p>
                </div>
                
                <div className="userInfo">
                    <p className="userGreet">Hola,</p>
                    <p className="userName">userName</p>
                </div>
                <Link to='/'><p className="cerrar">X</p></Link>
        </>
    )
}