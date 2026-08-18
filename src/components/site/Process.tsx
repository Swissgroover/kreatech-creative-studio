import { Reveal } from "./Reveal";
import { useLang } from "@/i18n/lang";

export function Process() {
  const { t } = useLang();

  return (
    <section id="process" className="border-t border-border bg-surface/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-12">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground md:col-span-3">
              {t.process.eyebrow}
            </p>
            <h2 className="font-display text-3xl md:col-span-9 md:text-5xl">{t.process.title}</h2>
          </div>
        </Reveal>

        <ol className="mt-12 border-t border-border">
          {t.process.steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.n}
              delay={0.03 * i}
              className="grid gap-2 border-b border-border py-6 md:grid-cols-12 md:gap-10"
            >
              <span className="text-xs tracking-[0.2em] text-accent md:col-span-2">{s.n}</span>
              <h3 className="text-lg font-medium text-foreground md:col-span-4">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground md:col-span-6 md:text-base">
                {s.desc}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
