// src/pages/CityServicePage.js
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CITIES, CITY_PAGES, SITE } from "./citiesData";

function normalizeSlug(input = "") {
  return String(input)
    .trim()
    .toLowerCase()
    .normalize("NFD") // enlève les accents
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
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export default function CityServicePage() {
  const { citySlug } = useParams();
  const slug = normalizeSlug(citySlug);

  const city = CITIES.find((c) => c.slug === slug);
  const page = CITY_PAGES[slug];

  // ✅ si slug inconnu : on affiche un message (pas une page blanche)
  if (!city || !page) {
    return (
      <section className="p-12 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Page introuvable</h1>
        <p className="mb-4">
          La ville demandée n’existe pas (ou n’est pas encore configurée).
        </p>
        <Link className="text-cuivre hover:underline" to="/services">
          Voir nos services
        </Link>
      </section>
    );
  }

  const title = `Béton ciré à ${city.name} | ${SITE.brand}`;
  const description = `Artisan béton ciré à ${city.name} : sols, salle de bain, douche à l’italienne, murs décoratifs et sur-mesure. Devis rapide.`;
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

      <h1 className="text-3xl font-bold mb-6">Béton ciré à {city.name}</h1>

      <p className="mb-8">{page.intro}</p>

      <h2 className="text-2xl font-semibold mb-4">
        Nos prestations en béton ciré à {city.name}
      </h2>

      <ul className="list-disc pl-6 space-y-2 mb-10">
        {page.services.map((s, idx) => (
          <li key={idx}>{s}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        Devis béton ciré à {city.name}
      </h2>
      <p className="mb-6">
        Vous avez un projet (surface, type de pièce, support, teinte souhaitée) ?
        Décrivez-nous votre besoin : nous vous répondons rapidement.
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
      <p>
        Nous intervenons également dans les communes proches :{" "}
        <strong>{city.nearby.join(" · ")}</strong>.
      </p>

      <div className="mt-10">
        <Link className="text-cuivre hover:underline" to="/services">
          ← Retour aux services
        </Link>
      </div>
    </section>
  );
}
