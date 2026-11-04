"use client";

import { useEffect, useState } from "react";
import { sectionIds, type SectionId } from "./config";

/** Определяет раздел, который сейчас находится в центре экрана. */
export function useActiveSection(): SectionId {
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);

  return active;
}
