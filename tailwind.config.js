/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta principal do casamento
        marrom: {
          claro: "#f5f0eb",
          medio: "#8B6B4A",
          escuro: "#5C4329",
          chocolate: "#3A2A16",
        },
        azul: {
          gelo: "#F5F9FC",
          poalvo: "#E6F0F7",
          sereno: "#D0E3F0",
        },
        // Cores de destaque
        dourado: {
          claro: "#F4E5C2",
          medio: "#D4AF37",
          escuro: "#B38B2D",
        },
      },
      fontFamily: {
        sans: ['"Cormorant Garamond"', "serif"], // Fonte elegante
        script: ['"Great Vibes"', "cursive"], // Fonte para títulos
      },
      backgroundImage: {
        "noiva-pattern": "url('/src/assets/bg-texture.png')", // Adicione depois
      },
    },
  },
  plugins: [],
};
