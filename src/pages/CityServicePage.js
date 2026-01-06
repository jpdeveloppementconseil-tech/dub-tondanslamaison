// src/pages/CityServicePage.js

import React from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CITIES, CITY_PAGES, SITE } from "./citiesData";

function buildFaqJsonLd(faq = []) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

function buildLocalBusinessJsonLd(city) {
  const pageUrl = `${SITE.domain}/beton-cire/${city.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: `${SITE.brand} — Béton ciré à ${city.name}`,
    url: pageUrl,
    telephone: SITE.phone,
    email: SITE.email,
    areaServed: [
      { "@type": "City", name: city.name },
      { "@type": "AdministrativeArea", name: SITE.regionLabel },
    ],
    sameAs: [SITE.instagramUrl],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `Béton ciré à ${city.name}`,
          serviceType: "Application de béton ciré",
          areaServed: { "@type": "City", name: city.name },
        },
      },
    ],
  };
}

export default function CityServicePage() {
  const { citySlug } = useParams();

  const city = CITIES.find((c) => c.slug === citySlug);

  if (!city) {
    return (
      <div className="max-w-4xl mx-auto p-10">
        <h1 className="text-2xl font-bold mb-3">Page introuvable</h1>
        <p className="mb-4">
          La ville demandée n’existe pas (ou n’est pas encore configurée).
        </p>
        <Link to="/services" className="text-cuivre hover:underline">
          Voir nos services
        </Link>
      </div>
    );
  }

  const title = `Béton ciré à ${city.name} | ${SITE.brand}`;
  const canonical = `${SITE.domain}/beton-cire/${city.slug}`;

  const prestations = [
    `Béton ciré au sol : rénovation ou construction neuve, rendu uniforme et contemporain.`,
    `Salle de bain & douche à l’italienne : mise en œuvre adaptée aux pièces humides avec protection renforcée.`,
    `Murs décoratifs : effets minéraux et teintes personnalisées.`,
    `Plans, vasques, éviers et surfaces sur mesure : fabrication adaptée à vos dimensions.`,
    `Accompagnement complet : conseils techniques, choix des teintes et suivi du projet.`,
  ];

  const otherCities = CITY_PAGES.filter((c) => c.slug !== city.slug);

  return (
    <div className="max-w-5xl mx-auto p-10">
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href={canonical} />
        <meta name="description" content={city.metaDescription} />

        {/* OpenGraph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={city.metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(buildLocalBusinessJsonLd(city))}
        </script>
        {city.faq?.length ? (
          <script type="application/ld+json">
            {JSON.stringify(buildFaqJsonLd(city.faq))}
          </script>
        ) : null}
      </Helmet>

      {/* H1 + intro */}
      <h1 className="text-4xl font-bold mb-4">
        Béton ciré à {city.name}
      </h1>

      <p className="text-lg mb-10">
        {city.shortPitch} Nous intervenons à {city.name} et dans les environs,
        avec une préparation soignée du support, une application précise et une
        protection adaptée à l’usage (notamment en pièce humide).
      </p>

      {/* Prestations */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Nos prestations en béton ciré à {city.name}
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          {prestations.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </section>

      {/* Devis / CTA */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">Devis béton ciré à {city.name}</h2>
        <p className="mb-5">
          Vous avez un projet à {city.name} ou autour ? Décrivez-nous votre besoin
          (surface, type de pièce, support, teinte souhaitée). Nous vous répondons
          rapidement avec une estimation et les étapes d’intervention.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded"
        >
          Demander un devis
        </Link>
      </section>

      {/* Autour de la ville */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">Interventions autour de {city.name}</h2>
        <p className="mb-3">
          Nous intervenons également dans les communes proches de {city.name} :
        </p>
        <p className="font-semibold">
          {city.nearby.join(" · ")}.
        </p>
      </section>

      {/* FAQ */}
      {city.faq?.length ? (
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Questions fréquentes</h2>
          <div className="space-y-4">
            {city.faq.map((item) => (
              <div key={item.q} className="border rounded p-4">
                <p className="font-semibold mb-2">{item.q}</p>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Liens internes */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Béton ciré dans d’autres villes</h2>
        <ul className="list-disc ml-6 space-y-2">
          {otherCities.map((c) => (
            <li key={c.slug}>
              <Link to={c.path} className="text-cuivre hover:underline">
                Béton ciré à {c.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <Link to="/services" className="text-cuivre hover:underline">
            Voir tous nos services
          </Link>
          <span className="mx-2">·</span>
          <Link to="/projects" className="text-cuivre hover:underline">
            Voir nos réalisations
          </Link>
        </div>
      </section>
    </div>
  );
}
