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

function buildLocalBusinessJsonLd(cityName, canonicalUrl, areaServed = []) {
  // Important: on n'invente pas d'adresse précise.
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.brand,
    url: SITE.domain,
    telephone: SITE.phone,
    email: SITE.email,
    sameAs: [SITE.instagram],
    areaServed: [{ "@type": "City", name: cityName }, ...areaServed.map((c) => ({ "@type": "City", name: c }))],
    mainEntityOfPage: canonicalUrl,
  };
}

export default function CityServicePage() {
  const { citySlug } = useParams(); // ex: "lyon" / "bourg-en-bresse"
  const data = CITIES[citySlug];

  if (!data) {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Page introuvable</h1>
        <p className="text-lg mb-6">
          La ville demandée n’existe pas (ou n’est pas encore configurée).
        </p>
        <Link className="text-cuivre underline" to="/services">
          Voir nos services
        </Link>
      </div>
    );
  }

  const canonicalUrl = `${SITE.domain}${data.seo.canonicalPath}`;
  const faqJsonLd = data.faq?.length ? buildFaqJsonLd(data.faq) : null;
  const businessJsonLd = buildLocalBusinessJsonLd(data.city, canonicalUrl, data.nearby || []);

  // Maillage interne : on affiche 4 autres villes (équilibré)
  const otherCities = CITY_PAGES.filter((p) => p.slug !== data.slug).slice(0, 4);

  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* SEO */}
      <Helmet>
        <title>{data.seo.title}</title>
        <meta name="description" content={data.seo.description} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph (partage) */}
        <meta property="og:title" content={data.seo.title} />
        <meta property="og:description" content={data.seo.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(businessJsonLd)}</script>
        {faqJsonLd && (
          <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        )}
      </Helmet>

      {/* H1 */}
      <h1 className="text-4xl font-bold mb-6">
        Béton ciré à {data.city} — sols, salle de bain, douche italienne & sur mesure
      </h1>

      {/* Intro */}
      <div className="text-lg space-y-4 mb-10">
        {data.intro.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>

      {/* Contexte local */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Béton ciré à {data.city} : contexte local & usages fréquents
        </h2>
        <p className="text-lg">{data.localContext}</p>
      </section>

      {/* Prestations */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Nos prestations en béton ciré à {data.city}
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-lg">
          {data.prestations.map((item) => (
            <li key={item.title}>
              <span className="font-semibold">{item.title}</span> : {item.text}
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <Link to="/services" className="text-cuivre hover:underline">
            Voir aussi la page “Services”
          </Link>
        </div>
      </section>

      {/* Avantages */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Les avantages du béton ciré pour votre projet à {data.city}
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-lg">
          {data.benefits.map((b, idx) => (
            <li key={idx}>{b}</li>
          ))}
        </ul>
      </section>

      {/* Méthode */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Notre méthode d’application (qualité & durabilité)
        </h2>
        <ol className="list-decimal pl-6 space-y-2 text-lg">
          {data.process.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Prix + Exemples */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Prix d’un béton ciré à {data.city} : ce qui fait varier un devis
        </h2>

        <p className="text-lg mb-4">
          Chaque projet est différent. Voici les critères principaux qui influencent la préparation,
          la durée du chantier et la finition finale :
        </p>

        <ul className="list-disc pl-6 space-y-2 text-lg mb-6">
          {data.priceFactors.map((p, idx) => (
            <li key={idx}>{p}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-3">
          Exemples de projets béton ciré à {data.city}
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          {data.projectExamples.map((ex, idx) => (
            <li key={idx}>{ex}</li>
          ))}
        </ul>
      </section>

      {/* CTA devis */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Devis béton ciré à {data.city}</h2>
        <p className="text-lg mb-4">
          Décrivez-nous votre besoin (surface, pièce, support, teinte souhaitée). Nous
          vous répondons rapidement avec une estimation et les étapes d’intervention.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg shadow"
        >
          Demander un devis
        </Link>
      </section>

      {/* Zone autour */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Interventions autour de {data.city}</h2>
        <p className="text-lg">
          Nous intervenons également dans les communes proches de {data.city} :{" "}
          <span className="font-semibold">{data.nearby.join(" · ")}</span>.
        </p>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">
          Questions fréquentes — béton ciré à {data.city}
        </h2>

        <div className="space-y-4">
          {data.faq.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
              <p className="text-base text-gray-700">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Maillage interne */}
      <section className="mb-2">
        <h2 className="text-2xl font-bold mb-4">Autres zones d’intervention</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          {otherCities.map((c) => (
            <li key={c.slug}>
              <Link to={c.path} className="text-cuivre hover:underline">
                Béton ciré à {c.city}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

