import React, { useEffect, useRef, useState } from "react";
import teclaSound from "../../assets/tecla.mp3";
import { KeyboardMusic } from "lucide-react";

// Hook personalizado para o som
const useSound = (soundFile) => {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(soundFile);
    audioRef.current.preload = "auto";

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
      audioRef.current
        .play()
        .catch((e) => console.log("Erro ao reproduzir som:", e));
    }
  };

  return playSound;
};

const Footer = () => {
  const playSound = useSound(teclaSound);
  const [activeKeys, setActiveKeys] = useState([]);
  const timeoutRefs = useRef([]);

  const keyRows = [
    ["L", "E", "S", "L", "L", "I", "E", "&", "J", "E", "A", "N"],
    ["A", "M", "O", "R", "❤︎", "S", "E", "M", "P", "R", "E"],
    ["3", "0", "/", "0", "8", "/", "2", "0", "2", "5", "↵"],
  ];

  const handleKeyPress = (keyContent) => {
    playSound();

    const newKey = {
      id: Date.now(),
      content: keyContent,
    };

    setActiveKeys((prev) => [...prev, newKey]);

    const timeoutId = setTimeout(() => {
      setActiveKeys((prev) => prev.filter((k) => k.id !== newKey.id));
    }, 2000);

    timeoutRefs.current.push(timeoutId);
  };

  useEffect(() => {
    return () => {
      timeoutRefs.current.forEach(clearTimeout);
    };
  }, []);

  return (
    <footer className="fixed w-full bottom-0 left-0 md:pl-64 z-10">
      {/* Container para as teclas ativas (em linha) */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-4 mb-4 flex gap-3 justify-center">
        {activeKeys.map((keyObj) => (
          <div
            key={keyObj.id}
            className="text-4xl font-bold text-dourado bg-vinho-suave rounded-full w-16 h-16 flex items-center justify-center shadow-lg mx-auto"
            style={{
              animation: "pingOnce 2s cubic-bezier(0.4, 0, 0.2, 1) forwards",
            }}
          >
            {keyObj.content}
          </div>
        ))}
      </div>

      {/* Restante do seu footer... */}
      <div className="bronze-button inner-shadow-dark-sm h-32 md:h-fit text-blue-200 pt-12 pb-4 px-10 clip-trapezoid rounded-full shadow-lg flex justify-center items-center flex-col">
        {/* Container dos botões */}
        <div className="flex flex-col items-center justify-end md:p-4 px-6 md:gap-1 mb-2 bg-gray-300 inner-shadow-dark rounded-4xl w-fit">
          {keyRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex justify-center gap-1 md:gap-2 xl:gap-6 2xl:gap-8 w-full"
              style={{
                marginLeft: rowIndex === 2 ? "1.5rem" : "0",
              }}
            >
              {row.map((keyContent, keyIndex) => (
                <button
                  key={`${rowIndex}-${keyIndex}`}
                  className={`
                    w-6 md:w-10 lg:w-12 xl:w-15 h-8 md:h-10 bg-vinho-suave rounded-full border-2 border-gray-600 border-b-8
                    flex items-center justify-center text-xs font-mono shadow-lg inner-shadow-dark-sm font-extrabold
                    hover:bg-[#FFD8B8] hover:text-gray-900 transition-all duration-200
                    active:border-b-2 active:translate-y-1
                    ${rowIndex === 2 ? "mt-1" : ""}
                  `}
                  aria-label={`Tecla ${keyContent}`}
                  onClick={() => handleKeyPress(keyContent)}
                >
                  {keyContent}
                </button>
              ))}
            </div>
          ))}
        </div>

        <div className="text-center max-w-4xl mx-auto">
          
          <p className="font-mono text-sm opacity-80">
            © {new Date().getFullYear()} Lesllie e Jean
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


