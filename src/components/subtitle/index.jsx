import React from "react";
import { subtituloStyles } from "./styles";

const Subtitle = ({ subtituloText }) => {
    return (
        <h2 style={subtituloStyles.subtitulo}>{subtituloText}</h2>
    );
}

export default Subtitle;