import { useState } from 'react';
import './App.css';
import logoImage from './assets/W&Jlogo.png';
import { Carrossel } from './Carrossel';
import {Inicio } from './Inicio'
import { Forms } from './forms';
import NossasEmpresas from './components/NossasEmpresas';


function App() {
  const [menuLateralAberto, setMenuLateralAberto] = useState(false);

  const alternarMenuLateral = () => {
    setMenuLateralAberto(!menuLateralAberto);
  };

  const [cabecalhoBackgroundColor, setCabecalhoBackgroundColor] = useState('oklch(12.9% 0.042 264.695)'); // Cor do seu cabeçalho atual

  const handleCabecalhoColorChange = (newColor) => {
    setCabecalhoBackgroundColor(newColor);
  };

  return (
    <>
      {/* Cabeçalho */}
      <header className="cabecalho">
        <div className="logo-cabecalho">
          <img src={logoImage} alt="Logo W&J Group" className="logo-imagem" />
        </div>

        <div className="icone-hamburguer" onClick={alternarMenuLateral}>
          ☰
        </div>

        <nav className="links-navegacao nav-desktop">
          <a href="#inicio">Início</a>
          <a href="#sobre-nos">Sobre Nós</a>
          <a href="#nossas-empresas">Nossas Empresas</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      {/* Menu Lateral (MOBILE) */}
      <div className={`menu-lateral ${menuLateralAberto ? 'aberto' : ''}`}>
        <nav className="links-navegacao nav-mobile">
          <a href="#inicio" onClick={alternarMenuLateral}>Início</a>
          <a href="#sobre-nos" onClick={alternarMenuLateral}>Sobre Nós</a>
          <a href="#nossas-empresas" onClick={alternarMenuLateral}>Nossas Empresas</a>
          <a href="#contato" onClick={alternarMenuLateral}>Contato</a>
        </nav>
      </div>

      {menuLateralAberto && <div className="overlay-menu-lateral" onClick={alternarMenuLateral}></div>}

      {/* Seção Início */}
      <Inicio />

      {/* Seção Sobre Nós */}
      <section id="sobre-nos" className="container-secao secao-sobre-nos">
        <div className="conteudo-secao">
          <h1>Sobre Nós</h1>
          <Carrossel />
        </div>
      </section>

      {/* Seção Nossas Empresas - TÍTULO 'Nossas Empresas' REMOVIDO DAQUI */}
      <section id="nossas-empresas" className="container-secao secao-nossas-empresas">
        <div className="conteudo-secao">
          {/* REMOVIDO: <h1>Nossas Empresas</h1> */}
          <NossasEmpresas onMenuColorChange={handleCabecalhoColorChange} />
        </div>
      </section>

        {/* Seção Contatos */}
      <section id= "contato" className="container-secao secao-contato">
        <div className="conteudo-secao">
          
          <Forms></Forms>
        </div>
      </section>
    </>
  )
}

export default App