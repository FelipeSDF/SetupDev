import styles from './styles.module.css'

import { ContadorAnimado } from '../ContadorAnimado';
import { TopicAboutUs } from '../TopicAboutUs';
import { DollarSignIcon, RocketIcon } from 'lucide-react';

export function ContainerAboutUS() {
  return (
    <div className={styles.container}>
      <TopicAboutUs description='Somos movido pela vontade de fazer voce alcançar outro patamar. Por isso nossa missão é almentar sua visibilidade em até 25%'>
        <ContadorAnimado />
      </TopicAboutUs>

      <TopicAboutUs description='Te ajudamos a aparecer para o mundo, fazendo com que seus projetos decolem rumo a uiverso cheio de oportunidades'>
        <RocketIcon />
      </TopicAboutUs>

      <TopicAboutUs description='Graças a nossa comunidade, projetos inovadores semprem recebem investidores que amaram seu projeto.'>
        <DollarSignIcon />
      </TopicAboutUs>
    </div>
  );
}
