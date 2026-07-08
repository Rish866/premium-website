import { useEffect, useRef } from "react";

export function useDebounce(
  callback: () => void,
  delay: number,
  deps: any[]
) {
  const timer = useRef<number>();

  useEffect(() => {
    window.clearTimeout(timer.current);

    timer.current = window.setTimeout(() => {
      callback();
    }, delay);

    return () => window.clearTimeout(timer.current);
  }, deps);
}
