import React, { useEffect, useRef } from "react";
import teclaSound from "../../assets/tecla.mp3";

// Hook personalizado para o som
const useSound = (soundFile) => {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(soundFile);
    audioRef.current.preload = 'auto';
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [soundFile]);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(e => console.log("Erro ao reproduzir som:", e));
    }
  };

  return playSound;
};

const Footer = () => {
  const playSound = useSound(teclaSound);

  const keyRows = [
    ["L", "E", "S", "L", "L", "I", "E", "&", "J", "E", "A", "N"],
    ["A", "M", "O", "R", " ", "S", "E", "M", "P", "R", "E"],
    ["2", "0", "/", "0", "2", "/", "2", "0", "2", "2", "↵"],
  ];

  return (
    <footer className="fixed w-full bottom-0 left-0 md:pl-64">
      {/* Corpo trapezoidal */}
      <div className="bg-marrom-escuro text-blue-200 pt-12 pb-4 px-10 clip-trapezoid rounded-full shadow-lg flex justify-center items-center flex-col">
        {/* Container dos botões (centralizado) */}
        <div className="flex flex-col items-center justify-end p-4 px-6 gap-1 mb-2 bg-gray-300 rounded-4xl w-fit">
          {keyRows.map((row, rowIndex) => (
            <div 
              key={rowIndex} 
              className="flex justify-center gap-8 w-full"
              style={{
                marginLeft: rowIndex === 2 ? "1.5rem" : "0"
              }}
            >
              {row.map((keyContent, keyIndex) => (
                <button
                  key={`${rowIndex}-${keyIndex}`}
                  className={`
                    w-15 h-10 bg-marrom-medio rounded-full border-2 border-gray-600 border-b-8
                    flex items-center justify-center text-xs font-mono shadow-lg font-extrabold
                    hover:bg-yellow-500 hover:text-gray-900 transition-all duration-200
                    active:border-b-2 active:translate-y-1
                    ${rowIndex === 2 ? "mt-1" : ""}
                  `}
                  aria-label={`Tecla ${keyContent}`}
                  onClick={playSound}
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
            © {new Date().getFullYear()} Lesllie e Jean
          </p>
        </div>
      </div>

      {/* Detalhe abaulado */}
      <div className="fixed bottom-0 w-full h-4 bg-marrom-medio rounded-b-full left-0 md:pl-64"></div>
    </footer>
  );
};

export default Footer;