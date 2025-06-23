import styles from './styles.module.css';

type ProjectCardProps = {
  name: string;
  description: string;
  status?: string;
  createDate: string;
  img: string;
  key: string | undefined;
};

export function ProjectCard({
  name,
  description,
  status,
  createDate,
  img,
  key
}: ProjectCardProps) {
  return (
    <ul className={styles.projectsContainer}>
      <li key={key}>
        <img src={img} alt='' />
        <div className={styles.projectInfo}>
          <h2 className={styles.projectName}>{name}</h2>
          <p>{description}</p>
          <h3>{status}</h3>
          <h3>Data de criação: {createDate}</h3>
        </div>
      </li>
    </ul>
  );
}
