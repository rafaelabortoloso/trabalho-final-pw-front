import React, { useState } from 'react';
import { cadastroStyles } from './styles';
import Button from '../../components/button';
import Input from '../../components/input';
import { addAnimal } from '../../services/apiServices'; 

const CadastrarAnimais = () => {
    const [formData, setFormData] = useState({
        foto: null,
        nome: '',
        descricao: '',
        idade: '',
        comportamento: '',
        historia: '',
        historico_doencas: '',
        vacinas: '',
        vacinas_pendentes: '',
        alimentacao: '',
        outros: '',
        ativo: false,
    });
    const [mensagemEnviada, setMensagemEnviada] = useState(false);

    const handleChange = (e) => {
        if (e.target.name === 'foto') {
            const file = e.target.files[0];
            setFormData({
                ...formData,
                foto: URL.createObjectURL(file),
            });
        } else {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addAnimal(formData);
            setMensagemEnviada(true);
            setFormData({
                foto: null,
                nome: '',
                descricao: '',
                idade: '',
                comportamento: '',
                historia: '',
                historico_doencas: '',
                vacinas: '',
                vacinas_pendentes: '',
                alimentacao: '',
                outros: '',
                ativo: false,
            });
        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
        }
    };

    return (
        <div>
            <form style={cadastroStyles.cadastroContainer} onSubmit={handleSubmit} > 
                <div style={cadastroStyles.imagemContainer}>
                    <input
                        type="file"
                        accept="image/*"
                        name="foto"
                        onChange={handleChange}
                        style={cadastroStyles.imagemInput}
                    />
                    <div style={cadastroStyles.imagem}>
                        {formData.foto && (
                            <img
                                src={formData.foto}
                                alt="Imagem do animal"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        )}
                    </div>
                    <Button textButton={'Escolher imagem'} type={"button"} onClick={() => document.querySelector('input[type="file"]').click()} />
                </div>
                <div>
                    <Input style={cadastroStyles.input} placeholderText={'Nome'} value={formData.nome} onChange={handleChange} name={"nome"} />
                    <Input style={cadastroStyles.input} placeholderText={'Descrição'} value={formData.descricao} onChange={handleChange} name="descricao" />
                </div>
                <div>
                    <Input style={cadastroStyles.input} placeholderText={'Idade'} value={formData.idade} onChange={handleChange} name="idade" />
                    <Input style={cadastroStyles.input} placeholderText={'Comportamento'} value={formData.comportamento} onChange={handleChange} name="comportamento" />
                </div>
                <div>
                    <Input style={cadastroStyles.input} placeholderText={'História'} value={formData.historia} onChange={handleChange} name="historia" />
                    <Input style={cadastroStyles.input} placeholderText={'Histórico de doenças'} value={formData.historico_doencas} onChange={handleChange} name="historico_doencas" />
                </div>
                <div>
                    <Input style={cadastroStyles.input} placeholderText={'Vacinas'} value={formData.vacinas} onChange={handleChange} name="vacinas" />
                    <Input style={cadastroStyles.input} placeholderText={'Vacinas pendentes'} value={formData.vacinas_pendentes} onChange={handleChange} name="vacinas_pendentes" />
                </div>
                <div>
                    <Input style={cadastroStyles.input} placeholderText={'Alimentação diária'} value={formData.alimentacao} onChange={handleChange} name="alimentacao" />
                    <Input style={cadastroStyles.input} placeholderText={'Outros'} value={formData.outros} onChange={handleChange} name="outros" />
                </div>
                <div style={{ marginBottom: 20, marginTop: 10 }}>
                    <Button textButton={'Enviar'} onClick={handleSubmit} />
                </div>
            {mensagemEnviada && <p>Dados enviados com sucesso!</p>}
            </form>
        </div>
    );
};

export default CadastrarAnimais;