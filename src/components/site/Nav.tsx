import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const LINKS = [
  { label: "Teenused", to: "/teenused" },
  { label: "Projektid", to: "/projektid" },
  { label: "Meist", to: "/", hash: "meist" },
  { label: "KKK", to: "/", hash: "kkk" },
  { label: "Kontakt", to: "/", hash: "kontakt" },
] as const;

export function Nav({ overHero = false }: { overHero?: boolean }) {
  const [scrolled, setScrolled] = useState(!overHero);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!overHero) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overHero]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 on-dark transition-colors duration-500 ${
        solid ? "bg-teal-900/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <a
        href="#sisu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-paper focus:px-3 focus:py-2 focus:text-ink"
      >
        Liigu sisu juurde
      </a>
      <nav aria-label="Peamenüü" className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-4">
        <Link
          to="/"
          className="font-display text-xl tracking-[0.22em] text-paper"
          aria-label="Kreatech — avaleht"
        >
          KREATECH
        </Link>

        <ul className="ml-auto hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                hash={"hash" in l ? l.hash : undefined}
                className="underline-link text-sm text-paper/80 hover:text-paper"
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/"
              hash="kontakt"
              className="border border-sand/50 px-4 py-2 text-sm text-paper transition-colors hover:bg-sand hover:text-teal-900"
            >
              Räägime projektist
            </Link>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobiilimenuu"
          className="ml-auto inline-flex h-11 w-11 items-center justify-center border border-sand/40 text-paper md:hidden"
        >
          <span className="sr-only">{open ? "Sulge menüü" : "Ava menüü"}</span>
          <span aria-hidden="true" className="text-lg">
            {open ? "×" : "≡"}
          </span>
        </button>
      </nav>

      {open && (
        <div id="mobiilimenuu" className="border-t border-border md:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-4">
            {LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  hash={"hash" in l ? l.hash : undefined}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base text-paper/90"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/"
                hash="kontakt"
                onClick={() => setOpen(false)}
                className="inline-block border border-sand/50 px-4 py-3 text-sm text-paper"
              >
                Räägime projektist
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
