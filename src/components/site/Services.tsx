import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "./Reveal";
import { useLang } from "@/i18n/lang";

gsap.registerPlugin(ScrollTrigger);

export function Services() {
  const { t } = useLang();
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!trackRef.current || !wrapRef.current) return;
    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const mm = gsap.matchMedia();
      mm.add(
        {
          desktop: "(min-width: 1024px)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { desktop, reduce } = context.conditions as {
            desktop: boolean;
            reduce: boolean;
          };
          if (!desktop || reduce) return;

          const getNavOffset = () => {
            const nav = document.querySelector("header, nav");
            return nav ? (nav as HTMLElement).getBoundingClientRect().height : 80;
          };
          const distance = () => Math.max(0, track.scrollWidth - window.innerWidth + 96);
          gsap.to(track, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: wrapRef.current,
              start: () => `top ${getNavOffset()}px`,
              end: () => `+=${distance()}`,
              pin: true,
              pinSpacing: true,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });
        },
      );
    }, wrapRef);
    return () => ctx.revert();
  }, [t]);

  return (
    <section id="services" aria-labelledby="services-heading" className="relative section-y">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-12 md:items-end md:gap-10">
            <div className="md:col-span-7">
              <div className="eyebrow mb-5">{t.services.eyebrow}</div>
              <h2
                id="services-heading"
                className="font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.03em]"
              >
                {t.services.title[0]}
                <span className="italic text-primary">{t.services.title[1]}</span>
                {t.services.title[2]}
              </h2>
            </div>
            <p className="max-w-[52ch] text-[0.9375rem] leading-relaxed text-muted-foreground md:col-span-5 md:justify-self-end md:text-right">
              {t.services.sub}
            </p>
          </div>
        </Reveal>
      </div>

      <div
        ref={wrapRef}
        className="mt-14 overflow-x-auto overscroll-x-contain pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mt-20 lg:flex lg:min-h-[70vh] lg:items-center lg:overflow-hidden lg:pb-0"
      >
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-6 px-6 md:px-8 lg:snap-none lg:gap-14 lg:px-12"
          style={{ width: "max-content" }}
        >
          {t.services.items.map((s, i) => (
            <article
              key={i}
              className="group relative flex w-[82vw] max-w-[420px] snap-center flex-col border-t border-border/70 pt-6 transition-colors duration-500 hover:border-accent/60 md:w-[62vw] lg:w-[38vw] lg:max-w-[30rem] lg:pt-8"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-sm font-semibold tabular-nums tracking-[0.14em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-border/60 transition-colors duration-500 group-hover:bg-accent/40" />
              </div>

              <h3 className="mt-7 font-display text-[clamp(1.5rem,2.4vw,2.25rem)] font-semibold leading-[1.15] tracking-[-0.025em] [hyphens:auto] [overflow-wrap:break-word]">
                {s.title}
              </h3>
              <p className="mt-4 max-w-[46ch] text-[1.0625rem] leading-[1.65] text-muted-foreground">
                {s.desc}
              </p>
              <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.6875rem] uppercase tracking-[0.16em] text-muted-foreground/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
