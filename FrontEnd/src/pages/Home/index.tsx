import styles from './styles.module.css';
import foguetemp4 from '../../assets/video/foguete.mp4';
import { Footer } from '../../components/Footer';
import { ProjectCard } from '../../components/ProjectCard';

export function Home() {
  return (
    <>
      <div className={styles.homeContainer}>
        <section className={styles.wellcomeContainerHome}>
          <div className={styles.containerVideoHome}>
            <video src={foguetemp4} muted autoPlay loop></video>
          </div>
          <div className={styles.titleHome}>
            <h2 className={styles.title}>Pronto para elevar seu projeto?</h2>
            <button>Começar projeto</button>
          </div>
        </section>
        <section className={styles.projectsHome}>
          <h2 className={styles.title}>Projetos em destaque</h2>
          <ProjectCard
            name='Exemplar numero 1'
            description='As vezes me pergunto o porque disso ai'
            status='Ainda'
            createDate='05/06/2036'
          />
        </section>
        <section className={styles.lastPostHome}>
          <h2 className={styles.title}>Ultima postagem</h2>
          <ProjectCard
            name='Exemplar numero 1'
            description='As vezes me pergunto o porque disso ai'
            status='Ainda'
            createDate='05/06/2036'
          />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
}
