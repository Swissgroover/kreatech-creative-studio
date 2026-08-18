import { Reveal } from "./Reveal";
import { useLang } from "@/i18n/lang";

export function About() {
  const { t } = useLang();

  return (
    <section id="about" aria-labelledby="about-heading" className="relative section-y">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <Reveal>
              <div className="eyebrow mb-5">{t.about.eyebrow}</div>
              <h2
                id="about-heading"
                className="font-display text-[clamp(2rem,4.6vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]"
              >
                {t.about.title[0]}
                <span className="italic text-primary">{t.about.title[1]}</span>
                {t.about.title[2]}
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <Reveal delay={0.08}>
              <p className="max-w-[62ch] text-[1.0625rem] leading-[1.7] text-muted-foreground md:text-lg">
                {t.about.sub}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
