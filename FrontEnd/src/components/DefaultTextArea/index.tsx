import styles from './styles.module.css'

export function DefaultTextArea() {
  return (
    <>
      <textarea className={styles.textarea} placeholder='Digite sua mensagem'></textarea>
    </>
  );
}