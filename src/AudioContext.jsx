import React, { createContext, useState, useEffect, useRef } from "react";
import musica1 from "./assets/musica1.m4a";
import musica2 from "./assets/musica2.m4a";
import musica3 from "./assets/musica3.m4a";

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(() => {
    const saved = localStorage.getItem("audioState");
    return saved !== null ? JSON.parse(saved) : true;
  });

  const [volume, setVolume] = useState(() => {
    const saved = localStorage.getItem("audioVolume");
    return saved !== null ? parseFloat(saved) : 0.5;
  });

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const playlist = [
    {
      file: musica1,
      displayName: "Zé Neto e Cristiano - Amor À Primeira Esquina",
    },
    { file: musica2, displayName: "Isabella Taviani - Diga Sim Pra Mim" },
    { file: musica3, displayName: "Heaven - Boyce Avenue feat. Megan Nicole" },
  ];

  const audioRef = useRef(null);

  // Configuração inicial do áudio
  useEffect(() => {
    audioRef.current = new Audio(playlist[currentTrackIndex].file);
    audioRef.current.loop = false;
    audioRef.current.volume = volume;

    const handleEnded = () => {
      goToNextTrack();
      if (isPlaying) {
        audioRef.current
          .play()
          .catch((e) => console.log("Autoplay prevented:", e));
      }
    };

    audioRef.current.addEventListener("ended", handleEnded);

    // Inicia a reprodução automaticamente se estiver playing
    if (isPlaying) {
      audioRef.current
        .play()
        .catch((e) => console.log("Autoplay prevented:", e));
    }

    return () => {
      audioRef.current.removeEventListener("ended", handleEnded);
      audioRef.current.pause();
    };
  }, [currentTrackIndex]);

  // Persistência e controle
  useEffect(() => {
    localStorage.setItem("audioState", JSON.stringify(isPlaying));
    localStorage.setItem("audioVolume", volume.toString());

    if (audioRef.current) {
      audioRef.current.volume = volume;
      if (isPlaying) {
        audioRef.current
          .play()
          .catch((e) => console.log("Autoplay prevented:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, volume]);

  const goToNextTrack = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === playlist.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousTrack = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === 0 ? playlist.length - 1 : prevIndex - 1
    );
  };

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        volume,
        setVolume,
        currentTrackIndex,
        goToNextTrack,
        goToPreviousTrack,
        playlist,
        currentTrack: playlist[currentTrackIndex],
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
