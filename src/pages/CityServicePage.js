// src/pages/CityServicePage.js
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CITIES, CITY_PAGES, SITE } from "./citiesData";

function normalizeSlug(input = "") {
  return String(input)
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/_/g, "-")
    .replace(/\s+/g, "-");
}

function buildFaqJsonLd(faq = []) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export default function CityServicePage() {
  const { citySlug } = useParams();
  const slug = normalizeSlug(citySlug);

  const city = CITIES.find((c) => c.slug === slug);
  const page = CITY_PAGES[slug];

  if (!city || !page) {
    return (
      <section className="p-12 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Page introuvable</h1>
        <p className="mb-4">
          La ville demandée n’existe pas ou n’est pas encore configurée.
        </p>
        <Link className="text-cuivre hover:underline" to="/services">
          Voir nos services
        </Link>
      </section>
    );
  }

  const title = `Artisan béton ciré à ${city.name} | ${SITE.siteName}`;
  const description = `Artisan spécialisé en béton ciré à ${city.name}. Réalisation de sols, salles de bain, douches italiennes et surfaces sur mesure. Devis gratuit.`;
  const canonical = `${SITE.domain}/beton-cire-${city.slug}`;

  return (
    <section className="p-12 max-w-4xl mx-auto">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">
          {JSON.stringify(buildFaqJsonLd(page.faq))}
        </script>
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">
        Artisan béton ciré à {city.name}
      </h1>

      <p className="mb-8 text-lg">
        Sols, salles de bain, douches italiennes et surfaces décoratives en
        béton ciré sur mesure à {city.name}.
      </p>

      <p className="mb-8">{page.intro}</p>

      {city.slug === "lyon" && (
        <>
          <h2 className="text-2xl font-semibold mb-4">
            Béton ciré à Lyon : un choix idéal
          </h2>
          <p className="mb-6">
            Le béton ciré est particulièrement apprécié à Lyon pour son
            esthétique contemporaine et sa capacité à s’adapter aux
            appartements anciens, lofts et rénovations haut de gamme.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Quartiers de Lyon où nous intervenons
          </h2>
          <p className="mb-8">
            Nous intervenons régulièrement dans les quartiers de Lyon :
            Presqu’île, Croix-Rousse, Part-Dieu, Confluence, Monplaisir,
            Villeurbanne et communes limitrophes.
          </p>
        </>
      )}

      <h2 className="text-2xl font-semibold mb-4">
        Nos prestations en béton ciré à {city.name}
      </h2>

      <ul className="list-disc pl-6 space-y-2 mb-10">
        {page.services.map((service, idx) => (
          <li key={idx}>{service}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        Devis béton ciré à {city.name}
      </h2>
      <p className="mb-6">
        Vous avez un projet de sol, salle de bain, douche à l’italienne ou mur
        décoratif en béton ciré à {city.name} ? Décrivez-nous votre besoin et
        nous vous répondrons rapidement.
      </p>

      <div className="mb-12">
        <Link
          to="/contact"
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600"
        >
          Demander un devis
        </Link>
      </div>

      <h2 className="text-2xl font-semibold mb-4">
        Interventions autour de {city.name}
      </h2>
      <p className="mb-10">
        Nous intervenons également dans les communes proches :
        <strong> {city.nearby.join(" · ")}</strong>.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Questions fréquentes sur le béton ciré à {city.name}
      </h2>

      <div className="space-y-6 mb-12">
        {page.faq.map((item, idx) => (
          <div key={idx}>
            <h3 className="font-semibold mb-2">{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link className="text-cuivre hover:underline" to="/services">
          ← Retour aux services
        </Link>
      </div>
    </section>
  );
}