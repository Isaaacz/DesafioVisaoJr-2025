// src/components/NossasEmpresas.jsx
import React from 'react';
import EmpresaCard from './EmpresaCard';
import empresas from '../data/empresas';
import './NossasEmpresas.css';

// Recebe a prop onCardClick e sectionBackgroundColor
function NossasEmpresas({ onCardClick, sectionBackgroundColor }) {
  return (
    // Aplica o style recebido aqui.
    // O background padrão definido no NossasEmpresas.css para .nossas-empresas-landing-page
    // será sobrescrito por este style.
    <div className="nossas-empresas-landing-page" style={{ backgroundColor: sectionBackgroundColor }}>
      <h2 className="section-title">Nossas Empresas</h2>
      <p className="section-subtitle">Conheça o universo de inovação e excelência do Grupo W&J.</p>
      <div className="empresas-container">
        {empresas.map(empresa => (
          <EmpresaCard
            key={empresa.id}
            id={empresa.id}
            nome={empresa.nome}
            descricao={empresa.descricao}
            logo={empresa.logo}
            corPaleta={empresa.paletaCor} // Garante que a cor da paleta da empresa é passada
            onCardClick={onCardClick} // Passa a função recebida de App.jsx para EmpresaCard
          />
        ))}
      </div>
    </div>
  );
}

export default NossasEmpresas;