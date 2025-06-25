import React from "react";
import casal1 from "../components/fotos/casal1.png";

const Home = () => {
  return (
    <div className="min-h-screen p-8 bg-white rounded shadow-md">
      <h1 className="text-2xl md:text-4xl font-bold fonte-titulos verde-musgo mb-6 shadow-text text-center ">
        Chá da Lesllie e do Jean
      </h1>
      <h4 className="bg-rose-100 texto-cinza bg-bege-rosado rounded-lg p-1 fonte-elegante basis-1/2">
        Bem-vindo ao nosso site de nosso chá de casamento/despedida do Brasil.
        Na verdade o evento será um almoço festivo onde convidamos nossos
        queridos amigos e familiares a estarem conosco nesse momento de
        celebração de nossa partida para o velho continente ou mais
        especificamente para a "Guiana Brasileira", "Pernambuco em Pé" ou "Mato
        Grosso do Norte".
        <br />
        Será um evento simples de almoço mas com muita alegria pra celebrar o amor
        que temos um pelo outro e por vocês. <br/>❤︎❤︎❤︎
      </h4>
      <div className="relative mx-1 p-2 flex ">
        <div className="relative group">
          <div
            className="absolute inset-0 bg-cover bg-center scale-110 blur-sm z-0 animate-pulse md:animate-none opacity-20 group-hover:opacity-60 transition-all ease-in-out duration-500"
            style={{ backgroundImage: `url(${casal1})` }}
          ></div>

          <div className="relative z-[9] h-full w-full flex items-center justify-center">
            <img
              src={casal1}
              className="h-auto max-h-full max-w-full object-contain cursor-pointer"
              alt="Foto do casal"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
