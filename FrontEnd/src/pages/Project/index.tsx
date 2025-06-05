import { MainTemplate } from '../../templates/MainTemplate';

import img1 from '../../assets/img/ProjectsImgs/alfz7w27.png';
import img2 from '../../assets/img/ProjectsImgs/j9cy9iz2.png';
import { HeadingProfile } from '../../components/HeadingProfile';
import { Settings2Icon, ShareIcon } from 'lucide-react';
import { InfoCardProject } from '../../components/InfoCardProject';

export function Project() {
  return (
    <MainTemplate>
      <HeadingProfile
        UrlImgBanner={img1}
        UrlImgProfile={img2}
        Name='Decisoes binarias contra poluicao'
      >
        <ShareIcon />
        <Settings2Icon />
      </HeadingProfile>

      <InfoCardProject
        titulo='Descrição'
        paragrafo='O projeto intitulado "Mapeamento das Áreas Mais Poluídas" tem como objetivo central identificar, analisar e divulgar dados atualizados sobre os locais com maiores índices de poluição ambiental, sejam eles urbanos, industriais ou naturais. Por meio de uma abordagem baseada em dados confiáveis — coletados de agências ambientais, instituições de pesquisa e sensores geográficos — o projeto busca não apenas informar, mas também promover a conscientização ambiental.

  	      A poluição, em suas diversas formas (do ar, da água e do solo), representa um dos maiores desafios da atualidade, impactando diretamente a saúde pública, a biodiversidade e a qualidade de vida da população. Ao reunir esses dados em uma plataforma clara e visualmente acessível, nosso projeto permite que cidadãos, gestores públicos, ONGs e empresas visualizem o cenário real da poluição em diferentes regiões.

          Utilizamos recursos como mapas interativos, gráficos dinâmicos e análises comparativas entre áreas para destacar os fatores que contribuem para a degradação ambiental. Além disso, integramos indicadores como densidade populacional, presença de indústrias, nível de emissões e descarte de resíduos para oferecer uma visão mais completa das causas e consequências da poluição.

          O projeto também visa incentivar o desenvolvimento de políticas públicas mais eficientes, bem como ações sociais e comunitárias em prol da sustentabilidade. Acreditamos que o acesso à informação é uma ferramenta poderosa de transformação, e por isso buscamos tornar os dados ambientais mais acessíveis e compreensíveis a todos.

          Nosso compromisso é com a transparência, o meio ambiente e o futuro das próximas gerações. Com esse projeto, queremos plantar uma semente de mudança, mobilizando a sociedade para refletir e agir sobre o estado crítico de nosso planeta.'
      />
    </MainTemplate>
  );
}
