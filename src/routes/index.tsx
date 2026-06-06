import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Works } from "@/components/site/Works";
import { ProjectLead } from "@/components/site/ProjectLead";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const TITLE = "Kreatech — Digitaalsed lahendused, mis töötavad";
const DESCRIPTION =
  "Kreatech on Eesti tarkvarastuudio: ReactJSi arendus, WordPressi ja Statamicu lahendused, süsteemide haldus ja tehniline projektijuhtimine.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Kreatech, tarkvara arendus, ReactJS, WordPress, Statamic, süsteemide haldus, projektijuhtimine, Eesti",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:site_name", content: "Kreatech" },
      { property: "og:locale", content: "et_EE" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Kreatech",
          url: "/",
          description: DESCRIPTION,
          sameAs: [],
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
      <Contact />
      <Footer />
    </main>
  );
}
