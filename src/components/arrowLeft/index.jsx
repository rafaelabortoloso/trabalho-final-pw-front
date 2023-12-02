import React from "react";
import arrowLeft from '../../assets/img/arrow-left.png';
import { arrowLeftStyles } from "./styles";

const ArrowLeft = ({ onClick }) => {
    return (
        <div style={arrowLeftStyles.arrowContainer}>
            <div style={arrowLeftStyles.arrowBtn}>
                <img style={arrowLeftStyles.arrowImg} src={arrowLeft} alt="Esquerda" onClick={onClick} />
            </div>
        </div>
    );

}

export default ArrowLeft;