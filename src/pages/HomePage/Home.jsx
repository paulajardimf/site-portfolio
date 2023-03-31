// import { ContainerPai } from "../Sobre/Cargo/styled";
import { ContainerPai } from "../../components/Cargo/styled";
import Header from "../../components/Header/Header";
import Foto_perfil from "./assets/ARU211_09473.jpg";
import { ContainerHome, DivTexto, FotoPerfil } from "./styled";

export default function Home() {
  return (
    <>
    <Header/>
    <ContainerPai>
      <ContainerHome>
        <DivTexto>
          <p>Olá, &#128075; </p>
          <p>Meu nome é Paula Jardim,</p>
        </DivTexto>
        <FotoPerfil src={Foto_perfil} alt="foto de perfil" />
      </ContainerHome>
    </ContainerPai>
    </>
  );
}
