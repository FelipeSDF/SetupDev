import { MainTemplate } from '../../templates/MainTemplate';
import { Container } from '../../components/Container';

import img1 from '../../assets/img/ProjectsImgs/img1.jpg';
import img2 from '../../assets/img/ProjectsImgs/img2.jpg';
import img3 from '../../assets/img/ProjectsImgs/img3.jpg';
import { HeadingProfile } from '../../components/HeadingProfile';
import { Settings2Icon, ShareIcon } from 'lucide-react';
import { InfoCard } from '../../components/InfoCard';
import { ProjectCard } from '../../components/ProjectCard';

export function Profile() {
  return (
    <MainTemplate>
      <Container>
        <HeadingProfile UrlImgBanner={img1} UrlImgProfile={img2} Name='Joao Martes de Araujo Santos'>
          <ShareIcon/>
          <Settings2Icon/>
        </HeadingProfile>

        <InfoCard titulo='Biografia' paragrafo='Estudante do terceiro periodo de engenharia de software da universidade federal de Marica, comecei na area da tecnologia em 1999, mas, minha paixao por historia e desenvolvimento pre-historico sempre chamou minha atencao'/>
        <InfoCard titulo='Formacao academica' paragrafo='Engenheiro de sooftware e historiador pela universidade federal de Marica'/>
      </Container>

      <Container>
        <ProjectCard createDate='20/10/1985' description='Projeto criado na era pre historica, mas, que tem belas imagens para voce apreciar' name='Dinotorica' status='In progress'  img={img3}/>
      </Container>

      
    </MainTemplate>
  );
}
