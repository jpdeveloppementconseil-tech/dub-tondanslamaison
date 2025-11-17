import React from 'react';
import { Helmet } from "react-helmet-async";
import Hero from '../components/Hero';

function Home() {
  return (
    <div>

      {/* 🔥 SEO AVANCÉ – ÎLE-DE-FRANCE */}
      <Helmet>
        <title>Béton ciré en Île-de-France – JP Développement Conseil</title>
        <meta
          name="description"
          content="Expert du béton ciré décoratif en Île-de-France : sols, murs, douches italiennes, cuisines, escaliers et finitions haut de gamme. Intervention rapide et prestations premium."
        />
        <link rel="canonical" href="https://dubetondanslamaison.com/" />

        {/* OPEN GRAPH */}
        <meta property="og:title" content="JP Développement Conseil – Béton ciré en Île-de-France" />
        <meta
          property="og:description"
          content="Réalisation professionnelle de béton ciré sur mesure : sols, murs, salles de bain, cuisines et escaliers en Île-de-France."
        />
        <meta property="og:image" content="https://dubetondanslamaison.com/og-image.jpg" />
        <meta property="og:url" content="https://dubetondanslamaison.com/" />
        <meta property="og:type" content="website" />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Béton ciré décoratif en Île-de-France" />
        <meta
          name="twitter:description"
          content="Sols, murs, escaliers et douches italiennes en béton ciré – finitions premium."
        />
        <meta name="twitter:image" content="https://dubetondanslamaison.com/og-image.jpg" />

        {/* PRÉCHARGEMENT */}
        <link rel="preload" as="image" href="/images/hero.jpg" />
      </Helmet>

      {/* SECTION HERO */}
      <Hero />

      {/* SECTION 1 – AVANTAGES */}
      <section className="p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Spécialiste du béton ciré en Île-de-France</h2>
        <p>L'alliance parfaite entre élégance, durabilité et savoir-faire artisanal.</p>
      </section>

      {/* SECTION 2 – POURQUOI NOUS ? */}
      <section className="p-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Pourquoi choisir JP Développement Conseil ?</h3>
          <ul className="text-left list-disc ml-6 space-y-2">
            <li>Finitions haut de gamme adaptées à chaque projet</li>
            <li>Large palette de textures, teintes et effets modernes</li>
            <li>Intervention dans tout l’Île-de-France</li>
            <li>Expertise reconnue en pièces humides : cuisines, douches, salles de bains</li>
            <li>Matériaux premium et durables</li>
          </ul>
        </div>
      </section>

      {/* SECTION 3 – APPELS À ACTION */}
      <section className="p-10 text-center">
        <h3 className="text-2xl font-bold mb-4">Un projet de béton ciré ?</h3>
        <p className="mb-4">Contactez-nous pour un devis sur mesure et un accompagnement personnalisé.</p>
        <a
          href="/contact"
          className="bg-black text-white px-6 py-3 rounded-md text-lg"
        >
          Demander un devis
        </a>
      </section>

    </div>
  );
}

export default Home;
