import React from "react";
import MenuDrawerLogged from "./MenuDrawerLogged";
import MenuDrawerNotLogged from "./MenuDrawerNotLogged";
import '../styles/menuDrawer.css'

export default function MenuDrawer ({handleModalMenu}) {
    return (
        <div className="modal" id='modalMenu'>
                    {false&&(<MenuDrawerLogged handleModalMenu={handleModalMenu} />)}
                    {true&&(<MenuDrawerNotLogged handleModalMenu={handleModalMenu}/>)}
        </div>
    )
}