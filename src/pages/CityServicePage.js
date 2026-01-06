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

export default function CityServicePage() {
  const { citySlug } = useParams();

  const city = CITIES.find((c) => c.slug === citySlug);
  const page = CITY_PAGES[citySlug];

  // ✅ Si l’URL ne correspond à aucune ville configurée
  if (!city || !page) {
    return (
      <section className="p-12 text-center">
        <h1 className="text-2xl font-bold">Page introuvable</h1>
        <p className="mt-3">La ville demandée n’existe pas (ou n’est pas encore configurée).</p>
        <Link className="mt-4 inline-block text-cuivre hover:underline" to="/services">
          Voir nos services
        </Link>
      </section>
    );
  }

  const canonicalDash = `${SITE.domain}/beton-cire-${city.slug}`;
  const faqJsonLd = buildFaqJsonLd(page.faq);

  return (
    <main>
      <Helmet>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <link rel="canonical" href={canonicalDash} />

        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.description} />
        <meta property="og:url" content={canonicalDash} />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <section className="p-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold">{page.h1}</h1>
          <p className="mt-4 text-lg text-gray-700">{page.intro}</p>

          <h2 className="mt-10 text-2xl font-semibold">
            Nos prestations en béton ciré à {city.name}
          </h2>

          <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
            {page.bullets.map((b, idx) => (
              <li key={idx}>{b}</li>
            ))}
          </ul>

          <div className="mt-10 p-6 rounded-lg bg-gray-50 border">
            <h2 className="text-2xl font-semibold">{page.ctaTitle}</h2>
            <p className="mt-2 text-gray-700">{page.ctaText}</p>

            <Link
              to="/contact"
              className="mt-5 inline-block bg-orange-600 text-white px-6 py-3 rounded-md hover:opacity-90"
            >
              Demander un devis
            </Link>
          </div>

          <h2 className="mt-10 text-2xl font-semibold">Interventions autour de {city.name}</h2>
          <p className="mt-2 text-gray-700">
            Nous intervenons aussi dans les communes proches :{" "}
            <strong>{city.nearby.join(" · ")}</strong>.
          </p>

          <h2 className="mt-10 text-2xl font-semibold">Questions fréquentes</h2>
          <div className="mt-4 space-y-4">
            {page.faq.map((item, idx) => (
              <div key={idx} className="border rounded-lg p-4">
                <p className="font-semibold">{item.q}</p>
                <p className="mt-1 text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-sm text-gray-600">
            <Link className="text-cuivre hover:underline" to="/services">
              ← Retour aux services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

