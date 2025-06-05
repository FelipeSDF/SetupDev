import styles from './styles.module.css';

type AsideProps ={
  titulo : string
  paragrafo : string
}

export function InfoCardProject({titulo, paragrafo} : AsideProps) {
  return (
    <div className={styles.container}>
      <h3>{titulo}</h3>

      <p>{paragrafo}</p>
    </div>
  );
}
