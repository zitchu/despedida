// Usando import.meta.glob para importar todas as imagens
const imageModules = import.meta.glob('../components/fotos/galeria/foto*.{png,jpg}');

const fotosGaleria = [];

// Processa todas as imagens encontradas
for (const path in imageModules) {
  const match = path.match(/foto(\d+)\.(png|jpg)$/);
  if (match) {
    const [, number, ext] = match;
    fotosGaleria.push({
      path,
      number: parseInt(number),
      ext
    });
  }
}

// Ordena as fotos numericamente
fotosGaleria.sort((a, b) => a.number - b.number);

// Carrega as imagens de forma assíncrona
export const loadImages = async () => {
  const loadedImages = [];
  
  for (const img of fotosGaleria) {
    try {
      const module = await imageModules[img.path]();
      loadedImages.push({
        src: module.default,
        alt: `Foto ${img.number}`,
        ext: img.ext
      });
    } catch (e) {
      console.error(`Erro ao carregar imagem ${img.path}:`, e);
    }
  }
  
  return loadedImages;
};

export default fotosGaleria;