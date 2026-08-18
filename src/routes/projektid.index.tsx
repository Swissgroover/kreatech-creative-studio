import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { ContactSection, SectionLabel } from "@/components/site/sections";
import { PROJECTS } from "@/content/site";
import { abs, breadcrumbLd, canonical, ldScript, pageMeta } from "@/lib/seo";

const TITLE = "Projektid — tehtud tööd | Kreatech";
const DESCRIPTION =
  "Valik Kreatechi arendusprojekte: veebilehed, sisuhaldussüsteemid, e-poed ja kohandatud lahendused ReactJS-i, WordPressi ja Statamicu baasil.";

export const Route = createFileRoute("/projektid/")({
  head: () => ({
    meta: pageMeta({ title: TITLE, description: DESCRIPTION, path: "/projektid" }),
    links: canonical("/projektid"),
    scripts: [
      ldScript({
        "@context": "https://schema.org",
        "@graph": [
          breadcrumbLd([
            { name: "Avaleht", path: "/" },
            { name: "Projektid", path: "/projektid" },
          ]),
          {
            "@type": "CollectionPage",
            url: abs("/projektid"),
            name: TITLE,
            description: DESCRIPTION,
            inLanguage: "et",
            hasPart: PROJECTS.map((p) => ({
              "@type": "CreativeWork",
              name: p.name,
              url: abs(`/projektid/${p.slug}`),
              about: p.summary,
            })),
          },
        ],
      }),
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <Nav />
      <main id="sisu">
        <section className="on-dark border-b border-border pt-28">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 pb-16 pt-8 md:grid-cols-12 md:pb-24">
            <div className="md:col-span-6">
              <SectionLabel>Projektid</SectionLabel>
              <h1 className="mt-4 font-display text-[clamp(2.25rem,5.2vw,4rem)]">Tehtud tööd</h1>
            </div>
            <p className="text-lg md:col-span-6 md:pt-3">
              Iga projekt algas konkreetsest vajadusest. Allpool on lühikirjeldus lahendusest,
              tehnoloogiast ja Kreatechi rollist.
            </p>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((p, i) => (
                <Reveal as="article" key={p.slug} delay={(i % 3) * 50}>
                  <Link to="/projektid/$slug" params={{ slug: p.slug }} className="group block">
                    <img
                      src={p.image}
                      alt={`${p.name} — vaade veebilehest`}
                      width={1400}
                      height={875}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[8/5] w-full border border-border object-cover object-top"
                    />
                    <p className="label-xs mt-4 text-muted-foreground">{p.category}</p>
                    <h2 className="mt-2 font-display text-2xl">
                      <span className="underline-link">{p.name}</span>
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
