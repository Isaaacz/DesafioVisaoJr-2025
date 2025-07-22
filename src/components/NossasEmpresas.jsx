
import React from 'react';
import EmpresaCard from './EmpresaCard';
import empresas from '../data/empresas';
import './NossasEmpresas.css';

function NossasEmpresas({ onCardClick, sectionBackgroundColor }) {
  return (
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
            corPaleta={empresa.paletaCor}
            onCardClick={onCardClick}
          />
        ))}
      </div>
    </div>
  );
}

export default NossasEmpresas;
