import { MainTemplate } from '../../templates/MainTemplate';
import { HeadingProfile } from '../../components/HeadingProfile';
import { PenIcon, ShareIcon } from 'lucide-react';
import { InfoCard } from '../../components/InfoCard';
import { ProjectCard } from '../../components/ProjectCard';
import { ContainerSideToSide } from '../../components/ContainerSideToSide';
import { EditProfileModal } from '../../components/pages/profilePage/EditProfileModal';
import { useEffect, useState } from 'react';
import { getProjectsByUser } from '../../services/projectService';
import { getAllUsers } from '../../services/userService';
import { useAuth } from '../../contexts/useAuth';
import type { ProjectModel } from '../../models/ProjectModel';
import type { UserModel } from '../../models/UserModel';
import styles from './styles.module.css';

// 🖼️ imagens padrão (adicione no diretório assets/img)
import defaultBanner from '../../assets/img/defaultBanner.png';
import defaultProfile from '../../assets/img/defaultProfile.png';

export function Profile() {
  const { user } = useAuth();
  const [projects, setProjects] = useState<ProjectModel[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [profileData, setProfileData] = useState<UserModel | null>(null);

  useEffect(() => {
    if (user?.userName) {
      getProjectsByUser(user.userName).then(setProjects);

      // Busca os dados atualizados do usuário
      getAllUsers().then(users => {
        const current = users.find(u => u.userName === user.userName);
        if (current) setProfileData(current);
      });
    }
  }, [user]);

  if (!profileData) return <h2>Carregando...</h2>;

  // 🧠 Define fallback padrão se o usuário não tiver imagens ou textos
  const bannerImg = profileData.banner?.trim()
    ? profileData.banner
    : defaultBanner;

  const profileImg = profileData.profileImg?.trim()
    ? profileData.profileImg
    : defaultProfile;

  const bioText = profileData.bio?.trim()
    ? profileData.bio
    : 'Este usuário ainda não escreveu uma biografia.';

  const formationText = profileData.formation?.trim()
    ? profileData.formation
    : 'Formação acadêmica não informada.';

  return (
    <MainTemplate>
      <HeadingProfile
        UrlImgBanner={bannerImg}
        UrlImgProfile={profileImg}
        Name={profileData.name}
      >
        <ShareIcon />
        <PenIcon
          onClick={() => setShowModal(true)}
          className={styles.editIcon}
        />
      </HeadingProfile>

      <ContainerSideToSide>
        <InfoCard titulo="Biografia" paragrafo={bioText} />
        <InfoCard titulo="Formação Acadêmica" paragrafo={formationText} />
      </ContainerSideToSide>

      <section className={styles.projectsSection}>
        <h2>Projetos de {profileData.name}</h2>
        {projects.length === 0 ? (
          <h3>Você ainda não criou nenhum projeto</h3>
        ) : (
          <div className={styles.projectsGrid}>
            {projects.map(project => (
              <ProjectCard
                key={project.id}
                name={project.title}
                createDate={project.createdAt}
                description={project.description}
                img={project.profileImagemProject}
              />
            ))}
          </div>
        )}
      </section>

      {showModal && (
        <EditProfileModal
          onClose={() => setShowModal(false)}
          currentData={profileData}
          setProfileData={setProfileData}
          userName={profileData.userName}
        />
      )}
    </MainTemplate>
  );
}
