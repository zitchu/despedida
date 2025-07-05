import React from "react";
import { Link } from "react-router-dom";

const Obrigado = () => {
  return (
    <div className="min-h-screen p-8 bg-white flex flex-col items-center justify-center text-center">
      {/* Ícone de confirmação */}
      <div className="mb-8 p-6 bg-rose-100 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 text-rose-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      {/* Título principal */}
      <h1 className="text-3xl md:text-4xl font-bold fonte-elegante text-rose-800 mb-6">
        Confirmação Recebida!
      </h1>

      {/* Mensagem de agradecimento */}
      <p className="text-lg md:text-xl text-emerald-700 mb-8 max-w-2xl mx-auto">
        Muito obrigado por confirmar sua presença! Sua resposta é muito
        importante para nós e nos ajuda a tornar nosso dia ainda mais especial.
      </p>

      {/* Detalhes adicionais */}
      <div className="bg-rose-50 p-6 rounded-lg border border-rose-100 mb-8 max-w-2xl w-full">
        <p className="text-rose-700 mb-2">
          <span className="font-semibold">Data:</span> 30/08/2025
        </p>
        <p className="text-rose-700">
          <span className="font-semibold">Local:</span> SHMA QC 10 Espaço Gourmet 1 e 2, Jardins Mangueiral, Jardim Botânico - DF
        </p>
      </div>

      {/* Botão para voltar */}
      <Link
        to="/"
        className="px-8 py-3 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg shadow-md transition-colors"
      >
        Voltar à Página Inicial
      </Link>

      {/* Mensagem final */}
      <p className="mt-8 text-rose-500">
        Com carinho,
        <br />
        Lesllie & Jean
      </p>
    </div>
  );
};

export default Obrigado;
