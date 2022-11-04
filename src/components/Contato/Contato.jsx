import Footer from "./Footer/Footer";
import { ContainerContato, DivTexto } from "./styled";

export default function Contato() {
  return (
    <div>
      <ContainerContato>
        <DivTexto>
          <p>Entre em contato comigo:</p>
          <div>paulajardimf@gmail.com</div>
        </DivTexto>
      </ContainerContato>
      <Footer />
    </div>
  );
}
