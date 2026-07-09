"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Triggers a CSS animation once when the element enters the viewport.
 * Uses native IntersectionObserver — zero JS runtime cost after trigger.
 *
 * @param rootMargin  Positive value = trigger BEFORE the element enters.
 *                    "0px 0px -100px 0px" means 100px before the bottom edge.
 */
export function useInViewAnimation(rootMargin = "0px 0px -100px 0px") {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Already visible on mount (e.g. above the fold)
    if (el.getBoundingClientRect().top < window.innerHeight) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, isVisible };
}
