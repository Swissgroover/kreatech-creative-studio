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
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-16 md:grid-cols-2">
          <div>
            <Reveal>
              <div className="mb-4 text-xs uppercase tracking-widest text-accent">
                {t.contact.eyebrow}
              </div>
              <h2 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-balance md:text-8xl">
                {t.contact.title[0]}
                <span className="italic text-accent">{t.contact.title[1]}</span>
                {t.contact.title[2]}
              </h2>
              <p className="mt-8 max-w-md text-base text-muted-foreground md:text-lg">
                {t.contact.sub}
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-8 inline-block font-display text-xl text-foreground underline decoration-accent decoration-2 underline-offset-8 hover:text-accent md:text-2xl"
              >
                {EMAIL}
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <form
              onSubmit={submit}
              className="rounded-3xl border border-border bg-surface/60 p-6 backdrop-blur md:p-10"
            >
              <div className="space-y-5">
                <Field
                  label={t.contact.nameLabel}
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  type="text"
                  required
                />
                <Field
                  label={t.contact.emailLabel}
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  type="email"
                  required
                />
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-2 w-full resize-none border-0 border-b border-border bg-transparent py-2 text-foreground outline-none transition-colors focus:border-accent"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.01]"
              >
                {t.contact.submit}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        required={required}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full border-0 border-b border-border bg-transparent py-2 text-foreground outline-none transition-colors focus:border-accent"
      />
    </div>
  );
}
