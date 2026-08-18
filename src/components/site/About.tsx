import { Reveal } from "./Reveal";
import { useLang } from "@/i18n/lang";

export function About() {
  const { t } = useLang();

  return (
    <section id="about" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-12">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground md:col-span-3">
              {t.about.eyebrow}
            </p>
            <h2 className="font-display text-3xl md:col-span-9 md:text-5xl">{t.about.title}</h2>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-12 max-w-3xl border-l-2 border-accent pl-5 font-display text-2xl leading-snug text-foreground md:text-4xl">
            {t.about.principle}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-10">
            {t.about.body.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 border-t border-border pt-8">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {t.about.teamLabel}
            </p>
            <ul className="mt-6 grid gap-8 sm:grid-cols-2">
              {t.about.team.map((m) => (
                <li key={m.name} className="flex items-center gap-4">
                  <div className="size-16 shrink-0 overflow-hidden rounded-sm border border-border bg-surface">
                    {m.image ? (
                      <img
                        src={m.image}
                        alt={m.name}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="flex h-full w-full items-center justify-center font-display text-xl text-accent">
                        {m.name
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")}
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{m.name}</p>
                    <p className="text-sm text-muted-foreground">{m.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
