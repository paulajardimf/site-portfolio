import Header from "../../components/Header/Header";
import CardProjeto from "../../components/CardProjeto/CardProjeto";
import {
  ContainerCard,
  ContainerProjetos,
  ContainerSection,
  Texto,
  Titulo,
} from "./styled";
import theSims from "./img/projeto-intro-web.jpg";
import portfolio from "./img/projeto-portfolio.jpg";
import whatslab from "./img/imagem-projeto-whatslab.png";
import decodificador from "./img/projeto-decodificador.png";
import todo from "./img/projeto-todo.png";
import ecommerce from "./img/projeto-ecommerce.png";
import pokedex1 from "./img/projeto-pokedex1.0.png";
import pokedex2 from "./img/projeto-pokedex2.0.png";
import labeddit from "./img/projeto-labeddit.png";

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
            imagem={labeddit}
            titulo={"Labeddit"}
            descricao={
              "Projeto full stack de uma rede social chamada Labeddit desenvolvida com mobile first."
            }
            tecnologias={"ReactJs, styled-components, react-router-dom, Axios e Vite"}
            linkSite={"https://labeddit-frontend-paulajardimf.vercel.app/"}
            linkCodigo={"https://github.com/paulajardimf/labeddit-frontend"}
          />
          <CardProjeto
            imagem={pokedex2}
            titulo={"Pokedex 2.0"}
            descricao={
              "Projeto de uma pokedex, totalmente responsiva, com darkmode e paginação. Com consumo da api pokeapi.co."
            }
            tecnologias={"ReactJs, styled-components, Nookies, Axios e NextJs"}
            linkSite={"https://frontend-test-two-paulajardimf.vercel.app/"}
            linkCodigo={"https://github.com/paulajardimf/pokedex-2.0"}
          />
          <CardProjeto
            imagem={pokedex1}
            titulo={"Pokedex 1.0"}
            descricao={
              "Projeto de uma pokedex, onde é possível adicionar os pokemons, excluir e ver seus detalhes. Com consumo da api pokeapi.co."
            }
            tecnologias={"ReactJs, styled-components, Local Storage, react-router-dom, Axios e Vite"}
            linkSite={"https://pokedex-paulajardimf.vercel.app/"}
            linkCodigo={"https://github.com/paulajardimf/pokedex"}
          />
          <CardProjeto
            imagem={ecommerce}
            titulo={"Ecommerce - Astrodev"}
            descricao={
              "Projeto de um ecommerce, onde é possível visualizar os produtos, ordenar por preço, buscar por palavras e adicioná-los ao carrinho."
            }
            tecnologias={"ReactJs, styled-components, Local Storage, react-router-dom e Vite"}
            linkSite={"https://projeto-frontendreact.vercel.app/"}
            linkCodigo={"https://github.com/paulajardimf/astrodev-ecommerce"}
          />
          <CardProjeto
            imagem={portfolio}
            titulo={"Site Portfolio"}
            descricao={
              "Site com apresentação de portifólio com projetos e currículo."
            }
            tecnologias={"ReactJs, styled-components e Vite"}
            linkSite={"http://site-portifolio-beta.vercel.app/"}
            linkCodigo={"https://github.com/paulajardimf/site-portifolio"}
          />
          <CardProjeto
            imagem={todo}
            titulo={"To Do"}
            descricao={
              "Página onde é possível cadastrar tarefas à fazer, marcar como concluído e apagar a tarefa."
            }
            tecnologias={"ReactJs, styled-components, Local Storage e Vite"}
            linkSite={"https://to-do-paulajardimf.vercel.app/"}
            linkCodigo={"https://github.com/paulajardimf/to-do"}
          />
          <CardProjeto
            imagem={whatslab}
            titulo={"Whatslab"}
            descricao={
              "Página inspirada no whatsapp, com opção de mudar o contato e excluir mensagens com duplo clique."
            }
            tecnologias={"ReactJs, styled-components e Vite"}
            linkSite={"https://whatslab-tan.vercel.app/"}
            linkCodigo={"https://github.com/paulajardimf/whatslab"}
          />
        <CardProjeto
          imagem={theSims}
          titulo={"Expansões The Sims 4"}
          descricao={
            "Site que apresenta uma lista de expansões do jogo The Sims 4 lançadas até 10/2022. Projeto feito com manipulação do DOM."
          }
          tecnologias={"HTML5, CSS3 e JavaScript"}
          linkSite={"https://paulajardimf.github.io/projeto-intro-web/"}
          linkCodigo={"https://github.com/paulajardimf/projeto-intro-web"}
        />
        <CardProjeto
          imagem={decodificador}
          titulo={"Decodificador de Texto"}
          descricao={
            "Projeto de uma página na web em que é possível encriptar uma mensagem e desencriptar. Projeto feito com manipulação do DOM."
          }
          tecnologias={"HTML5, CSS3 e JavaScript"}
          linkSite={"https://challenge-oracle-one.vercel.app/"}
          linkCodigo={"https://github.com/paulajardimf/challenge-oracle-one"}
        />
        </ContainerCard>
      </ContainerProjetos>
    </>
  );
}
