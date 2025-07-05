import React, { useState } from "react";
import casal3 from "../components/fotos/casal3.png";

const Endereco = () => {
  const latitude = -15.895785;
  const longitude = -47.802467;

  const enderecoUber =
    "Area Gourmet, Jardins Mangueiral - São Sebastião, Brasília - DF, 70297-400";

  return (
    <div className="min-h-[100dvh] p-2 md:p-8 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl md:text-5xl font-bold fonte-titulos text-rose-800 mb-6 shadow-text text-center">
          Localização
        </h1>

        <div className="flex flex-col md:flex-row gap-2 items-center">
          {/* Mapa */}
          <div className="w-full md:w-2/3 h-96 rounded overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d675.8777894223272!2d-47.80246653850496!3d-15.895784884166554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-BR!2sbr!4v1751642748522!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Informações do endereço */}
          <div className="w-full md:w-1/3">
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Endereço
              </h3>
              <p className="text-gray-600 mb-4">
                SHMA QC 10 Espaço Gourmet 1 e 2, Jardins Mangueiral, Jardim
                Botânico - DF
              </p>

              <div className="space-y-4">
                <a
                  href="https://maps.app.goo.gl/D9EgSk5ZZycSpCDm7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-rose-800 hover:bg-rose-600 text-white text-center px-6 py-3 rounded-lg transition-colors"
                >
                  Abrir no Google Maps
                </a>

                <a
                  href="https://waze.com/ul?ll=-15.895785,-47.802467&navigate=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-lg transition-colors"
                >
                  Abrir no Waze
                </a>

                {/* <a
                  href={`https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[formatted_address]=${encodeURIComponent(
                    enderecoUber
                  )}&dropoff[latitude]=${latitude}&dropoff[longitude]=${longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-black hover:bg-gray-800 text-white px-4 py-3 rounded-lg transition-colors"
                >
                  Pedir Uber
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-1 p-2 flex ">
          <div className="relative group">
            <div className="absolute fonte-elegante font-bold top-1 xl:top-24">
              Nos vemos lá!!!
            </div>
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
    </div>
  );
};

export default Endereco;
