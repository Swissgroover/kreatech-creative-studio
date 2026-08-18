import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { useLang } from "@/i18n/lang";

export function Hero() {
  const { t } = useLang();
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = blobRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    const onMove = (e: MouseEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 36;
      ty = (e.clientY / window.innerHeight - 0.5) * 36;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[92svh] items-center overflow-hidden pt-28 md:min-h-screen md:pt-32"
    >
      <div
        ref={blobRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 transition-transform duration-500 ease-out"
      >
        <div className="absolute left-[8%] top-[18%] size-[420px] rounded-full bg-primary/25 blur-[130px] md:size-[520px]" />
        <div className="absolute right-[4%] bottom-[8%] size-[360px] rounded-full bg-accent/12 blur-[150px] md:size-[440px]" />
      </div>
      <div className="absolute inset-0 -z-10 noise-overlay opacity-[0.12]" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl px-6 py-20 md:py-28">
        <h1 className="max-w-[16ch] font-display text-[clamp(2.5rem,8.2vw,7.5rem)] font-semibold leading-[1.04] tracking-[-0.03em] md:leading-[0.97]">
          {t.hero.words.map((w, i) => (
            <motion.span
              key={`${w}-${i}`}
              initial={{ opacity: 0, y: 56 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`mr-[0.22em] inline-block max-w-full [overflow-wrap:break-word] ${w === t.hero.italicWord ? "italic text-accent" : ""}`}
            >
              {w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-7 max-w-[58ch] text-[1.0625rem] leading-[1.65] text-muted-foreground md:mt-9 md:text-lg"
        >
          {t.hero.lead}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-3 md:mt-11"
        >
          <a
            href="#contact"
            className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors duration-300 hover:bg-accent/90"
          >
            {t.hero.ctaPrimary}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#works"
            className="inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            {t.hero.ctaSecondary}
            <span className="transition-transform duration-300 group-hover:translate-x-1">↓</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
