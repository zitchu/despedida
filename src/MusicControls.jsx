import React, { useContext, useState, useEffect, useRef } from "react";
import { AudioContext } from "./AudioContext";

const MusicControls = () => {
  const {
    isPlaying,
    setIsPlaying,
    volume,
    setVolume,
    currentTrackIndex,
    goToNextTrack,
    goToPreviousTrack,
    currentTrack,
  } = useContext(AudioContext);

  const textRef = useRef(null);
  const containerRef = useRef(null);
  const [textWidth, setTextWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  // Configura o efeito de texto em movimento
  useEffect(() => {
    if (textRef.current && containerRef.current) {
      setTextWidth(textRef.current.scrollWidth);
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, [currentTrack.displayName]);

  return (
    <div>
      <div className="fixed text-center bottom-4 max-w-4xl mx-auto bg-white p-1 rounded shadow-lg z-10">
        <p className="font-mono text-sm opacity-80">
          © {new Date().getFullYear()} Lesllie e Jean
        </p>
      </div>
      <div className="fixed bottom-4 right-4 bg-white bg-opacity-80 p-3 rounded shadow-lg flex flex-col md:space-y-2 z-50 min-w-[150px] max-w-[200px] md:min-w-[200px] md:max-w-[250px]">
        <div
          ref={containerRef}
          className="text-sm text-gray-800 font-medium overflow-hidden whitespace-nowrap relative h-6"
        >
          <div
            ref={textRef}
            className={`absolute ${
              textWidth > containerWidth ? "animate-scroll" : ""
            } ${
              isPlaying && textWidth > containerWidth ? "running" : "paused"
            }`}
            style={{
              animationDuration: `${Math.max(textWidth / 50, 5)}s`,
              animationIterationCount: "infinite",
              animationTimingFunction: "linear",
              transform:
                textWidth > containerWidth ? "translateX(0)" : "translateX(0)",
            }}
          >
            Tocando: {currentTrack.displayName}
          </div>
        </div>

        <div className="flex items-center justify-center space-x-1 md:space-x-3 shadow-md rounded">
          <button
            onClick={goToPreviousTrack}
            className="p-1 text-rose-600 hover:text-rose-800"
            aria-label="Música anterior"
          >
            ⏮
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 text-rose-600 hover:text-rose-800"
            aria-label={isPlaying ? "Pausar" : "Reproduzir"}
          >
            {isPlaying ? "⏸" : "▶"}
          </button>

          <button
            onClick={goToNextTrack}
            className="p-1 text-rose-600 hover:text-rose-800"
            aria-label="Próxima música"
          >
            ⏭
          </button>
        </div>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-full accent-rose-600"
          aria-label="Controle de volume"
        />

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-100% + ${containerWidth}px));
            }
          }
          .animate-scroll {
            animation-name: scroll;
          }
          .running {
            animation-play-state: running;
          }
          .paused {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </div>
  );
};

export default MusicControls;
