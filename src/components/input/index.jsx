import React from "react";
import { inputStyles } from "./styles";

const Input = ({ placeholderText, value, onChange, style, name }) => {
    const inputStyle = {
        ...inputStyles.inputContainer,
        ...style,
    };
    return (
        <input style={inputStyle} placeholder={placeholderText} value={value} onChange={onChange} name={name} />
    );
}

export default Input;
