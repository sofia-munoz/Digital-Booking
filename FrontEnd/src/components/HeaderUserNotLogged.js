import React from "react";
import {Link} from "react-router-dom"
import "../styles/headerUserNotLogged.css";

export default function HeaderUserNotLogged (props) {
    return (
        <>
                <Link to='/register'><button>Crear cuenta</button></Link>
                <Link to='/login'><button>Iniciar sesión</button></Link>
        </>
    )
}