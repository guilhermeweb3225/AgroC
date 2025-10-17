import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header/cabeca.jsx";
import Inicio from "./pages/inicio.jsx";
import Sobre from "./pages/sobre.jsx";
import Como from "./pages/comoFunciona.jsx";
import Contato from "./pages/contato.jsx";
function App() {
  return (
    <>
    <BrowserRouter>
      <Header /> {/* O header aparece em todas as páginas */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/como-funciona" element={<Como />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;