import React from "react";
import { Link } from "react-router-dom";
import { menuStyles } from "./styles";

const Menu = () => {
    return (
        <nav style={menuStyles.menuContainer}>
            <ul style={menuStyles.menuItens}>
                <li style={menuStyles.li}>
                    <Link style={menuStyles.link} to={'/'}>INÍCIO</Link>
                </li>
                <li style={menuStyles.li}>
                    <Link style={menuStyles.link} to={'/sobre'}>SOBRE NÓS</Link>
                </li>
                <li style={menuStyles.li}>
                    <Link style={menuStyles.link} to={'/cadastro'}>CADASTRAR</Link>
                </li>
                <li style={menuStyles.li}>
                    <Link style={menuStyles.link} to={'/adotar'}>ADOTAR</Link>
                </li>
                <li style={menuStyles.li}>
                    <Link style={menuStyles.link} to={'/contato'}>CONTATO</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;

