import React from "react";
import arrowRight from '../../assets/img/arrow-right.png';
import { arrowRightStyles } from "./styles";

const ArrowRight = ({ onClick }) => {
    return (
        <div style={arrowRightStyles.arrowContainer}>
            <div style={arrowRightStyles.arrowBtn}>
                <img style={arrowRightStyles.arrowImg} src={arrowRight} alt="Direita" onClick={onClick} />
            </div>
        </div>
    );

}

export default ArrowRight;