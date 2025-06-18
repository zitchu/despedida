import React from "react";

const Footer = () => {

  const keyRows = [
    ["L", "E", "S", "L", "L", "I", "E", "&", "J", "E", "A", "N"],
    ["A", "M", "O", "R", " ", "S", "E", "M", "P", "R", "E"],
    ["2", "0", "/", "0", "2", "/", "2", "0", "2", "5"],
  ];

  return (
    <footer className="fixed w-full bottom-0 left-0 md:pl-64">
      <div className="bg-red-800 w-[15px] h-[30px] fixed bottom-[30%] right-[30%] z-30 overflow-visible"></div>
      <div className="bg-black w-[10px] h-[100px] fixed bottom-[20%] right-[30%] z-30 overflow-visible"></div>
      {/* Corpo trapezoidal */}
      <div className="bg-marrom-escuro text-blue-200 pt-12 pb-4 px-10 clip-trapezoid rounded-full shadow-lg">
        {/* Container dos botões (centralizado) */}
        <div className="flex flex-col items-center gap-1 mb-2">
          {keyRows.map((row, rowIndex) => (
            <div 
              key={rowIndex} 
              className="flex justify-center gap-8"
              style={{
                // Ajuste de margem para fileiras maiores/centralização
                marginLeft: rowIndex === 2 ? "1.5rem" : "0"
              }}
            >
              {row.map((keyContent, keyIndex) => (
                <button
                  key={`${rowIndex}-${keyIndex}`}
                  className={`
                    w-10 h-10 bg-marrom-medio rounded-full border-2 border-gray-600
                    flex items-center justify-center text-xs font-mono shadow-lg font-extrabold
                    hover:bg-yellow-500 hover:text-gray-900 transition-all duration-200
                    ${rowIndex === 2 ? "mt-1" : ""} // Ajuste vertical para a terceira fileira
                  `}
                  aria-label={`Tecla ${keyContent}`}
                >
                  {keyContent}
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* Texto do footer */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="font-mono text-sm opacity-80">
            © {new Date().getFullYear()} Máquina de Escrever Vintage
          </p>
        </div>
      </div>

      {/* Detalhe abaulado */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-gray-900 rounded-b-full"></div>
    </footer>
  );
};

export default Footer;