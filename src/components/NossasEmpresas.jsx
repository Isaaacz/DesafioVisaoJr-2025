// src/components/NossasEmpresas.jsx
import React from 'react';
import EmpresaCard from './EmpresaCard';
import empresas from '../data/empresas'; // Importa os dados das empresas
import './NossasEmpresas.css';

function NossasEmpresas({ onCardClick }) {
  return (
    <div className="nossas-empresas-landing-page">
      <h2 className="section-title">Nossas Empresas</h2>
      <p className="section-subtitle">Conheça o universo de inovação e excelência do Grupo W&J.</p>
      <div className="empresas-container">
        {empresas.map(empresa => (
          <EmpresaCard
            key={empresa.id}
            id={empresa.id} // <--- PASSAR O ID PARA O EMPRESACARD AQUI
            nome={empresa.nome}
            descricao={empresa.descricao}
            logo={empresa.logo}
            corPaleta={empresa.paletaCor} // Passa a cor da paleta para o EmpresaCard
            onCardClick={onCardClick} // Passa a função de clique para o EmpresaCard
          />
        ))}
      </div>
    </div>
  );
}

export default NossasEmpresas;