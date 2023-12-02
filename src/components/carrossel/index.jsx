import React, { useState } from "react";
import Card from "../card";
import { carrosselStyles } from "./styles";
import ArrowLeft from "../arrowLeft";
import ArrowRight from "../arrowRight";
import { Link } from "react-router-dom";

const Carrossel = ({ data }) => {
    const [startSlide, setStartSlide] = useState(0);

    const nextSlide = () => {
        if (startSlide + 4 < data.length) {
            setStartSlide((prevStartSlide) => prevStartSlide + 1);
        } else {
            setStartSlide(0);
        }
    };

    const prevSlide = () => {
        if (startSlide > 0) {
            setStartSlide((prevStartSlide) => prevStartSlide - 1);
        } else {
            setStartSlide(data.length - 5);
        }
    };

    const visibleCards = data.slice(startSlide, startSlide + 5);

    return (
        <div style={carrosselStyles.carrosselContainer}>
            <ArrowLeft onClick={prevSlide} />
            <div style={carrosselStyles.carrosselItens}>
                {visibleCards.map((item, index) => (
                    <div key={index}>
                        <Link style={{ textDecoration: 'none' }} to={`/adotar/${item.ID}`}>
                            <Card {...item} />
                        </Link>
                    </div>
                ))}
            </div>
            <ArrowRight onClick={nextSlide} />
        </div>
    );
};

export default Carrossel;
