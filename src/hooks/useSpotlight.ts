import { useCallback } from "react";

/**
 * Tracks pointer position over an element and writes it to CSS custom
 * properties (--x / --y), which the `.spotlight-card` class in index.css
 * uses to render a cursor-following radial highlight. Cheap, GPU-friendly,
 * and works with any element — no extra state or re-renders.
 */
export function useSpotlight() {
  return useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }, []);
}
