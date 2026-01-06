// src/pages/citiesData.js

export const SITE = {
  brand: "JP Développement Conseil",
  byline: "Du Béton dans la Maison",
  siteUrl: "https://dubetondanslamaison.com",
  phone: "06 98 55 66 48",
  email: "jpdeveloppementconseil@gmail.com",
  serviceRegion: "Bourgogne–Rhône-Alpes",
};

// Slugs utilisés dans les URLs : /beton-cire-<slug>
export const CITIES = [
  { slug: "lyon", name: "Lyon", nearby: ["Villeurbanne", "Caluire-et-Cuire", "Oullins", "Tassin-la-Demi-Lune", "Bron"] },
  { slug: "macon", name: "Mâcon", nearby: ["Charnay-lès-Mâcon", "Sancé", "Crêches-sur-Saône", "Saint-Laurent-sur-Saône", "Hurigny"] },
  { slug: "dijon", name: "Dijon", nearby: ["Chenôve", "Talant", "Quetigny", "Chevigny-Saint-Sauveur", "Fontaine-lès-Dijon"] },
  { slug: "chalon-sur-saone", name: "Chalon-sur-Saône", nearby: ["Saint-Rémy", "Châtenoy-le-Royal", "Champforgeuil", "Lux", "Crissey"] },
  { slug: "bourg-en-bresse", name: "Bourg-en-Bresse", nearby: ["Péronnas", "Saint-Denis-lès-Bourg", "Viriat", "Montagnat", "Tossiat"] },
];

// Contenu SEO équilibré (même structure pour chaque ville)
export const CITY_PAGES = {
  lyon: {
    title: "Béton ciré à Lyon | Sols, salle de bain, douche & sur mesure",
    description:
      "Artisan béton ciré à Lyon : sol, salle de bain, douche à l’italienne, murs et surfaces sur mesure. Devis rapide, finitions soignées.",
    h1: "Béton ciré à Lyon",
    intro:
      "Vous cherchez un artisan spécialisé en béton ciré à Lyon ? Nous réalisons des sols, salles de bain, douches à l’italienne et surfaces décoratives en béton ciré, avec une finition durable et facile d’entretien.",
    bullets: [
      "Béton ciré au sol : rénovation ou construction neuve, rendu uniforme et contemporain.",
      "Salle de bain & douche à l’italienne : mise en œuvre adaptée aux pièces humides avec protection renforcée.",
      "Murs décoratifs : effets minéraux, teintes personnalisées et rendu élégant.",
      "Plans vasques, éviers et surfaces sur mesure : fabrication adaptée à vos dimensions.",
      "Accompagnement : conseils techniques, choix des teintes, suivi du projet.",
    ],
    ctaTitle: "Devis béton ciré à Lyon",
    ctaText:
      "Décrivez votre besoin (surface, pièce, support, teinte souhaitée). Nous vous répondons rapidement avec une estimation et les étapes d’intervention.",
    faq: [
      { q: "Le béton ciré est-il adapté aux salles de bain à Lyon ?", a: "Oui, avec une préparation rigoureuse du support et une protection adaptée (système étanche + finitions), il est parfaitement compatible avec les pièces humides." },
      { q: "Quel délai pour un chantier béton ciré ?", a: "Le délai dépend de la surface, du support et des temps de séchage. Après échange, nous vous donnons un planning clair." },
    ],
  },

  macon: {
    title: "Béton ciré à Mâcon | Sols, douche & salle de bain",
    description:
      "Béton ciré à Mâcon : sols, murs, douche à l’italienne, salle de bain, plans de travail. Finition soignée, devis rapide.",
    h1: "Béton ciré à Mâcon",
    intro:
      "À Mâcon et alentours, nous réalisons vos projets en béton ciré : sols, murs, douche à l’italienne et surfaces sur mesure, avec un rendu uniforme et moderne.",
    bullets: [
      "Sols en béton ciré : aspect continu, entretien simple.",
      "Douche à l’italienne : protection renforcée pour pièce humide.",
      "Salle de bain : finitions adaptées (antidérapant possible selon besoin).",
      "Murs décoratifs : teintes et effets maîtrisés.",
      "Sur mesure : plans vasques / crédences / plans de travail.",
    ],
    ctaTitle: "Demander un devis à Mâcon",
    ctaText:
      "Expliquez-nous votre projet (pièce, surface, support, rendu attendu). Nous vous proposons une solution adaptée et un devis rapide.",
    faq: [
      { q: "Le béton ciré nécessite-t-il beaucoup d’entretien ?", a: "Non : un entretien régulier doux suffit. La durabilité dépend surtout de la bonne protection et de l’usage." },
      { q: "Peut-on poser du béton ciré sur un carrelage existant ?", a: "Souvent oui, après préparation et primaire adaptés. On vérifie la stabilité du support avant." },
    ],
  },

  dijon: {
    title: "Béton ciré à Dijon | Artisan, sol & salle de bain",
    description:
      "Artisan béton ciré à Dijon : sol, murs, douche, salle de bain, surfaces sur mesure. Résultat durable, esthétique, devis rapide.",
    h1: "Béton ciré à Dijon",
    intro:
      "Vous avez un projet de béton ciré à Dijon ? Nous vous accompagnons de la préparation du support jusqu’aux finitions, pour un rendu minéral moderne et durable.",
    bullets: [
      "Béton ciré au sol : rénovation ou neuf, rendu uniforme.",
      "Salle de bain & douche : systèmes adaptés aux pièces humides.",
      "Murs décoratifs : effets et teintes personnalisées.",
      "Plans de travail / crédences : surfaces élégantes et résistantes.",
      "Conseils et suivi : choix techniques, finitions, protection.",
    ],
    ctaTitle: "Devis béton ciré à Dijon",
    ctaText:
      "Dites-nous ce que vous souhaitez (sol, douche, mur, sur mesure). Nous vous répondons rapidement.",
    faq: [
      { q: "Le béton ciré est-il résistant ?", a: "Oui, à condition que la préparation du support et la protection soient adaptées à l’usage (pièce humide, passage, etc.)." },
      { q: "Peut-on choisir la teinte ?", a: "Oui, nous proposons des teintes/effets variés et on valide ensemble le rendu souhaité." },
    ],
  },

  "chalon-sur-saone": {
    title: "Béton ciré à Chalon-sur-Saône | Sols & douche à l’italienne",
    description:
      "Béton ciré à Chalon-sur-Saône : sols, murs, douche, salle de bain, sur mesure. Finition soignée, devis rapide.",
    h1: "Béton ciré à Chalon-sur-Saône",
    intro:
      "À Chalon-sur-Saône, nous réalisons des surfaces en béton ciré (sols, murs, salles de bain, douches à l’italienne) avec un rendu esthétique et facile d’entretien.",
    bullets: [
      "Sol béton ciré : aspect continu et moderne.",
      "Douche à l’italienne : protection renforcée, finition durable.",
      "Murs décoratifs : effets minéraux maîtrisés.",
      "Surfaces sur mesure : crédences, plans, vasques (selon projet).",
      "Accompagnement : conseils + suivi du chantier.",
    ],
    ctaTitle: "Devis béton ciré à Chalon-sur-Saône",
    ctaText:
      "Expliquez votre projet : nous vous aidons à choisir la solution technique et la finition.",
    faq: [
      { q: "Le béton ciré est-il glissant ?", a: "On peut adapter la finition selon l’usage (pièces humides, douche) pour améliorer l’adhérence." },
      { q: "Quelle préparation du support ?", a: "La tenue dans le temps dépend beaucoup de cette étape : on vérifie planéité, adhérence, humidité et fissures." },
    ],
  },

  "bourg-en-bresse": {
    title: "Béton ciré à Bourg-en-Bresse | Sols, salle de bain & sur mesure",
    description:
      "Béton ciré à Bourg-en-Bresse : sols, murs, douche, salle de bain, surfaces sur mesure. Finition durable, devis rapide.",
    h1: "Béton ciré à Bourg-en-Bresse",
    intro:
      "À Bourg-en-Bresse et alentours, nous réalisons vos projets en béton ciré : sols, salles de bain, douches et surfaces décoratives sur mesure, avec un rendu uniforme et élégant.",
    bullets: [
      "Béton ciré au sol : rénovation/neuf, rendu uniforme.",
      "Salle de bain & douche : solutions adaptées aux pièces humides.",
      "Murs décoratifs : teintes et effets personnalisés.",
      "Plans / crédences : surfaces modernes et résistantes.",
      "Suivi : conseils techniques + finitions + protection.",
    ],
    ctaTitle: "Demander un devis à Bourg-en-Bresse",
    ctaText:
      "Indiquez la pièce, la surface et le support : on vous répond rapidement avec une estimation et la meilleure approche.",
    faq: [
      { q: "Le béton ciré convient-il aux rénovations ?", a: "Oui, c’est même très fréquent. On adapte le système selon le support existant." },
      { q: "Combien de temps avant utilisation ?", a: "Selon la protection et les temps de séchage, on vous donnera un délai réaliste avant remise en service." },
    ],
  },
};

