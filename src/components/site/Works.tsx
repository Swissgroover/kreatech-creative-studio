import { Reveal } from "./Reveal";
import { useLang } from "@/i18n/lang";

export function Works() {
  const { t } = useLang();

  return (
    <section id="works" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-12">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground md:col-span-3">
              {t.works.eyebrow}
            </p>
            <div className="md:col-span-9">
              <h2 className="font-display text-3xl md:text-5xl">{t.works.title}</h2>
              <p className="mt-3 max-w-xl text-base text-muted-foreground">{t.works.sub}</p>
            </div>
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2">
          {t.works.items.map((w, i) => (
            <Reveal as="li" key={w.title} delay={(i % 2) * 0.05}>
              <article>
                <a
                  href={w.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="overflow-hidden rounded-sm border border-border bg-surface">
                    <img
                      src={w.image}
                      alt={`${w.title} — ${w.desc}`}
                      loading="lazy"
                      decoding="async"
                      width={1200}
                      height={750}
                      className="aspect-[16/10] w-full object-cover object-top opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-foreground underline-offset-4 group-hover:underline">
                    {w.title}
                  </h3>
                </a>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <dt className="uppercase tracking-[0.15em]">{t.works.roleLabel}</dt>
                  <dd className="text-foreground/80">{w.role}</dd>
                  <dt className="uppercase tracking-[0.15em]">{t.works.typeLabel}</dt>
                  <dd className="text-foreground/80">{w.type}</dd>
                  <dt className="uppercase tracking-[0.15em]">{t.works.techLabel}</dt>
                  <dd className="text-foreground/80">{w.tech}</dd>
                </dl>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
