import React from "react";
import Home from "../Home/Home";
import Sobre from "../Sobre/Sobre";
import Github from "./assets/github.svg";
import Linkedin from "./assets/linkedin.svg";
import {
  IconeTag,
  ContainerHeader,
  LinksHeader,
  ContainerRedes,
  BotaoLinkInterno,
  ContainerGlobal,
} from "./styled";

export default function Header(props) {
  return (
    <ContainerGlobal>
      <ContainerHeader>
        <IconeTag>{"</>"}</IconeTag>
        <nav>
          <LinksHeader>
            <li>
              <BotaoLinkInterno onClick={() => props.trocaTela(Home)}>
                Home
              </BotaoLinkInterno>
            </li>
            <li>
              <BotaoLinkInterno onClick={() => props.trocaTela(Sobre)}>
                Sobre
              </BotaoLinkInterno>
            </li>
            <li>Tecnologias</li>
            <li>Projetos</li>
            <li>Contato</li>
          </LinksHeader>
        </nav>
        <ContainerRedes>
          <a
            href="https://github.com/paulajardimf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/paulajardimf/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} alt="linkedin" />
          </a>
        </ContainerRedes>
      </ContainerHeader>
    </ContainerGlobal>
  );
}
