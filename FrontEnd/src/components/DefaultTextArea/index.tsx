
import styles from './styles.module.css'

type DefaultTextAreaProps ={
  name: string
}

export function DefaultTextArea({name} : DefaultTextAreaProps) {
  return (
    <>
      <textarea className={styles.textarea} placeholder='Digite sua mensagem' name={name}></textarea>
    </>
  );
}