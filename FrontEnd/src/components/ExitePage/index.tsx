import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { XIcon } from 'lucide-react';

type ExitePageProps = {
  page: string;
}

export function ExitePage({page, ...rest}: ExitePageProps) {
  return (
    <>
      <button className={styles.btn} {...rest}><Link to={page}><XIcon/></Link></button>
    </>
  );
}
