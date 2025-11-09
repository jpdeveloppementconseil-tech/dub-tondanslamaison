import React from "react";
import ServiceCard from "../components/ServiceCard";
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Nos Services
        </h2>
        <p className="text-gray-600 mb-12">
          JP Développement Conseil by Du Béton dans la Maison vous accompagne dans la conception 
          et la réalisation d’intérieurs uniques. Chaque projet est pensé dans le respect de vos envies 
          et de votre style, pour sublimer la matière et révéler vos espaces.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          <ServiceCard
            title="Béton Ciré"
            description="Revêtement décoratif et intemporel pour sols, murs, cuisines ou salles de bain. Offrez à vos espaces une finition élégante, durable et facile à entretenir."
          />
          <ServiceCard
            title="Enduits Décoratifs"
            description="Effets minéraux, texturés ou métallisés : créez une ambiance unique grâce à des finitions sur mesure alliant esthétique et authenticité."
          />
          <ServiceCard
            title="Conseil & Suivi de Projet"
            description="De la première idée à la livraison du chantier, bénéficiez d’un accompagnement professionnel, transparent et personnalisé à chaque étape."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

