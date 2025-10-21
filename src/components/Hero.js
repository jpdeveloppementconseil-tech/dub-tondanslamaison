import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="relative h-[60vh] md:h-screen bg-beton flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-80"></div>
      <div className="relative z-10 bg-black/50 p-8 rounded text-white max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">L'élégance du béton ciré</h1>
        <p className="mb-6">Sur mesure pour vos espaces en Bourgogne</p>
        <Link to="/contact" className="bg-cuivre px-6 py-3 font-semibold rounded hover:bg-opacity-90">
          Demander un devis
        </Link>
      </div>
    </section>
  );
}

export default Hero;
