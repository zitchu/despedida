import React from "react";
import casal1 from "../components/fotos/casal1.png";

const Home = () => {
  return (
    <div className="min-h-[100dvh] p-8 bg-white rounded shadow-md ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold fonte-elegante text-rose-800 mb-6 shadow-text text-center ">
          Chá da Lesllie e do Jean
        </h1>
        <h2 className="font-bold text-2xl my-2 text-rose-800 fonte-elegante">
          Dia 30 de agosto de 2025, você é nosso(a) convidado(a):
        </h2>
        <h4 className=" fonte-elegante text-lg md:text-xl ">
          Bem-vindo ao nosso site de nosso "chá de casamento/despedida do
          Brasil". Na verdade o evento será um almoço festivo onde convidamos
          nossos queridos amigos e familiares a estarem conosco nesse momento de
          celebração de nossa partida para o velho continente ou mais
          especificamente para a "Guiana Brasileira" ou seja{" "}
          <b className="text-white font-extrabold bg-green-700 rounded-l-lg pl-1">
            Po
          </b>
          <b className="text-white bg-yellow-400 font-extrabold">r</b>
          <b className="text-white bg-red-700 rounded-r-lg pr-1 font-extrabold">
            tugal
          </b>
          .
          <br />
          <br />
          Será um evento simples de almoço mas com muita alegria pra celebrar o
          amor que temos um pelo outro e por vocês. <br />
          <div className="w-full flex opacity-70  justify-center m-2">
            <b className="text-white font-extrabold bg-green-700 rounded-l-lg pl-1">
              ❤︎
            </b>
            <b className="text-white font-extrabold bg-yellow-400 px-1">❤︎</b>
            <b className="text-white font-extrabold bg-red-700 rounded-r-lg pr-1">
              ❤︎
            </b>
          </div>
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
    </div>
  );
};

export default Home;
