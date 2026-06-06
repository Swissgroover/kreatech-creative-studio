import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
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

type ViewTransitionDocument = Document & {
  startViewTransition?: (updateCallback: () => void) => { finished: Promise<void> };
};

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "et";
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "en" || saved === "et" ? saved : "et";
  } catch {
    return "et";
  }
}

function refreshScrollAnimations() {
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      import("gsap/ScrollTrigger")
        .then(({ ScrollTrigger }) => ScrollTrigger.refresh())
        .catch(() => {});
    });
  });
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);
  const [isSwitching, setIsSwitching] = useState(false);

  // Keep <html lang="..."> in sync for a11y / SEO.
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = useCallback(
    (next: Lang) => {
      if (next === lang) return;
      const applyLang = () => {
        setLangState(next);
        try {
          localStorage.setItem(STORAGE_KEY, next);
        } catch {}
      };

      setIsSwitching(true);

      const startViewTransition = (document as ViewTransitionDocument).startViewTransition;
      if (startViewTransition) {
        const transition = startViewTransition.call(document, applyLang);
        transition.finished.finally(() => {
          setIsSwitching(false);
          refreshScrollAnimations();
        });
        return;
      }

      applyLang();
      window.setTimeout(() => {
        setIsSwitching(false);
        refreshScrollAnimations();
      }, 260);
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
