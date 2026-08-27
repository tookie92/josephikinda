export const locales = ["en", "de", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const LOCALE_STORAGE_KEY = "ji-locale";

export type Dictionary = {
  skipToWorks: string;
  nav: {
    works: string;
    stack: string;
    contact: string;
    home: string;
    openMenu: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    tagline: string;
    ctaWorks: string;
    ctaContact: string;
  };
  works: {
    title: string;
    subtitle: string;
    visitSite: string;
    watchAnimation: string;
    seeMore: string;
    chapters: {
      uxui: { index: string; title: string; description: string };
      front: { index: string; title: string; description: string };
      lottie: { index: string; title: string; description: string };
      wonders: { index: string; title: string; description: string };
    };
    roles: {
      moyo: string;
      framerspring: string;
      velotrum: string;
      orjfall: string;
      gutsy: string;
      multi: string;
      card: string;
      gloire: string;
      house: string;
      ikea: string;
      mensch: string;
      ubahn: string;
    };
    lottieLabels: {
      calendrier: string;
      colier: string;
      logo: string;
      photo: string;
      web: string;
      sac: string;
      jeune: string;
      leLottie: string;
      troisD: string;
    };
  };
  trust: {
    eyebrow: string;
    headline: string;
    body: string;
  };
  footer: {
    eyebrow: string;
    headline: string;
    body: string;
    phone: string;
  };
};

const en: Dictionary = {
  skipToWorks: "Skip to work",
  nav: {
    works: "Works",
    stack: "Stack",
    contact: "Contact",
    home: "Joseph Ikinda — Home",
    openMenu: "Open menu",
    language: "Language",
  },
  hero: {
    eyebrow: "Illustrator & 3D designer",
    tagline: "Interfaces, motion & 3D — from concept to animated pixel.",
    ctaWorks: "View work",
    ctaContact: "Discuss a project",
  },
  works: {
    title: "Works",
    subtitle: "Four chapters, four rhythms — UI, frontend, Lottie, 3D.",
    visitSite: "Visit site",
    watchAnimation: "Watch animation",
    seeMore: "View",
    chapters: {
      uxui: {
        index: "01 — UX / UI",
        title: "UX/UI Studio",
        description:
          "Interfaces designed to be clear, memorable, and easy to use — from wireframe to final pixel.",
      },
      front: {
        index: "02 — Frontend",
        title: "Frontend Forge",
        description:
          "Living Next.js sites: motion, performance, and interaction details that give products character.",
      },
      lottie: {
        index: "03 — Motion",
        title: "Lottie Craft",
        description:
          "Micro-animations and Lottie sequences that give interfaces breath — icons, logos, magical moments.",
      },
      wonders: {
        index: "04 — 3D",
        title: "3D WonderWorks",
        description:
          "Volume concepts and Blender animation — products, spaces, and immersive atmospheres.",
      },
    },
    roles: {
      moyo: "UX/UI — app product design",
      framerspring: "Frontend — motion landing",
      velotrum: "Frontend — brand site",
      orjfall: "Frontend — editorial build",
      gutsy: "Frontend — product UI",
      multi: "Hero sequence — Lottie",
      card: "Blender — product motion",
      gloire: "Blender — scene",
      house: "Blender — archviz",
      ikea: "Blender — product",
      mensch: "Blender — character",
      ubahn: "Blender — environment",
    },
    lottieLabels: {
      calendrier: "Calendar",
      colier: "Necklace",
      logo: "Logo mark",
      photo: "Photo",
      web: "Web",
      sac: "Bag",
      jeune: "Portrait",
      leLottie: "Icon set",
      troisD: "3D feel",
    },
  },
  trust: {
    eyebrow: "Process & stack",
    headline: "Brief → prototype → motion → delivery",
    body: "Available for freelance work and product roles — remote or Germany / Europe.",
  },
  footer: {
    eyebrow: "Contact",
    headline: "A project or a role? Write to me.",
    body: "Recruiters and clients: one message is enough to start a conversation.",
    phone: "Phone",
  },
};

const de: Dictionary = {
  skipToWorks: "Zur Arbeit springen",
  nav: {
    works: "Arbeiten",
    stack: "Stack",
    contact: "Kontakt",
    home: "Joseph Ikinda — Startseite",
    openMenu: "Menü öffnen",
    language: "Sprache",
  },
  hero: {
    eyebrow: "Illustrator & 3D-Designer",
    tagline: "Interfaces, Motion & 3D — vom Konzept zum animierten Pixel.",
    ctaWorks: "Arbeit ansehen",
    ctaContact: "Projekt besprechen",
  },
  works: {
    title: "Arbeiten",
    subtitle: "Vier Kapitel, vier Rhythmen — UI, Frontend, Lottie, 3D.",
    visitSite: "Website öffnen",
    watchAnimation: "Animation ansehen",
    seeMore: "Ansehen",
    chapters: {
      uxui: {
        index: "01 — UX / UI",
        title: "UX/UI Studio",
        description:
          "Interfaces, die klar, einprägsam und einfach zu bedienen sind — vom Wireframe bis zum finalen Pixel.",
      },
      front: {
        index: "02 — Frontend",
        title: "Frontend Forge",
        description:
          "Lebendige Next.js-Sites: Motion, Performance und Interaktionsdetails mit Charakter.",
      },
      lottie: {
        index: "03 — Motion",
        title: "Lottie Craft",
        description:
          "Mikroanimationen und Lottie-Sequenzen, die Interfaces atmen lassen — Icons, Logos, magische Momente.",
      },
      wonders: {
        index: "04 — 3D",
        title: "3D WonderWorks",
        description:
          "Volumenkonzepte und Blender-Animation — Produkte, Räume und immersive Atmosphären.",
      },
    },
    roles: {
      moyo: "UX/UI — App Product Design",
      framerspring: "Frontend — Motion Landing",
      velotrum: "Frontend — Brand Site",
      orjfall: "Frontend — Editorial Build",
      gutsy: "Frontend — Product UI",
      multi: "Hero-Sequenz — Lottie",
      card: "Blender — Product Motion",
      gloire: "Blender — Szene",
      house: "Blender — Archviz",
      ikea: "Blender — Produkt",
      mensch: "Blender — Charakter",
      ubahn: "Blender — Environment",
    },
    lottieLabels: {
      calendrier: "Kalender",
      colier: "Kette",
      logo: "Logo-Marke",
      photo: "Foto",
      web: "Web",
      sac: "Tasche",
      jeune: "Porträt",
      leLottie: "Icon-Set",
      troisD: "3D-Feeling",
    },
  },
  trust: {
    eyebrow: "Prozess & Stack",
    headline: "Briefing → Prototyp → Motion → Lieferung",
    body: "Verfügbar für Freelance-Projekte und Product-Rollen — remote oder Deutschland / Europa.",
  },
  footer: {
    eyebrow: "Kontakt",
    headline: "Projekt oder Stelle? Schreib mir.",
    body: "Recruiter und Kunden: eine Nachricht reicht, um das Gespräch zu starten.",
    phone: "Telefon",
  },
};

const fr: Dictionary = {
  skipToWorks: "Aller au travail",
  nav: {
    works: "Works",
    stack: "Stack",
    contact: "Contact",
    home: "Joseph Ikinda — Accueil",
    openMenu: "Ouvrir le menu",
    language: "Langue",
  },
  hero: {
    eyebrow: "Illustrator & 3D designer",
    tagline: "Interfaces, motion & 3D — du concept au pixel animé.",
    ctaWorks: "Voir le travail",
    ctaContact: "Discuter d'un projet",
  },
  works: {
    title: "Works",
    subtitle: "Quatre chapitres, quatre rythmes — UI, frontend, Lottie, 3D.",
    visitSite: "Visiter le site",
    watchAnimation: "Voir l'animation",
    seeMore: "Voir",
    chapters: {
      uxui: {
        index: "01 — UX / UI",
        title: "UX/UI Studio",
        description:
          "Interfaces pensées pour être claires, mémorables et faciles à utiliser — du wireframe au pixel final.",
      },
      front: {
        index: "02 — Frontend",
        title: "Frontend Forge",
        description:
          "Sites Next.js vivants : motion, performance et détails d'interaction qui donnent du caractère au produit.",
      },
      lottie: {
        index: "03 — Motion",
        title: "Lottie Craft",
        description:
          "Micro-animations et séquences Lottie qui donnent du souffle aux interfaces — icônes, logos, moments magiques.",
      },
      wonders: {
        index: "04 — 3D",
        title: "3D WonderWorks",
        description:
          "Concepts en volumes et animations Blender — produits, espaces et atmosphères immersives.",
      },
    },
    roles: {
      moyo: "UX/UI — app product design",
      framerspring: "Frontend — motion landing",
      velotrum: "Frontend — brand site",
      orjfall: "Frontend — editorial build",
      gutsy: "Frontend — product UI",
      multi: "Séquence hero — Lottie",
      card: "Blender — product motion",
      gloire: "Blender — scene",
      house: "Blender — archviz",
      ikea: "Blender — product",
      mensch: "Blender — character",
      ubahn: "Blender — environment",
    },
    lottieLabels: {
      calendrier: "Calendrier",
      colier: "Collier",
      logo: "Logo mark",
      photo: "Photo",
      web: "Web",
      sac: "Sac",
      jeune: "Portrait",
      leLottie: "Icon set",
      troisD: "3D feel",
    },
  },
  trust: {
    eyebrow: "Process & stack",
    headline: "Brief → prototype → motion → livraison",
    body: "Disponible pour missions freelance et postes produit — remote ou Allemagne / Europe.",
  },
  footer: {
    eyebrow: "Contact",
    headline: "Un projet ou un poste ? Écrivez-moi.",
    body: "Recruteurs et clients : un message suffit pour démarrer une conversation.",
    phone: "Téléphone",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, de, fr };

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
