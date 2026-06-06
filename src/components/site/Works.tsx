import { Reveal } from "./Reveal";
import { motion, useMotionValue } from "motion/react";
import { useLang } from "@/i18n/lang";
import { useEffect, useRef, useState, useCallback } from "react";

const colors = ["1e3a8a", "172554", "1e40af", "0f172a", "1d4ed8", "1e293b"];

export function Works() {
  const { t } = useLang();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const dragX = useMotionValue(0);

  const updateState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const p = max <= 0 ? 0 : el.scrollLeft / max;
    setProgress(p);
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateState();
    el.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);
    return () => {
      el.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, [updateState]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-work-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="works" className="relative py-24 md:py-32 overflow-hidden">
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
            <div className="hidden md:flex items-center gap-3">
              <button
                aria-label="Previous"
                onClick={() => scrollByCard(-1)}
                disabled={!canPrev}
                className="size-12 rounded-full border border-border bg-surface text-foreground transition hover:border-accent hover:text-accent disabled:opacity-30 disabled:hover:border-border disabled:hover:text-foreground"
              >
                ←
              </button>
              <button
                aria-label="Next"
                onClick={() => scrollByCard(1)}
                disabled={!canNext}
                className="size-12 rounded-full border border-border bg-surface text-foreground transition hover:border-accent hover:text-accent disabled:opacity-30 disabled:hover:border-border disabled:hover:text-foreground"
              >
                →
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="mb-8 max-w-xl text-sm text-muted-foreground md:hidden">
            {t.works.sub}
          </p>
        </Reveal>
      </div>

      {/* Carousel — full bleed with padded inner */}
      <div className="relative">
        <motion.div
          ref={scrollerRef}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.08}
          style={{ x: dragX }}
          onDrag={(_, info) => {
            const el = scrollerRef.current;
            if (!el) return;
            el.scrollLeft -= info.delta.x;
          }}
          className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory px-6 md:px-[calc((100vw-80rem)/2+1.5rem)] pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing select-none"
        >
          {t.works.items.map((w, i) => {
            const isExternal = Boolean(w.href);
            const imgSrc =
              w.image ||
              `https://placehold.co/1200x900/${colors[i % colors.length]}/eab308?text=${encodeURIComponent(w.title)}&font=montserrat`;
            return (
              <motion.a
                key={i}
                data-work-card
                href={w.href || "#"}
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                onDragStart={(e) => e.preventDefault()}
                whileHover="hover"
                className="group relative shrink-0 snap-start block overflow-hidden rounded-3xl border border-border bg-surface w-[85vw] sm:w-[60vw] md:w-[42vw] lg:w-[32vw] xl:w-[28rem]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={imgSrc}
                    alt={w.title}
                    draggable={false}
                    variants={{ hover: { scale: 1.06 } }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="size-full object-cover pointer-events-none"
                  />
                  <motion.div
                    variants={{ hover: { opacity: 1 } }}
                    initial={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-accent/40 via-transparent to-transparent mix-blend-overlay"
                  />
                  <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs uppercase tracking-widest text-white/90 backdrop-blur">
                    {String(i + 1).padStart(2, "0")} / {String(t.works.items.length).padStart(2, "0")}
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4 p-6 md:p-7">
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold md:text-xl line-clamp-2">
                      {w.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{w.tag}</p>
                  </div>
                  <motion.span
                    variants={{ hover: { x: 4, color: "var(--accent)" } }}
                    className="shrink-0 text-2xl text-muted-foreground"
                  >
                    →
                  </motion.span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent" />
      </div>

      {/* Progress bar */}
      <div className="mx-auto mt-8 max-w-7xl px-6">
        <div className="relative h-px w-full overflow-hidden bg-border">
          <motion.div
            className="absolute inset-y-0 left-0 bg-accent"
            style={{ width: `${Math.max(8, progress * 100)}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
      </div>
    </section>
  );
}
