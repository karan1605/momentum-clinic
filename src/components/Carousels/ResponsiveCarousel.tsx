import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ResponsiveCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  getKey: (item: T, index: number) => string;
  itemsPerViewDesktop?: number;
  itemsPerViewTablet?: number;
  autoPlayMs?: number;
  label: string;
}

export function ResponsiveCarousel<T>({
  items,
  renderItem,
  getKey,
  itemsPerViewDesktop = 3,
  itemsPerViewTablet = 2,
  autoPlayMs = 6000,
  label,
}: ResponsiveCarouselProps<T>) {
  const [perView, setPerView] = useState(itemsPerViewDesktop);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const updatePerView = () => {
      if (window.innerWidth < 768) {
        setPerView(1);
      } else if (window.innerWidth < 1100) {
        setPerView(itemsPerViewTablet);
      } else {
        setPerView(itemsPerViewDesktop);
      }
    };
    updatePerView();
    window.addEventListener('resize', updatePerView);
    return () => window.removeEventListener('resize', updatePerView);
  }, [itemsPerViewDesktop, itemsPerViewTablet]);

  const maxIndex = Math.max(0, items.length - perView);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, maxIndex]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  useEffect(() => {
    if (!autoPlayMs || isPaused || maxIndex === 0) return;
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const timer = window.setInterval(() => {
      goNext();
    }, autoPlayMs);
    return () => window.clearInterval(timer);
  }, [autoPlayMs, isPaused, maxIndex, goNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goPrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goNext();
    }
  };

  const slideWidthPct = 100 / perView;
  const totalDots = maxIndex + 1;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      className="relative"
    >
      <div
        className="overflow-hidden -mx-3 py-3 -my-3"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * slideWidthPct}%)`,
          }}
        >
          {items.map((item, idx) => (
            <div
              key={getKey(item, idx)}
              className="shrink-0 px-3"
              style={{ width: `${slideWidthPct}%` }}
            >
              {renderItem(item, idx)}
            </div>
          ))}
        </div>
      </div>

      {maxIndex > 0 && (
        <div className="mt-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2" role="tablist" aria-label={`${label} slides`}>
            {Array.from({ length: totalDots }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={currentIndex === idx}
                aria-label={`Slide ${idx + 1}`}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? 'w-8 bg-[#025EC1]'
                    : 'w-2.5 bg-[#D1D8E0] hover:bg-[#0D6EFD]/60'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goPrev}
              aria-label={`Previous ${label}`}
              className="w-11 h-11 rounded-full bg-white border border-black/10 text-[#213245] hover:bg-[#025EC1] hover:text-white hover:border-[#025EC1] flex items-center justify-center transition-colors duration-300 cursor-pointer shadow-xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label={`Next ${label}`}
              className="w-11 h-11 rounded-full bg-white border border-black/10 text-[#213245] hover:bg-[#025EC1] hover:text-white hover:border-[#025EC1] flex items-center justify-center transition-colors duration-300 cursor-pointer shadow-xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
