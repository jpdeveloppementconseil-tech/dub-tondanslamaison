// src/pages/citiesData.js

export const SITE = {
  brand: "JP Développement Conseil",
  byline: "Du Béton dans la Maison",
  domain: "https://dubetondanslamaison.com",
  phone: "06 98 55 66 48",
  email: "jpdeveloppementconseil@gmail.com",
  instagramUrl: "https://www.instagram.com/dbdlm71",
  instagramHandle: "dbdlm71",
  regionLabel: "Bourgogne – Rhône-Alpes",
};

export const CITIES = [
  {
    slug: "lyon",
    name: "Lyon",
    department: "Rhône (69)",
    nearby: ["Villeurbanne", "Caluire-et-Cuire", "Oullins", "Tassin-la-Demi-Lune", "Bron"],
    shortPitch:
      "Artisan béton ciré à Lyon : sols, salles de bain, douches à l’italienne et surfaces décoratives sur mesure.",
    metaDescription:
      "Béton ciré à Lyon : sol, salle de bain, douche italienne, murs décoratifs. Finition durable et entretien facile. Devis gratuit et accompagnement complet.",
    faq: [
      {
        q: "Quel est le prix d’un béton ciré à Lyon ?",
        a: "Le prix dépend du support, de la surface et de la finition. Après échange sur votre projet (pièce, m², état du support), nous vous donnons une estimation puis un devis détaillé.",
      },
      {
        q: "Le béton ciré est-il adapté à une salle de bain ?",
        a: "Oui, à condition d’appliquer un système de protection adapté aux pièces humides (préparation + protection renforcée). Nous vous guidons sur le bon protocole.",
      },
      {
        q: "Combien de temps dure un chantier ?",
        a: "La durée dépend de la surface et du support. En général, il faut compter plusieurs étapes (préparation, application, protections) sur quelques jours.",
      },
    ],
  },

  {
    slug: "macon",
    name: "Mâcon",
    department: "Saône-et-Loire (71)",
    nearby: ["Sancé", "Charnay-lès-Mâcon", "Saint-Laurent-sur-Saône", "Crêches-sur-Saône", "Hurigny"],
    shortPitch:
      "Béton ciré à Mâcon : rénovation et neuf pour sols, murs, salle de bain et douche à l’italienne.",
    metaDescription:
      "Béton ciré à Mâcon : sol, douche italienne, salle de bain, murs décoratifs. Résultat uniforme, moderne et durable. Devis rapide.",
    faq: [
      {
        q: "Peut-on poser du béton ciré sur du carrelage ?",
        a: "Oui, si le support est stable et bien préparé (accroche, ragréage si besoin). Nous vérifions la faisabilité et la meilleure solution.",
      },
      {
        q: "Comment entretenir un béton ciré ?",
        a: "Entretien simple : produits doux et adaptés, éviter les abrasifs. En pièce humide, la protection est essentielle pour conserver l’aspect.",
      },
      {
        q: "Faites-vous aussi les plans de travail / crédences ?",
        a: "Oui, selon les contraintes du support et l’usage. Nous proposons des finitions et protections adaptées.",
      },
    ],
  },

  {
    slug: "dijon",
    name: "Dijon",
    department: "Côte-d’Or (21)",
    nearby: ["Chenôve", "Talant", "Quetigny", "Fontaine-lès-Dijon", "Longvic"],
    shortPitch:
      "Béton ciré à Dijon : surfaces continues, rendu minéral moderne, finitions soignées et durables.",
    metaDescription:
      "Béton ciré à Dijon : sol, salle de bain, douche italienne, murs décoratifs et sur-mesure. Estimation + devis gratuit. Intervention Dijon et alentours.",
    faq: [
      {
        q: "Le béton ciré convient-il au chauffage au sol ?",
        a: "Souvent oui, selon le système et le support. On valide la compatibilité (support, fissurations, joints) avant de lancer.",
      },
      {
        q: "Est-ce que le béton ciré fissure ?",
        a: "Le risque dépend surtout du support. Une préparation sérieuse (stabilisation, traitement, joints) limite fortement les fissurations.",
      },
      {
        q: "Quel rendu puis-je choisir ?",
        a: "Teintes et effets sont personnalisables. On vous conseille selon la lumière, l’usage et le style recherché.",
      },
    ],
  },

  {
    slug: "chalon-sur-saone",
    name: "Chalon-sur-Saône",
    department: "Saône-et-Loire (71)",
    nearby: ["Saint-Rémy", "Châtenoy-le-Royal", "Lux", "Fragnes-La Loyère", "Sevrey"],
    shortPitch:
      "Béton ciré à Chalon-sur-Saône : sols, douches italiennes et finitions décoratives pour un intérieur moderne.",
    metaDescription:
      "Béton ciré à Chalon-sur-Saône : sol, douche italienne, salle de bain, murs décoratifs. Application soignée, protection renforcée en pièce humide. Devis gratuit.",
    faq: [
      {
        q: "Peut-on faire du béton ciré dans une douche à l’italienne ?",
        a: "Oui, avec une préparation et une protection renforcée adaptées aux projections d’eau et à l’usage quotidien.",
      },
      {
        q: "Quelle est la différence entre béton ciré et microciment ?",
        a: "Les termes sont souvent utilisés pour des solutions proches. L’important est le système complet (préparation + application + protection) adapté au support et à la pièce.",
      },
      {
        q: "Intervenez-vous autour de Chalon-sur-Saône ?",
        a: "Oui, nous intervenons aussi dans les communes proches selon le projet.",
      },
    ],
  },

  {
    slug: "bourg-en-bresse",
    name: "Bourg-en-Bresse",
    department: "Ain (01)",
    nearby: ["Péronnas", "Saint-Denis-lès-Bourg", "Viriat", "Jasseron", "Montagnat"],
    shortPitch:
      "Béton ciré à Bourg-en-Bresse : rénovation et neuf, rendu uniforme, moderne et facile d’entretien.",
    metaDescription:
      "Béton ciré à Bourg-en-Bresse : sol, salle de bain, douche italienne, murs décoratifs et sur-mesure. Résultat durable + accompagnement complet. Devis rapide.",
    faq: [
      {
        q: "Peut-on faire du béton ciré dans une cuisine ?",
        a: "Oui, sols et parfois crédences/plans selon le support et la protection. On adapte la finition à l’usage (graisses, eau, chocs).",
      },
      {
        q: "Combien de temps avant de pouvoir marcher dessus ?",
        a: "Selon le système utilisé, il y a un temps de séchage/prise. On vous indique le planning précis après étude du chantier.",
      },
      {
        q: "Proposez-vous un accompagnement sur les teintes ?",
        a: "Oui, nous vous aidons à choisir une teinte et un rendu cohérents avec votre intérieur et votre usage.",
      },
    ],
  },
];

// Pratique pour générer des liens
export const CITY_PAGES = CITIES.map((c) => ({
  slug: c.slug,
  name: c.name,
  path: `/beton-cire/${c.slug}`,
}));

