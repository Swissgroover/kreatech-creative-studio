import { Reveal } from "./Reveal";
import { motion } from "motion/react";
import { useLang } from "@/i18n/lang";

const colors = ["1e3a8a", "172554", "1e40af", "0f172a", "1d4ed8", "1e293b"];

export function Works() {
  const { t } = useLang();
  return (
    <section id="works" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-16 flex items-end justify-between gap-6">
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {t.works.items.map((w, i) => (
            <Reveal key={i} delay={(i % 2) * 0.1}>
              <motion.a
                href="#"
                whileHover="hover"
                className={`group relative block overflow-hidden rounded-3xl border border-border bg-surface ${
                  i % 3 === 0 ? "md:translate-y-8" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={`https://placehold.co/1200x900/${colors[i % colors.length]}/eab308?text=${encodeURIComponent(w.title)}&font=montserrat`}
                    alt={w.title}
                    variants={{ hover: { scale: 1.06 } }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="size-full object-cover"
                  />
                  <motion.div
                    variants={{ hover: { opacity: 1 } }}
                    initial={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-accent/40 via-transparent to-transparent mix-blend-overlay"
                  />
                </div>
                <div className="flex items-center justify-between p-6 md:p-8">
                  <div>
                    <h3 className="font-display text-xl font-semibold md:text-2xl">
                      {w.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{w.tag}</p>
                  </div>
                  <motion.span
                    variants={{ hover: { x: 4, color: "var(--accent)" } }}
                    className="text-2xl text-muted-foreground"
                  >
                    →
                  </motion.span>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
