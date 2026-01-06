export const SITE = {
  brand: "JP Développement Conseil",
  tagline: "by Du Béton dans la Maison",
  phone: "06 98 55 66 48",
  email: "jpdeveloppementconseil@gmail.com",
  domain: "https://dubetondanslamaison.com",
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
    nearby: ["Sancé", "Charnay-lès-Mâcon", "Crêches-sur-Saône", "Saint-Laurent-sur-Saône", "La Roche-Vineuse"],
  },
  {
    slug: "dijon",
    name: "Dijon",
    nearby: ["Chenôve", "Talant", "Quetigny", "Longvic", "Fontaine-lès-Dijon"],
  },
  {
    slug: "chalon-sur-saone",
    name: "Chalon-sur-Saône",
    nearby: ["Saint-Rémy", "Châtenoy-le-Royal", "Champforgeuil", "Fragnes-La Loyère", "Sevrey"],
  },
  {
    slug: "bourg-en-bresse",
    name: "Bourg-en-Bresse",
    nearby: ["Viriat", "Péronnas", "Saint-Denis-lès-Bourg", "Jasseron", "Montagnat"],
  },
];

export const CITY_PAGES = Object.fromEntries(
  CITIES.map((c) => [
    c.slug,
    {
      title: `Béton ciré à ${c.name} | Sol, salle de bain, douche – Du Béton dans la Maison`,
      description: `Artisan béton ciré à ${c.name} : sols, salle de bain, douche à l’italienne et surfaces décoratives. Finition soignée, durable. Devis rapide.`,
      h1: `Béton ciré à ${c.name}`,
      intro: `Vous recherchez un artisan spécialisé en béton ciré à ${c.name} ? Nous réalisons des sols, salles de bain, douches à l’italienne et surfaces décoratives en béton ciré, avec une finition soignée et durable.`,
      bullets: [
        "Béton ciré au sol : rénovation ou neuf, rendu uniforme et contemporain.",
        "Salle de bain & douche à l’italienne : protection renforcée adaptée aux pièces humides.",
        "Murs décoratifs : effets minéraux et teintes personnalisées.",
        "Plans, vasques & éviers sur mesure : solutions adaptées à vos dimensions.",
        "Accompagnement complet : conseils techniques, choix des teintes et suivi du projet.",
      ],
      faq: [
        {
          q: `Quel est le prix d’un béton ciré à ${c.name} ?`,
          a: "Le prix dépend de la surface, de l’état du support, des contraintes (pièce humide) et de la finition. Le plus fiable est un devis après échange sur votre projet.",
        },
        {
          q: "Le béton ciré est-il adapté à une douche à l’italienne ?",
          a: "Oui, avec un système complet (préparation + étanchéité + protection). La réussite dépend surtout de la mise en œuvre et du support.",
        },
        {
          q: "Combien de temps durent les travaux ?",
          a: "Selon la surface et les étapes (préparation, application, temps de séchage), cela peut aller de quelques jours à une semaine environ.",
        },
      ],
      ctaTitle: `Devis béton ciré à ${c.name}`,
      ctaText:
        "Décrivez-nous votre besoin (surface, type de pièce, support, teinte souhaitée). Nous vous répondons rapidement avec une estimation et les étapes d’intervention.",
    },
  ])
);

