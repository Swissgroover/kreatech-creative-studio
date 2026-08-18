import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";
import { useLang } from "@/i18n/lang";

const EMAIL = "info@kreatech.ee";

export function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function submit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(t.contact.mailSubject(form.name));
    const body = encodeURIComponent(t.contact.mailBody(form.name, form.email, form.message));
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden section-y-lg"
    >
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 size-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/12 blur-[170px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <div className="eyebrow mb-6">{t.contact.eyebrow}</div>
              <h2
                id="contact-heading"
                className="max-w-[12ch] font-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[1.0] tracking-[-0.035em]"
              >
                {t.contact.title[0]}
                <span className="italic text-accent">{t.contact.title[1]}</span>
                {t.contact.title[2]}
              </h2>
              <p className="mt-8 max-w-[48ch] text-[1.0625rem] leading-[1.65] text-muted-foreground">
                {t.contact.sub}
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-8 inline-block font-display text-lg text-foreground underline decoration-accent/70 decoration-1 underline-offset-[6px] transition-colors duration-300 hover:text-accent md:text-xl"
              >
                {EMAIL}
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="md:col-span-6 md:col-start-7">
            <form onSubmit={submit} className="md:pt-2">
              <div className="space-y-8">
                <Field
                  id="contact-name"
                  label={t.contact.nameLabel}
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  type="text"
                  required
                />
                <Field
                  id="contact-email"
                  label={t.contact.emailLabel}
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  type="email"
                  required
                />
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[0.6875rem] uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-3 w-full resize-none border-0 border-b border-border/70 bg-transparent pb-3 text-[1.0625rem] leading-relaxed text-foreground outline-none transition-colors duration-300 focus:border-accent"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="group mt-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-colors duration-300 hover:bg-accent/90"
              >
                {t.contact.submit}
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type,
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[0.6875rem] uppercase tracking-[0.2em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        autoComplete={type === "email" ? "email" : "name"}
        required={required}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-3 h-11 w-full border-0 border-b border-border/70 bg-transparent text-[1.0625rem] text-foreground outline-none transition-colors duration-300 focus:border-accent"
      />
    </div>
  );
}
