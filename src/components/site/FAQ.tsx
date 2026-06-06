import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "./Reveal";
import { useLang } from "@/i18n/lang";

export function FAQ() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      id="faq"
      className="relative overflow-hidden py-24 md:py-32"
      ref={ref}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/3 size-[500px] rounded-full bg-primary/15 blur-[160px]" />
        <div className="absolute right-0 bottom-1/4 size-[400px] rounded-full bg-accent/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="mb-4 text-center text-xs uppercase tracking-widest text-accent">
            {t.faq.eyebrow}
          </div>
          <h2 className="mb-6 text-center font-display text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            {t.faq.title}
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-base text-muted-foreground md:text-lg">
            {t.faq.sub}
          </p>
        </Reveal>

        <div className="space-y-4">
          {t.faq.items.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.06}>
                <div
                  className="rounded-2xl border border-border/60 bg-surface/50 backdrop-blur-sm transition-colors hover:border-border"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-8 md:py-6"
                  >
                    <span
                      className="font-display text-base font-medium leading-snug text-foreground md:text-lg"
                      itemProp="name"
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`shrink-0 text-accent transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M10 4v12M4 10h12"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.35, ease: [0.25, 1, 0.5, 1] },
                          opacity: { duration: 0.25 },
                        }}
                        className="overflow-hidden"
                        itemScope
                        itemProp="acceptedAnswer"
                        itemType="https://schema.org/Answer"
                      >
                        <div className="px-6 pb-6 text-muted-foreground md:px-8 md:pb-8 md:text-base">
                          <div
                            className="border-t border-border/40 pt-4"
                            itemProp="text"
                          >
                            {faq.a}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
