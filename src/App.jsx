import { useState } from "react"
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Sobre from "./components/Sobre/Sobre";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  const[tela, setTela] = useState(Sobre);
  
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
