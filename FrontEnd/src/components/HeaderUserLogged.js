import React from "react";
import "../styles/headerUserLogged.css";
import {Link} from "react-router-dom";

export default function HeaderUserLogged ({handleLogOut}) {
    const userName = localStorage.getItem('userName')
    const userLastName = localStorage.getItem('userLastName')
    const userAvatar = localStorage.getItem('userAvatar')
    return (
        <div className="header-user-logged">
                <div className="avatar-header">
                    <p>{userAvatar}</p>
                </div>
                
                <div className="userInfo-header">
                    <p className="userGreet-header">Hola,</p>
                    <p className="userName-header">{userName} {userLastName}</p>
                </div>
                <div className="cerrar-header">
                <Link to='/'><p onClick={handleLogOut}>X</p></Link>
                </div>
        </div>
    )
}