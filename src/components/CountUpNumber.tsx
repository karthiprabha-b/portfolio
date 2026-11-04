'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

interface CountUpNumberProps {
  value: string; // e.g. "2+", "7+", "20+", "∞"
  duration?: number; // duration in ms (slower, smooth pacing)
  delay?: number; // delay before starting count
  className?: string;
}

export const CountUpNumber: React.FC<CountUpNumberProps> = ({
  value,
  duration = 2200, // Silky smooth, relaxed 2.2-second count
  delay = 200,
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [isCounting, setIsCounting] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  const timerRef = useRef<any>(null);

  const startCounting = useCallback(() => {
    setIsCounting(true);

    // 1. Smooth slow progression for Infinity symbol
    if (value === '∞') {
      const frames = ['0', '9', '99', '999+', '∞'];
      let step = 0;
      const stepDuration = Math.floor(duration / frames.length);
      const interval = setInterval(() => {
        step++;
        if (step >= frames.length - 1) {
          clearInterval(interval);
          setDisplayValue('∞');
          setIsCounting(false);
        } else {
          setDisplayValue(frames[step]);
        }
      }, stepDuration);
      return;
    }

    // 2. Extract numeric target and any suffix
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      setIsCounting(false);
      return;
    }

    const targetNum = parseInt(match[1], 10);
    const suffix = match[2] || '';
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Silky-smooth easeOutCubic: steady and gradual deceleration
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.min(targetNum, Math.floor(ease * (targetNum + 0.999)));

      // Only show suffix as we approach the final count (last 20%)
      const showSuffix = progress >= 0.8 ? suffix : '';
      setDisplayValue(`${current}${showSuffix}`);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setDisplayValue(`${targetNum}${suffix}`);
        setIsCounting(false);
      }
    };

    requestAnimationFrame(update);
  }, [value, duration]);

  useEffect(() => {
    // Respect reduced motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayValue(value);
      return;
    }

    const el = elementRef.current;

    // If navigated directly via hash (e.g. /#projects) or scrolled past on mount, show final value immediately
    if (typeof window !== 'undefined' && (window.location.hash || window.scrollY > 150)) {
      setDisplayValue(value);
    } else {
      // Start counting right on mount/load after initial buffer
      timerRef.current = setTimeout(() => {
        startCounting();
      }, delay);
    }

    // Viewport Intersection Watcher: recount when scrolled into view
    let observer: IntersectionObserver | null = null;
    if (el) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startCounting();
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
    }

    // Fail-safe watchdog: Guarantees stat number NEVER stays at 0
    const failSafeTimer = setTimeout(() => {
      setDisplayValue(value);
      setIsCounting(false);
    }, 1200);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (observer && el) observer.unobserve(el);
      clearTimeout(failSafeTimer);
    };
  }, [delay, duration, startCounting, value]);

  return (
    <span
      ref={elementRef}
      onMouseEnter={() => {
        if (!isCounting) startCounting();
      }}
      onClick={() => {
        if (!isCounting) startCounting();
      }}
      className={`inline-block tabular-nums transition-transform duration-200 cursor-pointer select-none ${className}`}
      title="Click or hover to recount"
    >
      {displayValue}
    </span>
  );
};
