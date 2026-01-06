// src/pages/CityServicePage.js

import React from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CITY_PAGES, SITE } from "./citiesData";

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

  // Normalisation simple (évite les crash)
  const slug = (citySlug || "").toLowerCase().trim();
  const page = CITY_PAGES[slug];

  // ✅ Fallback visible (au lieu de page blanche)
  if (!page) {
    return (
      <section className="p-12 text-center">
        <Helmet>
          <title>Béton ciré – Ville non trouvée | {SITE.name}</title>
          <meta
            name="description"
            content="La ville demandée n’existe pas ou n’est pas encore configurée. Découvrez nos zones d’intervention."
          />
          <meta name="robots" content="noindex" />
        </Helmet>

        <h1 className="text-3xl font-bold mb-4">Page introuvable</h1>
        <p className="mb-6">
          La ville demandée n’existe pas (ou n’est pas encore configurée).
        </p>

        <Link to="/services" className="text-cuivre hover:underline">
          Voir nos services
        </Link>
      </section>
    );
  }

  const canonical = `${SITE.url}/beton-cire-${page.slug}`;
  const faqJsonLd = buildFaqJsonLd(page.faq || []);

  return (
    <main className="bg-white">
      <Helmet>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <link rel="canonical" href={canonical} />

        {/* OpenGraph (bonus) */}
        <meta property="og:title" content={page.metaTitle} />
        <meta property="og:description" content={page.metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />

        {/* FAQ JSON-LD */}
        {page.faq?.length ? (
          <script type="application/ld+json">
            {JSON.stringify(faqJsonLd)}
          </script>
        ) : null}
      </Helmet>

      <section className="p-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4">
          Béton ciré à {page.city}
        </h1>

        <p className="text-lg text-gray-700 mb-8">{page.intro}</p>

        <h2 className="text-2xl font-bold mb-4">
          Nos prestations en béton ciré à {page.city}
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-800 mb-10">
          {(page.bullets || []).map((b, idx) => (
            <li key={idx}>{b}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mb-3">
          Devis béton ciré à {page.city}
        </h2>
        <p className="text-gray-700 mb-6">
          Vous avez un projet (sol, salle de bain, douche, mur décoratif) à{" "}
          {page.city} ou dans les environs ? Décrivez-nous la surface, le type de
          pièce, l’état du support et la teinte souhaitée : nous vous répondons
          rapidement.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded"
        >
          Demander un devis
        </Link>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-3">
            Interventions autour de {page.city}
          </h2>
          <p className="text-gray-700">
            {(page.nearby && page.nearby.length)
              ? (
                <>
                  Nous intervenons aussi dans les communes proches :{" "}
                  <span className="font-semibold">
                    {page.nearby.join(" · ")}
                  </span>
                  .
                </>
              )
              : "Nous intervenons aussi dans les communes alentours pour étudier votre projet."
            }
          </p>
        </div>

        <div className="mt-12 border-t pt-8 text-sm text-gray-600">
          <p>
            {SITE.name} – {SITE.brand} · {SITE.region}
          </p>
          <p>
            📞 {SITE.phone} · ✉️ {SITE.email}
          </p>
          <p className="mt-2">
            <Link to="/services" className="text-cuivre hover:underline">
              Retour aux services
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
