import styles from './styles.module.css';

export function CategoryDropdown() {
  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownButton}>Categorias</button>
      <div className={styles.dropdownContent}>
        <a href='#'>Tecnologia</a>
        <a href='#'>Design</a>
        <a href='#'>Negócios</a>
        <a href='#'>Educação</a>
        <a href='#'>Saúde</a>
      </div>
    </div>
  );
}
