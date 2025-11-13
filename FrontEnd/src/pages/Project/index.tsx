import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectById } from "../../services/projectService";
import styles from "./styles.module.css";
import { MainTemplate } from "../../templates/MainTemplate";

type Project = {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  profileImagemProject: string;
  authorUserName: string;
  createdAt: string;
};

export function Project() {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [likes, setLikes] = useState<number>(0);

  useEffect(() => {
    async function fetchData() {
      const data = await getProjectById(id!);
      setProject(data);
      setLikes(data.likes ? data.likes.length : 0);
    }
    fetchData();
  }, [id]);

  if (!project) return <p>Carregando...</p>;

  function handleLike() {
    setLikes((prev) => prev + 1);
    // futuramente: PUT para salvar no backend
  }

  const formattedDate = new Date(project.createdAt).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <MainTemplate>
      <div className={styles.projectPage}>
        <img src={project.coverImage} alt={project.title} className={styles.cover} />

        <div className={styles.content}>
          <div className={styles.header}>
            <img
              src={project.profileImagemProject}
              alt={project.title}
              className={styles.profileImage}
            />
            <div>
              <h1>{project.title}</h1>
              <p className={styles.author}>por @{project.authorUserName}</p>
            </div>
          </div>

          <p className={styles.description}>{project.description}</p>

          <p className={styles.date}>Criado em: {formattedDate}</p>

          <button className={styles.likeButton} onClick={handleLike}>
            ❤️ Curtir ({likes})
          </button>
        </div>
      </div>  
    </MainTemplate>
  );
}
