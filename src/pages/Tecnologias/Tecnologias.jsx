import {
  ContainerIconesUnidades,
  ContainerIcones,
  ContainerSection,
  ContainerTecnologias,
  Texto,
  Titulo,
} from "./styled";
import Html from "./assets/html.svg";
import Css from "./assets/css.svg";
import Js from "./assets/js.svg";
import React from "./assets/react.svg";
import Git from "./assets/git.svg";
import Github from "./assets/github.svg";
import Vite from "./assets/vite.svg";
import Header from "../../components/Header/Header";

export default function Tecnologias() {
  return (
    <>
      <Header />
      <ContainerTecnologias>
        <ContainerSection>
          <Titulo>Tecnologias</Titulo>
          <Texto>Tecnologias que estou utilizando em meus projetos.</Texto>
        </ContainerSection>
        <ContainerIcones>
          <ContainerIconesUnidades>
            <p>HTML 5</p>
            <img src={Html} alt="HTML5" />
          </ContainerIconesUnidades>
          <ContainerIconesUnidades>
            <p>CSS 3</p>
            <img src={Css} alt="CSS3" />
          </ContainerIconesUnidades>
          <ContainerIconesUnidades>
            <p>JavaCript</p>
            <img src={Js} alt="Javascript" />
          </ContainerIconesUnidades>
          <ContainerIconesUnidades>
            <p>React</p>
            <img src={React} alt="React" />
          </ContainerIconesUnidades>
          <ContainerIconesUnidades>
            <p>Git</p>
            <img src={Git} alt="Git" />
          </ContainerIconesUnidades>
          <ContainerIconesUnidades>
            <p>Github</p>
            <img src={Github} alt="Github" />
          </ContainerIconesUnidades>
          {/* <ContainerIconesUnidades>
          <p>Vite</p>
          <img src={Vite} alt="Vite" />
        </ContainerIconesUnidades> */}
        </ContainerIcones>
      </ContainerTecnologias>
    </>
  );
}
