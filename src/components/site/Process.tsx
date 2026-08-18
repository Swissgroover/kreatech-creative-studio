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
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top center",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              end: "bottom 70%",
              scrub: 0.8,
            },
          },
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-20 max-w-2xl">
            <div className="mb-4 text-xs uppercase tracking-widest text-accent">
              {t.process.eyebrow}
            </div>
            <h2 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
              {t.process.title[0]}
              <span className="italic text-primary">{t.process.title[1]}</span>
              {t.process.title[2]}
            </h2>
            <p className="mt-6 text-base text-muted-foreground md:text-lg">
              {t.process.sub}
            </p>
          </div>
        </Reveal>

        <div className="relative">
          <div
            ref={lineRef}
            className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-accent via-primary/50 to-transparent md:block"
          />
          <ol className="relative space-y-14">
            {t.process.steps.map((s, i) => (
              <Reveal key={i} delay={i * 0.05} as="li">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
                  <div className="md:col-span-3 md:pl-16">
                    <div className="absolute -ml-[3.25rem] mt-2 hidden size-3 rounded-full bg-accent shadow-[0_0_24px] shadow-accent md:block" />
                    <span className="font-display text-5xl font-bold text-primary md:text-6xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="md:col-span-9 md:pl-4">
                    <h3 className="font-display text-2xl font-semibold tracking-tight md:text-4xl">
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">
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
