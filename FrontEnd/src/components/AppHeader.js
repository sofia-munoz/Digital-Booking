import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderUserLogged from "./HeaderUserLogged"
import HeaderUserNotLogged from "./HeaderUserNotLogged"

export default function AppHeader (props) {
    return (
        <header>
            <HeaderLogo/>
            {props.user&&(<HeaderUserLogged/>)}
            {!props.user&&(<HeaderUserNotLogged/>)}
        </header>
    )
}