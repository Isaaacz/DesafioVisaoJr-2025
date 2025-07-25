import { useState, useEffect, useRef } from 'react';
import styles from './Carrossel.module.css';

export function Carrossel() {
  const slides = [
    {
      id: 0,
      titulo: 'História',
      descricao:
        'Uma jornada que conecta inovação e visão. A W&J nasceu da união de mentes empreendedoras com o propósito de transformar diferentes mercados por meio da tecnologia. Desde a fundação, o grupo expandiu sua atuação com empresas em setores diversos — da mídia à aviação — sempre guiado pela ousadia de criar, evoluir e liderar.',
    },
    {
      id: 1,
      titulo: 'Valores',
      descricao:
        'Tecnologia com propósito, negócios com impacto. Acreditamos no poder da inovação responsável. Nossos valores são guiados pela ética, excelência, criatividade e compromisso com a transformação real. Valorizamos talentos, promovemos inclusão e buscamos soluções que melhorem a vida das pessoas e o futuro do planeta.',
    },
    {
      id: 2,
      titulo: 'Futuro',
      descricao:
        'Conectando negócios, criando o amanhã. O futuro da W&J é global, digital e sustentável. Vamos expandir nossas frentes de atuação, integrar novas tecnologias e impulsionar cada marca do grupo com inteligência, agilidade e responsabilidade. O amanhã está em constante construção — e nós estamos liderando essa evolução.',
    },
  ];

  const [ativo, setAtivo] = useState(0);
  const carrosselRef = useRef(null);

  const anterior = (ativo + slides.length - 1) % slides.length;
  const proximo = (ativo + 1) % slides.length;

  const goToSlide = (index) => {
    setAtivo(index);
  };



  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      setAtivo(anterior);
    }
    if (e.key === 'ArrowRight') {
      setAtivo(proximo);
    }

  };

  const handleLateralKey = (e, action) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.carrossel}
        ref={carrosselRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        role="region"
        aria-label="Carrossel de informações W&J"
      >

        <div
          className={styles.slideLateral}
          onClick={() => setAtivo(anterior)}
          onKeyDown={(e) => handleLateralKey(e, () => setAtivo(anterior))}
          tabIndex={0}
          role="button"
          aria-label={`Ir para ${slides[anterior].titulo}`}
        >
          <div className={styles.slideMini}>
            <span className={styles.seta}>←</span>
          </div>
          <p>{slides[anterior].titulo}</p>
        </div>


        <div className={styles.slideCentral}>
          <h2>{slides[ativo].titulo}</h2>
          <p className={styles.descricao}>{slides[ativo].descricao}</p>

          <div className={styles.dotsContainer}>
            {slides.map((_, index) => (
              <div
                key={index}
                className={`${styles.dot} ${index === ativo ? styles.activeDot : ''}`}
                onClick={() => goToSlide(index)}
                onKeyDown={(e) => handleLateralKey(e, () => goToSlide(index))}
                tabIndex={0}
                role="button"
                aria-label={`Selecionar slide ${slides[index].titulo}`}
                aria-pressed={index === ativo}
              ></div>
            ))}
          </div>
        </div>


        <div
          className={styles.slideLateral}
          onClick={() => setAtivo(proximo)}
          onKeyDown={(e) => handleLateralKey(e, () => setAtivo(proximo))}
          tabIndex={0}
          role="button"
          aria-label={`Ir para ${slides[proximo].titulo}`}
        >
          <div className={styles.slideMini}>
            <span className={styles.seta}>→</span>
          </div>
          <p>{slides[proximo].titulo}</p>
        </div>
      </div>
    </div>
  );
}
