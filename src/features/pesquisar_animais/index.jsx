import React, { useState, useEffect } from "react";
import { searchStyles } from "./styles";
import Title from '../../components/title'
import Subtitle from '../../components/subtitle'
import Input from '../../components/input'
import { searchByName } from "../../services/apiServices";
import Card from "../../components/card";
import { Link } from "react-router-dom";

const PesquisarAnimais = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const handleSearch = async () => {
            try {
                const animals = await searchByName(searchTerm);
                console.log('passei')
                setSearchResults(animals);
            } catch (error) {
                console.error('Erro ao buscar os animais:', error);
            }
        };

        if (searchTerm) {
            handleSearch();
        } else {
            setSearchResults([]);
        }
    }, [searchTerm]);

    const handleInputChange = (event) => {
        console.log('event', event.target.value)
        setSearchTerm(event.target.value);
    };

    return (
        <section style={searchStyles.searchContainer}>
            <Title tituloText={'Procurando um novo amigo peludo?'} />
            <Subtitle subtituloText={'Encontre seu companheiro perfeito.'} />
            <Input
                placeholderText="Digite o nome do animalzinho que procura..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            <ul>
                {searchResults.map((animal) => (
                    <div>
                        <Link style={{ textDecoration: 'none' }} to={`/adotar/${animal.ID}`}>
                            <Card FOTO={animal.FOTO} alt={animal.NOME} NOME={animal.NOME} DESCRICAO={animal.DESCRICAO} />
                        </Link>
                    </div>
                ))}
            </ul>
        </section>
    );
}

export default PesquisarAnimais;

