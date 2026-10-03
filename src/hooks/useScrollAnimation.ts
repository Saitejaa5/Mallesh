import { useEffect, useState } from "react";

/** Returns true once the element scrolls into view — tiny helper if needed. */
export function useInViewOnce(threshold = 0.2) {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if (!ref || seen) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(ref);
    return () => obs.disconnect();
  }, [ref, seen, threshold]);

  return { setRef, seen };
}
