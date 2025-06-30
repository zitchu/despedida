import React from "react";
import casal3 from "../components/fotos/casal3.png";

const Agenda = () => {
  return (
    <div className="min-h-screen p-8 bg-white">
      <h1 className="text-2xl md:text-4xl font-bold text-rose-800 mb-6">
        Programação
      </h1>
      <div className="space-y-4 text-rose-600">
        <p>Salão aberto: 12h</p>
        <p>Almoço servido: 14h</p>
      </div>
      <div className="relative mx-1 p-2 flex ">
        <div className="relative group">
          <div
            className="absolute inset-0 bg-cover bg-center scale-110 blur-sm z-0 animate-pulse md:animate-none opacity-20 group-hover:opacity-60 transition-all ease-in-out duration-500"
            style={{ backgroundImage: `url(${casal3})` }}
          ></div>

          <div className="relative z-[9] h-full w-full flex items-center justify-center">
            <img
              src={casal3}
              className="h-auto max-h-full max-w-full object-contain cursor-pointer"
              alt="Foto do casal"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
