'use client';

import React, { useEffect, useRef, useState } from 'react';

type AnimationType = 'fade-up' | 'swipe-left' | 'swipe-right' | 'jump' | 'rotate' | 'fade';

interface AnimatedTextProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number; // in milliseconds
  duration?: number; // in milliseconds
  className?: string;
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'section';
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 1100, // Luxurious, deliberate, cinematic pacing
  className = '',
  as: Component = 'div',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Respect reduced motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const currentEl = elementRef.current;
    if (!currentEl) return;

    // Check immediate viewport intersection on mount
    const rect = currentEl.getBoundingClientRect();
    if (rect.top < window.innerHeight + 80 && rect.bottom > -80) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentEl);
        }
      },
      {
        threshold: 0.01,
        rootMargin: '100px 0px 100px 0px',
      }
    );

    observer.observe(currentEl);

    // Fail-safe watchdog: Guarantees text NEVER stays invisible if browser throttles observer
    const failSafeTimer = setTimeout(() => {
      setIsVisible(true);
    }, 700 + delay);

    return () => {
      if (currentEl) observer.unobserve(currentEl);
      clearTimeout(failSafeTimer);
    };
  }, [delay]);

  const getInitialStyle = (): React.CSSProperties => {
    // Smooth, cinematic ease-out curve that lets users clearly perceive the motion
    const base: React.CSSProperties = {
      transitionProperty: 'opacity, transform, filter',
      transitionDuration: `${duration}ms`,
      transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
      transitionDelay: `${delay}ms`,
      willChange: 'transform, opacity',
    };

    if (isVisible) {
      return {
        ...base,
        opacity: 1,
        transform: 'translate3d(0, 0, 0) scale(1) rotate(0deg)',
        filter: 'blur(0px)',
      };
    }

    switch (animation) {
      case 'swipe-left':
        return {
          ...base,
          opacity: 0,
          transform: 'translate3d(-56px, 0, 0)',
          filter: 'blur(3px)',
        };
      case 'swipe-right':
        return {
          ...base,
          opacity: 0,
          transform: 'translate3d(56px, 0, 0)',
          filter: 'blur(3px)',
        };
      case 'jump':
        return {
          ...base,
          opacity: 0,
          transform: 'translate3d(0, 42px, 0) scale(0.92)',
          filter: 'blur(3px)',
        };
      case 'rotate':
        return {
          ...base,
          opacity: 0,
          transform: 'translate3d(0, 28px, 0) rotate(-4deg) scale(0.95)',
          filter: 'blur(3px)',
        };
      case 'fade':
        return {
          ...base,
          opacity: 0,
        };
      case 'fade-up':
      default:
        return {
          ...base,
          opacity: 0,
          transform: 'translate3d(0, 38px, 0)',
          filter: 'blur(3px)',
        };
    }
  };

  const Tag = Component as any;

  return (
    <Tag
      ref={elementRef}
      style={getInitialStyle()}
      className={className}
    >
      {children}
    </Tag>
  );
};
