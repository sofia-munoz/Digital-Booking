import React from "react";
import HeaderUserLogged from "./HeaderUserLogged"
import HeaderUserNotLogged from "./HeaderUserNotLogged";

export default function UserMenu (props) {
    return (
            <>
                {false&&(<HeaderUserLogged/>)}
                {true&&(<HeaderUserNotLogged/>)}
            </>
    )
}