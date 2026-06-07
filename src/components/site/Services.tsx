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
      mm.add("(min-width: 768px)", () => {
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
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="mb-4 text-xs uppercase tracking-widest text-accent">
                {t.services.eyebrow}
              </div>
              <h2 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
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

      <div ref={wrapRef} className="mt-16 overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-6 px-6 md:gap-8 md:px-12"
          style={{ width: "max-content" }}
        >
          {t.services.items.map((s, i) => (
            <article
              key={i}
              className="group relative flex h-[60vh] w-[85vw] flex-col justify-between overflow-hidden rounded-3xl border border-border bg-surface p-8 md:h-[70vh] md:w-[44vw] md:p-12"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/0 to-primary/0 transition-all duration-700 group-hover:from-primary/10 group-hover:to-accent/5" />
              <div className="flex items-start justify-between">
                <span className="font-display text-sm text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="size-2 rounded-full bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div>
                <h3 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                  {s.title}
                </h3>
                <p className="mt-6 max-w-md text-base text-muted-foreground md:text-lg">
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
