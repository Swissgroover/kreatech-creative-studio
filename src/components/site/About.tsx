import { Reveal } from "./Reveal";
import { useLang } from "@/i18n/lang";

export function About() {
  const { t } = useLang();

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <div className="mb-4 text-xs uppercase tracking-widest text-accent">
                {t.about.eyebrow}
              </div>
              <h2 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
                {t.about.title[0]}
                <span className="italic text-primary">{t.about.title[1]}</span>
                {t.about.title[2]}
              </h2>
              <p className="mt-8 max-w-md text-base text-muted-foreground md:text-lg">
                {t.about.sub}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
