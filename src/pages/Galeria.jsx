import React, { useState, useEffect } from "react";
import { loadImages } from "../utils/galeriaImports";

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadGallery = async () => {
      setIsLoading(true);
      const loadedImages = await loadImages();
      setImages(loadedImages);
      setIsLoading(false);
    };

    loadGallery();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-rose-800 text-xl">Carregando galeria...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8 bg-white">
      <h1 className="text-2xl md:text-4xl font-bold fonte-elegante text-rose-800 mb-6 shadow-text text-center">
        Nossa Galeria
      </h1>

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
