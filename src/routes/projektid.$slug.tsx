import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { ContactSection, SectionLabel } from "@/components/site/sections";
import { PROJECTS, SERVICES, projectBySlug } from "@/content/site";
import { abs, breadcrumbLd, canonical, ldScript, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/projektid/$slug")({
  loader: ({ params }) => {
    const project = projectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.project;
    const title = p ? `${p.name} — ${p.category} | Kreatech` : "Projekt | Kreatech";
    const description = p?.summary ?? "Kreatechi arendusprojekt.";
    const path = `/projektid/${params.slug}`;
    return {
      meta: pageMeta({ title, description, path, image: p?.image, type: "article" }),
      links: canonical(path),
      scripts: p
        ? [
            ldScript({
              "@context": "https://schema.org",
              "@graph": [
                breadcrumbLd([
                  { name: "Avaleht", path: "/" },
                  { name: "Projektid", path: "/projektid" },
                  { name: p.name, path },
                ]),
                {
                  "@type": "CreativeWork",
                  name: p.name,
                  url: abs(path),
                  description: p.summary,
                  image: abs(p.image),
                  inLanguage: "et",
                  keywords: p.tech.join(", "),
                  creator: { "@id": `${abs("/")}#organization` },
                },
              ],
            }),
          ]
        : [],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project: p } = Route.useLoaderData();
  const related = PROJECTS.filter((x) => x.slug !== p.slug).slice(0, 3);
  const services = SERVICES.filter((s) => p.services.includes(s.slug));

  return (
    <>
      <Nav />
      <main id="sisu">
        <section className="on-dark border-b border-border pt-28">
          <div className="mx-auto max-w-6xl px-5 pb-16 pt-8 md:pb-20">
            <nav aria-label="Asukoht" className="label-xs text-muted-foreground">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link to="/" className="underline-link">
                    Avaleht
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link to="/projektid" className="underline-link">
                    Projektid
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">{p.name}</li>
              </ol>
            </nav>
            <div className="mt-10 grid gap-8 md:grid-cols-12">
              <div className="md:col-span-6">
                <p className="label-xs text-muted-foreground">{p.category}</p>
                <h1 className="mt-4 font-display text-[clamp(2.25rem,5.2vw,4rem)]">{p.name}</h1>
              </div>
              <p className="text-lg md:col-span-6 md:pt-3">{p.summary}</p>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-12">
            <img
              src={p.image}
              alt={`${p.name} — vaade veebilehest`}
              width={1400}
              height={875}
              className="w-full border border-border object-cover"
            />
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-12 md:py-24">
            <dl className="grid gap-6 self-start md:col-span-4">
              <div className="border-t border-border pt-3">
                <dt className="label-xs text-muted-foreground">Klient</dt>
                <dd className="mt-1">{p.client}</dd>
              </div>
              <div className="border-t border-border pt-3">
                <dt className="label-xs text-muted-foreground">Valdkond</dt>
                <dd className="mt-1">{p.industry}</dd>
              </div>
              <div className="border-t border-border pt-3">
                <dt className="label-xs text-muted-foreground">Tehnoloogia</dt>
                <dd className="mt-1">{p.tech.join(", ")}</dd>
              </div>
              <div className="border-t border-border pt-3">
                <dt className="label-xs text-muted-foreground">Kreatechi roll</dt>
                <dd className="mt-1">{p.role}</dd>
              </div>
              {p.url && (
                <div className="border-t border-border pt-3">
                  <dt className="label-xs text-muted-foreground">Veebileht</dt>
                  <dd className="mt-1">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-link"
                    >
                      {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                    </a>
                  </dd>
                </div>
              )}
            </dl>

            <div className="space-y-10 md:col-span-7 md:col-start-6">
              <Reveal>
                <h2 className="font-display text-2xl">Väljakutse</h2>
                <p className="mt-3 text-muted-foreground">{p.challenge}</p>
              </Reveal>
              <Reveal delay={50}>
                <h2 className="font-display text-2xl">Lahendus</h2>
                <p className="mt-3 text-muted-foreground">{p.solution}</p>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="font-display text-2xl">Teostus</h2>
                <ul className="mt-3">
                  {p.implementation.map((it) => (
                    <li key={it} className="border-t border-border py-3 text-muted-foreground">
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
              {services.length > 0 && (
                <Reveal delay={140}>
                  <h2 className="font-display text-2xl">Seotud teenused</h2>
                  <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-2">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link to={s.href} className="underline-link">
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <SectionLabel>Teised projektid</SectionLabel>
            <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/projektid/$slug"
                  params={{ slug: r.slug }}
                  className="group block"
                >
                  <img
                    src={r.image}
                    alt={`${r.name} — vaade veebilehest`}
                    width={1400}
                    height={875}
                    loading="lazy"
                    className="aspect-[8/5] w-full border border-border object-cover object-top"
                  />
                  <h3 className="mt-3 font-display text-xl">
                    <span className="underline-link">{r.name}</span>
                  </h3>
                </Link>
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
