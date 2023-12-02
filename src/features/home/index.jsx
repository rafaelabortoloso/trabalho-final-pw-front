import React from "react";
import PesquisarAnimais from "../pesquisar_animais";
import Sobre from "../sobre";
import AdotarAnimais from "../adotar_animais";
import Contato from "../contato";

const Home = () => {
    return (
        <>
            <PesquisarAnimais />
            <Sobre />
            <AdotarAnimais />
            <Contato style={{ height: 'auto' }}/>
        </>
    );
}

export default Home;