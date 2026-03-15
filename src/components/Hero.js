import React from "react";

const heroImage = "/images/hero.jpg";

function Hero() {
  return (
    <div
      className="bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${heroImage})`,
        minHeight: "calc(100vh - 64px)",
      }}
    >
      {/* overlay sombre */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* contenu */}
      <div className="relative text-center text-white px-6 py-8 backdrop-blur-md bg-black/30 rounded-lg shadow-xl max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
           Artisan béton ciré à Mâcon
        </h1>

        <p className="text-lg md:text-xl mb-6">
          Réalisation de sols, salles de bain et douches italiennes en béton ciré sur mesure.
        </p>

        <a
          href="/contact"
          className="inline-block bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-md font-semibold shadow-lg"
        >
          Demander un devis
        </a>
      </div>
    </div>
  );
}

export default Hero;

