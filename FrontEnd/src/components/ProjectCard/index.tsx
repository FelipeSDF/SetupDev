import { Link } from 'react-router-dom';
import styles from './styles.module.css';

type ProjectCardProps = {
  id?: string | number; // 👈 novo parâmetro opcional (caso queira usar o id do projeto)
  name: string;
  description: string;
  status?: string;
  createDate: string;
  img: string;
};

export function ProjectCard({
  id,
  name,
  description,
  status,
  createDate,
  img
}: ProjectCardProps) {
  return (
    <Link
      to={id ? `/projeto/${id}` : '#'} // 👈 redireciona se tiver id, senão não faz nada
      className={styles.projectCard}
    >
      <img src={img} alt={name} />
      <div className={styles.projectInfo}>
        <h2 className={styles.projectName}>{name}</h2>
        <p>{description}</p>
        {status && <h3>{status}</h3>}
        <h3>Data de criação: {createDate}</h3>
      </div>
    </Link>
  );
}
