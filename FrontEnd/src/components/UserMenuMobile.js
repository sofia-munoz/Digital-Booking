import React from "react";
import menu from "../assets/img/menu.png"
import "../styles/userMenuMobile.css"

export default function UserMenuMobile (props) {
    return (
            <>
                <img className="mobileMenu" src={menu} alt="menu" link to=''/>
            </>
    )
}