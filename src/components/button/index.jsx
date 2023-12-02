import React from "react";
import { buttonStyles } from "./styles";

const Button = ({ textButton, onClick, type }) => {
    return (
        <button style={buttonStyles.button} onClick={onClick} type={type}>{textButton}</button>
    );
}

export default Button;