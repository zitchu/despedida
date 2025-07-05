import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../fotos/logo.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const linkClass =
    "font-bold fonte-elegante capitalize block transform transition-all duration-300 ease-in-out px-4 py-2 rounded-l-xl text-xl";
  const activeClass = "bg-verde-musgo text-rose-800 translate-x-4";
  const inactiveClass = "text-emerald-700 hover:text-pink-800 hover:translate-x-4";

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
        className={`flex flex-col w-64 bg-areia fixed left-0 top-0 p-4 z-10 transition-transform duration-300 ease-in-out shadow-bar-white
  ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
  h-screen overflow-auto md:h-[100dvh]
  `}
      >
        <div className="relative inline-block">
          <img
            src={logo}
            alt="logo do casal"
            className="w-28 md:w-36 lg:w-40 xl:w-48 rounded-full mx-auto my-8"
          />
        </div>
        <div>
          <nav>
            <ul className="space-y-2 md:space-y-3 pt-16 md:mt-0 uppercase">
              <li>
                <Link
                  to="/"
                  className={`${linkClass} ${
                    location.pathname === "/" ? activeClass : inactiveClass
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/historia"
                  className={`${linkClass} ${
                    location.pathname === "/historia"
                      ? activeClass
                      : inactiveClass
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Nossa história
                </Link>
              </li>
              <li>
                <Link
                  to="/agenda"
                  className={`${linkClass} ${
                    location.pathname === "/agenda"
                      ? activeClass
                      : inactiveClass
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Programação
                </Link>
              </li>
              <li>
                <Link
                  to="/galeria"
                  className={`${linkClass} ${
                    location.pathname === "/galeria"
                      ? activeClass
                      : inactiveClass
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Galeria
                </Link>
              </li>
              <li>
                <Link
                  to="/lista"
                  className={`${linkClass} ${
                    location.pathname === "/lista" ? activeClass : inactiveClass
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Lista de presentes
                </Link>
              </li>
              <li>
                <Link
                  to="/endereco"
                  className={`${linkClass} ${
                    location.pathname === "/endereco"
                      ? activeClass
                      : inactiveClass
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Endereço
                </Link>
              </li>
              <li>
                <Link
                  to="/confirmacao"
                  className={`${linkClass} ${
                    location.pathname === "/confirmacao"
                      ? activeClass
                      : inactiveClass
                  }`}
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
