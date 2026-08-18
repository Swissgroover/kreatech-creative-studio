import { SITE } from "@/content/site";

export const BASE_URL = SITE.url;

export function abs(path: string) {
  return path.startsWith("http") ? path : `${BASE_URL}${path}`;
}

type MetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
};

export function pageMeta({ title, description, path, image, type = "website" }: MetaInput) {
  const url = abs(path);
  const img = abs(image ?? SITE.ogImage);
  return [
    { title },
    { name: "description", content: description },
    { name: "author", content: SITE.legalName },
    {
      name: "robots",
      content: "index, follow, max-image-preview:large, max-snippet:-1",
    },
    { name: "theme-color", content: "#002F33" },
    { property: "og:site_name", content: SITE.name },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:locale", content: SITE.locale },
    { property: "og:url", content: url },
    { property: "og:image", content: img },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: "Kreatech — tarkvaraarendus" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: img },
  ];
}

export function canonical(path: string) {
  return [{ rel: "canonical", href: abs(path) }];
}

export function ldScript(data: unknown) {
  return { type: "application/ld+json", children: JSON.stringify(data) };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export const organizationLd = {
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${BASE_URL}/#organization`,
  name: SITE.name,
  legalName: SITE.legalName,
  url: BASE_URL,
  email: SITE.email,
  description: SITE.description,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/android-chrome-512x512.png`,
    width: 512,
    height: 512,
  },
  image: `${BASE_URL}${SITE.ogImage}`,
  areaServed: [{ "@type": "Country", name: "Estonia" }],
  knowsLanguage: ["et", "en"],
  knowsAbout: [
    "Tarkvaraarendus",
    "Veebiarendus",
    "ReactJS",
    "TypeScript",
    "Node.js",
    "WordPress arendus",
    "Statamic CMS",
    "Tarkvara analüüs",
    "Süsteemiarhitektuur",
    "Tehniline projektijuhtimine",
    "Hooldus ja edasiarendus",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: SITE.email,
      availableLanguage: ["Estonian", "English"],
    },
  ],
};

export const websiteLd = {
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: SITE.name,
  inLanguage: "et",
  publisher: { "@id": `${BASE_URL}/#organization` },
};
