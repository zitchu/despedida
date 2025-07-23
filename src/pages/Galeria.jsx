import React, { useState, useEffect } from "react";
import { loadImages } from "../utils/galeriaImports";
import { loadCasamentoImages } from "../utils/casamentoImports";

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentGallery, setCurrentGallery] = useState('casamento'); // 'casamento' ou 'galeria'

  useEffect(() => {
    const loadGallery = async () => {
      setIsLoading(true);
      const loadedImages = currentGallery === 'casamento' 
        ? await loadCasamentoImages() 
        : await loadImages();
      setImages(loadedImages);
      setIsLoading(false);
    };

    loadGallery();
  }, [currentGallery]);

  if (isLoading) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center">
        <div className="text-rose-800 text-xl">Carregando galeria...</div>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] p-4 md:p-8 bg-white">
      <h1 className="text-2xl md:text-5xl font-bold fonte-titulos text-rose-800 mb-6 shadow-text text-center">
        {currentGallery === 'casamento' ? 'Casamento' : 'Namoro'}
      </h1>

      {/* Controles de paginação */}
      <div className="flex justify-center mb-8 gap-4">
        <button
          onClick={() => setCurrentGallery('casamento')}
          className={`px-4 py-2 rounded-full font-medium ${currentGallery === 'casamento' ? 'bg-rose-800 text-white' : 'bg-gray-200 text-rose-800'}`}
        >
          1 - Casamento
        </button>
        <button
          onClick={() => setCurrentGallery('galeria')}
          className={`px-4 py-2 rounded-full font-medium ${currentGallery === 'galeria' ? 'bg-rose-800 text-white' : 'bg-gray-200 text-rose-800'}`}
        >
          2 - Namoro
        </button>
      </div>

      {/* Modal para imagem ampliada */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-2 text-rose-800"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Galeria de imagens */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((foto, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 aspect-square"
            onClick={() => setSelectedImage(foto)}
          >
            <img
              src={foto.src}
              alt={foto.alt}
              className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeria;