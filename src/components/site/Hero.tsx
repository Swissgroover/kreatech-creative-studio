import { motion } from "motion/react";
import { useEffect, useRef } from "react";

const words = ["Loome", "digitaalseid", "lahendusi,", "mis", "töötavad."];

export function Hero() {
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
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Background gradient blobs */}
      <div
        ref={blobRef}
        className="pointer-events-none absolute inset-0 -z-10 transition-transform duration-300 ease-out"
      >
        <div className="absolute left-[10%] top-[20%] size-[480px] rounded-full bg-primary/30 blur-[120px]" />
        <div className="absolute right-[5%] bottom-[10%] size-[420px] rounded-full bg-accent/20 blur-[140px]" />
      </div>
      <div className="absolute inset-0 -z-10 noise-overlay opacity-[0.15]" />

      <div className="mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground backdrop-blur"
        >
          <span className="size-1.5 animate-pulse rounded-full bg-accent" />
          Eesti tarkvarastuudio
        </motion.div>

        <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-balance sm:text-7xl md:text-[8.5rem]">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15 + i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`mr-4 inline-block ${
                w === "lahendusi," ? "italic text-accent" : ""
              }`}
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
          Kreatech ehitab veebirakendusi, hoiab töös süsteeme ja annab uue elu
          olemasolevatele WordPressi- ning Statamicu-saitidele. Väike tiim,
          suur tähelepanu detailile.
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
            Alusta projekti
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#works"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-accent hover:text-accent"
          >
            Vaata töid
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-muted-foreground"
      >
        <div className="flex flex-col items-center gap-2">
          <span>Keri</span>
          <span className="h-10 w-px animate-pulse bg-gradient-to-b from-accent to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
