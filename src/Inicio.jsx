
import { useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Inicio.css'; 

export function Inicio() {
  return (
    <section id="inicio" className="section">
      <Slider autoplay autoplaySpeed={3000} infinite arrows={true}>
        <div className="slide">
          <img src="/imagens/imagemPredio.png" alt="Imagem institucional" />
          <div className="mensagemImagem">
            <h1>
              GRUPO W&J<br />
              <strong>DIVERSIDADE</strong><span className="fino"> QUE FORTALECE.</span><br />
              <strong>INOVAÇÃO</strong><span className="fino"> QUE MOVE.</span>
            </h1>
          </div>
        </div>

        <div className="slide">
          <img src="/imagens/empresa.jpg" alt="Imagem institucional 2" />
          <div className="mensagemImagem">
            <h1>
              UMA NOVA VISÃO<br />
              <strong>EXPERIÊNCIA</strong><span className="fino"> E QUALIDADE.</span>
            </h1>
          </div>
        </div>
      </Slider>
    </section>
  );
}