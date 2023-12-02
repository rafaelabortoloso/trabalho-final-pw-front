import React from "react";
import Logo from "../logo";
import Menu from "../menu/menu";
import { headerStyles } from "./styles";

const Header = () => {
    return (
      <header style={headerStyles.headerContainer}>
        <Logo/>
        <Menu/>
      </header>
    );
}

export default Header;