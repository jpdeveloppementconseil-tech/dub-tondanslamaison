import React from "react";
import heroImage from "../assets/images/hero.jpg";

function Hero() {
  return (
    <div
      className="h-[80vh] bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative text-center text-white px-6 py-8 backdrop-blur-md bg-black/30 rounded-lg shadow-xl max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          L’élégance du béton ciré
        </h1>

        <p className="text-lg md:text-xl mb-6">
          Sur mesure pour vos espaces en Bourgogne et Rhône-Alpes
        </p>

        <a
          href="/contact"
          className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-md font-semibold shadow-lg"
        >
          Demander un devis
        </a>
      </div>
    </div>
  );
}

export default Hero;

