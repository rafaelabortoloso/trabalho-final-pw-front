import React, { useState, useEffect } from "react";
import { adotarStyles } from "./styles";
import Carrossel from "../../components/carrossel";
import { searchAllAnimals } from "../../services/apiServices";

const AdotarAnimais = () => {
    const [animais, setAnimais] = useState([]);

    useEffect(() => {
        async function fetchAnimais() {
            try {
                const response = await searchAllAnimals();
                setAnimais(response);
            } catch (error) {
                console.error("Erro ao buscar dados do banco:", error);
            }
        }

        fetchAnimais();
    }, []);

    return (
        <div style={adotarStyles.adotarContainer}>
            <h2 style={adotarStyles.sectionTitleContainer}>NOSSOS BICHINHOS</h2>
            <Carrossel data={animais} />
        </div>
    );
}

export default AdotarAnimais;
