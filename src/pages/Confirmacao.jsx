import React from "react";

const Confirmacao = () => {
  return (
    <div className="min-h-screen p-8 bg-white">
      <h1 className="text-2xl md:text-4xl font-bold text-rose-800 mb-6">Confirmação de Presença</h1>
      <form className="max-w-md space-y-4">
        <input 
          type="text" 
          placeholder="Seu nome" 
          className="w-full p-2 border border-rose-300 rounded"
        />
        <button 
          type="submit" 
          className="px-4 py-2 bg-rose-600 text-white rounded hover:bg-rose-700"
        >
          Confirmar
        </button>
      </form>
    </div>
  );
};

export default Confirmacao;