import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ScrollProgress } from "./ScrollProgress";


const links = [
  { href: "#services", label: "Teenused" },
  { href: "#process", label: "Protsess" },
  { href: "#works", label: "Tööd" },
  { href: "#lead", label: "Projektijuht" },
  { href: "#about", label: "Meist" },
  { href: "#faq", label: "KKK" },
  { href: "#contact", label: "Kontakt" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hover, setHover] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
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
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                    mass: 0.8,
                  }}
                  className="absolute inset-0 -z-0 rounded-full bg-surface/80 ring-1 ring-border/60"
                />
              )}
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden rounded-full border border-border bg-surface/60 px-4 py-2 text-sm font-medium backdrop-blur transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_30px_-10px] hover:shadow-accent md:inline-block"
        >
          Räägi meiega
        </a>
      </nav>
    </motion.header>
  );
}
