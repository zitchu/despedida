import React from "react";
import casal2 from "../components/fotos/casal2.png";
import cesta1 from "../components/fotos/cesta1.jpg";
import cesta2 from "../components/fotos/cesta2.jpg";
import cesta12 from "../components/fotos/cesta12.jpg";
import cesta21 from "../components/fotos/cesta21.jpg";
import cestas from "../components/fotos/cestas.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Agenda = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: true,
  };

  const cestasImages = [
    { src: cesta1, alt: "Cesta Delícias do Jardim Secreto" },
    { src: cesta2, alt: "Cesta La Vie En Rose" },
    { src: cesta12, alt: "Delicias diversas" },
    { src: cesta21, alt: "Aromas e encantos" },
    { src: cestas, alt: "Um mix de sabores e cores" },
  ];

  return (
    <div className="min-h-[100dvh] p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-5xl font-bold fonte-titulos text-rose-800 mb-6 shadow-text text-center">
          Programação
        </h1>
        <div className="space-y-4 fonte-elegante font-medium text-lg md:text-xl">
          <p>
            Prezados, como já dito anteriormente será um evento simples e
            simbólico mas muito importante para nós. Teremos além do almoço:
            refrigerantes, sucos, água e{" "}
            <strong className="text-rose-600">chope artesanal!!!</strong> Mas
            para além disso recomendamos que levem as bebidas de sua preferência
            que não estejam inclusas.
          </p>
          <p>
            O Salão estará aberto desde 12h e o almoço será servido por volta de
            13h30
          </p>
        </div>
        <h2 className="font-medium text-xl my-2 text-rose-700 fonte-elegante">
          Nossas Cestas Especiais
        </h2>
        <p className="fonte-elegante text-xl font-medium">
          Como parte da nossa celebração, preparamos duas cestas únicas e
          repletas de surpresas — uma inspirada na doçura de um jardim secreto,
          outra no charme de um sonho parisiense.
          <br />
          <br />
          Faremos sorteios das cestas para os convidados para dividir um pouco
          da nossa alegria com vocês.
        </p>
        {/* Textos informativos abaixo da galeria */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-gray-700 bg-verde-claro rounded-lg p-4 ">
            <h2 className="font-bold fonte-titulos text-3xl mb-2 areia shadow-text2 ">
              Delicias do Jardim Secreto
            </h2>
            <p className="fonte-cardapio">
              Um tesouro escondido entre folhas douradas, onde cada ítem é uma
              descoberta. Bebidas selecionados como frutos colhidos na hora
              certa, chocolates que derretem como o orvalho da manhã e biscoitos
              artesanais que contam histórias de receitas guardadas. Um convite
              para saborear, sem pressa, os segredos melhor guardados de um
              jardim secreto.
            </p>
          </div>
          <div className="text-white bg-rosa-poeira rounded-lg p-4 ">
            <h2 className="font-bold fonte-titulos mb-2 text-rose-800 shadow-text text-3xl">
              La Vie En Rose
            </h2>
            <p className="fonte-cardapio">
              Elegância à francesa em detalhe: sabores que cantam canções de
              Bordeaux, confeitos com a doçura de Paris e delicacies que
              transportam para um café à beira do Sena. Tudo envolto num aroma
              de rosas e baunilha, como um suspiro de romance em forma de
              iguarias. Sofisticada e sensível como a petala de uma rosa.
            </p>
          </div>
          
          {/* Carrossel de imagens substituindo o texto */}
          <div className="md:col-span-2 mt-6">
            <Slider {...settings}>
              {cestasImages.map((image, index) => (
                <div key={index} className="px-2">
                  <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white font-medium">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
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