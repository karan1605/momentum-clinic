import React, { useEffect, useRef, useState } from 'react';

type RevealDirection = 'up' | 'left' | 'right' | 'fade';

interface RevealProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * Lightweight IntersectionObserver entrance reveal replicating the WOW.js + Animate.css
 * scroll reveals while keeping above-the-fold and reduced-motion states immediately legible.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  direction = 'up',
  delay = 0.15,
  duration = 0.85,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (visible) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);

    // Safety fallback so content never stays hidden even if observer does not fire in virtual viewports
    const fallbackTimer = window.setTimeout(() => setVisible(true), 1200);

    return () => {
      window.clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, [visible]);

  const hiddenTransform =
    direction === 'left'
      ? 'translate3d(-32px, 0, 0)'
      : direction === 'right'
        ? 'translate3d(32px, 0, 0)'
        : direction === 'up'
          ? 'translate3d(0, 26px, 0)'
          : 'none';

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate3d(0, 0, 0)' : hiddenTransform,
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {children}
    </div>
  );
};
