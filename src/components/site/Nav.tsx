import { useEffect, useState } from "react";
import { useLang, type Lang } from "@/i18n/lang";

export function Nav() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#works", label: t.nav.works },
    { href: "#process", label: t.nav.process },
    { href: "#about", label: t.nav.about },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav aria-label="Peamenüü" className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between gap-6">
          <a
            href="#top"
            className="font-display text-xl tracking-tight text-foreground"
            onClick={() => setOpen(false)}
          >
            Kreatech
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <LangToggle lang={lang} setLang={setLang} />
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 items-center rounded-sm border border-border px-3 text-sm text-foreground md:hidden"
            >
              {t.nav.menu}
            </button>
          </div>
        </div>

        {open && (
          <ul id="mobile-menu" className="border-t border-border py-3 md:hidden">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-base text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div
      role="group"
      aria-label="Language"
      className="flex items-center rounded-sm border border-border text-xs"
    >
      {(["et", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`px-2.5 py-1.5 uppercase tracking-wide transition-colors duration-200 ${
            lang === code
              ? "bg-accent text-accent-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
