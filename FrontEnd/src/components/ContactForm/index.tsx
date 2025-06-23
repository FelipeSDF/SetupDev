import styles from './styles.module.css';
import { PhoneCallIcon } from 'lucide-react';
import { DefaultInput } from '../DefaultInput';
import { DefaultTextArea } from '../DefaultTextArea';

type ContactFormProps= {
  title: string;
}

export function ContactForm({title} : ContactFormProps) {
  return (
    <form id='form' className={styles.form}>
      <div className={styles.containerTitle}>
        <h2>{title} {<PhoneCallIcon/>}</h2>
      </div>
      <div>
        <DefaultInput id='nameContact' labelText='Nome' type='text' placeholder='Name'/>
      </div>
      <div>
        <DefaultInput id='emailContact' labelText='E-mail' type='email' placeholder='e-mail'/>
      </div>
      <div>
        <DefaultTextArea placeholderText='Digite sua mensagem' name='message'/>
      </div>

      <div>
        <DefaultInput type='submit' className={styles.button}/>
      </div>
    </form>
  );
}
