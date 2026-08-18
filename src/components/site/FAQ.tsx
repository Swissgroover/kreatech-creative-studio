import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "./Reveal";
import { useLang } from "@/i18n/lang";

export function FAQ() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative overflow-hidden section-y" ref={ref}>
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-0 top-1/3 size-[420px] rounded-full bg-primary/10 blur-[170px]" />
      </div>

      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="eyebrow mb-5">{t.faq.eyebrow}</div>
          <h2
            id="faq-heading"
            className="max-w-[18ch] font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]"
          >
            {t.faq.title}
          </h2>
          <p className="mt-6 max-w-[58ch] text-[1.0625rem] leading-[1.65] text-muted-foreground">
            {t.faq.sub}
          </p>
        </Reveal>

        <div className="mt-14 border-t border-border/60 md:mt-20">
          {t.faq.items.map((faq, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <div
                key={i}
                className="border-b border-border/60"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-start justify-between gap-8 py-6 text-left"
                  >
                    <span
                      className="font-display text-[1.0625rem] font-medium leading-snug tracking-[-0.015em] text-foreground transition-colors duration-300 group-hover:text-accent md:text-lg"
                      itemProp="name"
                    >
                      {faq.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`mt-1 shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-accent ${isOpen ? "rotate-45 text-accent" : ""}`}
                    >
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.32, ease: [0.25, 1, 0.5, 1] },
                        opacity: { duration: 0.22 },
                      }}
                      className="overflow-hidden"
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <p
                        className="max-w-[62ch] pb-7 pr-10 text-[1rem] leading-[1.7] text-muted-foreground"
                        itemProp="text"
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
