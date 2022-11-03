import { useState } from "react"
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Sobre from "./components/Sobre/Sobre";
import Tecnologias from "./components/Tecnologias/Tecnologias"
import Projetos from "./components/Projetos/Projetos"
import { GlobalStyle } from "./GlobalStyle";

function App() {
  const[tela, setTela] = useState(Projetos);
  
  const trocaTela = (tela) => {
    setTela(tela)
  }


  return (
    <div>
      <GlobalStyle />
      <Header tela={tela} setTela={setTela} trocaTela={trocaTela}/>
      {tela}
    </div>
  );
}

export default App;
