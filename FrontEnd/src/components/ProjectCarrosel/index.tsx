import { useRef, useState } from 'react';
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
  const [items, setItems] = useState(projetos);
  const [animation, setAnimation] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (type: 'next' | 'back') => {
    setAnimation(type);

    setTimeout(() => {
      setItems(prev => {
        if (type === 'next') {
          // move o primeiro para o final
          const [first, ...rest] = prev;
          return [...rest, first];
        } else {
          // move o último para o início
          const last = prev[prev.length - 1];
          const rest = prev.slice(0, -1);
          return [last, ...rest];
        }
      });

      setAnimation('');
    }, 300); // tempo da animação
  };

  return (
    <section
      className={`${styles.containerProject} ${animation === 'next' ? styles.next : ''} ${
        animation === 'back' ? styles.back : ''
      }`}
      ref={containerRef}
    >
      <div className={styles.list}>
        {items.map((projeto, i) => (
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
        {items.map((projeto, i) => (
          <div className={styles.thumbItem} key={i}>
            <img src={projeto.imagem} alt={projeto.titulo} />
            <h3>{projeto.titulo}</h3>
          </div>
        ))}
      </div>

      <div className={styles.arrows}>
        <button className={styles.arrowBtn} onClick={() => handleMove('back')}>
          &lt;
        </button>
        <button className={styles.arrowBtn} onClick={() => handleMove('next')}>
          &gt;
        </button>
      </div>
    </section>
  );
}
