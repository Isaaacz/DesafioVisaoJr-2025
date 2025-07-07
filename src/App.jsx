import { useState } from 'react';
import './App.css';
import logoImage from './assets/w.png';
import { Carrossel } from './Carrossel';


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Cabeçalho */}
      <header className="cabecalho">
          <div className="logo-cabecalho">
          <img src={logoImage} alt="Logo W&J Group" className="logo-imagem" />
        </div>
        <nav className="links-navegacao">
          <a href="#inicio">Início</a>
          <a href="#sobre-nos">Sobre Nós</a>
          <a href="#nossas-empresas">Nossas Empresas</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      {/* Seção */}
      <section id="inicio" className="container-secao secao-principal">
        <div className="conteudo-secao">
            <h1>Início</h1>
        </div>
      </section>

      {/* Seção Sobre Nós */}
      <section id="sobre-nos" className="container-secao secao-sobre-nos">
        <div className="conteudo-secao">
          <h1>Sobre Nós</h1>
          <Carrossel />
        </div>
      </section>

      {/* Seção Nossas Empresas */}
      <section id="nossas-empresas" className="container-secao secao-nossas-empresas">
        <div className="conteudo-secao">
          <h1>Nossas Empresas</h1>
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contato" className="container-secao secao-contato">
        <div className="conteudo-secao">
          <h1>Contato</h1>
        </div>
      </section>

    </>
  )
}

export default App
