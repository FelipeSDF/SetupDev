import { ContactForm } from '../../components/ContactForm';
import { Container } from '../../components/Container';
import { ContainerVideoWelCome } from '../../components/ContainerVideoWelCome';
import { MainTemplate } from '../../templates/MainTemplate';
// import styles from './styles.module.css';

export function Landing() {
  return (
    <MainTemplate>
      <Container>
        <ContainerVideoWelCome />
      </Container>

      <Container>
        <ContactForm />
      </Container>
    </MainTemplate>
  );
}
