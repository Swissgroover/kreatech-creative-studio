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
  const [paused, setPaused] = useState(false);
  const { trackRef, x } = useMarquee({ speed: 40, paused });

  const items = t.works.items as readonly WorkItem[];
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
          {loop.map((w, i) => (
            <WorkCard
              key={i}
              title={w.title}
              tag={w.tag}
              href={w.href}
              image={w.image}
              index={i % items.length}
              total={items.length}
              fallbackColor={FALLBACK_COLORS[i % FALLBACK_COLORS.length]}
            />
          ))}
        </motion.div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}
