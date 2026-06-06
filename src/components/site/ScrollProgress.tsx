import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "motion/react";

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(Math.min(1, Math.max(0, progress)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const springProgress = useSpring(scrollProgress, {
    stiffness: 150,
    damping: 20,
    mass: 0.4,
  });

  const width = useTransform(springProgress, (v) => `${v * 100}%`);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]">
      <motion.div
        style={{ width }}
        className="h-full bg-accent shadow-[0_0_12px] shadow-accent"
      />
    </div>
  );
}
