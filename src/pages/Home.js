import React from 'react';
import Hero from '../components/Hero';

function Home() {
  return (
    <div>
      <Hero />
      <section className="p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Notre savoir-faire</h2>
        <p>Spécialistes du béton ciré décoratif, nous accompagnons vos projets d’aménagement intérieur en Bourgogne. De la préparation du support à la finition, nous mettons en œuvre des solutions esthétiques, durables et uniques.</p>
      </section>
      <section className="p-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Pourquoi choisir JP Développement Conseil ?</h3>
          <ul className="text-left list-disc ml-6">
            <li>Finitions soignées et matériaux de qualité</li>
            <li>Plus de 15 ans d'expérience</li>
            <li>Accompagnement personnalisé</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;
