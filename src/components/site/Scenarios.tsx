import { Reveal } from "./Reveal";
import { useLang } from "@/i18n/lang";

export function Scenarios() {
  const { t } = useLang();

  return (
    <section id="scenarios" className="border-t border-border bg-surface/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-12">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground md:col-span-3">
              {t.cases.eyebrow}
            </p>
            <h2 className="font-display text-3xl md:col-span-9 md:text-5xl">{t.cases.title}</h2>
          </div>
        </Reveal>

        <dl className="mt-12 border-t border-border">
          {t.cases.items.map((item, i) => (
            <Reveal
              key={i}
              delay={0.03 * i}
              className="grid gap-3 border-b border-border py-7 md:grid-cols-12 md:gap-10"
            >
              <dt className="font-display text-xl leading-snug text-foreground md:col-span-6 md:text-2xl">
                {item.q}
              </dt>
              <dd className="text-sm leading-relaxed text-muted-foreground md:col-span-6 md:text-base">
                {item.a}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
