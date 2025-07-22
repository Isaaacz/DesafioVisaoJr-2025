import { useState } from 'react';
import './App.css';
import logoImage from './assets/W&Jlogo.png';
import { Carrossel } from './Carrossel';
import { Inicio } from './Inicio';
import { Forms } from './forms';
import NossasEmpresas from './components/NossasEmpresas';



function App() {
  const [menuLateralAberto, setMenuLateralAberto] = useState(false);
  const [cabecalhoBackgroundColor, setCabecalhoBackgroundColor] = useState('oklch(12.9% 0.042 264.695)');

  const alternarMenuLateral = () => {
    setMenuLateralAberto(!menuLateralAberto);
  };


  const [sectionEmpresasBackgroundColor, setSectionEmpresasBackgroundColor] = useState('#14273D');



  const handleCardClickChangeSectionColor = (newColor) => {
    setSectionEmpresasBackgroundColor(newColor);
  };

  const handleCabecalhoColorChange = (newColor) => {
    setCabecalhoBackgroundColor(newColor);
  };

  return (

    <div>
  
      <header className="cabecalho" style={{ backgroundColor: cabecalhoBackgroundColor }}>
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

 
      <div className={`menu-lateral ${menuLateralAberto ? 'aberto' : ''}`}>
        <nav className="links-navegacao nav-mobile">
          <a href="#inicio" onClick={alternarMenuLateral}>Início</a>
          <a href="#sobre-nos" onClick={alternarMenuLateral}>Sobre Nós</a>
          <a href="#nossas-empresas" onClick={alternarMenuLateral}>Nossas Empresas</a>
          
          <a href="#contato" onClick={alternarMenuLateral}>Contato</a>
        </nav>
      </div>

      {menuLateralAberto && <div className="overlay-menu-lateral" onClick={alternarMenuLateral}></div>}


      <Inicio />

  
      <section id="sobre-nos" className="container-secao secao-sobre-nos">
        <div className="conteudo-secao">
          <h1>Sobre Nós</h1>
     
          <Carrossel />
        </div>
      </section>


      <section 
        id="nossas-empresas" 
        className="container-secao secao-nossas-empresas"
        style={{ backgroundColor: sectionEmpresasBackgroundColor,
          transition: 'background-color 0.3s ease'
         }} 
      >
        <div className="conteudo-secao">
          <NossasEmpresas onCardClick={handleCardClickChangeSectionColor} /> 
        </div>
      </section>

    
      <section id="contato" className="container-secao secao-contato">
        <div className="conteudo-secao">
       
          <Forms />
        </div>
      </section>
    </div>
  );
}

export default App;