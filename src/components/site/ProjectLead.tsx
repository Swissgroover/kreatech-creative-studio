import { Reveal } from "./Reveal";
import { motion } from "motion/react";
import { useLang } from "@/i18n/lang";

export function ProjectLead() {
  const { t } = useLang();
  return (
    <section id="lead" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-[5%] top-[10%] size-[420px] rounded-full bg-primary/15 blur-[140px]" />
        <div className="absolute -bottom-20 left-[10%] size-[360px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/60 p-5 backdrop-blur sm:p-8 md:p-16">
          <div className="grid items-center gap-10 md:grid-cols-12 md:gap-12">
            <Reveal className="md:col-span-7">
              <div className="mb-4 text-xs uppercase tracking-widest text-accent">
                {t.lead.eyebrow}
              </div>
              <h2 className="font-display text-[2rem] font-semibold leading-[1.05] tracking-tight text-balance [overflow-wrap:anywhere] sm:text-4xl md:text-6xl">
                {t.lead.title[0]}
                <span className="italic text-primary">{t.lead.title[1]}</span>
                {t.lead.title[2]}
                <span className="text-accent">{t.lead.title[3]}</span>
              </h2>
              <p className="mt-6 max-w-xl text-base text-muted-foreground md:mt-8 md:text-lg">
                {t.lead.sub}
              </p>

              <ul className="mt-10 space-y-3">
                {t.lead.bullets.map((b, i) => (
                  <motion.li
                    key={b}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-start gap-3 text-base text-foreground/90"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_12px] shadow-accent" />
                    {b}
                  </motion.li>
                ))}
              </ul>

              <a
                href="#contact"
                className="group mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_-8px] hover:shadow-accent"
              >
                {t.lead.cta}
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </Reveal>

            <Reveal className="md:col-span-5" delay={0.15}>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {t.lead.stats.map((c, i) => (
                    <motion.div
                      key={c.k}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className="rounded-2xl border border-border bg-background/60 p-4 sm:p-6"
                    >
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
                        {c.k}
                      </div>
                      <div className="mt-2 font-display text-xl font-semibold text-foreground [overflow-wrap:anywhere] sm:text-2xl">
                        {c.v}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
