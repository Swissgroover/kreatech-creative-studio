import { Reveal } from "./Reveal";
import { motion, useAnimationFrame, useMotionValue } from "motion/react";
import { useLang } from "@/i18n/lang";
import { useEffect, useRef, useState } from "react";

const colors = ["1e3a8a", "172554", "1e40af", "0f172a", "1d4ed8", "1e293b"];
const SPEED = 40; // px/sec

export function Works() {
  const { t } = useLang();
  const trackRef = useRef<HTMLDivElement>(null);
  const [setWidth, setSetWidth] = useState(0);
  const [paused, setPaused] = useState(false);
  const x = useMotionValue(0);

  // Measure width of one full set (we render two copies for seamless loop).
  useEffect(() => {
    const measure = () => {
      const el = trackRef.current;
      if (!el) return;
      // Total scroll width / 2 (since we render items twice)
      setSetWidth(el.scrollWidth / 2);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [t]);

  useAnimationFrame((_, delta) => {
    if (paused || setWidth === 0) return;
    let next = x.get() - (SPEED * delta) / 1000;
    // Wrap seamlessly
    if (next <= -setWidth) next += setWidth;
    x.set(next);
  });

  const items = t.works.items as readonly {
    title: string;
    tag: string;
    href: string;
    image: string;
  }[];
  const loop = [...items, ...items];

  return (
    <section
      id="works"
      className="relative py-24 md:py-32 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <div className="mb-4 text-xs uppercase tracking-widest text-accent">
                {t.works.eyebrow}
              </div>
              <h2 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
                {t.works.title[0]}
                <span className="italic text-primary">{t.works.title[1]}</span>
                {t.works.title[2]}
              </h2>
            </div>
            <p className="hidden max-w-sm text-sm text-muted-foreground md:block">
              {t.works.sub}
            </p>
          </div>
        </Reveal>
      </div>

      <div className="relative">
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-6 w-max will-change-transform"
        >
          {loop.map((w, i) => {
            const isExternal = Boolean(w.href);
            const imgSrc =
              w.image ||
              `https://placehold.co/1200x900/${colors[i % colors.length]}/eab308?text=${encodeURIComponent(w.title)}&font=montserrat`;
            return (
              <a
                key={i}
                href={w.href || "#"}
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group relative shrink-0 block overflow-hidden rounded-3xl border border-border bg-surface w-[80vw] sm:w-[55vw] md:w-[40vw] lg:w-[30vw] xl:w-[26rem]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={imgSrc}
                    alt={w.title}
                    draggable={false}
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] pointer-events-none"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-accent/40 via-transparent to-transparent opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs uppercase tracking-widest text-white/90 backdrop-blur">
                    {String((i % items.length) + 1).padStart(2, "0")} /{" "}
                    {String(items.length).padStart(2, "0")}
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4 p-6 md:p-7">
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold md:text-xl line-clamp-2">
                      {w.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{w.tag}</p>
                  </div>
                  <span className="shrink-0 text-2xl text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-accent">
                    →
                  </span>
                </div>
              </a>
            );
          })}
        </motion.div>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}
