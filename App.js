import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Cadastro from './pages/CadastroVagas';
import ListarVagas from './pages/ListaVagas';
import AlteracaoVaga from './pages/AlteracaoVaga';

function App() {
  return (
    <div className="App">
     <Header />

     <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/lista" element={<ListarVagas />} />
        <Route path="/alteracao/:id" element={<AlteracaoVaga />} />
      </Routes>
     </main>

     <Footer />
    </div>
  );
}

export default App;
