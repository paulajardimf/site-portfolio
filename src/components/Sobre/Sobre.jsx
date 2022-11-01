import { ContainerSection } from "../Tecnologias/styled";
import Cargo from "./Cargo/Cargo";
import Educacao from "./Educacao/Educacao"
import { ContainerSobre, Texto, Titulo } from "./styled";

export default function Sobre() {
  return (
    <ContainerSobre>
      <ContainerSection>
        <Titulo>Sobre mim</Titulo>
        <Texto>
          Tenho formação em Arquitetura e Urbanismo, e estou em busca de
          transição de carreira para a área de desenvolvimento front-end.
        </Texto>
        <Texto>
          Sempre aproveito ao máximo as oportunidades para enriquecer meus
          conhecimentos. Acredito que podemos transformar o mundo em um lugar
          melhor para se viver compartilhando conhecimento, e tendo empatia com
          o próximo.
        </Texto>
      </ContainerSection>
      <ContainerSection>
        <Titulo>Experiência</Titulo>
        <Cargo cargo={"Arquiteta"} tipo={"Full-Time"} local={"Escritório"} cidade={"Porto Alegre/RS"} data={"07/2021 - 05/2022"}/>
        <Cargo cargo={"Designer"} tipo={"Estágio"} local={"Escritório"} cidade={"Porto Alegre/RS"} data={"03/2019 - 06/2021"}/>
        <Cargo cargo={"Assist. Adm. | Compradora"} tipo={"Full-Time"} local={"Escritório"} cidade={"Porto Alegre/RS"} data={"08/2010 - 11/2017"} />
      </ContainerSection>
      <ContainerSection>
        <Titulo>Formação</Titulo>
        <Educacao curso={"Bacharelado em Arquitetura e Urbanismo"} tipo={"Bacharelado"} instituicao={"UniRitter"} data={"2015 - 2021"} />
      </ContainerSection>
    </ContainerSobre>
  );
}
