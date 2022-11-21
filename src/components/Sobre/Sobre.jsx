import { ContainerSection } from "../Tecnologias/styled";
import Cargo from "./Cargo/Cargo";
import Educacao from "./Educacao/Educacao";
import { ContainerSobre, Texto, Titulo } from "./styled";

export default function Sobre() {
  return (
    <ContainerSobre>
      <ContainerSection>
        <Titulo>Sobre mim</Titulo>
        <Texto>
          Desenvolvedora Front-End em formação pelo bootcamp de Desenvolvimento
          Web Full Stack da Labenu. As principais tecnologias que utilizo são
          Javascript, CSS e ReactJS. Tenho formação em Arquitetura e Urbanismo,
          e possuo experiência em desenvolvimento de treinamentos para equipes,
          gerenciamento de equipe e escritório, produção de artes gráficas,
          compras, administrativo, financeiro e licitações.
        </Texto>
      </ContainerSection>
      <ContainerSection>
        <Titulo>Experiência</Titulo>
        <Cargo
          cargo={"Arquiteta"}
          tipo={"Full-Time"}
          local={"Kali Arquitetura"}
          cidade={"Porto Alegre/RS"}
          data={"07/2021 - 05/2022"}
          info={"Desenvolvi e ministrei um treinamento de software de renderização para implementação no escritório, fui responsável pela compatibilização das etapas de projeto no software Archicad. Contato com clientes, gerenciamento e mentoria em tecnologia para equipe de estagiários."}
        />
        <Cargo
          cargo={"Designer"}
          tipo={"Estágio"}
          local={"SCENO Environmental Graphic Design"}
          cidade={"Porto Alegre/RS"}
          data={"03/2019 - 06/2021"}
          info={"Fiz parte da equipe vencedora do Prêmio OURO Bornancini 2020, em design de ambientes Produção de peças gráficas de design, apresentação para clientes e arte final para impressão"}
        />
        <Cargo
          cargo={"Assist. Adm. | Compradora"}
          tipo={"Full-Time"}
          local={"Frame Engenharia"}
          cidade={"Porto Alegre/RS"}
          data={"08/2010 - 11/2017"}
          info={"Gerenciamento do escritório; Controle de boletos e notas fiscais; Desenvolvi planilhas automatizadas para obras; Configuração e manutenção dos computadores; Representante em licitações públicas."}
        />
      </ContainerSection>
      <ContainerSection>
        <Titulo>Formação</Titulo>
        <Educacao
          curso={"Web Full Stack"}
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
          info={"Bolsista em projeto de iniciação científica, 06/2020 - 12/2020. Bolsista em projeto de extensão, 06/2019 - 12/2020"}
        />
        <Educacao
          curso={"Técnico em Contabilidade"}
          tipo={"Técnico"}
          instituicao={"Instituto Isabel de Espanha"}
          data={"2011 - 2012"}
        />
      </ContainerSection>
    </ContainerSobre>
  );
}
