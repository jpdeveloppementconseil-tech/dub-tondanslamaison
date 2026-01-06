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
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export default function CityServicePage() {
  const { citySlug } = useParams();
  const city = (citySlug || "").toLowerCase();
  const data = CITY_PAGES[city];

  // Si slug inconnu => message + lien retour
  if (!data) {
    return (
      <section className="p-12 text-center">
        <h1 className="text-2xl font-semibold">Page introuvable</h1>
        <p className="mt-2">La ville demandée n’existe pas (ou n’est pas encore configurée).</p>
        <Link className="inline-block mt-4 text-cuivre hover:underline" to="/services">
          Voir nos services
        </Link>
      </section>
    );
  }

  const cityInfo = CITIES.find((c) => c.slug === city);
  const canonical = `${SITE.siteUrl}/beton-cire-${city}`;

  return (
    <main className="p-12 max-w-4xl mx-auto">
      <Helmet>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <link rel="canonical" href={canonical} />

        {/* OpenGraph simple */}
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:url" content={canonical} />

        {/* FAQ JSON-LD */}
        {Array.isArray(data.faq) && data.faq.length > 0 && (
          <script type="application/ld+json">{JSON.stringify(buildFaqJsonLd(data.faq))}</script>
        )}
      </Helmet>

      <h1 className="text-3xl font-bold">{data.h1}</h1>
      <p className="mt-4 text-lg">{data.intro}</p>

      <h2 className="mt-10 text-2xl font-semibold">Nos prestations en béton ciré à {cityInfo?.name || data.h1}</h2>
      <ul className="mt-4 list-disc pl-6 space-y-2">
        {data.bullets.map((b, idx) => (
          <li key={idx}>{b}</li>
        ))}
      </ul>

      <section className="mt-10 p-6 rounded-xl bg-white shadow">
        <h2 className="text-xl font-semibold">{data.ctaTitle}</h2>
        <p className="mt-2">{data.ctaText}</p>

        <Link
          to="/contact"
          className="inline-block mt-5 bg-cuivre text-white px-6 py-3 rounded-lg hover:opacity-90"
        >
          Demander un devis
        </Link>
      </section>

      {cityInfo?.nearby?.length ? (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Interventions autour de {cityInfo.name}</h2>
          <p className="mt-2">
            Nous intervenons également dans les communes proches :{" "}
            <span className="font-semibold">{cityInfo.nearby.join(" · ")}</span>.
          </p>
        </section>
      ) : null}

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Zones d’intervention</h2>
        <p className="mt-2">Retrouvez aussi nos pages locales :</p>
        <ul className="mt-3 list-disc pl-6 space-y-1">
          {CITIES.map((c) => (
            <li key={c.slug}>
              <Link className="text-cuivre hover:underline" to={`/beton-cire-${c.slug}`}>
                Béton ciré à {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
