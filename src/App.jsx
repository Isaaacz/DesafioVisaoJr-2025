import { useState } from 'react';
import './App.css';
import logoImage from './assets/W&Jlogo.png';
import { Carrossel } from './Carrossel';
import {Inicio } from './Inicio';

import NossasEmpresas from './components/NossasEmpresas';

function App() {
  const [menuLateralAberto, setMenuLateralAberto] = useState(false);

  const alternarMenuLateral = () => {
    setMenuLateralAberto(!menuLateralAberto);
  };

  // --- INÍCIO DAS MODIFICAÇÕES DA SUA PARTE ---
  // Estado para controlar a cor de fundo do CONTAINER PRINCIPAL (o site)
  // Cor inicial agora é AZUL, como a faixa superior do cabeçalho.
  const [appBackgroundColor, setAppBackgroundColor] = useState('#1447E6'); // Usando a cor azul do seu cabeçalho original.

  // Função que será passada para NossasEmpresas e, por sua vez, para EmpresaCard.
  // Ela será chamada quando o botão "Ler Mais" for clicado em um EmpresaCard.
  const handleCardClickChangeAppColor = (newColor) => {
    setAppBackgroundColor(newColor);
  };
  // --- FIM DAS MODIFICAÇÕES DA SUA PARTE ---

  return (
    // Aplica a cor de fundo dinamicamente ao elemento principal do App
    <div className="app-main-container" style={{ backgroundColor: appBackgroundColor }}>
      {/* Cabeçalho - AGORA COM COR FIXA PRETA (o estilo está no App.css) */}
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

      {/* Seção Nossas Empresas - SUA PARTE */}
      <section id="nossas-empresas" className="container-secao secao-nossas-empresas">
        <div className="conteudo-secao">
          {/* O título "Nossas Empresas" principal está dentro de NossasEmpresas.jsx */}
          <NossasEmpresas onCardClick={handleCardClickChangeAppColor} /> {/* Passa a função de clique */}
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contato" className="container-secao secao-contato">
        <div className="conteudo-secao">
          <h1>Contato</h1>
        </div>
      </section>
    </div>
  )
}

export default App