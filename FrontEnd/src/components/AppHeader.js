import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderUser from "./HeaderUser";

export default function AppHeader () {
    return (
        <header>
            <HeaderLogo/>
            <HeaderUser/>
        </header>
    )
}