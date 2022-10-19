import React from "react";
import HeaderLogo from "./HeaderLogo";

export default function AppHeader (props) {
    return (
        <header>
            <HeaderLogo/>
            {props.user&&(<HeaderUserLogged/>)}
            {!props.user&&(<HeaderUserNotLogged/>)}
        </header>
    )
}