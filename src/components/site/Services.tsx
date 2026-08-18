import { Reveal } from "./Reveal";
import { useLang } from "@/i18n/lang";

export function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-12">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground md:col-span-3">
              {t.help.eyebrow}
            </p>
            <div className="md:col-span-9">
              <h2 className="font-display text-3xl md:text-5xl">{t.help.title}</h2>
              <p className="mt-3 max-w-xl text-base text-muted-foreground">{t.help.sub}</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {t.help.items.map((item, i) => (
            <Reveal
              key={item.n}
              delay={(i % 3) * 0.05}
              className="border-b border-border p-6 sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(3n+1)]:border-r lg:[&:nth-child(3n+2)]:border-r lg:[&:nth-child(odd)]:border-r-0 lg:[&:nth-child(3n+1)]:border-r lg:[&:nth-child(3n+2)]:border-r"
            >
              <p className="text-xs tracking-[0.2em] text-accent">{item.n}</p>
              <h3 className="mt-3 text-lg font-medium text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground [overflow-wrap:anywhere]">
                {item.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
