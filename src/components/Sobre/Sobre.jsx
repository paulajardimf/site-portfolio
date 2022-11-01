import Cargo from "./Cargo/Cargo";
import { ContainerSobre, Texto, Titulo } from "./styled";

export default function Sobre() {
  return (
    <ContainerSobre>
      <section>
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
      </section>
      <section>
        <Titulo>Experiência</Titulo>
        <Cargo cargo={"Arquiteta"} tipo={"Full-Time"} local={"Escritório"} cidade={"Porto Alegre/RS"}/>
        <Cargo cargo={"Designer"} tipo={"Estágio"} local={"Escritório"} cidade={"Porto Alegre/RS"}/>
      </section>
    </ContainerSobre>
  );
}
