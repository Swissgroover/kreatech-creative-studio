import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { ContactSection, SectionLabel } from "@/components/site/sections";
import { SERVICES } from "@/content/site";
import { abs, breadcrumbLd, canonical, ldScript, pageMeta } from "@/lib/seo";

const TITLE = "Teenused — tarkvaraarendus, veebiarendus ja projektijuhtimine | Kreatech";
const DESCRIPTION =
  "Kreatechi teenused: kohandatud tarkvaraarendus, veebiarendus, WordPressi ja Statamicu lahendused, tarkvara analüüs, tehniline projektijuhtimine ning hooldus ja edasiarendus.";

export const Route = createFileRoute("/teenused")({
  head: () => ({
    meta: pageMeta({ title: TITLE, description: DESCRIPTION, path: "/teenused" }),
    links: canonical("/teenused"),
    scripts: [
      ldScript({
        "@context": "https://schema.org",
        "@graph": [
          breadcrumbLd([
            { name: "Avaleht", path: "/" },
            { name: "Teenused", path: "/teenused" },
          ]),
          {
            "@type": "CollectionPage",
            url: abs("/teenused"),
            name: TITLE,
            description: DESCRIPTION,
            inLanguage: "et",
          },
        ],
      }),
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <Nav />
      <main id="sisu">
        <section className="on-dark border-b border-border pt-28">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 pb-16 pt-8 md:grid-cols-12 md:pb-24">
            <div className="md:col-span-6">
              <SectionLabel>Teenused</SectionLabel>
              <h1 className="mt-4 font-display text-[clamp(2.25rem,5.2vw,4rem)]">
                Tarkvaraprojekti kogu elukaar ühest kohast
              </h1>
            </div>
            <p className="text-lg md:col-span-6 md:pt-3">
              Analüüsist ja arhitektuurist arenduse, tehnilise projektijuhtimise ning pikaajalise
              hoolduseni. Iga teenust saab tellida eraldi või osana tervikprojektist.
            </p>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <ul className="border-t border-border">
              {SERVICES.map((s, i) => (
                <Reveal as="li" key={s.slug} delay={i * 40} className="border-b border-border">
                  <Link to={s.href} className="group grid gap-3 py-8 md:grid-cols-12 md:gap-8">
                    <span className="label-xs text-muted-foreground md:col-span-1">{s.num}</span>
                    <h2 className="font-display text-2xl md:col-span-4 md:text-3xl">
                      <span className="underline-link">{s.title}</span>
                    </h2>
                    <p className="text-muted-foreground md:col-span-6">{s.short}</p>
                    <span
                      aria-hidden="true"
                      className="text-muted-foreground transition-transform group-hover:translate-x-1 md:col-span-1 md:text-right"
                    >
                      →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
