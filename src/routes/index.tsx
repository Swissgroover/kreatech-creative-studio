import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Works } from "@/components/site/Works";
import { ProjectLead } from "@/components/site/ProjectLead";
import { About } from "@/components/site/About";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const TITLE = "Kreatech | Tarkvaraarendus, analüüs ja tehniline projektijuhtimine";
const DESCRIPTION =
  "Kreatech OÜ aitab ettevõtetel analüüsida ja parandada digilahendusi, planeerida tarkvaraarendust, juhtida tehnilisi projekte ning arendada veebilehti, infosüsteeme ja integratsioone. Tehniline SEO ja olemasolevate lahenduste edasiarendus.";
const OG_TITLE = "Kreatech | Tehniline partner: analüüs, arendus ja projektijuhtimine";
const OG_DESCRIPTION =
  "Analüüsime olemasolevaid veebilehti ja tarkvara, planeerime lahendused ning arendame või juhime arendust. Tehniline SEO, integratsioonid ja hooldus.";

const faqData = [
  {
    question: "Millega Kreatech tegeleb?",
    answer:
      "Kreatech OÜ on tehniline arenduspartner. Analüüsime olemasolevaid veebilehti ja tarkvara, kaardistame arendusvajaduse, planeerime lahenduse ning arendame veebilehti, infosüsteeme ja integratsioone. Lisaks pakume tehnilist projektijuhtimist, tehnilist SEO analüüsi ning olemasolevate lahenduste hooldust ja edasiarendust.",
  },
  {
    question: "Kas Kreatech saab analüüsida olemasolevat veebilehte või tarkvaralahendust?",
    answer:
      "Jah. Vaatame üle tehnilise arhitektuuri, koodi seisu, jõudluse, turvalisuse, integratsioonid, SEO ja tööprotsessid. Sa ei pea tulema valmis lähteülesandega — analüüsi eesmärk ongi välja selgitada, mida on mõistlik teha enne raha kulutamist. Vahel on vastus, et uut arendust polegi vaja.",
  },
  {
    question: "Kas Kreatech teeb tarkvaraarendust ja veebiarendust?",
    answer:
      "Jah. Arendame kohandatud veebirakendusi ja infosüsteeme ReactJSi, TypeScripti ja Node.js-i baasil ning veebilehti ja e-poode WordPressi ja Statamicu peal. Ehitame ka integratsioone olemasolevate süsteemide vahel ja arendame olemasolevaid lahendusi edasi.",
  },
  {
    question: "Mis on tehniline projektijuhtimine ja millal seda vaja on?",
    answer:
      "See tähendab, et Kreatech on tehniline esindaja kliendi poolel. Tõlgime ärivajaduse tehnilisteks nõueteks, suhtleme arendajatega, vaatame üle pakkumised, hindame lahenduste mõistlikkust, toome välja riskid ja hoiame arenduse ärilise eesmärgiga kooskõlas. Seda on vaja siis, kui ettevõttel pole oma CTO-d ega tehnilist tootejuhti.",
  },
  {
    question: "Kas Kreatech saab aidata arenduspartneri leidmisel ja koordineerimisel?",
    answer:
      "Jah. Aitame koostada lähteülesande, leida sobivad arendajad või agentuurid, võrrelda pakkumisi ja koordineerida tööd. Kui partner on juba olemas, saame olla tehniline vastaspool, kes küsib õigeid küsimusi ja kontrollib tarnet.",
  },
  {
    question: "Kas Kreatech teeb SEO ja tehnilise SEO analüüsi?",
    answer:
      "Jah, keskendume tehnilisele poolele: saidi struktuur, indekseerimine, crawlitavus, laadimiskiirus, metaandmed, struktuurandmed ja sisu arhitektuur. See parandab leitavust nii Google'is kui AI-otsingutes. Positsioone me ei luba — parandame selle, mis on tehniliselt kontrollitav.",
  },
  {
    question: "Kas olemasolevat süsteemi saab edasi arendada või tuleb uuesti teha?",
    answer:
      "Enamasti saab edasi arendada. Alustame analüüsist ja ütleme ausalt, kas mõistlikum on olemasolevat parandada, osa ümber ehitada või terve lahendus asendada. Uue arenduse soovitame ainult siis, kui see on tegelikult odavam või vajalikum kui olemasoleva korrastamine.",
  },
  {
    question: "Kuidas koostöö Kreatechiga algab?",
    answer:
      "Alustame lühikesest tutvumiskõnest, kus räägid probleemist või eesmärgist. Seejärel teeme vajadusel analüüsi ja saadame pakkumise koos skoobi ja ajakavaga. Suuremate projektide puhul jagame töö etappideks, et iga etapi järel oleks näha konkreetne tulemus.",
  },
];


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
          "Kreatech, tarkvaraarendus, veebiarendus, tarkvara analüüs, veebilehe analüüs, tehniline audit, tehniline SEO, SEO audit, tehniline projektijuhtimine, WordPress, Statamic, ReactJS, integratsioonid, veebilehe hooldus, arenduspartner",
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
      { name: "theme-color", content: "#0f172a" },
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
      {
        property: "og:image:alt",
        content: "Kreatech – tehniline partner: analüüs, arendus ja projektijuhtimine",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: OG_TITLE },
      {
        name: "twitter:description",
        content: OG_DESCRIPTION,
      },
      { name: "twitter:image", content: "https://kreatech.ee/images/og-image.png" },

    ],

    links: [{ rel: "canonical", href: "https://kreatech.ee/" }],
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
                "Kreatech OÜ on Eesti tehniline arenduspartner: analüüsime olemasolevaid veebilehti ja tarkvara, planeerime arendust, juhime tehnilisi projekte ning arendame veebilehti, infosüsteeme ja integratsioone (ReactJS, WordPress, Statamic, Node.js).",
              slogan: "Sinu tehniline partner digilahendustes.",
              areaServed: [
                { "@type": "Country", name: "Estonia" },
                { "@type": "Place", name: "European Union" },
                { "@type": "Place", name: "Worldwide (remote)" },
              ],
              knowsAbout: [
                "Tarkvara analüüs",
                "Veebilehe tehniline audit",
                "Arendusvajaduse kaardistamine",
                "Lähteülesande koostamine",
                "Tehniline projektijuhtimine",
                "Arenduspartneri valik ja koordineerimine",
                "ReactJS arendus",
                "TypeScript",
                "Node.js",
                "WordPress arendus ja haldus",
                "Statamic CMS",
                "Headless CMS",
                "Infosüsteemide arendus",
                "API ja integratsioonide arendus",
                "Olemasolevate süsteemide edasiarendus",
                "Veebilehtede hooldus ja tugi",
                "Tehniline SEO ja jõudluse optimeerimine",
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
              itemListElement: [
                {
                  "@type": "Service",
                  position: 1,
                  name: "ReactJS ja kaasaegne veebiarendus",
                  serviceType: "Web application development",
                  description:
                    "Kaasaegsete veebirakenduste ja SaaS-platvormide arendus ReactJS, Next.js ja TanStack Start baasil.",
                  provider: { "@id": "https://kreatech.ee/#organization" },
                  areaServed: "EE",
                },
                {
                  "@type": "Service",
                  position: 2,
                  name: "WordPress arendus ja haldus",
                  serviceType: "WordPress development",
                  description:
                    "WordPressi veebilehtede ja e-poodide arendus, kohandatud teemad, pluginad ning pidev haldus, turvauuendused ja varundus.",
                  provider: { "@id": "https://kreatech.ee/#organization" },
                },
                {
                  "@type": "Service",
                  position: 3,
                  name: "Statamic CMS lahendused",
                  serviceType: "Headless CMS development",
                  description:
                    "Statamic-põhised headless-CMS lahendused, kus on vaja paindlikku sisuhaldust ja puhast andmestruktuuri.",
                  provider: { "@id": "https://kreatech.ee/#organization" },
                },
                {
                  "@type": "Service",
                  position: 4,
                  name: "Süsteemihaldus ja DevOps",
                  serviceType: "System administration",
                  description:
                    "Serverite, pilveinfrastruktuuri ja deploy-protsesside haldus, monitooring ja jõudluse optimeerimine.",
                  provider: { "@id": "https://kreatech.ee/#organization" },
                },
                {
                  "@type": "Service",
                  position: 5,
                  name: "Tarkvara analüüs ja projektide kirjutamine",
                  serviceType: "Software analysis",
                  description:
                    "Ärinõuete kaardistamine, tehnilise lahenduse disain ja projektidokumentatsiooni koostamine enne arenduse algust.",
                  provider: { "@id": "https://kreatech.ee/#organization" },
                },
                {
                  "@type": "Service",
                  position: 6,
                  name: "Tehniline projektijuhtimine",
                  serviceType: "Technical project management",
                  description:
                    "Tehniline projektijuht olemasolevale arendusmeeskonnale — tõlgime äriideed arendajatele arusaadavaks ja juhime tarne.",
                  provider: { "@id": "https://kreatech.ee/#organization" },
                },
              ],
            },
            {
              "@type": "FAQPage",
              "@id": "https://kreatech.ee/#faq",
              mainEntity: faqData.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
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
    <main className="relative">
      <Nav />
      <Hero />
      <Services />
      <Process />
      <Works />
      <ProjectLead />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
