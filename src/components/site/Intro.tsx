import { Reveal } from "./Reveal";
import { useLang } from "@/i18n/lang";

export function Intro() {
  const { t } = useLang();

  return (
    <section id="intro" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-7">
              <h1 className="font-display text-4xl leading-[1.05] text-balance md:text-6xl">
                {t.intro.h1}
              </h1>
            </div>
            <div className="md:col-span-5">
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {t.intro.body}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-14 max-w-3xl border-l-2 border-accent pl-5 text-lg text-foreground md:text-2xl">
            {t.intro.positioning}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 grid gap-2 border-t border-border pt-6 md:grid-cols-12">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground md:col-span-3">
              {t.intro.factLabel}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground md:col-span-9 md:text-base">
              {t.intro.fact}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
