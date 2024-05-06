import React from "react";
import './header.css';
import MariposaIcon from "../../Resources/Icons/logo-transparente.jpeg";
import { RiMenuLine } from "react-icons/ri";
import ShoopingCart from "../ShoopingCart/ShoopingCart"

function Header(){

    return (
        <header className="header">
            <div className="Menu">
                <RiMenuLine className="menu-icon" />
            </div>
            
            <div className="logo-container">
                <img src={MariposaIcon} alt="Logo Mariposa" className="logo"/>
            </div>

            <ShoopingCart />
        </header>
    );
}

export default Header;