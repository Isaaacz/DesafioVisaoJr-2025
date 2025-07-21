import { useState } from 'react';
import './App.css';
import logoImage from './assets/W&Jlogo.png';
import { Carrossel } from './Carrossel';
import { Inicio } from './Inicio';
import { Forms } from './forms';
import NossasEmpresas from './components/NossasEmpresas';
import { Forms } from './forms'; // Certifique-se que Forms é importado se for usado
import empresas from './data/empresas'; // Certifique-se que empresas é importado se for usado

function App() {
  const [menuLateralAberto, setMenuLateralAberto] = useState(false);
  const [cabecalhoBackgroundColor, setCabecalhoBackgroundColor] = useState('oklch(12.9% 0.042 264.695)');

  const alternarMenuLateral = () => {
    setMenuLateralAberto(!menuLateralAberto);
  };

  // Estado para controlar a cor de fundo DA SEÇÃO 'Nossas Empresas'
  const [sectionEmpresasBackgroundColor, setSectionEmpresasBackgroundColor] = useState('#14273D'); // Cor inicial da seção Empresas

  // Função que será passada para NossasEmpresas e, por sua vez, para EmpresaCard.
  // Ela será chamada quando o botão "Ler Mais" for clicado em um EmpresaCard.
  const handleCardClickChangeSectionColor = (newColor) => {
    setSectionEmpresasBackgroundColor(newColor);
  };

  const handleCabecalhoColorChange = (newColor) => {
    setCabecalhoBackgroundColor(newColor);
  };

  return (
    // Removendo o style do div principal, pois o background dinâmico será na seção específica
    // Você pode remover o div.app-main-container se ele não tiver outra utilidade,
    // ou deixá-lo sem o style de background.
    <div> {/* Ou <> se não precisar de um div extra */}
      {/* Cabeçalho */}
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

      {/* Menu Lateral (MOBILE) */}
      <div className={`menu-lateral ${menuLateralAberto ? 'aberto' : ''}`}>
        <nav className="links-navegacao nav-mobile">
          <a href="#inicio" onClick={alternarMenuLateral}>Início</a>
          <a href="#sobre-nos" onClick={alternarMenuLateral}>Sobre Nós</a>
          <a href="#nossas-empresas" onClick={alternarMenuLateral}>Nossas Empresas</a>
          {/* Subseções das Empresas - se forem usadas, certifique-se de importar 'empresas' */}
          {/* Este bloco é apenas um placeholder. Você já tem a lógica de subseseções no App.jsx ou no NossasEmpresas.jsx */}
          {empresas.map(empresa => ( // Certifique-se de importar 'empresas'
            <a key={empresa.id} href={`#${empresa.id}`} onClick={alternarMenuLateral} className="sublink-empresa">
              - {empresa.nome}
            </a>
          ))}
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
          {/* Se o subtítulo estiver aqui, mantenha-o */}
          {/* <p className="subtitulo-sobre-nos">Nossa Jornada, Princípios e Visão</p> */}
          <Carrossel />
        </div>
      </section>

      {/* Seção Nossas Empresas - AGORA COM BACKGROUND DINÂMICO APENAS AQUI */}
      <section 
        id="nossas-empresas" 
        className="container-secao secao-nossas-empresas"
        style={{ backgroundColor: sectionEmpresasBackgroundColor }} // APLICA A COR AQUI
      >
        <div className="conteudo-secao">
          <NossasEmpresas onCardClick={handleCardClickChangeSectionColor} /> {/* Passa a nova função de clique */}
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contato" className="container-secao secao-contato">
        <div className="conteudo-secao">
          <h1>Contato</h1>
        </div>
      </section>
    </div>
  );
}

export default App;