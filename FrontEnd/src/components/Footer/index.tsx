import styles from './styles.module.css';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <h2>Capmar</h2>
          <p>Conectando inovação e tecnologia para um futuro melhor.</p>
        </div>

        <div className={styles.linksSection}>
          <h3>Institucional</h3>
          <ul>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Carreiras</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Ajuda e suporte</a></li>
          </ul>
        </div>

        <div className={styles.legalSection}>
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Política de Privacidade</a></li>
            <li><a href="#">Termos de Serviço</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>
        </div>

        <div className={styles.contactSection}>
          <h3>Contato</h3>
          <p>Email: contato@capmar.com</p>
          <p>Tel: (11) 1234-5678</p>
          <div className={styles.socialIcons}>
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Linkedin size={20} /></a>
            <a href="#"><Mail size={20} /></a>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>&copy; 2025 Capmar - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
