import { useState } from 'react';
import styles from './Carrossel.module.css';

export function Carrossel() {
  const slides = [
    { id: 0, titulo: 'História', descricao: 'Uma jornada que conecta inovação e visão. A W&J nasceu da união de mentes empreendedoras com o propósito de transformar diferentes mercados por meio da tecnologia. Desde a fundação, o grupo expandiu sua atuação com empresas em setores diversos — da mídia à aviação — sempre guiado pela ousadia de criar, evoluir e liderar.' },
    { id: 1, titulo: 'Valores', descricao: 'Tecnologia com propósito, negócios com impacto. Acreditamos no poder da inovação responsável. Nossos valores são guiados pela ética, excelência, criatividade e compromisso com a transformação real. Valorizamos talentos, promovemos inclusão e buscamos soluções que melhorem a vida das pessoas e o futuro do planeta.' },
    { id: 2, titulo: 'Futuro', descricao: 'Conectando negócios, criando o amanhã. O futuro da W&J é global, digital e sustentável. Vamos expandir nossas frentes de atuação, integrar novas tecnologias e impulsionar cada marca do grupo com inteligência, agilidade e responsabilidade. O amanhã está em constante construção — e nós estamos liderando essa evolução.' },
  ];

  const [ativo, setAtivo] = useState(0); 
  const anterior = (ativo + 2) % 3;
  const proximo = (ativo + 1) % 3;

  const handleKeyPress = (e, action) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.carrossel}>

   
        <div
          className={styles.slideLateral}
          role="button"
          tabIndex={0}
          onClick={() => setAtivo(anterior)}
          onKeyDown={(e) => handleKeyPress(e, () => setAtivo(anterior))}
        >
          <div className={styles.slideMini}>
            <span className={styles.seta}>←</span>
          </div>
          <p className={styles.slideMiniTitle}>{slides[anterior].titulo}</p>
        </div>

    
        <div
          className={styles.slideCentral}
          role="button"
          tabIndex={0}
          onClick={() => setAtivo(proximo)}
          onKeyDown={(e) => handleKeyPress(e, () => setAtivo(proximo))}
        >
          <h2>{slides[ativo].titulo}</h2>
          <hr className={styles.divider} />
          <p className={styles.descricao}>{slides[ativo].descricao}</p>
        </div>

     
        <div
          className={styles.slideLateral}
          role="button"
          tabIndex={0}
          onClick={() => setAtivo(proximo)}
          onKeyDown={(e) => handleKeyPress(e, () => setAtivo(proximo))}
        >
          <div className={styles.slideMini}>
            <span className={styles.seta}>→</span>
          </div>
          <p className={styles.slideMiniTitle}>{slides[proximo].titulo}</p>
        </div>

      </div>
    </div>
  );
}
