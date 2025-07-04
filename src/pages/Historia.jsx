import React from "react";
import casal4 from "../components/fotos/casal4.png";

const Historia = () => {
  return (
    <div className="min-h-[100dvh] p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-2xl md:text-4xl font-bold fonte-elegante text-rose-800 mb-6 shadow-text text-center">
          História
        </div>
        <div className="relative mx-1 p-2 flex flex-col">
          <div className="fonte-elegante text-lg md:text-xl ">
            Nossa história começa como muitas outras,{" "}
            <s>definitivamente não foi pelo Tinder</s>, onde um acaso online nos
            trouxe proximidade. Vivíamos momentos diferentes em nossas vidas,
            mas, sem saber, começava ali, naquela troca de mensagens, nossa
            linda história.
            <br />
            <br />
            A naturalidade com que tudo acontecia para nós — ou melhor, a
            naturalidade com que enxergávamos nossas conversas, nossos
            encontros, nossa vontade de marcar algo juntos — impressionava.
            Ouvir um ao outro nas ligações de vídeo que as primeiras semanas nos
            impuseram se fez necessário e, ao mesmo tempo, criou uma vontade de
            estarmos juntos cada vez maior, até que essa vontade se tornasse
            **SEMPRE**. Foram necessárias muitas conversas, muitos carinhos,
            muitos beijos, muita cumplicidade. Um sempre pronto a acudir o outro
            na dificuldade; nos piores momentos, união. Nos melhores momentos,
            diversão.
            <br />
            <br />
            Um conselheiro do outro, com foco em fazer juntos o que fosse bom ou
            enfrentar o que fosse ruim. Aproveitar cada oportunidade de estarmos
            juntos e, desde cedo, nos acostumando a viver ao lado do outro, pelo
            outro, com o outro. Com o apoio dos amigos e muito amor das nossas
            famílias, a ideia de iniciar a nossa família se tornava cada vez
            mais forte.
            <br />
            <br />E agora, vamos atravessar o oceano para dar continuidade à
            nossa história juntos, para fortalecer nossos planos, nossa ideia de
            família, nossa carreira e pensar em futuros projetos nossos. Não é
            um adeus, mas sim um até breve, que pretendemos iniciar sem esquecer
            quem se fez importante em nossa estrada juntos.
          </div>

          <div className="relative group">
            <div
              className="absolute overflow-hidden inset-0 bg-cover bg-center mx-auto scale-110 md:max-w-[50%] blur-sm z-0  animate-pulse md:animate-none opacity-20 group-hover:opacity-60 transition-all ease-in-out duration-500"
              style={{ backgroundImage: `url(${casal4})` }}
            ></div>

            <div className="relative z-[9] h-full w-full flex items-center justify-center">
              <img
                src={casal4}
                className="w-auto md:max-w-[50%] object-contain cursor-pointer"
                alt="Foto do casal"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Historia;
