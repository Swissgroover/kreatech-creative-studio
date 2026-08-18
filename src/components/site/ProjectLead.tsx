import { Reveal } from "./Reveal";
import { motion } from "motion/react";
import { useLang } from "@/i18n/lang";

export function ProjectLead() {
  const { t } = useLang();
  return (
    <section
      id="lead"
      aria-labelledby="lead-heading"
      className="relative overflow-hidden section-y-lg"
    >
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute right-[6%] top-[12%] size-[380px] rounded-full bg-primary/12 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="border-t border-border/70 pt-12 md:pt-16">
          <Reveal>
            <div className="eyebrow mb-6">{t.lead.eyebrow}</div>
            <h2
              id="lead-heading"
              className="max-w-[18ch] font-display text-[clamp(2rem,6vw,4.5rem)] font-semibold leading-[1.04] tracking-[-0.035em] [hyphens:auto] [overflow-wrap:break-word]"
            >
              {t.lead.title[0]}
              <span className="italic text-primary">{t.lead.title[1]}</span>
              {t.lead.title[2]}
              <span className="text-accent">{t.lead.title[3]}</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-16">
            <Reveal delay={0.08} className="md:col-span-6">
              <p className="max-w-[62ch] text-[1.0625rem] leading-[1.7] text-muted-foreground md:text-lg">
                {t.lead.sub}
              </p>
              <a
                href="#contact"
                className="group mt-10 inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors duration-300 hover:bg-accent/90"
              >
                {t.lead.cta}
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </Reveal>

            <Reveal delay={0.14} className="md:col-span-5 md:col-start-8">
              <ul className="divide-y divide-border/60 border-y border-border/60">
                {t.lead.bullets.map((b, i) => (
                  <motion.li
                    key={b}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="py-4 text-[0.9375rem] leading-relaxed text-foreground/85"
                  >
                    {b}
                  </motion.li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
