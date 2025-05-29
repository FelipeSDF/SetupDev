import { ContactForm } from '../../components/ContactForm';
import { Container } from '../../components/Container';
import { ContainerAboutUS } from '../../components/ContainerAboutUs';
import { ContainerVideoWelCome } from '../../components/ContainerVideoWelCome';
import { ProjectCarousel } from '../../components/ProjectCarrosel';

import { MainTemplate } from '../../templates/MainTemplate';
// import styles from './styles.module.css';

export function Landing() {
  return (
    <MainTemplate>
      <Container>
        <ContainerVideoWelCome />
      </Container>

      <Container>
        <ContainerAboutUS/>
      </Container>

      <Container>
        <ProjectCarousel/>
      </Container>

      <Container>
        <ContactForm title='Nos mande uma mensagem'/>
      </Container>
    </MainTemplate>
  );
}
