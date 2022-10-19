import React from "react";

export default function HeaderUser () {
    return (
        <>
            {/* mediante el css vamos a ocultar una de las classnames 
            dependiendo si el usuario está loggeado o no */}
            <div className="userLogged">
                <img src="../assets/img/avatar.png" alt="avatar"/>  
                {/*después vemos como resolver la imagen del avatar con un JSON */}
                <h2>Hola,</h2>
                <h2>userName</h2>
            </div>
            <div className="userNotLogged">
                <button>Crear cuenta</button>
                <button>Iniciar sesión</button>
            </div>
        </>
    )
}