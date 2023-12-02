import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './features/home'
import Sobre from './features/sobre';
import CadastrarAnimais from './features/cadastrar_animais'
import Footer from './components/footer';
import DetalhesAnimal from './features/detalhes';
import AdotarAnimais from './features/adotar_animais';
import Contato from './features/contato';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/cadastro' element={<CadastrarAnimais />} />
        <Route path='/adotar' element={<AdotarAnimais />} />
        <Route path='/adotar/:id' element={<DetalhesAnimal />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
