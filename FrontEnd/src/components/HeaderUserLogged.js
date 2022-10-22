import React from "react";
import "../styles/headerUserLogged.css"

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
                <p className="cerrar" link to='' >X</p>
        </>
    )
}