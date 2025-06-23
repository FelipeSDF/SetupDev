import styles from './styles.module.css';
import foguetemp4 from '../../assets/video/foguete.mp4';
import { ProjectCard } from '../../components/ProjectCard';
import { MainTemplate } from '../../templates/MainTemplate';
import { Link } from 'react-router-dom';
import { getAllProjects, getProjectsByUser } from '../../services/projectService';
import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/useAuth';
import type { ProjectModel } from '../../models/ProjectModel';

export function Home() {
  const { user } = useAuth();

  const [userProjects, setUserProjects] = useState<ProjectModel[]>([]);

  useEffect(() => {
    if (user?.userName) {
      getProjectsByUser(user.userName).then(setUserProjects);
    }
  }, [user]);

  const [allProjects, setAllProjects] = useState<ProjectModel[]>([]);

  useEffect(() => {
    getAllProjects().then(setAllProjects).catch(console.error);
  }, []);

  return (
    <MainTemplate>
      <div className={styles.homeContainer}>
        <section className={styles.wellcomeContainerHome}>
          <div className={styles.containerVideoHome}>
            <video src={foguetemp4} muted autoPlay loop></video>
          </div>
          <div className={styles.titleHome}>
            <h2 className={styles.title}>Pronto para elevar seu projeto?</h2>
            <button>
              <Link to='/create-project'>Começar projeto</Link>
            </button>
          </div>
        </section>

        <section className={styles.projectsHome}>
          <h2 className={styles.title}>Projetos em destaque</h2>

          {allProjects.length === 0 ? (
            <h2>Voce ainda não criou nenhum projeto</h2>
          ) : (
            <>
              {allProjects.map(project => (
                <ProjectCard
                  key={project.id}
                  name={project.title}
                  createDate={project.createdAt}
                  description={project.description}
                  img={project.profileImagemProject}
                />
              ))}
            </>
          )}
          
        </section>


        <section className={styles.lastPostHome}>
          <h2 className={styles.title}>Suas Ultima postagem</h2>

          {userProjects.length === 0 ? (
            <h2>Voce ainda não criou nenhum projeto</h2>
          ) : (
            <>
              {userProjects.map(project => (
                <ProjectCard
                  key={project.id}
                  name={project.title}
                  createDate={project.createdAt}
                  description={project.description}
                  img={project.profileImagemProject}
                />
              ))}
            </>
          )}
        </section>
      </div>
    </MainTemplate>
  );
}
