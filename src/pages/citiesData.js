// src/pages/citiesData.js

export const SITE = {
  brand: "JP Développement Conseil",
  siteName: "Du Béton dans la Maison",
  domain: "https://dubetondanslamaison.com",
  phone: "06 98 55 66 48",
  email: "jpdeveloppementconseil@gmail.com",
};

export const CITIES = [
  {
    slug: "lyon",
    name: "Lyon",
    nearby: ["Villeurbanne", "Caluire-et-Cuire", "Oullins", "Tassin-la-Demi-Lune", "Bron"],
  },
  {
    slug: "macon",
    name: "Mâcon",
    nearby: ["Sancé", "Charnay-lès-Mâcon", "Crêches-sur-Saône", "Saint-Laurent-sur-Saône", "Hurigny"],
  },
  {
    slug: "dijon",
    name: "Dijon",
    nearby: ["Talant", "Chenôve", "Quetigny", "Longvic", "Fontaine-lès-Dijon"],
  },
  {
    slug: "chalon-sur-saone",
    name: "Chalon-sur-Saône",
    nearby: ["Saint-Rémy", "Châtenoy-le-Royal", "Champforgeuil", "Fragnes-La Loyère", "Givry"],
  },
  {
    slug: "bourg-en-bresse",
    name: "Bourg-en-Bresse",
    nearby: ["Péronnas", "Viriat", "Saint-Denis-lès-Bourg", "Jasseron", "Montagnat"],
  },
];

// Contenus SEO “équilibrés” (5 villes)
export const CITY_PAGES = {
  lyon: {
    intro:
      "Vous cherchez un artisan spécialisé en béton ciré à Lyon ? Nous réalisons des sols, salles de bain, douches à l’italienne et surfaces décoratives en béton ciré, avec une finition soignée et durable, adaptée à votre projet.",
    services: [
      "Béton ciré au sol : rénovation ou construction neuve, rendu uniforme et contemporain.",
      "Salle de bain & douche à l’italienne : systèmes adaptés aux pièces humides, protection renforcée.",
      "Murs décoratifs : effets minéraux, teintes et finitions personnalisées.",
      "Plans, vasques, crédences : fabrication sur mesure selon vos dimensions.",
      "Accompagnement : conseils techniques, choix des teintes, suivi du chantier.",
    ],
    faq: [
      { q: "Intervenez-vous à Lyon intra-muros ?", a: "Oui, nous intervenons à Lyon et dans toute sa métropole selon la nature du projet." },
      { q: "Le béton ciré convient-il aux douches ?", a: "Oui, avec le bon système d’étanchéité et de protection, il est parfaitement adapté aux pièces humides." },
      { q: "Faites-vous des devis ?", a: "Oui, contactez-nous via le formulaire : nous répondons rapidement avec une estimation et les étapes d’intervention." },
    ],
  },

  macon: {
    intro:
      "Pour un projet de béton ciré à Mâcon, nous vous accompagnons de la préparation du support à la finition. Sols, douches à l’italienne, salles de bain, murs décoratifs : un rendu élégant et facile d’entretien.",
    services: [
      "Sols en béton ciré : aspect continu, entretien simple, rendu haut de gamme.",
      "Salle de bain : application adaptée aux zones humides, protection renforcée.",
      "Douche à l’italienne : étanchéité + finitions antidérapantes si besoin.",
      "Murs et escaliers : effets minéraux maîtrisés, teintes personnalisées.",
      "Sur-mesure : plans, vasques, crédences selon contraintes du lieu.",
    ],
    faq: [
      { q: "Intervenez-vous autour de Mâcon ?", a: "Oui, nous nous déplaçons sur les communes proches et dans le secteur Bourgogne–Rhône-Alpes." },
      { q: "Quel est le délai moyen ?", a: "Cela dépend de la surface et de la préparation du support. Nous précisons le planning lors du devis." },
      { q: "Peut-on choisir la teinte ?", a: "Oui, nous proposons des teintes/finitions adaptées au style de votre intérieur." },
    ],
  },

  dijon: {
    intro:
      "À Dijon, nous réalisons des projets en béton ciré pour sols, salles de bain, douches à l’italienne et surfaces décoratives. Notre méthode vise une finition régulière, durable et cohérente avec votre intérieur.",
    services: [
      "Béton ciré au sol : rendu contemporain, continuité visuelle, résistance.",
      "Douches et salles de bain : solution esthétique adaptée aux pièces humides.",
      "Murs décoratifs : textures minérales, teintes personnalisées.",
      "Crédences & plans : surfaces sur mesure, faciles à nettoyer.",
      "Conseil & suivi : préparation support, protection, finitions.",
    ],
    faq: [
      { q: "Le béton ciré est-il fragile ?", a: "Non, avec une préparation correcte et un système de protection adapté, il est durable et résistant." },
      { q: "Peut-on rénover un sol existant ?", a: "Souvent oui, selon le support. Nous validons la faisabilité lors de l’étude." },
      { q: "Intervenez-vous en périphérie de Dijon ?", a: "Oui, nous intervenons également sur les communes proches." },
    ],
  },

  "chalon-sur-saone": {
    intro:
      "Pour vos travaux de béton ciré à Chalon-sur-Saône, nous réalisons des surfaces continues et élégantes : sols, salles de bain, douches à l’italienne, murs décoratifs et éléments sur mesure.",
    services: [
      "Sols : béton ciré uniforme, rendu moderne, entretien simple.",
      "Pièces humides : systèmes adaptés, étanchéité et protection renforcées.",
      "Murs décoratifs : effets minéraux contrôlés, choix de teintes.",
      "Escaliers : finitions solides et esthétiques.",
      "Sur-mesure : crédences, plans, vasques selon contraintes.",
    ],
    faq: [
      { q: "Faites-vous des douches en béton ciré ?", a: "Oui, avec un système complet (étanchéité + protection) adapté aux zones humides." },
      { q: "Intervenez-vous dans le Grand Chalon ?", a: "Oui, nous intervenons à Chalon-sur-Saône et dans les communes proches." },
      { q: "Comment entretenir le béton ciré ?", a: "Avec un nettoyage doux et des produits adaptés. Nous vous donnons un guide d’entretien." },
    ],
  },

  "bourg-en-bresse": {
    intro:
      "À Bourg-en-Bresse, nous réalisons des projets en béton ciré sur mesure : sols, salles de bain, douches à l’italienne, murs décoratifs et surfaces personnalisées. Objectif : une finition durable et haut de gamme.",
    services: [
      "Béton ciré au sol : continuité visuelle, style contemporain.",
      "Salle de bain : application pensée pour l’humidité, protection renforcée.",
      "Douche à l’italienne : finitions adaptées, étanchéité maîtrisée.",
      "Murs : rendu minéral, teintes personnalisées.",
      "Sur-mesure : crédences, plans, vasques selon vos besoins.",
    ],
    faq: [
      { q: "Intervenez-vous autour de Bourg-en-Bresse ?", a: "Oui, selon le projet, nous intervenons aussi sur les communes proches." },
      { q: "Proposez-vous un devis ?", a: "Oui, via le formulaire de contact. Nous répondons rapidement." },
      { q: "Le béton ciré convient-il à une cuisine ?", a: "Oui, notamment pour sols et crédences, avec une protection adaptée aux usages." },
    ],
  },
};

