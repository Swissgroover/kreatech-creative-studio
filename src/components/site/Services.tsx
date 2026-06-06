import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "./Reveal";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    n: "01",
    title: "Tarkvara arendus",
    desc: "Kohandatud veebirakendused ReactJSi ja moodsa stack'iga. Idee, prototüüp, toode.",
    tags: ["ReactJS", "TypeScript", "API"],
  },
  {
    n: "02",
    title: "Statamic & WordPress",
    desc: "Sisuhaldussüsteemid, mida kliendi tiim päriselt kasutada tahab. Kiired, paindlikud, hooldatavad.",
    tags: ["Statamic", "WordPress", "Headless"],
  },
  {
    n: "03",
    title: "Süsteemide haldus",
    desc: "Serverid, monitooring, varundus, uuendused. Sinu süsteem püsib töös ka siis, kui sina magad.",
    tags: ["DevOps", "Hosting", "SLA"],
  },
  {
    n: "04",
    title: "WordPressi hooldus",
    desc: "Turvauuendused, kiiruseoptimeerimine, varundus ja sisuabi — kõik ühest kohast.",
    tags: ["Turvalisus", "Speed", "Tugi"],
  },
];

export function Services() {
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!trackRef.current || !wrapRef.current) return;
    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const distance = track.scrollWidth - window.innerWidth + 96;
        gsap.to(track, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top top",
            end: () => `+=${distance}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      });
    }, wrapRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="mb-4 text-xs uppercase tracking-widest text-accent">
                / Teenused
              </div>
              <h2 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
                Mida me <span className="italic text-primary">teeme</span>.
              </h2>
            </div>
            <p className="hidden max-w-sm text-sm text-muted-foreground md:block">
              Neli põhisuunda — kõik need oskame korralikult. Vali üks või
              kombineeri.
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
          {services.map((s, i) => (
            <article
              key={s.n}
              className="group relative flex h-[60vh] w-[85vw] flex-col justify-between overflow-hidden rounded-3xl border border-border bg-surface p-8 md:h-[70vh] md:w-[44vw] md:p-12"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/0 to-primary/0 transition-all duration-700 group-hover:from-primary/10 group-hover:to-accent/5" />
              <div className="flex items-start justify-between">
                <span className="font-display text-sm text-muted-foreground">
                  {s.n}
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
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {t}
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
