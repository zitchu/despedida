import React, { useState } from "react";
import qrcode from "../components/fotos/qrcode.png";

const Lista = () => {
  return (
    <div className="min-h-[100dvh] p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-bold fonte-titulos text-rose-800 mb-6 shadow-text text-center">
          Lista de presentes?
        </h2>
        <div className="text-gray-700 fonte-elegante font-bold text-lg md:text-xl rounded p-4 ">
          <p>
            Nós estamos começando uma aventura emocionante a dois em Portugal, e por
            isso, optamos por não ter uma lista de presentes tradicional. Se
            quiserem nos presentear, ficaremos imensamente gratos por qualquer
            contribuição a nós direcionada, que nos ajudará a construir nosso
            novo lar com amor e esperança.
            <br />
            Cada valor, por menor que seja, é um tijolo nessa jornada que mal
            podemos esperar para compartilhar com vocês no futuro! 
            <br /> 
            Com carinho, nosso muito obrigado por fazerem parte deste capítulo tão
            especial das nossas vidas!
          </p>
          <p>
            Caso queira nos ajudar segue os dados PIX
            <br/> Chave CPF: 015420621-01 ▸ Nome: Jeanluiz Ferreira Porto
            Monteiro
            <br/> Banco do Brasil
          </p>
        </div>
        <div className="relative z-[9] h-full w-full flex items-center justify-center ">
          <img
            src={qrcode}
            className="h-auto max-h-full md:max-w-[50%] object-contain cursor-pointer shadow-md rounded"
            alt="qr code PIX"
          />
        </div>
      </div>
    </div>
  );
};

export default Lista;
