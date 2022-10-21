import React from "react";
import MenuDrawerLogged from "./MenuDrawerLogged";
import MenuDrawerNotLogged from "./MenuDrawerNotLogged";

export default function MenuDrawer (props) {
    return (
        <div className="backgroundMenu">
            <div className="modalContainer">
                {props.user&&(<MenuDrawerLogged/>)}
                {!props.user&&(<MenuDrawerNotLogged/>)}
            </div>
        </div>
    )
}