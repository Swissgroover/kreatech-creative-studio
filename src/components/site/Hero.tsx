import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { useLang } from "@/i18n/lang";

export function Hero() {
  const { t } = useLang();
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = blobRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 60;
      const y = (e.clientY / window.innerHeight - 0.5) * 60;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div
        ref={blobRef}
        className="pointer-events-none absolute inset-0 -z-10 transition-transform duration-300 ease-out"
      >
        <div className="absolute left-[10%] top-[20%] size-[480px] rounded-full bg-primary/30 blur-[120px]" />
        <div className="absolute right-[5%] bottom-[10%] size-[420px] rounded-full bg-accent/20 blur-[140px]" />
      </div>
      <div className="absolute inset-0 -z-10 noise-overlay opacity-[0.15]" />

      <div className="mx-auto w-full max-w-7xl px-6">

        <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-balance sm:text-7xl md:text-[8.5rem]">
          {t.hero.words.map((w, i) => (
            <motion.span
              key={`${w}-${i}`}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`mr-4 inline-block ${w === t.hero.italicWord ? "italic text-accent" : ""}`}
            >
              {w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 max-w-xl text-base text-muted-foreground md:text-lg"
        >
          {t.hero.lead}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
          >
            {t.hero.ctaPrimary}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#works"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-accent hover:text-accent"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>
      </div>

     
    </section>
  );
}
