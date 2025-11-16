import React from 'react';
import Hero from '../components/Hero';
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <div>

      <Helmet>
        <title>JP Développement Conseil – Spécialiste du Béton Ciré Décoratif</title>
        <meta name="description" content="Entreprise experte en béton ciré décoratif, finitions haut de gamme, rénovation intérieure et sols design à Toulouse et environs." />

        <meta property="og:title" content="JP Développement Conseil – Béton Ciré Décoratif" />
        <meta property="og:description" content="Finitions haut de gamme, accompagnement personnalisé et matériaux de qualité pour vos projets béton ciré." />
        <meta property="og:image" content="https://dubetondanslamaison.com/og-image.jpg" />
        <meta property="og:url" content="https://dubetondanslamaison.com/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JP Développement Conseil – Béton Ciré Décoratif" />
        <meta name="twitter:description" content="Finitions haut de gamme et béton ciré décoratif – Toulouse et environs." />
        <meta name="twitter:image" content="https://dubetondanslamaison.com/og-image.jpg" />
      </Helmet>

      <Hero />

      {/* ton contenu existant */}
      <section className="p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Nos services</h2>
        <p>Spécialistes du béton ciré décoratif...</p>
      </section>

      {/* etc... */}

    </div>
  );
}

export default Home;
