import { useEffect, useRef, useState } from 'react';
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
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const lengthItems = projetos.length;

  const handleNext = () => {
    setActive(prev => (prev + 1) % lengthItems);
  };

  const handleBack = () => {
    setActive(prev => (prev - 1 + lengthItems) % lengthItems);
  };

  useEffect(() => {
    const list = listRef.current;
    if (list) {
      const width = list.children[0].clientWidth; // largura do item
      list.style.transform = `translateX(-${active * width}px)`;
    }
  }, [active]);

  return (
    <section className={styles.containerProject}>
      <div className={styles.list} ref={listRef}>
        {projetos.map((projeto, i) => (
          <div className={styles.listItem} key={i}>
            <img src={projeto.imagem} alt={projeto.titulo} />
            <div className={styles.content}>
              <h2 className={styles.title}>{projeto.titulo}</h2>
              <p className={styles.descriptionProject}>{projeto.descricao}</p>
              <button className={styles.btn}>Saiba Mais</button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.thumb}>
        {projetos.map((projeto, i) => (
          <div
            className={`${styles.thumbItem} ${i === active ? styles.thumbItemActive : ''}`}
            key={i}
            onClick={() => setActive(i)}
          >
            <img src={projeto.imagem} alt={projeto.titulo} />
            <h3>{projeto.titulo}</h3>
          </div>
        ))}
      </div>

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
