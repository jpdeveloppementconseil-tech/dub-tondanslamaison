export const SITE = {
  siteName: "Du Béton dans la Maison",
  domain: "https://dubetondanslamaison.com",
};

export const CITIES = [
  {
    name: "Mâcon",
    slug: "macon",
    nearby: ["Charnay-lès-Mâcon", "Cluny", "Tournus"],
  },
  {
    name: "Lyon",
    slug: "lyon",
    nearby: ["Villeurbanne", "Caluire-et-Cuire", "Bron"],
  },
  {
    name: "Chalon-sur-Saône",
    slug: "chalon-sur-saone",
    nearby: ["Saint-Rémy", "Lux", "Crissey"],
  },
  {
    name: "Bourg-en-Bresse",
    slug: "bourg-en-bresse",
    nearby: ["Péronnas", "Viriat", "Saint-Denis-lès-Bourg"],
  },
];

export const CITY_PAGES = Object.fromEntries(
  CITIES.map((city) => [
    city.slug,
    {
      intro: `Nous réalisons des projets en béton ciré sur mesure à ${city.name}, pour les sols, salles de bain, douches italiennes et surfaces décoratives.`,
      services: [
        `Béton ciré pour sols à ${city.name}`,
        `Béton ciré pour salle de bain à ${city.name}`,
        `Douche italienne en béton ciré à ${city.name}`,
        `Murs et surfaces décoratives en béton ciré à ${city.name}`,
      ],
      faq: [
        {
          q: `Proposez-vous le béton ciré pour salle de bain à ${city.name} ?`,
          a: `Oui, nous réalisons des salles de bain en béton ciré sur mesure à ${city.name}, avec des finitions adaptées aux pièces humides.`,
        },
        {
          q: `Faites-vous des devis pour un projet en béton ciré à ${city.name} ?`,
          a: `Oui, nous proposons un devis gratuit pour les projets de béton ciré à ${city.name} et dans les communes voisines.`,
        },
      ],
    },
  ])
);

export default CITY_PAGES;