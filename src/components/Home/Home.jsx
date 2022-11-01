import { ContainerPai } from "../Sobre/Cargo/styled";
import Foto_perfil from "./assets/ARU211_09473.jpg";
import { ContainerHome, DivTexto, FotoPerfil } from "./styled";

export default function Home() {
  return (
    <ContainerPai>
      <ContainerHome>
        <DivTexto>
          <p>Olá, &#128075; </p><p>Meu nome é Paula Jardim</p>
        </DivTexto>
        <FotoPerfil src={Foto_perfil} alt="foto de perfil" />
      </ContainerHome>
    </ContainerPai>
  );
}
