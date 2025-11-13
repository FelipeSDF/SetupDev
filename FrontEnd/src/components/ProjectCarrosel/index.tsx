import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { getAllProjects } from '../../services/projectService';
import type { ProjectModel } from '../../models/ProjectModel';
import { Link } from 'react-router-dom';

export function ProjectCarousel() {
  const [projects, setProjects] = useState<ProjectModel[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔹 Buscar todos os projetos e pegar 4 aleatórios
  useEffect(() => {
    getAllProjects()
      .then((data) => {
        // embaralha e pega apenas 4
        const shuffled = data.sort(() => 0.5 - Math.random()).slice(0, 4);
        setProjects(shuffled);
      })
      .catch(console.error);
  }, []);

  // 🔹 Funções de navegação
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handleBack = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
  };

  // 🔹 Autoplay a cada 5 segundos
  useEffect(() => {
    if (projects.length === 0) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [projects]);

  // 🔹 Renderização condicional (espera os dados carregarem)
  if (projects.length === 0) {
    return <h2>Carregando projetos...</h2>;
  }

  const currentProject = projects[currentIndex];

  return (
    <section id='containerProjectLanding' className={styles.containerProject}>
      {/* Imagem principal */}
      <div className={styles.mainImage}>
        <img
          src={currentProject.coverImage}
          alt={currentProject.title}
          className={styles.mainImg}
        />
        <div className={styles.content}>
          <h2 className={styles.title}>{currentProject.title}</h2>
          <p className={styles.descriptionProject}>
            {currentProject.description}
          </p>
          <Link to={`/projeto/${currentProject.id}`}>
            <button className={styles.btn}>Saiba Mais</button>
          </Link>
        </div>
      </div>

      {/* Miniaturas */}
      <div className={styles.thumbs}>
        {projects.map((project, i) => (
          <div
            key={project.id}
            className={`${styles.thumbItem} ${
              i === currentIndex ? styles.thumbActive : ''
            }`}
            onClick={() => handleSelect(i)}
            role='button'
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') handleSelect(i);
            }}
          >
            <img src={project.profileImagemProject} alt={project.title} />
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
