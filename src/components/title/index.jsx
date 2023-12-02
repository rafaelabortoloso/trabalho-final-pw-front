import React from "react";
import { tituloStyles } from "./styles";

const Title = ({ tituloText, style }) => {
    const titleStyle = {
        ...tituloStyles.titulo,
        ...style,
    };
    return (
        <h1 style={titleStyle}>{tituloText}</h1>
    );
}

export default Title;