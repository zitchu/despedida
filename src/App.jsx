import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home";
import Galeria from "./pages/Galeria";
import Agenda from "./pages/Agenda";
import Confirmacao from "./pages/Confirmacao";
import Historia from "./pages/Historia";
import { AudioProvider } from "./AudioContext";
import MusicControls from "./MusicControls";
import Lista from "./pages/Lista";
import Endereco from "./pages/Endereco";
import Obrigado from "./pages/Obrigado";
import "./App.css";

function App() {
  return (
    <AudioProvider>
      {" "}
      <div className="flex min-h-full">
        <Sidebar />

        <div className="flex-1 flex flex-col md:ml-64">
          <main className="flex-1 p-10 pb-20 bg-verde-musgo">
            <MusicControls />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/galeria" element={<Galeria />} />
              <Route path="/agenda" element={<Agenda />} />
              <Route path="/confirmacao" element={<Confirmacao />} />
              <Route path="/historia" element={<Historia />} />
              <Route path="/endereco" element={<Endereco />} />
              <Route path="/lista" element={<Lista />} />
              <Route path="/obrigado" element={<Obrigado />} />
            </Routes>
          </main>
        </div>
      </div>
    </AudioProvider>
  );
}

export default App;
