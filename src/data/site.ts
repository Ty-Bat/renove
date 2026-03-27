const siteOrigin =
  process.env.SITE_ORIGIN ?? 'https://www.renovation-interieure-tybat.fr';
const rawBasePath = process.env.BASE_PATH ?? '/';
const basePath =
  rawBasePath === '/'
    ? '/'
    : `/${rawBasePath.replace(/^\/+|\/+$/g, '')}`;

export const siteData = {
  siteOrigin,
  basePath,
  name: 'Ty Bat',
  shortName: 'Ty Bat',
  tagline: 'Renovation interieure soignee, du volume brut au chantier livre.',
  heroTitle: 'Renovation interieure chaleureuse, nette et durable.',
  description:
    "Ty Bat accompagne les projets de renovation interieure dans le secteur de Morlaix et du Finistere nord, avec une execution soignee sur les cuisines, salles de bain, rangements et finitions de second oeuvre.",
  story:
    "L'approche Ty Bat privilegie les chantiers lisibles, les finitions propres et un seul interlocuteur du premier repere jusqu'a la livraison.",
  phoneDisplay: '07 79 42 59 60',
  phoneHref: 'tel:+33779425960',
  whatsappDigits: '33779425960',
  defaultWhatsappMessage:
    "Bonjour, je vous contacte depuis votre site pour un projet de renovation interieure.",
  facebookUrl: 'https://www.facebook.com/people/Ty-Bat/100067037964023/',
  email: '',
  serviceAreaLabel: 'Morlaix, Plourin-les-Morlaix et Finistere nord',
  serviceAreas: [
    'Morlaix',
    'Plourin-les-Morlaix',
    'Saint-Martin-des-Champs',
    'Carantec',
    'Roscoff',
    'Landivisiau',
  ],
  openingHours: [
    'Lundi au vendredi : 08h30 - 18h30',
    'Samedi : sur rendez-vous',
  ],
  analytics: {
    enabled: true,
    plausibleDomain:
      process.env.PUBLIC_PLAUSIBLE_DOMAIN ?? 'renovation-interieure-tybat.fr',
    plausibleScriptSrc:
      process.env.PUBLIC_PLAUSIBLE_SCRIPT ??
      'https://plausible.io/js/script.file-downloads.outbound-links.js',
  },
  compliance: {
    cookieBannerEnabled: false,
    legalNotice:
      "Certaines informations administratives ci-dessous proviennent de sources publiques et doivent etre validees avant la mise en ligne definitive.",
  },
  legal: {
    companyName: 'TY BAT',
    legalForm: 'SARL unipersonnelle',
    capital: '1 000 EUR',
    siren: '907 993 661',
    siret: '907 993 661 00026',
    rcs: 'RCS Brest B 907 993 661',
    vat: 'A confirmer avant mise en ligne',
    headOffice: '475 rue Sainte-Catherine, 29420 Mespaul',
    publicationDirector: 'A confirmer avant mise en ligne',
    hostName: 'A confirmer selon l hebergeur retenu',
    hostAddress: 'A confirmer selon l hebergeur retenu',
    hostPhone: 'A confirmer selon l hebergeur retenu',
    contactEmail: 'A confirmer avant mise en ligne',
  },
  differentiators: [
    {
      title: 'Un chantier qui reste lisible',
      text: "Des choix de materiaux clairs, des lignes propres et une lecture simple du volume, meme quand le chantier est techniquement lourd.",
    },
    {
      title: 'Un seul interlocuteur',
      text: "Le site met en avant une relation directe, sans effet catalogue, pour rassurer les clients qui veulent comprendre qui suit reellement leur projet.",
    },
    {
      title: 'Des transformations concretes',
      text: "Les projets montres sont filmes par la realite du chantier : pieces terminees, reprises structurelles, cuisine recomposee et finitions visibles.",
    },
  ],
  process: [
    {
      step: '01',
      title: 'Visite et cadrage',
      text: "Premier echange, prise de cotes, arbitrage sur l usage de la piece et niveau de finition souhaite.",
    },
    {
      step: '02',
      title: 'Preparation du chantier',
      text: "Organisation des postes techniques, protection, depose et remise a niveau avant les finitions visibles.",
    },
    {
      step: '03',
      title: 'Pose et coordination',
      text: 'Placo, plomberie, electricite, sols, mobilier et habillage sont traites dans une progression lisible.',
    },
    {
      step: '04',
      title: 'Livraison soignee',
      text: "Le site insiste sur le chantier livre : fonctionnel, propre, photographiable et pret a l usage.",
    },
  ],
  services: [
    {
      title: 'Salles de bain et espaces d eau',
      summary:
        'Redistribution des volumes, habillage mural, meuble vasque, douche, plomberie et finitions.',
      items: ['Douche et sanitaire', 'Habillage mural', 'Plomberie', 'Mobilier'],
    },
    {
      title: 'Cuisines et arriere-cuisines',
      summary:
        'Conception de volumes pratiques, implantation des plans de travail et coordination des reseaux.',
      items: ['Plans de travail', 'Rangements', 'Electricite', 'Finitions'],
    },
    {
      title: 'Second oeuvre interieur',
      summary:
        'Placo, isolation, electricite, revetements et reconfiguration d espaces pour remettre une piece a niveau.',
      items: ['Placo', 'Isolation', 'Electricite', 'Revements'],
    },
  ],
  socialProof: {
    label: 'Suivre les chantiers en cours',
    text: "La page Facebook Ty Bat montre la vie reelle du chantier et sert de preuve sociale, sans enfermer le site dans un widget tiers.",
  },
  locationNote:
    "Zone d intervention a preciser a la mise en ligne : le site est deja structure pour le SEO local autour de Morlaix et du Finistere nord.",
} as const;

export function withBase(pathname = '/') {
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;

  if (siteData.basePath === '/') {
    return normalizedPath;
  }

  return `${siteData.basePath}${normalizedPath}`.replace(/\/{2,}/g, '/');
}

export function buildWhatsappHref(message: string) {
  return `https://wa.me/${siteData.whatsappDigits}?text=${encodeURIComponent(
    message,
  )}`;
}

export function buildProjectWhatsappMessage(projectTitle?: string) {
  if (projectTitle) {
    return `Bonjour, je vous contacte depuis votre site a propos du projet "${projectTitle}" et j aimerais echanger sur ma renovation.`;
  }

  return siteData.defaultWhatsappMessage;
}

export function buildAbsoluteUrl(pathname = '/') {
  return new URL(withBase(pathname), siteData.siteOrigin).toString();
}

export function buildBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: siteData.name,
    url: buildAbsoluteUrl('/'),
    description: siteData.description,
    telephone: siteData.phoneDisplay,
    areaServed: siteData.serviceAreas,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteData.legal.headOffice,
      addressLocality: 'Mespaul',
      postalCode: '29420',
      addressCountry: 'FR',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:30',
        closes: '18:30',
      },
    ],
    sameAs: [siteData.facebookUrl],
  };
}
