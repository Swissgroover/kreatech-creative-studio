import { Reveal } from "./Reveal";
import { useLang } from "@/i18n/lang";
import { CONTACT_EMAIL } from "@/i18n/dict";

export function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="border-t border-border bg-surface/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {t.contact.eyebrow}
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl leading-tight text-balance md:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 font-display text-2xl text-accent md:text-3xl">{t.contact.lead}</p>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {t.contact.support}
          </p>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity duration-200 hover:opacity-90"
          >
            {t.contact.cta} <span aria-hidden="true">→</span>
          </a>

          <dl className="mt-12 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {t.contact.emailLabel}
              </dt>
              <dd className="mt-2 text-base">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {t.contact.companyLabel}
              </dt>
              <dd className="mt-2 text-base text-foreground">Kreatech OÜ</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {t.contact.langLabel}
              </dt>
              <dd className="mt-2 text-base text-foreground">{t.contact.langValue}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
