import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Galeria from "./pages/Galeria";
import Agenda from "./pages/Agenda";
import Confirmacao from "./pages/Confirmacao";
import Historia from "./pages/Historia";
import "./App.css";

function App() {
  return (
    <div className="flex min-h-full">
      <Sidebar />

      <div className="flex-1 flex flex-col  md:ml-64">
        <main className="flex-1 p-10 pb-20 bg-areia">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/confirmacao" element={<Confirmacao />} />
            <Route path="/historia" element={<Historia/>} />
          </Routes>
        </main>
        <Footer className="" />
      </div>
    </div>
  );
}

export default App;
