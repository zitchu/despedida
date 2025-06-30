import React from "react";
import casal4 from "../components/fotos/casal4.png";

const Historia = () => {
  return (
    <div className="min-h-screen p-8 bg-white">
      <div className="text-2xl md:text-4xl font-bold text-rose-800 mb-6">
        História
      </div>
      <div className="relative mx-1 p-2 flex flex-col">
        <div>Nossa história começa como muitas outras <s>definitivamente não foi pelo Tinder</s> on um acaso online nos trouxe proximidade</div>
        <div className="relative group">
          <div
            className="absolute inset-0 bg-cover bg-center scale-110 blur-sm z-0 animate-pulse md:animate-none opacity-20 group-hover:opacity-60 transition-all ease-in-out duration-500"
            style={{ backgroundImage: `url(${casal4})` }}
          ></div>

          <div className="relative z-[9] h-full w-full flex items-center justify-center">
            <img
              src={casal4}
              className="h-auto max-h-full max-w-full object-contain cursor-pointer"
              alt="Foto do casal"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Historia;
