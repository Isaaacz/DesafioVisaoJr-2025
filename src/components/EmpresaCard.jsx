// src/components/EmpresaCard.jsx
import React from 'react'; // Não precisamos mais de useRef e useEffect
import './EmpresaCard.css';

// Removemos onVisibilityChange das props
function EmpresaCard({ nome, descricao, logo }) {
  // Toda a lógica de useEffect e IntersectionObserver foi removida,
  // pois a barra superior será preta e não mudará de cor.

  return (
    <div className="empresa-card">
      <img src={logo} alt={`Logo ${nome}`} className="empresa-logo" />
      <h2>{nome}</h2>
      <p>{descricao}</p> {/* Agora usa a descrição completa do empresas.js */}
    </div>
  );
}

export default EmpresaCard;