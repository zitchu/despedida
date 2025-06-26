import React from "react";

const Galeria = () => {
  return (
    <div className="min-h-screen p-8 bg-white">
      <h1 className="text-2xl md:text-4xl font-bold text-rose-800 mb-6">
        Nossa Galeria
      </h1>
      <div className="flex flex-col md:flex-row gap-4">
        {/* Espaço para as fotos */}
        <div className=" texto-cinza bg-verde-musgo rounded-lg p-1 text-justify basis-1/2">
          Como parte da nossa celebração, preparamos duas cestas únicas e
          repletas de surpresas — uma inspirada na doçura de um jardim secreto,
          outra no charme de um sonho parisiense.
        </div>
        <div className=" texto-cinza bg-verde-musgo rounded-lg p-1 text-justify basis-1/2">
          "Presentes para Nossa Nova Vida em Portugal" "Estamos começando uma
          aventura emocionante a dois em Portugal, e por isso, optamos por não
          ter uma lista de presentes tradicional. Se quiserem nos presentear,
          ficaremos imensamente gratos por qualquer contribuição via PIX, que
          nos ajudará a construir nosso novo lar com amor e esperança. Cada
          valor, por menor que seja, é um tijolo nessa jornada que mal podemos
          esperar para compartilhar com vocês no futuro!" Dados PIX: ▸ Chave:
          seuemail@casal.com (ou telefone/CPF) ▸ Nome: Fulano & Ciclano "Com
          carinho, nosso muito obrigado por fazerem parte deste capítulo tão
          especial das nossas vidas!"
        </div>
        <div className=" texto-cinza bg-verde-musgo rounded-lg p-1 text-justify basis-1/2">
          "Cesta 'Jardim das Delícias': vinhos raros, sabores artesanais e
          segredos a descobrir..." "Cesta 'La Vie en Rose': sofisticação
          francesa, doces irresistíveis e um toque de luxo discreto."
        </div>
      </div>
    </div>
  );
};

export default Galeria;
