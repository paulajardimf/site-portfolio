import Cargo from "../../components/Cargo/Cargo";
import Educacao from "../../components/Educacao/Educacao";
import { ContainerSobre, Texto, Titulo, ContainerSection, ContainerRow } from "./styled";
import Header from "../../components/Header/Header";
import gif from "./assets/gif.gif";

export default function Sobre() {
  return (
    <>
      <Header />
      <ContainerSobre>
        <ContainerRow>
          <ContainerSection>
            <Titulo>Sobre mim</Titulo>
            <Texto>
              Desenvolvedora Full Stack, cursando pós graduação em
              Desenvolvimento Full Stack na Faculdade Descomplica. As principais tecnologias que utilizo são Javascript, CSS, ReactJS, Node e Typescript.
            </Texto>
            <Texto>
              Tenho formação em Arquitetura e Urbanismo, e possuo experiência em desenvolvimento de treinamentos para equipes, gerenciamento de equipe e escritório, produção de artes gráficas, atendimento, administrativo e financeiro.
            </Texto>
            <Texto>
              Sempre tive afinidade com tecnologia, tanto que durante graduação eu me especializei em automações no software utilizado para desenhar projetos e ministrei treinamentos. Depois de formada eu decidi investir na área de desenvolvimento que é a minha grande paixão.
            </Texto>
          </ContainerSection>
          <img
            src={gif}
            alt="gif de uma mulher digitando no computador, enquanto as horas passam"
            className="gif"
          />
        </ContainerRow>
        <ContainerSection>
          <Titulo>Experiência</Titulo>
          <Cargo
            cargo={"Arquiteta"}
            tipo={"Full-Time"}
            local={"Kali Arquitetura"}
            cidade={"Porto Alegre/RS"}
            data={"07/2021 - 05/2022"}
            info={
              "Desenvolvi e ministrei um treinamento de software de renderização para implementação no escritório, fui responsável pela compatibilização das etapas de projeto no software Archicad. \nContato com clientes, gerenciamento e mentoria em tecnologia para equipe de estagiários."
            }
          />
          <Cargo
            cargo={"Designer"}
            tipo={"Estágio"}
            local={"SCENO Environmental Graphic Design"}
            cidade={"Porto Alegre/RS"}
            data={"03/2019 - 06/2021"}
            info={
              "Fiz parte da equipe vencedora do Prêmio OURO Bornancini 2020, em design de ambientes. \nProdução de peças gráficas de design, apresentação para clientes e arte final para impressão"
            }
          />
          <Cargo
            cargo={"Assist. Adm. | Compradora"}
            tipo={"Full-Time"}
            local={"Frame Engenharia"}
            cidade={"Porto Alegre/RS"}
            data={"08/2010 - 11/2017"}
            info={
              "Gerenciamento do escritório; Controle de boletos e notas fiscais; Desenvolvi planilhas automatizadas para obras; Configuração e manutenção dos computadores; Representante em licitações públicas."
            }
          />
        </ContainerSection>
        <ContainerSection>
          <Titulo>Formação</Titulo>
          <Educacao
            curso={"Pós Graduação em Desenvolvimento Full Stack"}
            tipo={"Pós"}
            instituicao={"Faculdade Descomplica"}
            data={"02/2023 - 02/2024"}
            info={`Em andamento.`}
          />
          <Educacao
            curso={"Bootcamp Web Full Stack"}
            tipo={"Curso"}
            instituicao={"Labenu"}
            data={"08/2022 - 03/2023"}
            info={`Programa com mais de 1000 horas de experiência prática em desenvolvimento Fullstack, guiadas por metodologias ágeis (Kanban/Scrum). Entre as habilidades aprendidas durante o curso estão HTML, CSS, JavaScript, React, Styled-Components, React Hooks, REST, Api Restful, HTTP, Jest, Node.JS, Knex, TypeScript, MySQL, AWS, SQL, Git, Github, Firebase, Testes unitários e UI Design.`}
          />
          <Educacao
            curso={"Bacharelado em Arquitetura e Urbanismo"}
            tipo={"Bacharelado"}
            instituicao={"UniRitter"}
            data={"2015 - 2021"}
            info={
              "Bolsista em projeto de iniciação científica, 06/2020 - 12/2020. Bolsista em projeto de extensão, 06/2019 - 12/2020"
            }
          />
          <Educacao
            curso={"Técnico em Contabilidade"}
            tipo={"Técnico"}
            instituicao={"Instituto Isabel de Espanha"}
            data={"2011 - 2012"}
          />
        </ContainerSection>
      </ContainerSobre>
    </>
  );
}
