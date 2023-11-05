import React from "react";
import Banner from '../assets/Banner.png';
import '../styles/header.css';
import MenuHeader from "./Menu/MenuHeader";
import MenuItemsProvider from "../Contexts/MenuItemsContext";

function Header() {
    return (
        <header className="header">
            <div className="ofertaHeader">
                <p>Por compras sobre $30.000 tienes ENVIO GRATIS !!</p>
            </div>
            <img src={Banner} />
            <MenuItemsProvider>
                <MenuHeader style={{ position: 'fixed', top: 0, zIndex: 1000 }} />
            </MenuItemsProvider>
        </header>
    );
}

export default Header;
