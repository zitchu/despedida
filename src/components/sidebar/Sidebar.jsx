import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // ou qualquer outro ícone que preferir

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botão de toggle - visível apenas em mobile */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-20 p-2 bg-marrom-escuro text-blue-200 rounded"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`w-64 bg-marrom-medio h-full text-blue-200 fixed left-0 top-0 p-4 z-10 shadow-lg transition-transform duration-300 ease-in-out shadow-bar ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <nav>
          <ul className="space-y-4 mt-12 md:mt-0">
            <li>
              <Link
                to="/"
                className="hover:text-blue-800 font-medium block"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/galeria"
                className="hover:text-blue-800 font-medium block"
                onClick={() => setIsOpen(false)}
              >
                Galeria
              </Link>
            </li>
            <li>
              <Link
                to="/agenda"
                className="hover:text-blue-800 font-medium block"
                onClick={() => setIsOpen(false)}
              >
                Programação
              </Link>
            </li>
            <li>
              <Link
                to="/confirmacao"
                className="hover:text-blue-800 font-medium block"
                onClick={() => setIsOpen(false)}
              >
                Confirmação
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;