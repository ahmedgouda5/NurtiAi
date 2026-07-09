"use client";

import { type ReactNode, useState, useEffect, useRef } from "react";

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  minHeight?: number;
}

export function LazySection({
  children,
  fallback,
  rootMargin = "100px",
  minHeight = 400,
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasLoaded) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          setHasLoaded(true);
          observer.disconnect();
        }
      },
      { root: null, threshold: 0, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, hasLoaded]);

  return (
    <div ref={ref} style={{ minHeight: shouldLoad ? undefined : minHeight }}>
      {shouldLoad ? children : fallback}
    </div>
  );
}
