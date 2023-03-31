import React from "react";
import Home from "../../pages/HomePage/Home";
import Sobre from "../../pages/Sobre/Sobre";
import Tecnologias from "../../pages/Tecnologias/Tecnologias";
import Projetos from "../../pages/Projetos/Projetos"
import Contato from "../../pages/Contato/Contato";
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
import { useNavigate } from "react-router-dom";
import { goToContatoPage, goToHomePage, goToProjetosPage, goToSobrePage, goToTecnologiasPage } from "../../routes/coordinator";

export default function Header(props) {
  const navigate = useNavigate();
  return (
    <ContainerGlobal>
      <ContainerHeader>
        <IconeTag>{"</>"}</IconeTag>
        <nav>
          <LinksHeader>
            <li>
              <BotaoLinkInterno onClick={() => goToHomePage(navigate)}>
                Home
              </BotaoLinkInterno>
            </li>
            <li>
              <BotaoLinkInterno onClick={() => goToSobrePage(navigate)}>
                Sobre
              </BotaoLinkInterno>
            </li>
            <li>
              <BotaoLinkInterno onClick={() => goToTecnologiasPage(navigate)}>
                Tecnologias
              </BotaoLinkInterno>
            </li>
            <li>
              <BotaoLinkInterno onClick={() => goToProjetosPage(navigate)}>
                Projetos
              </BotaoLinkInterno>
            </li>
            <li>
              <BotaoLinkInterno onClick={()=> goToContatoPage(navigate)}>
              Contato
              </BotaoLinkInterno>
            </li>
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
