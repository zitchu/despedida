// Usando import.meta.glob para importar todas as imagens do casamento
const casamentoModules = import.meta.glob(
  "../components/fotos/Casamento/civil*.jpg"
);

const fotosCasamento = [];

// Processa todas as imagens encontradas
for (const path in casamentoModules) {
  const match = path.match(/civil(\d+)\.jpg$/);
  if (match) {
    const [, number] = match;
    fotosCasamento.push({
      path,
      number: parseInt(number),
    });
  }
}

// Ordena as fotos numericamente
fotosCasamento.sort((a, b) => a.number - b.number);

// Carrega as imagens de forma assíncrona
export const loadCasamentoImages = async () => {
  const loadedImages = [];

  for (const img of fotosCasamento) {
    try {
      const module = await casamentoModules[img.path]();
      loadedImages.push({
        src: module.default,
        alt: `Foto Civil ${img.number}`,
        gallery: "casamento",
      });
    } catch (e) {
      console.error(`Erro ao carregar imagem ${img.path}:`, e);
    }
  }

  return loadedImages;
};

export default fotosCasamento;
