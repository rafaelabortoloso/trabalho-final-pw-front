import React from "react";
import { textStyles } from "./styles";

const Text = ({ textContent, style }) => {
    const textStyle = {
        ...textStyles.text,
        ...style,
    };
    return (
        <p style={textStyle}>{textContent}</p>
    );
}

export default Text;