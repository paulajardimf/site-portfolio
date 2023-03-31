import { useState } from "react";
import Header from "./components/Header/Header";
import { GlobalStyle } from "./GlobalStyle";
import Router from "./routes/Router";

function App() {
  // const [tela, setTela] = useState(Home);

  // const trocaTela = (tela) => {
  //   setTela(tela);
  // };

  return (
    <div>
      <GlobalStyle />
      {/* <Header tela={tela} setTela={setTela} trocaTela={trocaTela} />
      {tela} */}
      <Router/>
    </div>
  );
}

export default App;
