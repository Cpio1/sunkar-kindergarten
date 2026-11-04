"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Поочерёдно подсвечивает приёмы пищи, пока раздел виден на экране.
 * При prefers-reduced-motion автосмена отключена: подсветка меняется только при наведении.
 */
export function useMealCycle(count: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: number | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      window.clearInterval(timer);
      if (entry.isIntersecting) {
        timer = window.setInterval(() => setActive((current) => (current + 1) % count), 2200);
      }
    });
    observer.observe(element);
    return () => {
      observer.disconnect();
      window.clearInterval(timer);
    };
  }, [count, paused]);

  return { ref, active, setActive, setPaused };
}
