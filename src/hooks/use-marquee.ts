import { useEffect, useRef, useState } from "react";
import { useAnimationFrame, useMotionValue } from "motion/react";

/**
 * Seamless horizontal marquee loop. Render your items twice inside the
 * returned `trackRef` element; the hook measures one set and wraps `x`
 * once it has scrolled by that amount.
 */
export function useMarquee({ speed = 40, paused = false }: { speed?: number; paused?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [setWidth, setSetWidth] = useState(0);
  const x = useMotionValue(0);

  useEffect(() => {
    const measure = () => {
      const el = trackRef.current;
      if (!el) return;
      setSetWidth(el.scrollWidth / 2);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useAnimationFrame((_, delta) => {
    if (paused || setWidth === 0) return;
    let next = x.get() - (speed * delta) / 1000;
    if (next <= -setWidth) next += setWidth;
    x.set(next);
  });

  return { trackRef, x };
}
