import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CITIES } from "./citiesData"; // ✅ si citiesData.js est bien dans src/pages

export default function Services() {
  return (
    <section className="p-12 max-w-4xl mx-auto">
      <Helmet>
        <title>Béton ciré – Sols, salles de bain & douches à l’italienne</title>
        <meta
          name="description"
          content="Artisan spécialiste du béton ciré : sols, salles de bain, douches à l’italienne et surfaces décoratives. Intervention en Bourgogne et Rhône-Alpes."
        />
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">Nos services en béton ciré</h1>

      <p className="mb-6">
        Nous réalisons des projets en béton ciré sur mesure : sols, salles de bain,
        douches à l’italienne, murs décoratifs et surfaces personnalisées. Chaque
        réalisation est pensée pour être durable, esthétique et facile d’entretien.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Zones d’intervention</h2>

      <p className="mb-4">Nous intervenons principalement dans les villes suivantes :</p>

      <ul className="list-disc pl-6 space-y-2">
        {CITIES.map((city) => (
          <li key={city.slug}>
            <Link
              className="text-cuivre hover:underline"
              to={`/beton-cire/${city.slug}`}   // ✅ SLASH (route dynamique)
            >
              Béton ciré à {city.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <Link
          to="/contact"
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600"
        >
          Demander un devis
        </Link>
      </div>
    </section>
  );
}
