import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ScrollProgress } from "./ScrollProgress";
import { useLang, type Lang } from "@/i18n/lang";

export function Nav() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [hover, setHover] = useState<string | null>(null);

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
            ? "backdrop-blur-xl bg-background/60 border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#top" className="group flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-primary transition-all duration-500 group-hover:bg-accent group-hover:shadow-[0_0_24px] group-hover:shadow-accent" />
            <span className="font-display text-lg font-semibold tracking-tight">
              Kreatech
            </span>
          </a>
          <ul
            onMouseLeave={() => setHover(null)}
            className="hidden items-center gap-1 md:flex"
          >
            {links.map((l) => (
              <li key={l.href} className="relative">
                <a
                  href={l.href}
                  onMouseEnter={() => setHover(l.href)}
                  className="relative z-10 block px-4 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
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
          <div className="flex items-center gap-3">
            <LangToggle lang={lang} setLang={setLang} />
            <a
              href="#contact"
              className="hidden rounded-full border border-border bg-surface/60 px-4 py-2 text-sm font-medium backdrop-blur transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_30px_-10px] hover:shadow-accent md:inline-block"
            >
              {t.nav.cta}
            </a>
          </div>
        </nav>
      </motion.header>
    </>
  );
}

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="relative flex items-center rounded-full border border-border bg-surface/60 p-0.5 text-xs font-medium backdrop-blur">
      {(["et", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className="relative z-10 px-3 py-1.5 uppercase tracking-widest transition-colors duration-300"
        >
          <span className={lang === l ? "text-accent-foreground" : "text-muted-foreground hover:text-foreground"}>
            {l}
          </span>
          {lang === l && (
            <motion.span
              layoutId="lang-pill"
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
              className="absolute inset-0 -z-0 rounded-full bg-accent shadow-[0_0_18px_-4px] shadow-accent"
            />
          )}
        </button>
      ))}
    </div>
  );
}
