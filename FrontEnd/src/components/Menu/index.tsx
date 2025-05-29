import { Search, User2Icon } from 'lucide-react';
import styles from './styles.module.css';
import logo from '../../assets/img/logoLogin.png';
import { CategoryDropdown } from '../CategoryDropdown';

export function Menu() {
  return (
    <nav className={styles.nav}>
      <div className={styles.content}>
        <div>
          <img className={styles.imgLogo} src={logo} alt='' />
        </div>
        <div className={styles.search}>
          <input type='text' placeholder='Pesquisar projeto' />
          <button>
            <Search size={15} />
          </button>
        </div>
        <ul className={styles.optionsNav}>
          <li>
            <CategoryDropdown />
          </li>
          <li>Destaques</li>
          <li>Seus projetos</li>
          <li>Criar Projeto</li>
          <li><a href="#form">Contato</a></li>
        </ul>
        <button className={styles.userBar}>
          <User2Icon />
        </button>
      </div>
    </nav>
  );
}
