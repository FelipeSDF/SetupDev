import type React from 'react';
import styles from './styles.module.css';
import { PhoneCallIcon } from 'lucide-react';

type ContactFormProps= {
  title: string;
} & React.ComponentProps<'input'>

export function ContactForm({title, type, ...rest} : ContactFormProps) {
  return (
    <form className={styles.form}>
      <div>
        <h2>{title} {<PhoneCallIcon/>}</h2>
      </div>
      <div>
        <label htmlFor="name">Nome</label>
        <input type={type} name='name' id='name'/>
      </div>
      <div>
        <label htmlFor="name">Nome</label>
        <input type={type} name='name' {...rest}/>
      </div>
      <div>
        <label htmlFor="name">Nome</label>
        <input type="text" name='name' id='name'/>
      </div>
    </form>
  );
}
