import React from "react";
import { footerStyles } from "./styles";

const Footer = () => {
    return (
        <div style={footerStyles.footer}>
            <p style={footerStyles.footerText}>&copy; 2023 AnimaLove - Adoção de Animais. Todos os direitos reservados.</p>
        </div>
    );
}

export default Footer;