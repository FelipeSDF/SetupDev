import styles from './styles.module.css';
import { PhoneCallIcon, Send } from 'lucide-react';
import { DefaultInput } from '../DefaultInput';
import { DefaultTextArea } from '../DefaultTextArea';

type ContactFormProps = {
  title: string;
};

export function ContactForm({ title }: ContactFormProps) {
  return (
    <form id="form" className={styles.form}>
      <div className={styles.containerTitle}>
        <PhoneCallIcon className={styles.icon} />
        <h2>{title}</h2>
      </div>

      <div className={styles.inputsGroup}>
        <DefaultInput
          id="nameContact"
          labelText="Nome completo"
          type="text"
          placeholder="Digite seu nome"
        />
        <DefaultInput
          id="emailContact"
          labelText="E-mail"
          type="email"
          placeholder="exemplo@email.com"
        />
        <DefaultTextArea
          placeholderText="Digite sua mensagem..."
          name="message"
        />
      </div>

      <button type="submit" className={styles.button}>
        Enviar mensagem <Send size={18} />
      </button>
    </form>
  );
}
