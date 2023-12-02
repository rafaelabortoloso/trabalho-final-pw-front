import React from "react";
import { sobreStyles } from "./styles";
import Title from "../../components/title";
import Text from "../../components/text"

const Sobre = () => {
    return (
        <section style={sobreStyles.sobreContainer}>
            <div style={sobreStyles.sobreImg}>
                <div style={sobreStyles.missao}>
                    <Title tituloText={'Nossa Missão'} />
                    <Text textContent={'Nossa missão é proporcionar um lar amoroso e permanente para animaizinhos que precisam de um lar. Acreditamos que cada animal merece carinho, cuidado e um lugar seguro para chamar de lar. Trabalhamos incansavelmente para encontrar famílias que estejam dispostas a abrir seus corações para um novo membro peludo. Nossa dedicação à adoção responsável visa criar conexões duradouras entre humanos e animais, promovendo o bem-estar de ambos.'} />
                </div>
                <div style={sobreStyles.historia}>
                    <Title tituloText={'Nossa História'} />
                    <Text textContent={'Nossa jornada começou com um grupo de amantes de animais que reconheceram a necessidade urgente de oferecer assistência aos animais abandonados e desabrigados em nossa comunidade. Ao longo dos anos, enfrentamos desafios e comemorações, resgatando e reabilitando inúmeros animais em busca de lares amorosos. Cada adoção bem-sucedida é um testemunho da dedicação incansável de nossa equipe e da generosidade de pessoas que compartilham nossa paixão. Olhando para o futuro, continuamos comprometidos em criar um mundo onde todos os animais possam viver cercados pelo amor e cuidado que merecem.'} />
                </div>
            </div>
        </section>
    );
}

export default Sobre;