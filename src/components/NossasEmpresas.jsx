// src/components/NossasEmpresas.jsx
import React from 'react';
import EmpresaCard from './EmpresaCard';
import empresas from '../data/empresas'; // Importa os dados das empresas
import './NossasEmpresas.css';

// Removemos onMenuColorChange das props, pois não será mais necessário para a cor do cabeçalho
function NossasEmpresas() {
  // A função handleCardVisibilityChange e a lógica do IntersectionObserver foram removidas daqui,
  // pois não precisamos mais mudar a cor do cabeçalho com base na visibilidade do card.

  return (
    <div className="nossas-empresas-landing-page">
      <h2 className="section-title">Nossas Empresas</h2>
      <p className="section-subtitle">Conheça o universo de inovação e excelência do Grupo W&J.</p>
      <div className="empresas-container">
        {empresas.map(empresa => (
          <EmpresaCard
            key={empresa.id}
            nome={empresa.nome}
            descricao={empresa.descricao} // Passa a descrição completa
            logo={empresa.logo}
            // A propriedade corPaleta não é mais passada para o card, pois a lógica de cor do cabeçalho foi removida
            // A propriedade onVisibilityChange não é mais passada
          />
        ))}
      </div>
    </div>
  );
}

export default NossasEmpresas;