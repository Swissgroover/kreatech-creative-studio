import { Reveal } from "./Reveal";

// PLACEHOLDER MEESKOND — asenda fotod, nimed ja rollid
const team = [
  { name: "Eesnimi Perekonnanimi", role: "Asutaja · Arendaja", img: "" },
  { name: "Eesnimi Perekonnanimi", role: "Arendaja · Süsteemid", img: "" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <div className="mb-4 text-xs uppercase tracking-widest text-accent">
                / Meist
              </div>
              <h2 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
                Kaks inimest,{" "}
                <span className="italic text-primary">üks tiim</span>.
              </h2>
              <p className="mt-8 max-w-md text-base text-muted-foreground md:text-lg">
                Oleme väike Eesti stuudio. Töötame otse — ilma vahendajate,
                pikkade koosolekute ja tühjade lubadusteta. Sa räägid inimestega,
                kes su koodi ka päriselt kirjutavad.
              </p>
              <dl className="mt-12 grid grid-cols-2 gap-8">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                    Asutatud
                  </dt>
                  <dd className="mt-1 font-display text-3xl font-semibold text-foreground">
                    2019
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                    Projekte
                  </dt>
                  <dd className="mt-1 font-display text-3xl font-semibold text-accent">
                    40+
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <div className="grid gap-6 sm:grid-cols-2">
              {team.map((m, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <article className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-6">
                    <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface-2">
                      {m.img ? (
                        <img
                          src={m.img}
                          alt={m.name}
                          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex size-full items-center justify-center">
                          <div className="flex size-24 items-center justify-center rounded-full bg-primary/20 font-display text-3xl text-primary">
                            {String.fromCharCode(75 + i)}
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    </div>
                    <div className="mt-5">
                      <h3 className="font-display text-xl font-semibold">
                        {m.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {m.role}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
