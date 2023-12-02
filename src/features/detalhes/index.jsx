import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { detalhesStyle } from "./styles";
import Title from "../../components/title";
import Text from "../../components/text";
import Button from "../../components/button";
import { deletaAnimal, searchById } from "../../services/apiServices";

const DetalhesAnimal = () => {
  const { id } = useParams();
  const [animalEncontrado, setAnimalEncontrado] = useState(null);
  const campoVazio = "Não informado";

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        const animal = await searchById(id);
        setAnimalEncontrado(animal[0]);
      } catch (error) {
        console.error("Erro ao buscar animal:", error);
        setAnimalEncontrado(null);
      }
    };

    fetchAnimal();
  }, [id]);

  const handleClick = async () => {
    try {
      await deletaAnimal(id);
      console.log("Animal excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir animal:", error);
    }
  };

  return (
    <div style={detalhesStyle.detalhesContainer}>
      {animalEncontrado ? (
        <div style={detalhesStyle.detalhesCard}>
          <img style={detalhesStyle.detalhesImg} alt={animalEncontrado.alt} src={animalEncontrado.FOTO}></img>
          <Title tituloText={animalEncontrado.NOME || campoVazio} style={{ fontSize: 30 }} />
          <Text textContent={animalEncontrado.DESCRICAO || campoVazio} />
          <Text textContent={`Idade: ${animalEncontrado.IDADE || campoVazio}`} />
          <Text textContent={`Comportamento: ${animalEncontrado.COMPORTAMENTO || campoVazio}`} />
          <Text textContent={`História: ${animalEncontrado.HISTORIA || campoVazio}`} />
          <Text textContent={`Histórico de doenças: ${animalEncontrado.HISTORICO_DOENCAS || campoVazio}`} />
          <Text textContent={`Vacinas aplicadas: ${animalEncontrado.VACINAS || campoVazio}`} />
          <Text textContent={`Vacinas pendentes: ${animalEncontrado.VACINAS_PENDENTES || campoVazio}`} />
          <Text textContent={`Alimentação: ${animalEncontrado.ALIMENTACAO || campoVazio}`} />
          <Text textContent={`Outros: ${animalEncontrado.OUTROS || campoVazio}`} />
          <Link to="/contato" style={{ textDecoration: 'none' }}>
            <Button textButton={'Quero adotar!'} onClick={handleClick} />
          </Link>
        </div>
      ) : (
        <div style={detalhesStyle.detalhesCard}>
          <Text textContent={'Animal não encontrado'} />
        </div>
      )}
    </div>
  );
};

export default DetalhesAnimal;
