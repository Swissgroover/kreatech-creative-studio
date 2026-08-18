import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * Minimal, dependency-free entrance animation: a small fade + translate
 * triggered once when the element enters the viewport.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: As = "div",
}: {
  children: ReactNode;
  /** Delay in seconds. */
  delay?: number;
  className?: string;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const show = () => el.classList.add("is-visible");

    if (typeof IntersectionObserver === "undefined") {
      show();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show();
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <As
      ref={ref}
      className={`reveal ${className}`}
      style={{ ["--reveal-delay" as string]: `${Math.round(delay * 1000)}ms` }}
    >
      {children}
    </As>
  );
}
