import styles from './styles.module.css';

type ProjectCardProps = {
  name: string;
  description: string;
  status: string;
  createDate: string;
};

export function ProjectCard({
  name,
  description,
  status,
  createDate,
}: ProjectCardProps) {
  return (
    <ul className={styles.projectsContainer}>
      <li>
        <img src='' alt='' />
        <div className={styles.projectInfo}>
          <h2 className={styles.projectName}>{name}</h2>
          <p>{description}</p>
          <h3>{status}</h3>
          <h3>Data de criação{createDate}</h3>
        </div>
      </li>
    </ul>
  );
}
