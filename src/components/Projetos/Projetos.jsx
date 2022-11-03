import CardProjeto from "./CardProjeto/CardProjeto";
import {
  ContainerCard,
  ContainerProjetos,
  ContainerSection,
  Texto,
  Titulo,
} from "./styled";
import ImagemProjetoTheSims from "./img/projeto-intro-web.jpg";
import ImagemProjetoPortfolio from "./img/projeto-portfolio.jpg";

export default function Projetos() {
  return (
    <ContainerProjetos>
      <ContainerSection>
        <Titulo>Projetos</Titulo>
        <Texto>Alguns projetos que desenvolvi:</Texto>
      </ContainerSection>
      <ContainerCard>
        <CardProjeto
          imagem={ImagemProjetoTheSims}
          titulo={"Expansões The Sims 4"}
          descricao={
            "Site que apresenta uma lista de expansões do jogo The Sims 4 lançadas até 10/2022. Projeto feito com manipulação do DOM."
          }
          tecnologias={"HTML5, CSS3 e JavaScript"}
          linkSite={"https://paulajardimf.github.io/projeto-intro-web/"}
          linkCodigo={"https://github.com/paulajardimf/projeto-intro-web"}
        />
        <CardProjeto
          imagem={ImagemProjetoPortfolio}
          titulo={"Site Portfolio"}
          descricao={"Site com apresentação de portfolio com projetos e currículo."}
          tecnologias={"ReactJs com styled-components"}
          linkSite={"#"}
          linkCodigo={"#"}
        />
      </ContainerCard>
    </ContainerProjetos>
  );
}
