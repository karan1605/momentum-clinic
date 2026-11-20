import React, { useEffect, useRef, useState } from 'react';

interface CounterUpProps {
  target: number;
  duration?: number;
  formatLocale?: boolean;
  className?: string;
}

/**
 * Replicates jQuery counterUp behavior: counts smoothly from 0 to target over ~1500ms
 * when scrolled into view, using tabular-nums alignment.
 */
export const CounterUp: React.FC<CounterUpProps> = ({
  target,
  duration = 1500,
  formatLocale = true,
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState<number>(() => {
    if (typeof window === 'undefined') return target;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? target : 0;
  });
  const startedRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target);
      return;
    }

    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setValue(target);
      return;
    }

    let rafId = 0;
    const runAnimation = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(target * eased));
        if (progress < 1) {
          rafId = requestAnimationFrame(step);
        } else {
          setValue(target);
        }
      };

      rafId = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          runAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [target, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {formatLocale ? value.toLocaleString('en-US') : value}
    </span>
  );
};
