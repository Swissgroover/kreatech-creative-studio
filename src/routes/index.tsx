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

const TITLE = "Kreatech — Tarkvara arendus, ReactJS, WordPress & Statamic | Eesti";
const DESCRIPTION =
  "Kreatech on Eesti tarkvara- ja veebiarenduse stuudio. Ehitame ReactJS-i äppide, WordPressi ja Statamicu veebisaitide, süsteemide halduse ja tehnilise projektijuhtimise lahendusi.";

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
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "tarkvara arendus, veebiarendus, ReactJS arendus, WordPress arendus, Statamic CMS, projektijuhtimine, süsteemide haldus, veebilehe tegemine, Eesti arendusettevõte, tarkvarastuudio, digilahendused, frontend arendus, full-stack arendus, veebilahendused",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:site_name", content: "Kreatech" },
      { property: "og:locale", content: "et_EE" },
      { property: "og:image", content: "/images/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Kreatech – tarkvara- ja veebiarendus" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: "/images/og-image.png" },
    ],

    links: [{ rel: "canonical", href: "/" }],
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
              url: "/",
              description: DESCRIPTION,
              sameAs: [],
            },
            {
              "@type": "WebSite",
              "@id": "https://kreatech.ee/#website",
              url: "/",
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
                acceptedAnswer: {
                  "@type": "Answer",
                  text: f.answer,
                },
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
