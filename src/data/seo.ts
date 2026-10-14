export const SITE = {
  name: "EchoEleganceLtd.uk",
  legalName: "Echo Elegance Ltd",
  url: "https://echoeleganceltd.uk",
  email: "info@echoeleganceltd.uk",
  phone: "+44 7763 587474",
  logo: "/logo/Logo-Img.png",
  ogImage: "/logo/Logo-Img.png",
  locale: "en_GB",
  twitter: "",
  address: {
    streetAddress: "Unit 1, Liberty Centre, Mount Pleasant",
    addressLocality: "Wembley",
    addressRegion: "London",
    postalCode: "HA0 1TX",
    addressCountry: "GB",
  },
  geo: { latitude: 51.556, longitude: -0.2797 },
  // Primary ranking targets
  keywords: [
    "best staff augmentation company in UK",
    "staff augmentation UK",
    "IT staff augmentation London",
    "quick delivery IT company UK",
    "fast IT project delivery UK",
    "hire dedicated developers UK",
    "IT outsourcing company UK",
    "software development company London",
    "React developers UK",
    "Angular developers UK",
    "Node.js developers UK",
    "Flutter developers UK",
  ],
};

export const DEFAULT_TITLE =
  "Best Staff Augmentation Company in UK | Quick-Delivery IT Solutions — EchoEleganceLtd.uk";

export const DEFAULT_DESCRIPTION =
  "EchoEleganceLtd.uk is the UK's trusted staff augmentation and quick-delivery IT company. Hire vetted React, Angular, Node, Flutter and cloud developers within days — 50+ developers delivered, 20+ technologies, 100% client satisfaction.";

export const absoluteUrl = (path: string) =>
  new URL(path, SITE.url).toString();

/** Organization + LocalBusiness + WebSite schema shared by every page */
export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      legalName: SITE.legalName,
      url: SITE.url,
      logo: { "@type": "ImageObject", url: absoluteUrl(SITE.logo) },
      image: absoluteUrl(SITE.ogImage),
      email: SITE.email,
      telephone: SITE.phone,
      description: DEFAULT_DESCRIPTION,
      slogan: "Best Staff Augmentation & Quick-Delivery IT Company in the UK",
      address: { "@type": "PostalAddress", ...SITE.address },
      geo: { "@type": "GeoCoordinates", ...SITE.geo },
      areaServed: [
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "City", name: "London" },
      ],
      priceRange: "££",
      knowsAbout: [
        "Staff Augmentation",
        "IT Outsourcing",
        "Software Development",
        "React",
        "Angular",
        "Node.js",
        "Flutter",
        "AWS",
        "UI/UX Design",
        "Digital Marketing",
        "Accounting",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: SITE.email,
        telephone: SITE.phone,
        areaServed: "GB",
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      publisher: { "@id": `${SITE.url}/#organization` },
      inLanguage: "en-GB",
    },
  ],
});

export type Crumb = { name: string; href: string };

export const breadcrumbSchema = (crumbs: Crumb[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: absoluteUrl(c.href),
  })),
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const serviceSchema = (opts: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  offers?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${absoluteUrl(opts.path)}#service`,
  name: opts.name,
  serviceType: opts.serviceType,
  description: opts.description,
  url: absoluteUrl(opts.path),
  provider: { "@id": `${SITE.url}/#organization` },
  areaServed: { "@type": "Country", name: "United Kingdom" },
  ...(opts.offers && {
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${opts.name} offerings`,
      itemListElement: opts.offers.map((o) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: o },
      })),
    },
  }),
});
