import React from "react";
import { cardStyles } from "./styles";
import Title from "../title";
import Text from "../text";
// import { base64FromImageUrl } from "../../utils";

const Card = ({ FOTO, alt, NOME, DESCRICAO }) => {
    // const blob = new Blob([FOTO]);
    // const fotoUrl = URL.createObjectURL(blob);
    // const teste = base64FromImageUrl(fotoUrl).then(stringBase64 => {
    //     console.log(stringBase64);
    // });


    // (async () => {
    //     try {
    //         return base64String = await base64FromImageUrl(fotoUrl);
    //     } catch (error) {
    //         console.error('Erro ao converter imagem para base64:', error);
    //     }
    // })();

    return (
        <article style={cardStyles.cardContainer}>
            <img style={cardStyles.cardImg} src={FOTO} alt={alt} />
            <Title style={cardStyles.cardTitulo} tituloText={NOME} />
            <Text style={cardStyles.cardDescricao} textContent={DESCRICAO} />
        </article>
    );
}

export default Card;