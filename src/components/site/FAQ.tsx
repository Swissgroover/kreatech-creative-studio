import { Reveal } from "./Reveal";
import { useLang } from "@/i18n/lang";

export function FAQ() {
  const { t } = useLang();

  return (
    <section id="faq" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-12">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground md:col-span-3">
              {t.faq.eyebrow}
            </p>
            <h2 className="font-display text-3xl md:col-span-9 md:text-5xl">{t.faq.title}</h2>
          </div>
        </Reveal>

        <div className="mt-12 border-t border-border">
          {t.faq.items.map((item, i) => (
            <details key={i} className="group border-b border-border py-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-base font-medium text-foreground transition-colors hover:text-accent md:text-lg">
                <h3 className="text-base font-medium md:text-lg">{item.q}</h3>
                <span
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
