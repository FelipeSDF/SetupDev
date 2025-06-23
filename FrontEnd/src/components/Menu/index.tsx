import { Search, User2Icon } from 'lucide-react';
import styles from './styles.module.css';
import logo from '../../assets/img/logoLogin.png';
import { CategoryDropdown } from '../CategoryDropdown';
import { useLocation, Link } from 'react-router-dom';
import React from 'react';

export function Menu() {
  const location = useLocation();
  const pathname = location.pathname;

  const itemsMap: Record<string, React.ReactNode[]> = {
    '/': [
      <li key='category'>
        <CategoryDropdown />
      </li>,
      <li key='destaques'>
        <a href='#containerProjectLanding'>Destaques</a>
      </li>,
      <li key='contato'>
        <a href='#form'>Contato</a>
      </li>,
      <button className={styles.userBar}>
        <Link to='/register'>
          <User2Icon />
        </Link>
      </button>,
    ],
    '/home': [
      <li key='category'>
        <CategoryDropdown />
      </li>,
      <li key='destaques'>
        <a href='#'>Destaques</a>
      </li>,
      <li key='criarProject'>
        <Link to='/create-project'>Criar projeto</Link>
      </li>,
      <button className={styles.userBar}>
        <Link to='/profile'>
          <User2Icon />
        </Link>
      </button>,
    ],
    '/create-project': [
      <li key='criarProject'>
        <Link to='/home'>Home</Link>
      </li>,
      <li key='category'>
        <CategoryDropdown />
      </li>,
      <li key='destaques'>
        <a href='#'>Destaques</a>
      </li>,
      <button className={styles.userBar}>
        <Link to='/profile'>
          <User2Icon />
        </Link>
      </button>,
    ],
  };

  const navItems = itemsMap[pathname] || [
    <li key='category'>
      <CategoryDropdown />
    </li>,
    <li key='destaques'>
      <a href='#containerProjectLanding'>Destaques</a>
    </li>,
    <li key='criarProject'>
      <Link to='/create-project'>Criar Projeto</Link>
    </li>,
    <button className={styles.userBar}>
      <Link to='/profile'>
        <User2Icon />
      </Link>
    </button>,
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.content}>
        <div>
          <Link to='/home'><img className={styles.imgLogo} src={logo} alt='logo' /></Link>
        </div>
        <div className={styles.search}>
          <input type='text' placeholder='Pesquisar projeto' />
          <button>
            <Search size={15} />
          </button>
        </div>
        <ul className={styles.optionsNav}>{navItems}</ul>
      </div>
    </nav>
  );
}
