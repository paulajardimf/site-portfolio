import Header from "../../components/Header/Header";
import {
  ContainerIconesUnidades,
  ContainerIcones,
  ContainerSection,
  ContainerTecnologias,
  Texto,
  Titulo,
} from "./styled";
import html from "./assets/html.svg";
import css from "./assets/css.svg";
import js from "./assets/js.svg";
import react from "./assets/react.svg";
import git from "./assets/git.svg";
import github from "./assets/github.svg";
import vite from "./assets/vite.svg";
import chakra from "./assets/chakra-ui.png";
import next from "./assets/next.svg";
import node from "./assets/node.svg";
import typescript from "./assets/typescript.svg";
import sqlite from "./assets/sqlite.svg";
import figma from "./assets/figma.svg";
import photoshop from "./assets/photoshop.svg";
import illustrator from "./assets/illustrator.svg";

export default function Tecnologias() {
  return (
    <>
      <Header />
      <ContainerTecnologias>
        <ContainerSection>
          <Titulo>Tecnologias</Titulo>
          <Texto>Tecnologias utilizo em meus projetos.</Texto>
        </ContainerSection>
        <ContainerIcones>
          <ContainerIconesUnidades>
            <p>HTML 5</p>
            <img src={html} alt="HTML5" />
          </ContainerIconesUnidades>
          <ContainerIconesUnidades>
            <p>CSS 3</p>
            <img src={css} alt="CSS3" />
          </ContainerIconesUnidades>
          <ContainerIconesUnidades>
            <p>JavaCript</p>
            <img src={js} alt="Javascript" />
          </ContainerIconesUnidades>
          <ContainerIconesUnidades>
            <p>React</p>
            <img src={react} alt="React" />
          </ContainerIconesUnidades>
          <ContainerIconesUnidades>
            <p>Git</p>
            <img src={git} alt="Git" />
          </ContainerIconesUnidades>
          <ContainerIconesUnidades>
            <p>Github</p>
            <img src={github} alt="Github" />
          </ContainerIconesUnidades>
          <ContainerIconesUnidades>
            <p>Chakra UI</p>
            <img src={chakra} alt="Chakra UI" />
          </ContainerIconesUnidades>
          <ContainerIconesUnidades>
            <p>Vite JS</p>
            <img src={vite} alt="Vite JS" />
          </ContainerIconesUnidades>
          <ContainerIconesUnidades>
            <p>Next JS</p>
            <img src={next} alt="Next JS" />
          </ContainerIconesUnidades>
          <ContainerIconesUnidades>
            <p>Node JS</p>
            <img src={node} alt="Node JS" />
          </ContainerIconesUnidades>
          <ContainerIconesUnidades>
            <p>Typescript</p>
            <img src={typescript} alt="Typescript" />
          </ContainerIconesUnidades>
          <ContainerIconesUnidades>
            <p>SQLite</p>
            <img src={sqlite} alt="SQLite" />
          </ContainerIconesUnidades>
          <ContainerIconesUnidades>
            <p>Figma</p>
            <img src={figma} alt="Figma" />
          </ContainerIconesUnidades>
          <ContainerIconesUnidades>
            <p>Photoshop</p>
            <img src={photoshop} alt="Photoshop" />
          </ContainerIconesUnidades>
          <ContainerIconesUnidades>
            <p>Illustrator</p>
            <img src={illustrator} alt="Illustrator" />
          </ContainerIconesUnidades>
        </ContainerIcones>
      </ContainerTecnologias>
    </>
  );
}
