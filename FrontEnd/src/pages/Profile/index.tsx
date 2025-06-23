import { MainTemplate } from '../../templates/MainTemplate';

import img1 from '../../assets/img/ProjectsImgs/img1.jpg';
import img2 from '../../assets/img/ProjectsImgs/img2.jpg';
import { HeadingProfile } from '../../components/HeadingProfile';
import { PenIcon, ShareIcon } from 'lucide-react';
import { InfoCard } from '../../components/InfoCard';
import { ProjectCard } from '../../components/ProjectCard';
import { ContainerSideToSide } from '../../components/ContainerSideToSide';
import { useEffect, useState } from 'react';
import { getProjectsByUser } from '../../services/projectService';
import type { ProjectModel } from '../../models/ProjectModel';
import { useAuth } from '../../contexts/useAuth';

export function Profile() {
  const { user } = useAuth();
  console.log(user)
  const [projects, setProjects] = useState<ProjectModel[]>([]);

  console.log(projects)

  useEffect(() => {
    if (user?.userName) {
      getProjectsByUser(user.userName).then(setProjects);
    }
  }, [user]);

  return (
    <MainTemplate>
      <HeadingProfile
        UrlImgBanner={img1}
        UrlImgProfile={img2}
        Name={user?.name ?? 'Usuário'}
      >
        <ShareIcon />
        <PenIcon />
      </HeadingProfile>

      <ContainerSideToSide>
        <InfoCard
          titulo='Biografia'
          paragrafo='Estudante do terceiro periodo de engenharia de software da universidade federal de Marica, comecei na area da tecnologia em 1999, mas, minha paixao por historia e desenvolvimento pre-historico sempre chamou minha atencao'
        />
        <InfoCard
          titulo='Formacao academica'
          paragrafo='Engenheiro de sooftware e historiador pela universidade federal de Marica'
        />
      </ContainerSideToSide>

      {projects.length === 0 ? (
        <h2>Voce ainda não criou nenhum projeto</h2>
      ) : (
        <>
          {projects.map(project => (
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
    </MainTemplate>
  );
}
