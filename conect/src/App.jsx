import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header/cabeça.jsx";
import Inicio from "./pages/inicio";
import Sobre from "./pages/sobre.jsx";
function App() {
  return (
    <>
    <BrowserRouter>
      <Header /> {/* O header aparece em todas as páginas */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;