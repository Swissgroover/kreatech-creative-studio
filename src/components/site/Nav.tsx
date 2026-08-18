import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ScrollProgress } from "./ScrollProgress";
import { useLang, type Lang } from "@/i18n/lang";

export function Nav() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [hover, setHover] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#process", label: t.nav.process },
    { href: "#works", label: t.nav.works },
    { href: "#lead", label: t.nav.lead },
    { href: "#about", label: t.nav.about },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <ScrollProgress />
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-border/50 bg-background/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          aria-label="Peamenüü"
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5"
        >
          <a href="#top" className="group flex items-center gap-2">
           
            <span className="font-display text-lg font-semibold tracking-tight">
              Kreatech
            </span>
          </a>
          <ul
            onMouseLeave={() => setHover(null)}
            className="hidden items-center gap-1 lg:flex"
          >
            {links.map((l) => (
              <li key={l.href} className="relative">
                <a
                  href={l.href}
                  onMouseEnter={() => setHover(l.href)}
                  className="relative z-10 block px-3 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground xl:px-4"
                >
                  {l.label}
                </a>
                {hover === l.href && (
                  <motion.span
                    layoutId="nav-hover"
                    transition={{ type: "spring", stiffness: 350, damping: 30, mass: 0.8 }}
                    className="absolute inset-0 -z-0 rounded-full bg-surface/80 ring-1 ring-border/60"
                  />
                )}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 sm:gap-3">
            <LangToggle lang={lang} setLang={setLang} />
            <a
              href="#contact"
              className="hidden rounded-full border border-border bg-surface/60 px-4 py-2 text-sm font-medium backdrop-blur transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_30px_-10px] hover:shadow-accent lg:inline-block"
            >
              {t.nav.cta}
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={t.nav.cta}
              className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface/60 backdrop-blur transition-colors hover:border-accent hover:text-accent lg:hidden"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path
                  d={menuOpen ? "M4 4l10 10M14 4L4 14" : "M2 5h14M2 12h14"}
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </nav>

        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.25 },
              }}
              className="overflow-hidden border-t border-border/50 bg-background/90 backdrop-blur-xl lg:hidden"
            >
              <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-5">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-xl px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-surface/70 hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-foreground"
                  >
                    {t.nav.cta}
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div
      role="group"
      aria-label="Language"
      className="relative flex items-center rounded-full border border-border/80 bg-surface/60 p-1 text-[11px] font-semibold backdrop-blur-xl shadow-[inset_0_1px_0_0_rgb(255_255_255_/_0.04)]"
    >
      {(["et", "en"] as const).map((l) => {
        const active = lang === l;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={active}
            aria-label={l === "et" ? "Eesti keel" : "English"}
            className="relative z-10 inline-flex h-7 w-9 items-center justify-center rounded-full uppercase tracking-[0.18em] transition-transform duration-300 hover:scale-[1.04] active:scale-95"
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                transition={{ type: "spring", stiffness: 380, damping: 30, mass: 0.7 }}
                className="absolute inset-0 -z-0 rounded-full bg-accent shadow-[0_0_22px_-4px] shadow-accent"
              />
            )}
            <motion.span
              animate={{
                color: active ? "var(--accent-foreground)" : "var(--muted-foreground)",
              }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              {l}
            </motion.span>
          </button>
        );
      })}
    </div>
  );
}
