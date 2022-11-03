import { ContainerIcones, ContainerSection, ContainerTecnologias, Texto, Titulo } from "./styled";
import Html from "./assets/html.svg";
import Css from "./assets/css.svg";
import Js from "./assets/js.svg";
import React from "./assets/react.svg";
import Git from "./assets/git.svg";
import Github from "./assets/github.svg";

export default function Tecnologias() {
  return (
    <ContainerTecnologias>
      <ContainerSection>
        <Titulo>Tecnologias</Titulo>
        <Texto>Tecnologias que estou utilizando em meus projetos.</Texto>
      </ContainerSection>
      <ContainerIcones>
        <img src={Html} alt="HTML5" />
        <img src={Css} alt="CSS3" />
        <img src={Js} alt="Javascript" />
        <img src={React} alt="React" />
        <img src={Git} alt="Git" />
        <img src={Github} alt="Github" />
      </ContainerIcones>
    </ContainerTecnologias>
  );
}
