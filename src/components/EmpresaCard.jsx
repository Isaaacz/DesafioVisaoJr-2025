// src/components/EmpresaCard.jsx
import React, { useState } from 'react';
import './EmpresaCard.css';

function EmpresaCard({ nome, descricao, logo, corPaleta, onCardClick }) {
  const [mostrarMais, setMostrarMais] = useState(false);

  const alternarMostrarMais = () => {
    setMostrarMais(!mostrarMais);
    if (onCardClick) {
      onCardClick(corPaleta);
    }
  };

  return (
    <div className={`empresa-card ${mostrarMais ? 'expandido' : ''}`}>
      <img src={logo} alt={`Logo ${nome}`} className="empresa-logo" />
      <h2>{nome}</h2>
      <p className="empresa-descricao">{descricao}</p>
      {descricao.length > 0 && (
        <button className="ler-mais-botao" onClick={alternarMostrarMais}>
          {mostrarMais ? 'Ler Menos' : 'Ler Mais'}
        </button>
      )}
    </div>
  );
}

export default EmpresaCard;
