import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      {/* 🔥 SEO – BOURGOGNE & RHÔNE-ALPES */}
      <Helmet>
        <title>
          Béton ciré à Lyon, Mâcon, Dijon, Chalon-sur-Saône & Bourg-en-Bresse – Du Béton dans la Maison
        </title>
        <meta
          name="description"
          content="Spécialiste du béton ciré : sols, salles de bain, douches à l’italienne et créations sur mesure (vasques, éviers). Intervention à Lyon, Mâcon, Chalon-sur-Saône, Dijon, Bourg-en-Bresse et région Bourgogne–Rhône-Alpes."
        />
        <link rel="canonical" href="https://dubetondanslamaison.com/" />

        {/* OPEN GRAPH */}
        <meta
          property="og:title"
          content="Du Béton dans la Maison – Béton ciré (sols, salle de bain, sur mesure)"
        />
        <meta
          property="og:description"
          content="Application de béton ciré pour sols, salles de bain et douches à l’italienne + vasques et éviers sur mesure. Intervention à Lyon, Mâcon, Dijon, Chalon-sur-Saône, Bourg-en-Bresse."
        />
        <meta property="og:image" content="https://dubetondanslamaison.com/og-image.jpg" />
        <meta property="og:url" content="https://dubetondanslamaison.com/" />
        <meta property="og:type" content="website" />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Béton ciré à Lyon, Mâcon, Dijon, Chalon & Bourg-en-Bresse"
        />
        <meta
          name="twitter:description"
          content="Sols, salle de bain, douche à l’italienne + vasques & éviers en béton ciré sur mesure. Bourgogne–Rhône-Alpes."
        />
        <meta name="twitter:image" content="https://dubetondanslamaison.com/og-image.jpg" />

        {/* PRÉCHARGEMENT */}
        <link rel="preload" as="image" href="/images/hero.jpg" />
      </Helmet>

      {/* SECTION HERO */}
      <Hero />

      {/* SECTION 1 – PROMESSE + ZONE */}
      <section className="p-12 text-center">
        <h1 className="text-4xl font-bold mb-4">L’élégance du béton ciré, maîtrisée dans les moindres détails</h1>
        <p className="max-w-3xl mx-auto">
          Du Béton dans la Maison réalise des <strong>sols</strong>, <strong>salles de bain</strong>,
          <strong> douches à l’italienne</strong> et des <strong>créations sur mesure</strong> (vasques, éviers)
          en béton ciré. Intervention sur <strong>Lyon</strong>, <strong>Mâcon</strong>, <strong>Chalon-sur-Saône</strong>,
          <strong> Dijon</strong>, <strong>Bourg-en-Bresse</strong> et plus largement en <strong>Bourgogne–Rhône-Alpes</strong>.
        </p>
      </section>

      {/* SECTION 2 – EXPERTISE + SERVICES (SEO RICHE) */}
      <section className="p-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Béton ciré : sols, salle de bain, douche et sur mesure</h2>
          <p className="mb-4">
            Le béton ciré offre une surface continue, esthétique et facile d’entretien. Sa tenue dans le temps dépend
            surtout de la préparation du support et du système de protection utilisé, notamment en pièce humide.
            Notre approche est technique, précise, et adaptée à chaque projet.
          </p>

          <ul className="text-left list-disc ml-6 space-y-2">
            <li><strong>Béton ciré au sol</strong> : rénovation ou neuf, aspect uniforme, entretien simple.</li>
            <li><strong>Salle de bain & douche</strong> : systèmes adaptés aux pièces humides (protection renforcée).</li>
            <li><strong>Murs décoratifs</strong> : teintes et effets maîtrisés, rendu minéral moderne.</li>
            <li><strong>Vasques & éviers sur mesure</strong> : fabrication adaptée à vos dimensions et contraintes.</li>
            <li><strong>Accompagnement</strong> : conseils teintes/finitions + suivi du projet.</li>
          </ul>
        </div>
      </section>

      {/* SECTION 3 – APPEL À ACTION */}
      <section className="p-10 text-center">
        <h3 className="text-2xl font-bold mb-4">Un projet de béton ciré ?</h3>
        <p className="mb-4">
          Sol, salle de bain, douche à l’italienne ou création sur mesure : expliquez-nous votre besoin et votre zone
          (Lyon, Mâcon, Dijon, Chalon-sur-Saône, Bourg-en-Bresse). Nous vous répondons rapidement.
        </p>
        <a href="/contact" className="bg-black text-white px-6 py-3 rounded-md text-lg">
          Demander un devis
        </a>
      </section>
    </div>
  );
}
export default Home;