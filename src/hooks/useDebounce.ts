import { useEffect, useRef } from "react";

export function useDebounce(callback: () => void, delay: number, deps: unknown[]) {
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (timer.current) window.clearTimeout(timer.current);

    timer.current = window.setTimeout(() => {
      callback();
    }, delay);

    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, deps);
}
