import styles from './styles.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div >
        <p>&copy; 2025 Capmar - Todos os direitos reservados.</p>
        <ul>
          <li>
            <a href='#'>Política de Privacidade</a>
          </li>
          <li>
            <a href='#'>Termos de Serviço</a>
          </li>
          <li>
            <a href='#'>Contato</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
