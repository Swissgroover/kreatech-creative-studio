import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Works } from "@/components/site/Works";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kreatech — Digitaalsed lahendused, mis töötavad" },
      {
        name: "description",
        content:
          "Kreatech on Eesti tarkvarastuudio: ReactJSi arendus, WordPressi ja Statamicu lahendused ning süsteemide haldus.",
      },
      { property: "og:title", content: "Kreatech — Digitaalsed lahendused" },
      {
        property: "og:description",
        content:
          "Tarkvara arendus, WordPress ja Statamic, süsteemide haldus. Väike tiim, suur tähelepanu detailile.",
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
      <Works />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
