import styles from './styles.module.css';

type DefaultAlertProps = {
  alert: string;
};

export function DefaultAlert({alert}: DefaultAlertProps) {
  return (
      <div className={styles.AlertDefault}>
        <h4>{alert}</h4>
      </div>
  );
}
