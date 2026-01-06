// src/pages/citiesData.js

export const SITE = {
  name: "JP Développement Conseil",
  brand: "Du Béton dans la Maison",
  url: "https://dubetondanslamaison.com",
  phone: "06 98 55 66 48",
  email: "jpdeveloppementconseil@gmail.com",
  instagram: "dbdlm71",
  region: "Bourgogne – Rhône-Alpes",
};

export const CITIES = [
  { slug: "lyon", name: "Lyon" },
  { slug: "macon", name: "Mâcon" },
  { slug: "dijon", name: "Dijon" },
  { slug: "chalon-sur-saone", name: "Chalon-sur-Saône" },
  { slug: "bourg-en-bresse", name: "Bourg-en-Bresse" },
];

// Pages SEO (1 par ville)
// slug = ce qui vient après "beton-cire-" ou après "beton-cire/"
export const CITY_PAGES = {
  lyon: {
    slug: "lyon",
    city: "Lyon",
    metaTitle: "Béton ciré à Lyon | Sol, salle de bain, douche à l’italienne – Devis",
    metaDescription:
      "Artisan béton ciré à Lyon : sols, salle de bain, douche à l’italienne, murs décoratifs et plans vasques. Finition durable, devis rapide.",
    intro:
      "Vous cherchez un artisan spécialisé en béton ciré à Lyon ? Nous réalisons des surfaces continues et élégantes (sols, salles de bain, douches à l’italienne, murs décoratifs) avec une finition soignée et durable.",
    bullets: [
      "Béton ciré au sol : rénovation ou neuf, rendu uniforme et contemporain.",
      "Salle de bain & douche à l’italienne : protection renforcée, entretien facile.",
      "Murs décoratifs : effets minéraux et teintes personnalisées.",
      "Plans vasques / crédences : solutions sur mesure adaptées à votre usage.",
      "Accompagnement : conseils, choix des finitions et suivi du chantier.",
    ],
    nearby: ["Villeurbanne", "Caluire-et-Cuire", "Oullins", "Tassin-la-Demi-Lune", "Bron"],
    faq: [
      { q: "Le béton ciré est-il adapté à une douche à l’italienne ?", a: "Oui, avec une préparation du support et un système de protection adapté aux pièces humides (étanchéité + finition), le béton ciré est une excellente solution en douche." },
      { q: "Combien de temps durent les travaux ?", a: "Selon la surface et l’état du support, comptez en général quelques jours. Nous vous confirmons un planning précis après visite." },
      { q: "Comment entretenir un béton ciré ?", a: "Entretien simple : produits doux, pas d’abrasif. Nous vous conseillons sur les bons gestes et la protection à long terme." },
    ],
  },

  macon: {
    slug: "macon",
    city: "Mâcon",
    metaTitle: "Béton ciré à Mâcon | Sol, salle de bain, douche – Devis rapide",
    metaDescription:
      "Béton ciré à Mâcon : sols, salle de bain, douche à l’italienne, murs décoratifs et créations sur mesure. Artisan local, devis personnalisé.",
    intro:
      "À Mâcon et alentours, nous réalisons des projets en béton ciré sur mesure : sols, salles de bain, douches à l’italienne, murs décoratifs et surfaces techniques. Objectif : une finition haut de gamme, durable et facile d’entretien.",
    bullets: [
      "Sols en béton ciré : aspect moderne, continuité visuelle sans joints.",
      "Pièces humides : solutions adaptées (douche, salle de bain).",
      "Murs décoratifs : rendu minéral et teintes maîtrisées.",
      "Sur-mesure : plans, vasques, crédences selon contraintes du lieu.",
      "Suivi complet : conseils techniques et accompagnement finitions.",
    ],
    nearby: ["Charnay-lès-Mâcon", "Sancé", "Saint-Laurent-sur-Saône", "Crêches-sur-Saône", "Mâconnais"],
    faq: [
      { q: "Peut-on poser du béton ciré sur un carrelage existant ?", a: "Souvent oui, selon la stabilité et la préparation. Une visite permet de valider la faisabilité et la préparation nécessaire." },
      { q: "Est-ce compatible avec un chauffage au sol ?", a: "Oui, si le support est adapté et le système mis en œuvre correctement. Nous vérifions tout avant travaux." },
      { q: "Le béton ciré est-il antidérapant ?", a: "Il existe des finitions et protections qui améliorent l’adhérence, particulièrement utiles en salle de bain et douche." },
    ],
  },

  dijon: {
    slug: "dijon",
    city: "Dijon",
    metaTitle: "Béton ciré à Dijon | Sols, salle de bain, murs décoratifs – Devis",
    metaDescription:
      "Béton ciré à Dijon : sols, salle de bain, douche à l’italienne, murs et surfaces sur mesure. Finition esthétique, devis rapide et conseils.",
    intro:
      "À Dijon, nous intervenons pour des réalisations en béton ciré esthétiques et résistantes : sols, salles de bain, douches à l’italienne, murs décoratifs et éléments sur mesure. Chaque projet est adapté au support et à l’usage.",
    bullets: [
      "Rénovation ou neuf : rendu uniforme, moderne et durable.",
      "Salles de bain / douches : mise en œuvre technique pour pièce humide.",
      "Murs décoratifs : ambiance minérale, teintes personnalisées.",
      "Plans & crédences : surfaces pratiques et faciles à entretenir.",
      "Conseils & finitions : choix de teinte, protection et entretien.",
    ],
    nearby: ["Talant", "Chenôve", "Quetigny", "Fontaine-lès-Dijon", "Côte-d'Or"],
    faq: [
      { q: "Quelle est la différence entre béton ciré et microciment ?", a: "Les termes sont souvent utilisés de façon proche. L’important est la méthode de mise en œuvre (préparation, couches, protection) selon l’usage." },
      { q: "Le béton ciré se fissure-t-il ?", a: "Avec une bonne préparation du support et une mise en œuvre adaptée, on limite fortement les risques. Nous évaluons toujours le support avant." },
      { q: "Peut-on choisir la couleur ?", a: "Oui, plusieurs teintes et effets sont possibles. Nous vous guidons pour obtenir le rendu souhaité." },
    ],
  },

  "chalon-sur-saone": {
    slug: "chalon-sur-saone",
    city: "Chalon-sur-Saône",
    metaTitle: "Béton ciré à Chalon-sur-Saône | Sol, douche, salle de bain – Devis",
    metaDescription:
      "Béton ciré à Chalon-sur-Saône : sols, salle de bain, douche à l’italienne, murs décoratifs et sur mesure. Artisan local, devis rapide.",
    intro:
      "À Chalon-sur-Saône, nous réalisons des projets en béton ciré pour moderniser vos espaces : sols, murs décoratifs, salles de bain et douches à l’italienne. Une solution esthétique, continue et facile à entretenir.",
    bullets: [
      "Béton ciré au sol : rendu contemporain, surfaces sans joints.",
      "Douche à l’italienne : solution adaptée aux pièces humides.",
      "Murs décoratifs : effets minéraux, style moderne.",
      "Sur-mesure : crédences, plans et éléments adaptés.",
      "Accompagnement : conseils finitions + entretien.",
    ],
    nearby: ["Saint-Rémy", "Champforgeuil", "Châtenoy-le-Royal", "Le Creusot", "Saône-et-Loire"],
    faq: [
      { q: "Le béton ciré est-il facile d’entretien ?", a: "Oui : nettoyage doux, pas d’abrasif. La protection choisie joue un rôle important sur la tenue dans le temps." },
      { q: "Peut-on faire un béton ciré sur un escalier ?", a: "Oui, selon le support. Nous proposons une mise en œuvre adaptée et une protection résistante à l’usure." },
      { q: "Quel budget prévoir ?", a: "Le prix dépend de la surface, du support et de la finition. Nous établissons un devis personnalisé après échange/visite." },
    ],
  },

  "bourg-en-bresse": {
    slug: "bourg-en-bresse",
    city: "Bourg-en-Bresse",
    metaTitle: "Béton ciré à Bourg-en-Bresse | Sols, salle de bain, sur mesure – Devis",
    metaDescription:
      "Béton ciré à Bourg-en-Bresse : sols, douche à l’italienne, salle de bain, murs décoratifs et surfaces sur mesure. Devis rapide et suivi.",
    intro:
      "À Bourg-en-Bresse et alentours, nous réalisons des surfaces en béton ciré sur mesure : sols, murs, salles de bain, douches à l’italienne et éléments décoratifs. Une finition durable, élégante et adaptée à votre projet.",
    bullets: [
      "Sols : continuité visuelle, entretien simple.",
      "Salle de bain / douche : protection renforcée pour pièce humide.",
      "Murs décoratifs : effets maîtrisés, teintes personnalisées.",
      "Sur-mesure : crédences, plans, vasques selon contraintes.",
      "Suivi : conseils techniques et finitions.",
    ],
    nearby: ["Viriat", "Péronnas", "Saint-Denis-lès-Bourg", "Montagnat", "Ain"],
    faq: [
      { q: "Le béton ciré convient-il à une cuisine ?", a: "Oui, notamment pour les sols et crédences, avec une protection adaptée aux taches et à l’usage quotidien." },
      { q: "Combien de temps avant utilisation ?", a: "Selon les produits et protections, il faut respecter un temps de séchage/prise. On vous donne une consigne claire en fin de chantier." },
      { q: "Peut-on rénover une ancienne surface ?", a: "Oui, selon le support. Nous vérifions l’état et proposons une préparation adaptée." },
    ],
  },
};

