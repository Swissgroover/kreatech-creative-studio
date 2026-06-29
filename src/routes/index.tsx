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

const TITLE = "Kreatech – Tarkvaraarendus, Veebilahendused ja AI Lahendused Eestis";
const DESCRIPTION =
  "Kreatech arendab kaasaegseid veebilahendusi, infosüsteeme, e-poode, äritarkvara ja AI-põhiseid lahendusi. Loome kiireid, turvalisi ja skaleeritavaid digitooteid ettevõtetele Eestis ja rahvusvaheliselt.";
const OG_TITLE = "Kreatech – Tarkvaraarendus ja AI Lahendused";
const OG_DESCRIPTION =
  "Loome kvaliteetseid veebilahendusi, infosüsteeme, e-poode ning AI-põhiseid tarkvaralahendusi ettevõtetele.";

const faqData = [
  {
    question: "Mis tehnoloogiate ja raamistikega Kreatech arendusteenuseid pakub?",
    answer:
      "Meie põhitehnoloogiad on ReactJS (sh Next.js ja TanStack Start), WordPress, Statamic CMS ja Node.js. Vajadusel integreerime ka teisi raamistikke ja pilvelahendusi (AWS, Vercel, Supabase).",
  },
  {
    question: "Kui kiiresti saab uus veebiprojekt või digilahendus valmis?",
    answer:
      "Lihtsamad veebilahendused (nt WordPressi- või Statamicu-põhised saidid) jõuavad produktsiooni 2–4 nädalaga. Mahukamad ReactJS-i rakendused ja platvormid võtavad tavaliselt 2–3 kuud.",
  },
  {
    question: "Kas pakute ka ainult projektijuhtimist ilma enda arendusmeeskonnata?",
    answer:
      "Jah — kui sul on juba olemas arendusmeeskond, aga puudub tehniline projektijuht, kes oskab ideid võtta ja need arendajatele arusaadavaks viisiks edasi anda.",
  },
  {
    question: "Mis vahe on WordPressi ja Statamicu kasutamisel — kumba soovitaksite?",
    answer:
      "WordPress on suurepärane, kui vajad kiiresti käivitatavat, laiade lisade ökosüsteemiga veebi. Statamic sobib paremini headless-CMS lahenduste ja puhtama andmestruktuuriga projektidele.",
  },
  {
    question: "Kas pakute ka pidevhalduse ja tugiteenust pärast projekti käivitamist?",
    answer:
      "Kindlasti. Pakume WordPressi ja Statamicu saidide haldust, turvauuendusi, varundusi, jõudluse jälgimist ja kiirparandusi.",
  },
  {
    question: "Kuidas käib hindamine ja kas pakute fikseeritud hinnaga projekte?",
    answer:
      "Alustame tasuta tutvumiskõnega, mille järel saadame fikseeritud hinnaga pakkumise koos ajakavaga. Keerukamate projektide puhul kasutame etappide kaupa (milestone) maksmist.",
  },
  {
    question: "Kas Kreatech töötab ka välisklientidega või ainult Eesti turul?",
    answer:
      "Oleme pärit Eestist, aga töötame meeleldi ka rahvusvaheliste klientidega. Kogu protsess on võimalik läbi viia distantsilt inglise või eesti keeles.",
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
          "Kreatech, tarkvaraarendus, veebiarendus, veebilehed, e-poed, AI lahendused, tehisintellekt, Laravel, React, Vue, TypeScript, API arendus, infosüsteemid, custom software, SaaS, Eesti tarkvarafirma",
      },
      { name: "author", content: "Kreatech" },
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
      { property: "og:url", content: "https://kreatech.ee" },
      { property: "og:image", content: "https://kreatech.ee/images/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Kreatech – tarkvara- ja veebiarendus" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: OG_TITLE },
      {
        name: "twitter:description",
        content: "Kaasaegsed veebilahendused, infosüsteemid ja AI-põhine tarkvaraarendus.",
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
              "@type": "Organization",
              "@id": "https://kreatech.ee/#organization",
              name: "Kreatech",
              url: "https://kreatech.ee",
              logo: "https://kreatech.ee/logo.png",
              description: "Tarkvaraarendus, veebiarendus ja AI lahendused.",
              sameAs: [
                "https://www.linkedin.com/company/kreatech",
                "https://github.com/kreatech",
              ],
            },
            {
              "@type": "WebSite",
              "@id": "https://kreatech.ee/#website",
              url: "https://kreatech.ee",
              name: "Kreatech",
              publisher: { "@id": "https://kreatech.ee/#organization" },
              inLanguage: "et",
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
