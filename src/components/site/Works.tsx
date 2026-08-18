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
    <section id="works" aria-labelledby="works-heading" className="relative section-y overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-14 grid gap-6 md:mb-20 md:grid-cols-12 md:items-end md:gap-10">
            <div className="md:col-span-7">
              <div className="eyebrow mb-5">{t.works.eyebrow}</div>
              <h2
                id="works-heading"
                className="font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.03em]"
              >
                {t.works.title[0]}
                <span className="italic text-primary">{t.works.title[1]}</span>
                {t.works.title[2]}
              </h2>
            </div>
            <p className="max-w-[52ch] text-[0.9375rem] leading-relaxed text-muted-foreground md:col-span-5 md:justify-self-end md:text-right">
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
          {loop.map((w, i) => {
            const decorative = i >= items.length;
            return (
              <div
                key={i}
                {...(decorative ? { "aria-hidden": true } : {})}
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
                  decorative={decorative}
                />
              </div>
            );
          })}
        </motion.div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}
