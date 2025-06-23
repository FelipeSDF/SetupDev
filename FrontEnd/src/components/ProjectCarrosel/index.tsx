import { useEffect, useState } from 'react';
import styles from './styles.module.css';

import img1 from '../../assets/img/ProjectsImgs/img1.jpg';
import img2 from '../../assets/img/ProjectsImgs/img2.jpg';
import img3 from '../../assets/img/ProjectsImgs/img3.jpg';
import img4 from '../../assets/img/ProjectsImgs/img4.jpg';

const projetos = [
  {
    titulo: 'Projeto Inovador 1',
    imagem: img1,
    descricao:
      'Este projeto é voltado para a inovação tecnológica, buscando solucionar problemas reais de forma criativa.',
  },
  {
    titulo: 'Projeto Sustentável 2',
    imagem: img2,
    descricao:
      'Focado em soluções sustentáveis, este projeto visa promover a conscientização ambiental.',
  },
  {
    titulo: 'Educação para Todos 3',
    imagem: img3,
    descricao:
      'Este projeto visa a inclusão social e educacional, promovendo aprendizado para todos.',
  },
  {
    titulo: 'Tecnologia e Inovação 4',
    imagem: img4,
    descricao:
      'Com foco em tecnologia de ponta, este projeto explora novas formas de inovação.',
  },
];

export function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navegar para o próximo projeto
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projetos.length);
  };

  // Navegar para o projeto anterior
  const handleBack = () => {
    setCurrentIndex((prev) => (prev - 1 + projetos.length) % projetos.length);
  };

  // Ir direto para projeto clicado na miniatura
  const handleSelect = (index: number) => {
    setCurrentIndex(index);
  };

  // Autoplay: troca slide a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id='containerProjectLanding' className={styles.containerProject}>
      {/* Imagem principal */}
      <div className={styles.mainImage}>
        <img
          src={projetos[currentIndex].imagem}
          alt={projetos[currentIndex].titulo}
          className={styles.mainImg}
        />
        <div className={styles.content}>
          <h2 className={styles.title}>{projetos[currentIndex].titulo}</h2>
          <p className={styles.descriptionProject}>
            {projetos[currentIndex].descricao}
          </p>
          <button className={styles.btn}>Saiba Mais</button>
        </div>
      </div>

      {/* Miniaturas */}
      <div className={styles.thumbs}>
        {projetos.map((projeto, i) => (
          <div
            key={i}
            className={`${styles.thumbItem} ${
              i === currentIndex ? styles.thumbActive : ''
            }`}
            onClick={() => handleSelect(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') handleSelect(i);
            }}
          >
            <img src={projeto.imagem} alt={projeto.titulo} />
          </div>
        ))}
      </div>

      {/* Botões next/back */}
      <div className={styles.arrows}>
        <button className={styles.arrowBtn} onClick={handleBack}>
          &lt;
        </button>
        <button className={styles.arrowBtn} onClick={handleNext}>
          &gt;
        </button>
      </div>
    </section>
  );
}
