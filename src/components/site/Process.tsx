import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "./Reveal";
import { useLang } from "@/i18n/lang";

gsap.registerPlugin(ScrollTrigger);

export function Process() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(
        { motion: "(prefers-reduced-motion: no-preference)" },
        (context) => {
          if (!(context.conditions as { motion: boolean }).motion) return;
          if (!lineRef.current) return;
          gsap.fromTo(
            lineRef.current,
            { scaleY: 0 },
            {
              scaleY: 1,
              transformOrigin: "top center",
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 65%",
                end: "bottom 75%",
                scrub: 0.6,
                invalidateOnRefresh: true,
              },
            },
          );
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [t]);

  return (
    <section
      id="process"
      ref={sectionRef}
      aria-labelledby="process-heading"
      className="relative overflow-hidden section-y"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-16 max-w-[46ch] md:mb-24">
            <div className="eyebrow mb-5">{t.process.eyebrow}</div>
            <h2
              id="process-heading"
              className="font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.03em]"
            >
              {t.process.title[0]}
              <span className="italic text-primary">{t.process.title[1]}</span>
              {t.process.title[2]}
            </h2>
            <p className="mt-6 max-w-[58ch] text-[1.0625rem] leading-[1.65] text-muted-foreground">
              {t.process.sub}
            </p>
          </div>
        </Reveal>

        <div className="relative md:pl-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[3px] top-2 hidden h-[calc(100%-1rem)] w-px bg-border/60 md:block"
          />
          <div
            ref={lineRef}
            aria-hidden="true"
            className="pointer-events-none absolute left-[3px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent via-primary/60 to-transparent md:block"
          />
          <ol className="relative space-y-12 md:space-y-16">
            {t.process.steps.map((s, i) => (
              <Reveal key={i} delay={i * 0.04} as="li">
                <div className="grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-10">
                  <div className="md:col-span-3">
                    <span
                      aria-hidden="true"
                      className="absolute -ml-[4.05rem] mt-[0.6rem] hidden size-[7px] rounded-full bg-accent md:block"
                    />
                    <span className="font-display text-sm font-semibold tabular-nums tracking-[0.14em] text-accent md:text-base">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="font-display text-[clamp(1.375rem,2.6vw,2rem)] font-semibold leading-[1.15] tracking-[-0.025em]">
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-[62ch] text-[1.0625rem] leading-[1.65] text-muted-foreground">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
