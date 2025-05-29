import type React from 'react';
import styles from './styles.module.css';

type TopicAboutUsProps = {
  children: React.ReactNode
  description: string
}

export function TopicAboutUs({children, description} : TopicAboutUsProps) {
  return (
    <div className={styles.container}>
      {children}
      <p>{description}</p>
    </div>
  );
}
