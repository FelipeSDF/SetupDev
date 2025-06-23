import styles from './styles.module.css';

type ContainerProps = {
  children: React.ReactNode;
};

export function ContainerSideToSide({ children }: ContainerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
