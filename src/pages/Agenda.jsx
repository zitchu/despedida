import React from "react";
import casal2 from "../components/fotos/casal2.png";

const Agenda = () => {
  return (
    <div className="min-h-screen p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold fonte-elegante text-rose-800 mb-6 shadow-text text-center">
          Programação
        </h1>
        <div className="space-y-4  fonte-elegante font-bold text-lg md:text-xl">
          <p>
            Prezados, como já dito anteriormente será um evento simples e
            simbólico mas muito importante para nós.
          </p>
          <p>
            O Salão estará aberto desde 12h e o almoço será servido por volta de
            14h
          </p>
        </div>
        <h2 className="font-bold text-xl my-2 text-rose-700 fonte-elegante">
          Nossas Cestas Especiais
        </h2>
        <p className="fonte-elegante text-xl font-bold">
          Como parte da nossa celebração, preparamos duas cestas únicas e
          repletas de surpresas — uma inspirada na doçura de um jardim secreto,
          outra no charme de um sonho parisiense.
        </p>
        {/* Textos informativos abaixo da galeria */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-gray-700 bg-verde-claro rounded-lg p-4 ">
            <h2 className="font-bold fonte-titulos text-xl mb-2 areia shadow-text2 ">
              Delicias do Jardim Secreto
            </h2>
            <p>
              Um tesouro escondido entre folhas douradas, onde cada ítem é uma
              descoberta. Bebidas selecionados como frutos colhidos na hora
              certa, chocolates que derretem como o orvalho da manhã e biscoitos
              artesanais que contam histórias de receitas guardadas. Um convite
              para saborear, sem pressa, os segredos melhor guardados de um
              jardim secreto.
            </p>
          </div>
          <div className="text-white bg-rosa-poeira rounded-lg p-4 ">
            <h2 className="font-bold fonte-titulos  mb-2 text-rose-800 shadow-text text-xl">
              La Vie En Rose
            </h2>
            <p>
              Elegância à francesa em detalhe: sabores que cantam canções de
              Bordeaux, confeitos com a doçura de Paris e delicacies que
              transportam para um café à beira do Sena. Tudo envolto num aroma
              de rosas e baunilha, como um suspiro de romance em forma de
              iguarias. Sofisticada e sensível como a petala de uma rosa.
            </p>
          </div>
          <div className="mx-2 p-1 text-sm text-rose-700">
            *Em breve imagens das cestas...
          </div>
        </div>
        <div className="relative mx-1 p-2 flex ">
          <div className="relative group">
            <div
              className="absolute inset-0 bg-cover bg-center scale-110 blur-sm z-0 animate-pulse md:animate-none opacity-20 group-hover:opacity-60 transition-all ease-in-out duration-500"
              style={{ backgroundImage: `url(${casal2})` }}
            ></div>

            <div className="relative z-[9] h-full w-full flex items-center justify-center">
              <img
                src={casal2}
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

export default Agenda;
