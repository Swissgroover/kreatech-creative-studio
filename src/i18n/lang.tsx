import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { motion } from "motion/react";
import { dict, type Dict, type Lang } from "./dict";

export type { Lang, Dict };
export { dict };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
  /** True for the brief window while content is fading out / in. */
  isSwitching: boolean;
};

const LangContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "kreatech-lang";
const FADE_MS = 220;

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("et");
  const [isSwitching, setIsSwitching] = useState(false);

  // Restore saved language once on mount.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved === "et" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  // Keep <html lang="..."> in sync for a11y / SEO.
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = useCallback(
    (next: Lang) => {
      if (next === lang) return;
      setIsSwitching(true);
      // Let the fade-out play, then swap text, then fade back in.
      window.setTimeout(() => {
        setLangState(next);
        try {
          localStorage.setItem(STORAGE_KEY, next);
        } catch {}
        // Recompute any scroll-driven animations after layout settles.
        window.setTimeout(() => {
          setIsSwitching(false);
          import("gsap/ScrollTrigger")
            .then(({ ScrollTrigger }) => ScrollTrigger.refresh())
            .catch(() => {});
        }, FADE_MS);
      }, FADE_MS);
    },
    [lang],
  );

  return (
    <LangContext.Provider value={{ lang, setLang, t: dict[lang] as Dict, isSwitching }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

/**
 * Crossfades content while the language switches WITHOUT unmounting children,
 * so GSAP ScrollTriggers (pinned sections, scrub timelines) stay alive.
 */
export function LangCrossfade({ children }: { children: ReactNode }) {
  const { isSwitching } = useLang();
  return (
    <motion.div
      animate={{
        opacity: isSwitching ? 0 : 1,
        filter: isSwitching ? "blur(6px)" : "blur(0px)",
      }}
      transition={{ duration: FADE_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: "opacity, filter" }}
    >
      {children}
    </motion.div>
  );
}
