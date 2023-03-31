import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import Sobre from "../pages/Sobre/Sobre";
import Tecnologias from "../pages/Tecnologias/Tecnologias";
import Projetos from "../pages/Projetos/Projetos";
import Contato from "../pages/Contato/Contato";

export default function Router() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/tecnologias" element={<Tecnologias />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  )
  
};
