import React from "react";
import logoImg from "../../assets/img/logo.png"
import { logoStyles } from "./styles";

const Logo = () => {
    return (
        <div style={logoStyles.logoContainer}>
            <img src={logoImg} alt="Logo" style={logoStyles.logoImg}/>
            <p><strong>Anima</strong>Love</p>
        </div>
    );
}

export default Logo;