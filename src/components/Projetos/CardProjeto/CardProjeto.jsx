import {
  Card,
  ContainerLinks,
  DadosProjeto,
  ImagemProjeto,
  LinhaLinks,
  Tecnologias,
  TextoProjeto,
  TituloProjeto,
} from "./styled";
import Link from "../assets/link-icon.svg";
import Github from "../assets/github-icon.svg";

export default function CardProjeto(props) {
  return (
    <Card>
      <ImagemProjeto src={props.imagem} alt="foto" />
      <DadosProjeto>
        <TituloProjeto>{props.titulo}</TituloProjeto>
        <TextoProjeto>
          {props.descricao}
        </TextoProjeto>
        <Tecnologias>Tecnologias: {props.tecnologias}</Tecnologias>
        <LinhaLinks>
          <ContainerLinks>
            <img src={Link} alt="ícone" />
            <Tecnologias><a href={props.linkSite} target="_blank" rel="noopener noreferrer">Site</a></Tecnologias>
          </ContainerLinks>
          <ContainerLinks>
            <img src={Github} alt="ícone" />
            <Tecnologias><a href={props.linkCodigo} target="_blank" rel="noopener noreferrer">Código</a></Tecnologias>
          </ContainerLinks>
        </LinhaLinks>
      </DadosProjeto>
    </Card>
  );
}
