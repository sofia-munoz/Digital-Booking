import React from "react";
import HeaderLogo from "./HeaderLogo";
import UserMenu from "./UserMenu";
import UserMenuMobile from "./UserMenuMobile";
import "../styles/appHeader.css"

export default function AppHeader (props) {
    return (
        <header>
            <HeaderLogo/>
            <div className="userDisplay">
                <UserMenu/>
                <UserMenuMobile/>
            </div>
        </header>
    )
}