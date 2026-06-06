import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Mis tehnoloogiate ja raamistikega Kreatech arendusteenuseid pakub?",
    a: "Meie põhitehnoloogiad on ReactJS (sh Next.js ja TanStack Start), WordPress, Statamic CMS ja Node.js. Vajadusel integreerime ka teisi raamistikke ja pilvelahendusi (AWS, Vercel, Supabase) — alati olenevalt projekti vajadustest ja eelarvest.",
  },
  {
    q: "Kui kiiresti saab uus veebiprojekt või digilahendus valmis?",
    a: "Lihtsamad veebilahendused (nt WordPressi- või Statamicu-põhised saidid) jõuavad produktsiooni 2–4 nädalaga. Mahukamad ReactJS-i rakendused ja platvormid võtavad tavaliselt 2–3 kuud, olenevalt funktsionaalsuse keerukusest ja kolmandate osapoolte liidestustest.",
  },
  {
    q: "Kas pakute ka ainult projektijuhtimist ilma enda arendusmeeskonnata?",
    a: "Jah — kui sul on juba olemas arendusmeeskond, aga puudub tehniline projektijuht, kes oskab ideid võtta ja need arendajatele arusaadavaks viisiks edasi anda. Meie projektijuht toimib sinu ja meeskonna vahelise sillana, tagades sujuva suhtluse ja õigeaegse edenemise.",
  },
  {
    q: "Mis vahe on WordPressi ja Statamicu kasutamisel — kumba soovitaksite?",
    a: "WordPress on suurepärane, kui vajad kiiresti käivitatavat, laiade lisade ökosüsteemiga veebi. Statamic sobib paremini siis, kui soovid headless-CMS lahendust, puhtamat andmestruktuuri ja paremat arendajakogemust. Nõustame ja soovitame alati lähtuvalt sinu ärivajadustest, mitte meie mugavusest.",
  },
  {
    q: "Kas pakute ka pidevhalduse ja tugiteenust pärast projekti käivitamist?",
    a: "Kindlasti. Pakume WordPressi ja Statamicu saidide haldust, turvauuendusi, varundusi, jõudluse jälgimist ja kiirparandusi. Kliendid, kes tellivad meilt arenduse, saavad esimese kuu halduse alati soodsamalt.",
  },
  {
    q: "Kuidas käib hindamine ja kas pakute fikseeritud hinnaga projekte?",
    a: "Alustame alati tasuta tutvumiskõnega, mille järel saadame fikseeritud hinnaga pakkumise koos ajakavaga. Keerukamate projektide puhul võime kasutada ka etappide kaupa (milestone) maksmist, et riskid oleksid mõlemale poolele hallatavad.",
  },
  {
    q: "Kas Kreatech töötab ka välisklientidega või ainult Eesti turul?",
    a: "Oleme pärit Eestist, aga töötame meeleldi ka rahvusvaheliste klientidega. Suhtlus toimub inglise või eesti keeles — vastavalt kliendi eelistusele. Kogu protsess, alates nõustamisest kuni järelhalduseni, on võimalik läbi viia distantsilt.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      id="faq"
      className="relative overflow-hidden py-24 md:py-32"
      ref={ref}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/3 size-[500px] rounded-full bg-primary/15 blur-[160px]" />
        <div className="absolute right-0 bottom-1/4 size-[400px] rounded-full bg-accent/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="mb-4 text-center text-xs uppercase tracking-widest text-accent">
            / Korduma kippuvad küsimused
          </div>
          <h2 className="mb-6 text-center font-display text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            Kas sul on küsimus?
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-base text-muted-foreground md:text-lg">
            Siin on vastused kõige levinumatele küsimustele — kui midagi jääb
            segaseks, kirjuta meile otse.
          </p>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.06}>
                <div
                  className="rounded-2xl border border-border/60 bg-surface/50 backdrop-blur-sm transition-colors hover:border-border"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-8 md:py-6"
                  >
                    <span
                      className="font-display text-base font-medium leading-snug text-foreground md:text-lg"
                      itemProp="name"
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`shrink-0 text-accent transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M10 4v12M4 10h12"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.35, ease: [0.25, 1, 0.5, 1] },
                          opacity: { duration: 0.25 },
                        }}
                        className="overflow-hidden"
                        itemScope
                        itemProp="acceptedAnswer"
                        itemType="https://schema.org/Answer"
                      >
                        <div className="px-6 pb-6 text-muted-foreground md:px-8 md:pb-8 md:text-base">
                          <div
                            className="border-t border-border/40 pt-4"
                            itemProp="text"
                          >
                            {faq.a}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
