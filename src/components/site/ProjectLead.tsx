import { Reveal } from "./Reveal";
import { motion } from "motion/react";

const bullets = [
  "Tõlgime su äriidee tehniliseks plaaniks",
  "Suhtleme arendustiimiga sinu eest",
  "Hoiame skoopi, tähtaegu ja eelarvet kontrolli all",
  "Toome iga nädal raporti ja konkreetsed otsused",
];

export function ProjectLead() {
  return (
    <section id="lead" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-[5%] top-[10%] size-[420px] rounded-full bg-primary/15 blur-[140px]" />
        <div className="absolute -bottom-20 left-[10%] size-[360px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/60 p-8 backdrop-blur md:p-16">
          <div className="grid items-center gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <div className="mb-4 text-xs uppercase tracking-widest text-accent">
                / Võta meid projektijuhiks
              </div>
              <h2 className="font-display text-4xl font-semibold leading-[1] tracking-tight text-balance md:text-6xl">
                Sul on{" "}
                <span className="italic text-primary">arendusmeeskond</span>
                . Sul puudub inimene,{" "}
                <span className="text-accent">kes neist aru saab.</span>
              </h2>
              <p className="mt-8 max-w-xl text-base text-muted-foreground md:text-lg">
                Astume sisse tehnilise projektijuhina — räägime mõlema poole
                keelt. Sina mõtled ärile, meie hoiame, et arendus liigub
                õiges suunas, õigel ajal ja õige hinnaga.
              </p>

              <ul className="mt-10 space-y-3">
                {bullets.map((b, i) => (
                  <motion.li
                    key={b}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-start gap-3 text-base text-foreground/90"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_12px] shadow-accent" />
                    {b}
                  </motion.li>
                ))}
              </ul>

              <a
                href="#contact"
                className="group mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_-8px] hover:shadow-accent"
              >
                Räägime sinu projektist
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </Reveal>

            <Reveal className="md:col-span-5" delay={0.15}>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { k: "Vastus", v: "< 24h" },
                    { k: "Iteratsioon", v: "1–2 näd" },
                    { k: "Skoobi muutus", v: "läbipaistev" },
                    { k: "Raport", v: "iganädalane" },
                  ].map((c, i) => (
                    <motion.div
                      key={c.k}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        duration: 0.7,
                        delay: i * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="rounded-2xl border border-border bg-background/60 p-6"
                    >
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">
                        {c.k}
                      </div>
                      <div className="mt-2 font-display text-2xl font-semibold text-foreground">
                        {c.v}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
