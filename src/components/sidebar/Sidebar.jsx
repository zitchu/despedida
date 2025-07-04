import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../fotos/logo.png";

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
        className="md:hidden fixed top-4 left-4 z-20 p-2 bg-areia texto-escuro rounded shadow-md"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`flex flex-col w-64 bg-areia  h-full text-emerald-700 fixed left-0 top-0 p-4 z-10 shadow-lg transition-transform duration-300 ease-in-out shadow-bar ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="relative inline-block">
          <img
            src={logo}
            alt="logo do casal"
            className=" backdrop-blur-lg rounded-full cursor-none"
          />
        </div>
        <div>
          <nav>
            <ul className="space-y-12 pt-16 md:mt-0 uppercase">
              <li>
                <Link
                  to="/"
                  className="hover:text-pink-800 font-medium block transform transition-transform duration-300 ease-in-out hover:translate-x-3"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/historia"
                  className="hover:text-pink-800 font-medium block transform transition-transform duration-300 ease-in-out hover:translate-x-3"
                  onClick={() => setIsOpen(false)}
                >
                  Nossa história
                </Link>
              </li>
              <li>
                <Link
                  to="/agenda"
                  className="hover:text-pink-800 font-medium block transform transition-transform duration-300 ease-in-out hover:translate-x-3"
                  onClick={() => setIsOpen(false)}
                >
                  Programação
                </Link>
              </li>
              <li>
                <Link
                  to="/galeria"
                  className="hover:text-pink-800 font-medium block transform transition-transform duration-300 ease-in-out hover:translate-x-3"
                  onClick={() => setIsOpen(false)}
                >
                  Galeria
                </Link>
              </li>
              <li>
                <Link
                  to="/lista"
                  className="hover:text-pink-800 font-medium block transform transition-transform duration-300 ease-in-out hover:translate-x-3"
                  onClick={() => setIsOpen(false)}
                >
                  Lista de presentes
                </Link>
              </li>
              <li>
                <Link
                  to="/endereco"
                  className="hover:text-pink-800 font-medium block transform transition-transform duration-300 ease-in-out hover:translate-x-3"
                  onClick={() => setIsOpen(false)}
                >
                  Endereço
                </Link>
              </li>
              <li>
                <Link
                  to="/confirmacao"
                  className="hover:text-pink-800 font-medium block transform transition-transform duration-300 ease-in-out hover:translate-x-3"
                  onClick={() => setIsOpen(false)}
                >
                  Confirmação
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
