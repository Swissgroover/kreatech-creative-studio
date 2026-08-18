import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Intro } from "@/components/site/Intro";
import { Services } from "@/components/site/Services";
import { Scenarios } from "@/components/site/Scenarios";
import { Works } from "@/components/site/Works";
import { Process } from "@/components/site/Process";
import { About } from "@/components/site/About";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { dict } from "@/i18n/dict";

const TITLE = "Kreatech – tehniline partner: analüüs, SEO, arendus ja projektijuhtimine";
const DESCRIPTION =
  "Kreatech OÜ on Eesti tehnilise ja digitaalse arenduse partner: analüüsime veebilehti ja tarkvara, teeme tehnilist SEO auditit, planeerime edasiarendust, aitame leida arenduspartnereid ning arendame veebi- ja tarkvaralahendusi.";
const OG_TITLE = "Kreatech – tehniline partner digilahenduste analüüsist elluviimiseni";
const OG_DESCRIPTION =
  "Analüüs ja audit, tehniline SEO, lahenduse planeerimine, arenduspartnerite leidmine, tehniline projektijuhtimine ning veebi- ja tarkvaraarendus.";

const faqData = dict.et.faq.items;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Kreatech, tehniline partner, veebilehe audit, veebilehe analüüs, tarkvara analüüs, tehniline audit, SEO audit, tehniline SEO, AI otsing, digitaalne leitavus, tehniline projektijuhtimine, arenduspartneri leidmine, veebiarendus, tarkvaraarendus, WordPress arendus, Statamic arendus, integratsioonid, digilahendused",
      },
      { name: "author", content: "Kreatech OÜ" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      {
        name: "googlebot",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "theme-color", content: "#002124" },
      { name: "application-name", content: "Kreatech" },
      { name: "format-detection", content: "telephone=no" },
      { property: "og:site_name", content: "Kreatech" },
      { property: "og:title", content: OG_TITLE },
      { property: "og:description", content: OG_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "et_EE" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:url", content: "https://kreatech.ee/" },
      { property: "og:image", content: "https://kreatech.ee/images/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Kreatech – tehniline ja digitaalse arenduse partner" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: OG_TITLE },
      { name: "twitter:description", content: OG_DESCRIPTION },
      { name: "twitter:image", content: "https://kreatech.ee/images/og-image.png" },
    ],

    links: [
      { rel: "canonical", href: "https://kreatech.ee/" },
      {
        rel: "preload",
        as: "image",
        href: "/images/hero-1280.avif",
        type: "image/avif",
        fetchPriority: "high",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["Organization", "ProfessionalService"],
              "@id": "https://kreatech.ee/#organization",
              name: "Kreatech",
              legalName: "Kreatech OÜ",
              alternateName: "Kreatech OÜ",
              url: "https://kreatech.ee",
              logo: {
                "@type": "ImageObject",
                url: "https://kreatech.ee/android-chrome-512x512.png",
                width: 512,
                height: 512,
              },
              image: "https://kreatech.ee/images/og-image.png",
              description:
                "Kreatech OÜ on Eesti tehniline ja digitaalse arenduse partner, kes aitab ettevõtetel analüüsida digiprobleeme, planeerida tehnilisi lahendusi, parandada SEO-d ja leitavust AI-otsingutes, leida ja juhtida arenduspartnereid ning arendada veebi- ja tarkvaralahendusi.",
              slogan: "Tehniline partner digilahenduste analüüsist elluviimiseni.",
              areaServed: [
                { "@type": "Country", name: "Estonia" },
                { "@type": "Place", name: "European Union" },
                { "@type": "Place", name: "Worldwide (remote)" },
              ],
              knowsAbout: [
                "Veebilehe audit",
                "Veebilehe analüüs",
                "Tarkvara analüüs",
                "Tehniline audit",
                "SEO audit",
                "Tehniline SEO",
                "Digitaalne leitavus",
                "AI otsing ja masinloetav sisu",
                "Tehniline projektijuhtimine",
                "Arenduspartneri leidmine",
                "Veebiarendus",
                "Tarkvaraarendus",
                "ReactJS",
                "Node.js",
                "WordPress arendus",
                "Statamic CMS",
                "Integratsioonid",
                "Olemasoleva tarkvara edasiarendus",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "customer support",
                  email: "info@kreatech.ee",
                  availableLanguage: ["Estonian", "English"],
                },
              ],
            },
            {
              "@type": "WebSite",
              "@id": "https://kreatech.ee/#website",
              url: "https://kreatech.ee",
              name: "Kreatech",
              publisher: { "@id": "https://kreatech.ee/#organization" },
              inLanguage: ["et", "en"],
            },
            {
              "@type": "WebPage",
              "@id": "https://kreatech.ee/#webpage",
              url: "https://kreatech.ee/",
              name: TITLE,
              description: DESCRIPTION,
              isPartOf: { "@id": "https://kreatech.ee/#website" },
              about: { "@id": "https://kreatech.ee/#organization" },
              primaryImageOfPage: "https://kreatech.ee/images/og-image.png",
              inLanguage: "et",
            },
            {
              "@type": "ItemList",
              "@id": "https://kreatech.ee/#services",
              name: "Kreatechi teenused",
              itemListElement: dict.et.help.items.map((s, i) => ({
                "@type": "Service",
                position: i + 1,
                name: s.title,
                description: s.desc,
                provider: { "@id": "https://kreatech.ee/#organization" },
                areaServed: "EE",
              })),
            },
            {
              "@type": "FAQPage",
              "@id": "https://kreatech.ee/#faq",
              mainEntity: faqData.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Nav />
      <main className="relative">
        <Hero />
        <Intro />
        <Services />
        <Scenarios />
        <Works />
        <Process />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
