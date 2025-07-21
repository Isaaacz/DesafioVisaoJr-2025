// src/components/EmpresaCard.jsx
import React from 'react';
import './EmpresaCard.css';
import { useState } from 'react';
function EmpresaCard({ nome, descricao, logo, corPaleta, onCardClick }) {
  // Estado para controlar se a descrição completa está sendo exibida ou não
  const [mostrarMais, setMostrarMais] = useState(false); // Inicia como FALSE: texto escondido por padrão

  // Função para alternar entre mostrar mais e mostrar menos
  // E para notificar o componente App sobre a cor de fundo do site.
  const alternarMostrarMais = () => {
    setMostrarMais(!mostrarMais);
    // Chama a função passada por props para mudar a cor de fundo do App
    if (onCardClick) {
      onCardClick(corPaleta); // Passa a cor da paleta da empresa
    }
  };

  return (
    <div className={`empresa-card ${mostrarMais ? 'expandido' : ''}`}>
      <img src={logo} alt={`Logo ${nome}`} className="empresa-logo" />
      <h2>{nome}</h2>
      
      {/* O parágrafo sempre é renderizado, mas sua altura e visibilidade são controladas pelo CSS */}
      <p className="empresa-descricao">{descricao}</p>
      
      {/* Botão "Ler Mais" / "Ler Menos" - Sempre aparece se houver descrição */}
      {descricao.length > 0 && ( // O botão só aparece se houver descrição
        <button className="ler-mais-botao" onClick={alternarMostrarMais}>
          {mostrarMais ? 'Ler Menos' : 'Ler Mais'}
        </button>
      )}
    </div>
  );
}

export default EmpresaCard;