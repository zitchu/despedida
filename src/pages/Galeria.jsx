import React from "react";

const Galeria = () => {
  return (
    <div className="min-h-screen p-8 bg-white">
      <h1 className="text-2xl md:text-4xl font-bold text-rose-800 mb-6">Nossa Galeria</h1>
      <div className="grid grid-cols-2 gap-4">
        {/* Espaço para as fotos */}
        <div className="bg-rose-100 h-40"></div>
        <div className="bg-rose-100 h-40"></div>
      </div>
    </div>
  );
};

export default Galeria;