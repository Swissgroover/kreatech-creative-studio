import { useState } from "react";
import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { WorkCard } from "./WorkCard";
import { useMarquee } from "@/hooks/use-marquee";
import { useLang } from "@/i18n/lang";

const FALLBACK_COLORS = ["1e3a8a", "172554", "1e40af", "0f172a", "1d4ed8", "1e293b"];

type WorkItem = { title: string; tag: string; href: string; image: string };

export function Works() {
  const { t } = useLang();
  const [hoverPaused, setHoverPaused] = useState(false);
  const [dragPaused, setDragPaused] = useState(false);
  const { trackRef, x, setWidth } = useMarquee({
    speed: 70,
    paused: hoverPaused || dragPaused,
  });

  const items = t.works.items as readonly WorkItem[];
  const loop = [...items, ...items];

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
          drag="x"
          dragMomentum
          dragElastic={0.05}
          onDragStart={() => setDragPaused(true)}
          onDragEnd={() => setDragPaused(false)}
          onDrag={(_, info) => {
            if (setWidth === 0) return;
            let next = x.get() + info.delta.x;
            // keep within one set width for seamless loop
            if (next <= -setWidth) next += setWidth;
            if (next > 0) next -= setWidth;
            x.set(next);
          }}
          className="flex gap-6 w-max will-change-transform cursor-grab active:cursor-grabbing"
        >
          {loop.map((w, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoverPaused(true)}
              onMouseLeave={() => setHoverPaused(false)}
              onTouchStart={() => setHoverPaused(true)}
              onTouchEnd={() => setHoverPaused(false)}
            >
              <WorkCard
                title={w.title}
                tag={w.tag}
                href={w.href}
                image={w.image}
                index={i % items.length}
                total={items.length}
                fallbackColor={FALLBACK_COLORS[i % FALLBACK_COLORS.length]}
              />
            </div>
          ))}
        </motion.div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}
