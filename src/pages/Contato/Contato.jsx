import Footer from "../../components/Footer/Footer";
import { ContainerContato, DivTexto } from "./styled";
import Header from "../../components/Header/Header";

export default function Contato() {
  return (
    <>
     <Header/> 
      <ContainerContato>
        <DivTexto>
          <p>Entre em contato comigo:</p>
          <div>paulajardimf@gmail.com</div>
        </DivTexto>
      </ContainerContato>
      <Footer />
    </>
  );
}
