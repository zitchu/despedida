import React, { useState } from "react";

const Confirmacao = () => {
  const [comAcompanhante, setComAcompanhante] = useState(false);
  const [nomeAcompanhante, setNomeAcompanhante] = useState("");
  const [rg, setRg] = useState(""); // Estado para o RG

  // Gera o link do WhatsApp dinamicamente
  const gerarLinkWhatsApp = () => {
    let mensagem = `Olá, confirmo minha presença no casamento!%0A%0ANome: [NOME]%0ARG: [RG]%0AEmail: [EMAIL]%0A`;

    if (comAcompanhante && nomeAcompanhante) {
      mensagem += `Vou levar acompanhante: ${nomeAcompanhante}`;
    } else if (comAcompanhante) {
      mensagem += `Vou levar acompanhante`;
    }

    return `https://wa.me/5561981024948?text=${mensagem}`;
  };

  return (
    <div className="min-h-screen p-8 bg-white">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold fonte-elegante text-rose-800 mb-6 shadow-text text-center">
          Confirme sua presença
        </h1>
        <div className="space-y-4  fonte-elegante font-bold text-lg md:text-xl mb-10">
          <p>
            Pedimos encarecidamente que as confirmações sejam feitas até o dia
            10 de agosto de 2025 para melhor organizar nosso evento.
          </p>
          <p className="text-rose-700 text-sm">
            * Por questões de segurança, solicitamos o número do RG para acesso
            ao local.
          </p>
        </div>

        {/* Opção via WhatsApp */}
        {/* Opção via WhatsApp */}
        <div className="mb-10 p-6 bg-rose-50 border border-rose-100 rounded-lg">
          <h2 className="text-xl font-semibold text-rose-700 mb-4 text-center">
            Confirmação rápida pelo WhatsApp
          </h2>

          <div className="space-y-4 mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="whatsapp-acompanhante"
                checked={comAcompanhante}
                onChange={(e) => setComAcompanhante(e.target.checked)}
                className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-rose-300 rounded"
              />
              <label
                htmlFor="whatsapp-acompanhante"
                className="ml-2 text-rose-700"
              >
                Vou levar acompanhante
              </label>
            </div>

            {comAcompanhante && (
              <div>
                <input
                  type="text"
                  placeholder="Nome do acompanhante"
                  value={nomeAcompanhante}
                  onChange={(e) => setNomeAcompanhante(e.target.value)}
                  className="w-full p-2 border border-rose-300 rounded focus:ring-2 focus:ring-rose-200"
                />
              </div>
            )}
          </div>

          <a
            href={gerarLinkWhatsApp()}
            className="block w-full py-3 px-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded shadow-md transition-colors text-center"
          >
            Confirmar via WhatsApp
          </a>
  
        </div>

        {/* Divisor */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-rose-200"></div>
          <span className="mx-4 text-rose-400">ou</span>
          <div className="flex-grow border-t border-rose-200"></div>
        </div>

        {/* Formulário FormSubmit */}
        <form
          target="_blank"
          action="https://formsubmit.co/monteiro.jean@hotmail.com"
          method="POST"
          className="space-y-6"
        >
          <div className="grid grid-cols-1 gap-4">
            <div>
              <input
                type="text"
                name="name"
                className="w-full p-3 border border-rose-300 rounded focus:ring-2 focus:ring-rose-200 focus:border-rose-400"
                placeholder="Nome completo"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="email"
                name="email"
                className="w-full p-3 border border-rose-300 rounded focus:ring-2 focus:ring-rose-200 focus:border-rose-400"
                placeholder="E-mail"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="rg"
                className="w-full p-3 border border-rose-300 rounded focus:ring-2 focus:ring-rose-200 focus:border-rose-400"
                placeholder="Número do RG"
                required
              />
            </div>
          </div>

          {/* Checkbox de Acompanhante */}
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="form-acompanhante"
                name="acompanhante"
                className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-rose-300 rounded"
              />
              <label htmlFor="form-acompanhante" className="ml-2 text-rose-700">
                Vou levar acompanhante
              </label>
            </div>

            <input
              type="text"
              name="nome_acompanhante"
              placeholder="Nome completo do acompanhante"
              className="w-full p-3 border border-rose-300 rounded focus:ring-2 focus:ring-rose-200 focus:border-rose-400"
            />

            <input
              type="text"
              name="rg_acompanhante"
              placeholder="RG do acompanhante"
              className="w-full p-3 border border-rose-300 rounded focus:ring-2 focus:ring-rose-200 focus:border-rose-400"
            />
          </div>

          <div>
            <textarea
              name="message"
              rows="4"
              className="w-full p-3 border border-rose-300 rounded focus:ring-2 focus:ring-rose-200 focus:border-rose-400"
              placeholder="Observações (opcional)"
            ></textarea>
          </div>

          {/* Campos hidden */}
          <input
            type="hidden"
            name="_subject"
            value="Confirmação de Casamento - Dados RG"
          />
          <input type="hidden" name="_template" value="box" />
          <input type="text" name="_honey" style={{ display: "none" }} />

          <button
            type="submit"
            className="w-full py-3 px-4 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded shadow-md transition-colors cursor-pointer"
          >
            Enviar Confirmação
          </button>
          <div className="mx-2 p-1 text-sm text-rose-700">
            Dados de RG necessários para acesso ao local
          </div>
        </form>
      </div>
    </div>
  );
};

export default Confirmacao;
