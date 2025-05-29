import styles from './styles.module.css'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export function ContadorAnimado() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, 
  });

  return (
    <div className={styles.container} ref={ref}>
      {inView ? <CountUp end={25} duration={5} suffix='%' /> : '0%'}
    </div>
  );
}
