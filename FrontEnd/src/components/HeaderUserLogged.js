import React from "react";
import avatar from "../assets/img/avatar.png";

export default function HeaderUserLogged (props) {
    // const {userLogged, onClickLogin} = props
    return (
        <>
                <img src={avatar} alt="avatar"/>  
                {/*después vemos como resolver la imagen del avatar con un JSON */}
                <h2>Hola,</h2>
                <h2>userName</h2>
        </>
    )
}