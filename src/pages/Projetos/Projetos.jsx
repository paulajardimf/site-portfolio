import CardProjeto from "../../components/CardProjeto/CardProjeto";
import {
  ContainerCard,
  ContainerProjetos,
  ContainerSection,
  Texto,
  Titulo,
} from "./styled";
import ImagemProjetoTheSims from "./img/projeto-intro-web.jpg";
import ImagemProjetoPortfolio from "./img/projeto-portfolio.jpg";
import imagemProjetoWhatslab from "./img/imagem-projeto-whatslab.png";
import Header from "../../components/Header/Header";

export default function Projetos() {
  return (
    <>
      <Header />
      <ContainerProjetos>
        <ContainerSection>
          <Titulo>Projetos</Titulo>
          <Texto>Alguns projetos que desenvolvi:</Texto>
        </ContainerSection>
        <ContainerCard>
          <CardProjeto
            imagem={ImagemProjetoPortfolio}
            titulo={"Site Portfolio"}
            descricao={
              "Site com apresentação de portfolio com projetos e currículo."
            }
            tecnologias={"ReactJs, styled-components e Vite"}
            linkSite={"http://site-portifolio-beta.vercel.app/"}
            linkCodigo={"https://github.com/paulajardimf/site-portifolio"}
          />
          <CardProjeto
            imagem={imagemProjetoWhatslab}
            titulo={"Whatslab"}
            descricao={
              "Página inspirada no whatsapp, com opção de mudar o contato e excluir mensagens com duplo clique."
            }
            tecnologias={"ReactJs, styled-components e Vite"}
            linkSite={"https://whatslab-tan.vercel.app/"}
            linkCodigo={"https://github.com/paulajardimf/whatslab"}
          />
        </ContainerCard>
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
      </ContainerProjetos>
    </>
  );
}
