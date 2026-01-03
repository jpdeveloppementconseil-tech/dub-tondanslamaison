// src/pages/cities/citiesData.js

export const SITE = {
  brand: "JP Développement Conseil",
  byline: "Du Béton dans la Maison",
  domain: "https://dubetondanslamaison.com",
  phone: "06 98 55 66 48",
  email: "jpdeveloppementconseil@gmail.com",
  instagram: "https://www.instagram.com/dbdlm71",
};

export const CITIES = {
  lyon: {
    slug: "lyon",
    city: "Lyon",
    department: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    nearby: ["Villeurbanne", "Caluire-et-Cuire", "Oullins", "Tassin-la-Demi-Lune", "Bron"],

    seo: {
      title: "Béton ciré à Lyon (69) – Sols, douche italienne, murs | Artisan",
      description:
        "Artisan béton ciré à Lyon : sols, murs, douche italienne, cuisines & escaliers. Finition haut de gamme, durable, sans joints. Devis rapide.",
      canonicalPath: "/beton-cire-lyon",
    },

    intro: [
      "Vous cherchez un artisan spécialisé en béton ciré à Lyon ? Nous réalisons des sols, douches à l’italienne, salles de bain, murs décoratifs et créations sur mesure avec une finition durable.",
      "Notre approche est technique et soignée : préparation du support, application régulière et protection adaptée pour un rendu minéral élégant et facile d’entretien au quotidien.",
    ],

    localContext:
      "À Lyon, les projets béton ciré concernent souvent des rénovations d’appartements (pièces de vie ouvertes, cuisine/salon) ou des salles de bain modernes. Le béton ciré permet d’obtenir une continuité visuelle sans joints et un style contemporain très recherché.",

    prestations: [
      { title: "Béton ciré au sol", text: "rénovation ou neuf, rendu uniforme et contemporain." },
      { title: "Salle de bain & douche à l’italienne", text: "systèmes adaptés aux pièces humides, protection renforcée." },
      { title: "Murs décoratifs", text: "effets minéraux, teintes maîtrisées, finition haut de gamme." },
      { title: "Cuisine", text: "plans de travail & crédences, continuité sans joints." },
      { title: "Escalier", text: "habillage esthétique et résistant, finition antidérapante possible." },
    ],

    benefits: [
      "Finition premium, rendus minéraux (teintes/effets maîtrisés).",
      "Solutions adaptées aux pièces humides (douche, salle de bain).",
      "Continuité visuelle : moins de joints, entretien simplifié.",
      "Accompagnement : conseils teintes/finition + suivi du projet.",
    ],

    priceFactors: [
      "Surface totale et complexité (angles, escaliers, remontées en plinthes).",
      "État du support : ragréage, reprises, préparation nécessaire.",
      "Zone concernée : pièce humide (système + protection renforcée).",
      "Choix de finition (mat/satiné, résistance accrue, antidérapant).",
    ],

    projectExamples: [
      "Sol béton ciré dans une pièce de vie (salon/cuisine) pour un rendu continu.",
      "Salle de bain complète : sol + murs + douche à l’italienne (solution sans joints).",
      "Crédence ou plan de travail en béton ciré pour moderniser une cuisine.",
    ],

    process: [
      "Analyse du support et recommandations techniques (pièces humides, contraintes).",
      "Préparation : nettoyage, ragréage si nécessaire, primaire d’accroche.",
      "Application en plusieurs passes, ponçage, puis protection (finition adaptée).",
      "Contrôle final et conseils d’entretien pour garder un aspect parfait.",
    ],

    faq: [
      {
        q: "Le béton ciré est-il adapté à une douche à l’italienne à Lyon ?",
        a: "Oui, avec un système adapté aux pièces humides et une protection renforcée. La préparation et l’étanchéité sont déterminantes pour la durabilité.",
      },
      {
        q: "Peut-on poser du béton ciré sur un carrelage existant ?",
        a: "Souvent oui après diagnostic : le support doit être stable et correctement préparé (ponçage/primaires/ragréage si besoin).",
      },
      {
        q: "Quel délai prévoir pour un chantier béton ciré ?",
        a: "Selon la surface et les contraintes (séchage, humidité, protection), comptez plusieurs jours. Le planning est précisé dès le devis.",
      },
    ],
  },

  macon: {
    slug: "macon",
    city: "Mâcon",
    department: "Saône-et-Loire (71)",
    region: "Bourgogne-Franche-Comté",
    nearby: ["Sancé", "Charnay-lès-Mâcon", "Crêches-sur-Saône", "Saint-Laurent-sur-Saône", "Hurigny"],

    seo: {
      title: "Béton ciré à Mâcon (71) – Sols, salle de bain, douche italienne | Devis",
      description:
        "Entreprise béton ciré à Mâcon : sols, murs, douche italienne, cuisine & escaliers. Application artisanale, finition durable. Devis rapide.",
      canonicalPath: "/beton-cire-macon",
    },

    intro: [
      "Vous souhaitez un béton ciré à Mâcon pour moderniser votre intérieur ? Nous intervenons sur sols, murs, salles de bain, douches à l’italienne, cuisines et escaliers, en rénovation ou en neuf.",
      "Notre priorité : une base saine (support) et une protection cohérente avec l’usage pour un rendu stable, résistant et esthétique.",
    ],

    localContext:
      "À Mâcon et dans les communes voisines, le béton ciré est souvent choisi pour des maisons en rénovation : entrée, salon, cuisine et salles de bain. Il apporte un rendu contemporain tout en simplifiant l’entretien grâce à la continuité sans joints.",

    prestations: [
      { title: "Sol béton ciré", text: "rendu uniforme, entretien facile, aspect contemporain." },
      { title: "Salle de bain & douche", text: "finition adaptée aux pièces humides, protection renforcée." },
      { title: "Cuisine", text: "crédences et plans de travail, continuité visuelle." },
      { title: "Murs décoratifs", text: "teintes personnalisées, effets minéraux." },
      { title: "Escaliers", text: "habillage solide, esthétique, finition antidérapante possible." },
    ],

    benefits: [
      "Rendu moderne, sans joints apparents sur de grandes surfaces.",
      "Finition durable : protection adaptée aux usages quotidiens.",
      "Possibilité de rénover sans tout casser (selon supports).",
      "Conseils teintes et finitions pour harmoniser vos espaces.",
    ],

    priceFactors: [
      "Support existant (carrelage, chape, ragréage à prévoir ou non).",
      "Pièce humide : niveau de protection et contraintes techniques.",
      "Détails : escaliers, niches, remontées, angles, seuils.",
      "Finition choisie et niveau de résistance attendu.",
    ],

    projectExamples: [
      "Sol béton ciré dans entrée + couloir pour unifier la circulation.",
      "Cuisine : crédence ou plan de travail pour une finition contemporaine.",
      "Douche à l’italienne avec protection renforcée pièce humide.",
    ],

    process: [
      "Échange sur votre besoin + conseils teintes/finition.",
      "Préparation du support (stabilité, planéité, primaire).",
      "Application, ponçage et protection finale adaptée.",
      "Conseils d’entretien et suivi après chantier.",
    ],

    faq: [
      {
        q: "Le béton ciré est-il compatible avec le chauffage au sol ?",
        a: "Oui, si le support est adapté et que les produits/épaisseurs respectent les recommandations. On valide cela lors du diagnostic.",
      },
      {
        q: "Quelle finition choisir pour une cuisine à Mâcon ?",
        a: "Une protection résistante à l’eau et aux taches est essentielle. On vous oriente selon votre usage (quotidien, intensif…).",
      },
      {
        q: "Le béton ciré est-il glissant ?",
        a: "On peut adapter la finition, notamment en salle de bain ou sur escalier, pour améliorer l’adhérence.",
      },
    ],
  },

  dijon: {
    slug: "dijon",
    city: "Dijon",
    department: "Côte-d’Or (21)",
    region: "Bourgogne-Franche-Comté",
    nearby: ["Chenôve", "Talant", "Fontaine-lès-Dijon", "Quetigny", "Longvic"],

    seo: {
      title: "Béton ciré à Dijon (21) – Artisan sols, douche italienne, cuisine | Devis",
      description:
        "Béton ciré à Dijon : sols, murs, douches italiennes, cuisines, escaliers. Travail artisanal, finitions haut de gamme, devis rapide.",
      canonicalPath: "/beton-cire-dijon",
    },

    intro: [
      "Vous recherchez un artisan béton ciré à Dijon ? Nous réalisons des surfaces durables et élégantes : sols, murs, salles de bain, douches à l’italienne, cuisines et escaliers.",
      "Chaque chantier suit une méthode précise : préparation, application en passes régulières, puis protection pour une tenue fiable dans le temps.",
    ],

    localContext:
      "À Dijon, le béton ciré est particulièrement apprécié pour les intérieurs contemporains et les rénovations haut de gamme : cuisines ouvertes, salles de bain design, escaliers modernisés. Son rendu minéral apporte une vraie identité visuelle.",

    prestations: [
      { title: "Béton ciré au sol", text: "neuf ou rénovation, rendu minéral contemporain." },
      { title: "Douche italienne & salle de bain", text: "solution continue, protection renforcée." },
      { title: "Murs décoratifs", text: "effets minéraux, teintes personnalisées." },
      { title: "Plans & crédences", text: "cuisine moderne, entretien simplifié." },
      { title: "Escaliers", text: "habillage esthétique et résistant." },
    ],

    benefits: [
      "Rendu haut de gamme (teintes et effets minéraux).",
      "Excellent pour unifier un espace : sol + murs + cuisine.",
      "Entretien simple : continuité, moins de joints.",
      "Conseils techniques pour une tenue durable (supports/finition).",
    ],

    priceFactors: [
      "Surface + complexité (escaliers, remontées, zones techniques).",
      "Préparation nécessaire du support (planéité, fissures, reprises).",
      "Contraintes pièce humide et niveau de protection attendu.",
      "Choix de finitions (résistance accrue, antidérapant si besoin).",
    ],

    projectExamples: [
      "Rénovation d’un salon/cuisine : sol continu + crédence assortie.",
      "Salle de bain : sol + murs, look minéral moderne.",
      "Escalier relooké en béton ciré pour un rendu contemporain.",
    ],

    process: [
      "Diagnostic + recommandations (supports, humidité, usage).",
      "Préparation (ragréage/primaires) pour une base stable.",
      "Application, ponçage et protection durable.",
      "Conseils d’entretien : produits doux, bonnes pratiques.",
    ],

    faq: [
      {
        q: "Le béton ciré fissure-t-il ?",
        a: "Le risque dépend surtout de la stabilité du support. Avec une préparation adaptée (et des systèmes cohérents), on limite fortement ce risque.",
      },
      {
        q: "Est-ce facile à entretenir ?",
        a: "Oui : pas de joints, nettoyage simple avec produits doux. On vous donne des conseils précis après chantier.",
      },
      {
        q: "Peut-on obtenir une teinte sur mesure ?",
        a: "Oui, on vous accompagne sur les teintes et effets pour coller à votre style (minéral, chaleureux, etc.).",
      },
    ],
  },

  "chalon-sur-saone": {
    slug: "chalon-sur-saone",
    city: "Chalon-sur-Saône",
    department: "Saône-et-Loire (71)",
    region: "Bourgogne-Franche-Comté",
    nearby: ["Saint-Rémy", "Châtenoy-le-Royal", "Champforgeuil", "Fragnes-La Loyère", "Lux"],

    seo: {
      title: "Béton ciré à Chalon-sur-Saône (71) – Sols, douche italienne, murs | Artisan",
      description:
        "Artisan béton ciré à Chalon-sur-Saône : sols, murs, douche italienne, cuisine, escalier. Finition durable, esthétique, devis rapide.",
      canonicalPath: "/beton-cire-chalon-sur_saone", // sécurité
    },

    intro: [
      "Vous avez un projet de béton ciré à Chalon-sur-Saône ? Nous réalisons des surfaces modernes et durables : sols, murs décoratifs, cuisines, salles de bain et douches à l’italienne.",
      "Le rendu final dépend surtout de la préparation et de la protection : c’est ce qui garantit une belle tenue face à l’eau, aux taches et au passage.",
    ],

    localContext:
      "À Chalon-sur-Saône, le béton ciré est souvent choisi pour moderniser des maisons et appartements : pièces de vie, cuisines, salles de bain. Il offre une continuité élégante et un aspect minéral qui valorise l’intérieur.",

    prestations: [
      { title: "Sol béton ciré", text: "rendu uniforme, rénovation ou neuf." },
      { title: "Salle de bain / douche italienne", text: "système pièce humide, protection renforcée." },
      { title: "Murs décoratifs", text: "teintes et effets minéraux maîtrisés." },
      { title: "Cuisine", text: "plans & crédences continus, faciles à nettoyer." },
      { title: "Escaliers", text: "habillage robuste, esthétique, finition adaptée." },
    ],

    benefits: [
      "Solution idéale pour un rendu moderne et continu (sans joints).",
      "Adaptable : sols, murs, cuisine, salle de bain.",
      "Protection renforcée possible en zones sensibles (eau, taches).",
      "Accompagnement sur teintes, effets et finitions.",
    ],

    priceFactors: [
      "Type de support (ancien carrelage, chape, reprises nécessaires).",
      "Surface et détails (seuils, niches, escaliers, plinthes).",
      "Système pièce humide + niveau de protection.",
      "Finition souhaitée (aspect, résistance, antidérapant).",
    ],

    projectExamples: [
      "Sol béton ciré sur une grande pièce de vie pour une continuité visuelle.",
      "Salle de bain : murs + sol, rendu minéral facile d’entretien.",
      "Cuisine : crédence béton ciré pour un look contemporain.",
    ],

    process: [
      "Étude du support et conseils techniques.",
      "Préparation rigoureuse (base stable et propre).",
      "Application en passes + ponçage.",
      "Protection finale et conseils d’entretien.",
    ],

    faq: [
      {
        q: "Le béton ciré convient-il aux pièces très sollicitées ?",
        a: "Oui, avec un support bien préparé et une protection adaptée, il résiste très bien à un usage quotidien.",
      },
      {
        q: "Peut-on obtenir un rendu très uniforme ?",
        a: "Oui, la régularité d’application, le ponçage et la finition jouent un rôle clé. On vous oriente vers l’option la plus stable selon la pièce.",
      },
      {
        q: "Faut-il un entretien spécifique ?",
        a: "Non : entretien doux et produits adaptés. On vous donne les bons réflexes après chantier pour préserver l’aspect.",
      },
    ],
  },

  "bourg-en-bresse": {
    slug: "bourg-en-bresse",
    city: "Bourg-en-Bresse",
    department: "Ain (01)",
    region: "Auvergne-Rhône-Alpes",
    nearby: ["Péronnas", "Saint-Denis-lès-Bourg", "Viriat", "Tossiat", "Montagnat"],

    seo: {
      title: "Béton ciré à Bourg-en-Bresse (01) – Sol, salle de bain, douche italienne | Devis",
      description:
        "Béton ciré à Bourg-en-Bresse : sols, murs, douche italienne, cuisine, escalier. Application artisanale, finitions haut de gamme. Devis rapide.",
      canonicalPath: "/beton-cire-bourg-en-bresse",
    },

    intro: [
      "Vous souhaitez un béton ciré à Bourg-en-Bresse ? Nous réalisons des surfaces durables et élégantes sur sols, murs, cuisines et salles de bain, en neuf comme en rénovation.",
      "Nous privilégions la tenue dans le temps : support préparé, application maîtrisée et protection adaptée à l’usage pour un rendu stable et facile à entretenir.",
    ],

    localContext:
      "À Bourg-en-Bresse et dans l’Ain, le béton ciré est très apprécié sur les maisons : grandes pièces de vie, entrées, escaliers, salles de bain. Son rendu premium et sa continuité visuelle apportent un vrai “effet waouh”.",

    prestations: [
      { title: "Béton ciré au sol", text: "continuité visuelle, aspect premium, entretien simple." },
      { title: "Salle de bain & douche", text: "solution sans joints, protection renforcée pièce humide." },
      { title: "Murs décoratifs", text: "effets minéraux modernes, teintes personnalisables." },
      { title: "Cuisine", text: "crédence et plan de travail, rendu contemporain." },
      { title: "Escaliers", text: "habillage résistant, finition adaptée." },
    ],

    benefits: [
      "Rendu contemporain et haut de gamme sur grandes surfaces.",
      "Entretien simplifié : continuité, moins de joints.",
      "Adapté au neuf et à la rénovation (selon supports).",
      "Finitions possibles selon l’usage (résistance, adhérence).",
    ],

    priceFactors: [
      "Surface, circulation du chantier et complexité (escaliers, angles).",
      "Préparation nécessaire (ragréage, reprises, primaires).",
      "Zone humide : système + protection renforcée.",
      "Finition et niveau de résistance attendu.",
    ],

    projectExamples: [
      "Sol béton ciré sur séjour/entrée pour un intérieur unifié.",
      "Salle de bain : sol + douche italienne avec protection renforcée.",
      "Escalier : habillage béton ciré pour moderniser l’ensemble.",
    ],

    process: [
      "Analyse de faisabilité + conseils (support, humidité, usage).",
      "Préparation du support (stabilité, planéité).",
      "Application, ponçage, puis protection durable.",
      "Conseils d’entretien pour préserver l’aspect.",
    ],

    faq: [
      {
        q: "Peut-on faire un béton ciré dans une salle de bain complète ?",
        a: "Oui : sol + murs + douche possible, avec un système adapté et une protection renforcée.",
      },
      {
        q: "Le béton ciré résiste-t-il aux taches ?",
        a: "Avec la protection adaptée, oui. On choisit la finition selon l’usage et l’exposition (cuisine, eau…).",
      },
      {
        q: "Proposez-vous un devis sur place ?",
        a: "Oui, après échange sur votre besoin. On valide les supports et on vous propose une estimation claire.",
      },
    ],
  },
};

export const CITY_PAGES = Object.values(CITIES).map((c) => ({
  slug: c.slug,
  city: c.city,
  path: `/beton-cire-${c.slug}`,
  title: c.seo.title,
}));
