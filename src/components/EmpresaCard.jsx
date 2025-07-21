// src/components/EmpresaCard.jsx
import React from 'react';
import './EmpresaCard.css';

function EmpresaCard({ nome, descricao, logo, id }) { // <--- RECEBER O ID AQUI
  return (
    <div id={id} className="empresa-card">
      <img src={logo} alt={`Logo ${nome}`} className="empresa-logo" />
      <h2>{nome}</h2>
      <p>{descricao}</p>
    </div>
  );
}

export default EmpresaCard;