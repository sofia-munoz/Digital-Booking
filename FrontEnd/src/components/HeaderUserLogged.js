import React from "react";
import "../styles/headerUserLogged.css";
import {Link} from "react-router-dom";
import { useContext } from "react";
import {userContext2} from '../App'

export default function HeaderUserLogged (props) {

    const usuario= useContext(userContext2);
    const nombre= localStorage.getItem('userName')
    const apellido= localStorage.getItem('userLastName')
    const iniciales= localStorage.getItem('userAvatar')
    console.log("user Hlogged: "+ usuario);

    return (
        <div className="header-user-logged">
                <div className="avatar-header">
                    <p>{iniciales}</p>
                </div>
                
                <div className="userInfo-header">
                    <p className="userGreet-header">Hola,</p>
                    <p className="userName-header">{nombre} {apellido}</p>
                </div>
                <div className="cerrar-header">
                <Link to='/'><p>X</p></Link>
                </div>
        </div>
    )
}