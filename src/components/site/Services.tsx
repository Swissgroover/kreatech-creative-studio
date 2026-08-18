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
      mm.add("(min-width: 1024px)", () => {
        const getNavOffset = () => {
          const nav = document.querySelector("header, nav");
          return nav ? (nav as HTMLElement).getBoundingClientRect().height : 80;
        };
        const distance = track.scrollWidth - window.innerWidth + 96;
        gsap.to(track, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: () => `top ${getNavOffset()}px`,
            end: () => `+=${distance}`,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      });
    }, wrapRef);
    return () => ctx.revert();
  }, [t]);

  return (
    <section id="services" aria-labelledby="services-heading" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="mb-4 text-xs uppercase tracking-widest text-accent">
                {t.services.eyebrow}
              </div>
              <h2 id="services-heading" className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
                {t.services.title[0]}
                <span className="italic text-primary">{t.services.title[1]}</span>
                {t.services.title[2]}
              </h2>
            </div>
            <p className="hidden max-w-sm text-sm text-muted-foreground md:block">
              {t.services.sub}
            </p>
          </div>
        </Reveal>
      </div>

      <div
        ref={wrapRef}
        className="mt-12 overflow-x-auto overscroll-x-contain pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mt-16 lg:overflow-hidden lg:pb-0"
      >
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-6 px-6 md:px-8 lg:snap-none lg:gap-8 lg:px-12"
          style={{ width: "max-content" }}
        >
          {t.services.items.map((s, i) => (
            <article
              key={i}
              className="group relative flex w-[82vw] max-w-[420px] snap-center flex-col gap-10 overflow-hidden rounded-3xl border border-border bg-surface p-7 sm:p-8 md:w-[60vw] lg:w-[44vw] lg:min-h-[520px] lg:max-w-none lg:justify-between lg:p-12"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/0 to-primary/0 transition-all duration-700 group-hover:from-primary/10 group-hover:to-accent/5" />
              <div className="flex items-start justify-between">
                <span className="font-display text-sm text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="size-2 rounded-full bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div>
                <h3 className="font-display text-[1.75rem] font-semibold leading-[1.15] tracking-tight [hyphens:auto] [overflow-wrap:break-word] sm:text-3xl lg:text-4xl xl:text-5xl">
                  {s.title}
                </h3>
                <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg">
                  {s.desc}
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute -right-20 -bottom-20 size-64 rounded-full bg-primary/10 blur-3xl transition-all duration-700 group-hover:bg-accent/15" />
              <span className="absolute right-8 top-8 font-display text-7xl font-bold text-foreground/[0.03] md:text-9xl">
                {i + 1}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
