import { Link } from "@tanstack/react-router";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Reveal } from "./Reveal";
import { ContactSection, FaqSection, SectionLabel } from "./sections";
import { PROJECTS, SERVICES, type ServiceItem } from "@/content/site";

export function ServicePage({ service }: { service: ServiceItem }) {
  const related = PROJECTS.filter((p) => p.services.includes(service.slug));
  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      <Nav />
      <main id="sisu">
        <section className="on-dark border-b border-border pt-28">
          <div className="mx-auto max-w-6xl px-5 pb-16 pt-8 md:pb-24">
            <nav aria-label="Asukoht" className="label-xs text-muted-foreground">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link to="/" className="underline-link">
                    Avaleht
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link to="/teenused" className="underline-link">
                    Teenused
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">{service.title}</li>
              </ol>
            </nav>

            <div className="mt-10 grid gap-8 md:grid-cols-12">
              <h1 className="font-display text-[clamp(2.25rem,5.2vw,4rem)] md:col-span-6">
                {service.title}
              </h1>
              <p className="text-lg md:col-span-6 md:pt-3">{service.intro}</p>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
            <Reveal>
              <h2 className="font-display text-2xl">Kellele see sobib</h2>
              <ul className="mt-5 space-y-3">
                {service.forWhom.map((f) => (
                  <li key={f} className="border-t border-border pt-3 text-muted-foreground">
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="font-display text-2xl">Millised probleemid see lahendab</h2>
              <ul className="mt-5 space-y-3">
                {service.problems.map((p) => (
                  <li key={p} className="border-t border-border pt-3 text-muted-foreground">
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="on-sand border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-12 md:py-24">
            <Reveal className="md:col-span-4">
              <SectionLabel>Sisu</SectionLabel>
              <h2 className="mt-4 font-display text-[clamp(1.75rem,3.4vw,2.5rem)]">
                Mida Kreatech teeb
              </h2>
            </Reveal>
            <ol className="md:col-span-7 md:col-start-6">
              {service.weDo.map((w, i) => (
                <Reveal as="li" key={w} delay={i * 40} className="border-t border-border py-4">
                  {w}
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {service.process && (
          <section className="border-b border-border">
            <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
              <Reveal>
                <h2 className="font-display text-[clamp(1.75rem,3.4vw,2.5rem)]">Kuidas käib töö</h2>
              </Reveal>
              <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {service.process.map((step, i) => (
                  <Reveal
                    as="li"
                    key={step.title}
                    delay={i * 50}
                    className="border-t border-border pt-4"
                  >
                    <p className="label-xs text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-display text-xl">{step.title}</h3>
                    <p className="mt-2 text-muted-foreground">{step.desc}</p>
                  </Reveal>
                ))}
              </ol>
            </div>
          </section>
        )}

        {service.tech && (
          <section className="border-b border-border">
            <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-12 md:py-24">
              <Reveal className="md:col-span-4">
                <h2 className="font-display text-[clamp(1.75rem,3.4vw,2.5rem)]">Tehnoloogiad</h2>
              </Reveal>
              <Reveal className="md:col-span-7 md:col-start-6" delay={60}>
                <ul className="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground">
                  {service.tech.map((t) => (
                    <li key={t} className="border-b border-border pb-1">
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="border-b border-border">
            <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
              <Reveal>
                <SectionLabel>Seotud projektid</SectionLabel>
                <h2 className="mt-4 font-display text-[clamp(1.75rem,3.4vw,2.5rem)]">
                  Näited tehtud töödest
                </h2>
              </Reveal>
              <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p, i) => (
                  <Reveal as="article" key={p.slug} delay={i * 50}>
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
                      <h3 className="mt-4 font-display text-xl">
                        <span className="underline-link">{p.name}</span>
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{p.summary}</p>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        <FaqSection items={service.faq} title={`Küsimused: ${service.title.toLowerCase()}`} />

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <SectionLabel>Teised teenused</SectionLabel>
            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              {others.map((s) => (
                <li key={s.slug}>
                  <Link to={s.href} className="underline-link">
                    {s.title}
                  </Link>
                </li>
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
