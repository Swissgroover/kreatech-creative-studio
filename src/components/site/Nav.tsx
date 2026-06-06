import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Teenused" },
  { href: "#works", label: "Tööd" },
  { href: "#about", label: "Meist" },
  { href: "#contact", label: "Kontakt" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/60 border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#top" className="group flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-primary transition-all group-hover:bg-accent group-hover:shadow-[0_0_20px] group-hover:shadow-accent" />
          <span className="font-display text-lg font-semibold tracking-tight">
            Kreatech
          </span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden rounded-full border border-border bg-surface/60 px-4 py-2 text-sm font-medium backdrop-blur transition-all hover:border-accent hover:text-accent md:inline-block"
        >
          Räägi meiega
        </a>
      </nav>
    </header>
  );
}
