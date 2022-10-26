import React from "react";
import "../styles/headerUserLogged.css";
import {Link} from "react-router-dom";

export default function HeaderUserLogged (props) {
    return (
        <div className="header-user-logged">
                <div className="avatar-header">
                    <p>UN</p>
                </div>
                
                <div className="userInfo-header">
                    <p className="userGreet-header">Hola,</p>
                    <p className="userName-header">userName</p>
                </div>
                <div className="cerrar-header">
                <Link to='/'><p>X</p></Link>
                </div>
        </div>
    )
}