import React, { useState } from "react";
import { contatoStyles } from "./styles";
import Text from "../../components/text";
import Input from "../../components/input";
import Button from "../../components/button";
import { sendMessage } from "../../services/apiServices";

const Contato = ({ style }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [mensagemEnviada, setMensagemEnviada] = useState(false);

    const contatoStyle = {
        ...contatoStyles.contatoContainer,
        ...style,
    };

    const enviarMensagem = async () => {
        try {
            const mensagemData = {
                nome,
                email,
                mensagem,
            };

            await sendMessage(mensagemData);
            setMensagemEnviada(true);
            setNome('');
            setEmail('');
            setMensagem('');
        } catch (error) {
            console.error("Erro ao enviar mensagem:", error);
        }
    };

    return (
        <div style={contatoStyle}>
            <h2 style={contatoStyles.sectionTitleContainer}>ENTRE EM CONTATO</h2>
            <Text style={contatoStyles.contatoText} textContent={'Se você está interessado em adotar um animalzinho, entre em contato conosco!'}/>
            <Input placeholderText={'Nome completo'} value={nome} onChange={(e) => setNome(e.target.value)} />
            <Input placeholderText={'E-mail'} value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input placeholderText={'Mensagem'} value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
            <Button textButton={'Enviar'} onClick={enviarMensagem} />
            {mensagemEnviada && <p>Mensagem enviada com sucesso!</p>}
        </div>
    );
}

export default Contato;
