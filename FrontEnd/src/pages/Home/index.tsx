import styles from './styles.module.css';
import foguetemp4 from '../../assets/video/foguete.mp4';
import { ProjectCard } from '../../components/ProjectCard';
import img3 from '../../assets/img/ProjectsImgs/img3.jpg';
import { MainTemplate } from '../../templates/MainTemplate';

export function Home() {
  return (
    <MainTemplate>
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
            <ProjectCard createDate='20/10/1985' description='Projeto criado na era pre historica, mas, que tem belas imagens para voce apreciar' name='Dinotorica' status='In progress'  img={img3}/>
        </section>
        <section className={styles.lastPostHome}>
          <h2 className={styles.title}>Ultima postagem</h2>
            <ProjectCard createDate='20/10/1985' description='Projeto criado na era pre historica, mas, que tem belas imagens para voce apreciar' name='Dinotorica' status='In progress'  img={img3}/>
        </section>
      </div>
    </MainTemplate>
  )
}
