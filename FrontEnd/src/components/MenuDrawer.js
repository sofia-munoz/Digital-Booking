import React from "react";
import MenuDrawerLogged from "./MenuDrawerLogged";
import MenuDrawerNotLogged from "./MenuDrawerNotLogged";
import "../styles/menuDrawer.css"
import { useContext } from "react";
import { userContext } from "../App";

export default function MenuDrawer ({ handleLogOut, handleModalMenu }) {
    const userLogged = useContext(userContext)
    return (
        <div className="modal" id='modalMenu'>
                    {userLogged&&(<MenuDrawerLogged handleLogOut={handleLogOut} handleModalMenu={handleModalMenu} />)}
                    {!userLogged&&(<MenuDrawerNotLogged  handleModalMenu={handleModalMenu} />)}
        </div>
    )
}