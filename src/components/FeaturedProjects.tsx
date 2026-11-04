'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight, ExternalLink, Github,
  CheckCircle2, X, Terminal, Cpu, ShieldCheck, Layers, Sparkles
} from 'lucide-react';
import { PROJECTS, Project } from '@/data/portfolioData';
import { AnimatedText } from './AnimatedText';

// Extended 3-set array for infinite continuous smooth carouseling
const EXTENDED_PROJECTS: { project: Project; virtualIdx: number; realIdx: number }[] = [
  ...PROJECTS.map((p, i) => ({ project: p, virtualIdx: i, realIdx: i })),
  ...PROJECTS.map((p, i) => ({ project: p, virtualIdx: i + PROJECTS.length, realIdx: i })),
  ...PROJECTS.map((p, i) => ({ project: p, virtualIdx: i + PROJECTS.length * 2, realIdx: i })),
];

export const FeaturedProjects = () => {
  const totalProjects = PROJECTS.length;
  // Start at the middle set (index = totalProjects, e.g. 5)
  const [virtualIndex, setVirtualIndex] = useState(totalProjects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [enableTransition, setEnableTransition] = useState(true);

  // Dynamic step width matching exact card size + gap per viewport
  const [cardStep, setCardStep] = useState(176);

  // Drag / Touch coordinates
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragCurrentX, setDragCurrentX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Update card step width on mount & resize
  useEffect(() => {
    const updateStep = () => {
      const w = window.innerWidth;
      if (w >= 1280) {
        setCardStep(176); // 160px card + 16px gap
      } else if (w >= 1024) {
        setCardStep(166); // 150px card + 16px gap
      } else if (w >= 640) {
        setCardStep(151); // 135px card + 16px gap
      } else {
        setCardStep(134); // 120px card + 14px gap
      }
    };

    updateStep();
    window.addEventListener('resize', updateStep);
    return () => window.removeEventListener('resize', updateStep);
  }, []);

  const realActiveIndex = virtualIndex % totalProjects;
  const activeProject = PROJECTS[realActiveIndex];

  // Navigate to next slide
  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setVirtualIndex((prev) => prev + 1);
  }, [isAnimating]);

  // Navigate to prev slide
  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setVirtualIndex((prev) => prev - 1);
  }, [isAnimating]);

  // Handle seamless infinite loop reset when transition ends
  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    // CRITICAL: Only respond to the track container's own transform transition, ignore bubbled children
    if (e.target !== e.currentTarget) return;

    setIsAnimating(false);
    // If virtualIndex has moved into the 3rd set (>= totalProjects * 2), reset silently to middle set
    if (virtualIndex >= totalProjects * 2) {
      setEnableTransition(false);
      setVirtualIndex((prev) => (prev % totalProjects) + totalProjects);
    } else if (virtualIndex < totalProjects) {
      // If moved into 1st set, reset forward to middle set
      setEnableTransition(false);
      setVirtualIndex((prev) => (prev % totalProjects) + totalProjects);
    }
  };

  // Re-enable CSS transitions after silent reset
  useEffect(() => {
    if (!enableTransition) {
      const raf1 = requestAnimationFrame(() => {
        const raf2 = requestAnimationFrame(() => {
          setEnableTransition(true);
        });
        return () => cancelAnimationFrame(raf2);
      });
      return () => cancelAnimationFrame(raf1);
    }
  }, [enableTransition]);

  // Keyboard navigation (ArrowLeft & ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject) return;
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide, selectedProject]);

  // Touch Swipe Handlers for mobile & tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || dragStartX === null) return;
    setDragCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isDragging || dragStartX === null || dragCurrentX === null) {
      setIsDragging(false);
      setDragStartX(null);
      setDragCurrentX(null);
      return;
    }

    const deltaX = dragStartX - dragCurrentX;
    const swipeThreshold = 50;

    if (deltaX > swipeThreshold) {
      nextSlide();
    } else if (deltaX < -swipeThreshold) {
      prevSlide();
    }

    setIsDragging(false);
    setDragStartX(null);
    setDragCurrentX(null);
  };

  // Mouse drag handlers for desktop swipe
  const handleMouseDown = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('a')) return;
    setDragStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || dragStartX === null) return;
    setDragCurrentX(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging || dragStartX === null || dragCurrentX === null) {
      setIsDragging(false);
      setDragStartX(null);
      setDragCurrentX(null);
      return;
    }

    const deltaX = dragStartX - dragCurrentX;
    const swipeThreshold = 60;

    if (deltaX > swipeThreshold) {
      nextSlide();
    } else if (deltaX < -swipeThreshold) {
      prevSlide();
    }

    setIsDragging(false);
    setDragStartX(null);
    setDragCurrentX(null);
  };

  return (
    <section
      id="projects"
      className="relative z-20 text-white select-none overflow-hidden pt-10 sm:pt-16 lg:pt-28 pb-14 sm:pb-20 lg:pb-24 lg:min-h-[calc(min(100vw,2400px)*1100/2400)] flex flex-col justify-start bg-[#020514] lg:bg-transparent"
    >
      {/* 1. PROJECT SHOWCASE ENVIRONMENT (Organic curved pod atmosphere) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/assets/project_showcase.png"
          alt="Featured Projects Atmosphere"
          fill
          priority
          className="object-cover object-top pointer-events-none select-none"
          sizes="100vw"
        />
        {/* Ambient depth gradient ensuring mobile view is 100% deep midnight blue */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-[#020514]/80 via-[#050e2d]/70 to-[#020514] pointer-events-none" />
      </div>

      {/* CAROUSEL CONTENT CONTAINER */}
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 relative z-30 pt-2 pb-2 w-full">
        {/* Parent flex with items-start to lock left heading in place */}
        <div className="flex flex-col lg:flex-row items-start gap-8 xl:gap-10">
          
          {/* LEFT PANEL: Aligned in lockstep with Sections 03, 04, and 05 */}
          <div className="lg:w-[28%] xl:w-[26%] shrink-0 flex flex-col justify-start self-start pt-2 sm:pt-4 lg:pt-6 space-y-4 sm:space-y-5 select-none">
            <div className="space-y-3">
              {/* Stacked 02/07 Badge & Section Label */}
              <AnimatedText animation="swipe-left" delay={100} className="flex items-center gap-2">
                <div className="flex flex-col items-center justify-center px-1.5 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-[9px] font-bold text-slate-300 leading-none">
                  <span>02</span>
                  <span className="w-2.5 h-px bg-slate-600 my-0.5" />
                  <span>07</span>
                </div>
                <div className="text-[10px] font-mono font-bold text-slate-300 uppercase tracking-widest flex items-center gap-1.5">
                  <span>FEATURED PROJECTS</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                </div>
              </AnimatedText>

              {/* Main Heading - Matching Section 03 & 04 Typography */}
              <AnimatedText animation="fade-up" delay={280} as="h2" className="text-3xl sm:text-4xl xl:text-5xl font-black tracking-tight leading-[1.12] text-white">
                Real Projects. <br />
                <span className="text-gradient-blue">Real Impact.</span>
              </AnimatedText>

              <AnimatedText animation="swipe-right" delay={460} as="p" className="text-xs sm:text-sm text-slate-300/90 leading-relaxed max-w-sm font-normal">
                Production platforms, AI conversational agents, and high-throughput automation pipelines engineered for commercial scale.
              </AnimatedText>
            </div>

            {/* Interactive Progress Indicator Dots */}
            <div className="flex items-center gap-2 pt-1">
              {PROJECTS.map((p, idx) => {
                const isSelected = idx === realActiveIndex;
                return (
                  <button
                    key={p.id}
                    onClick={() => {
                      if (isAnimating) return;
                      setIsAnimating(true);
                      setVirtualIndex(totalProjects + idx);
                    }}
                    aria-label={`Go to ${p.title}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      isSelected
                        ? 'w-6 bg-blue-500 shadow-glow-blue'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                );
              })}

              <span className="ml-2 font-mono text-[10px] text-slate-400 font-semibold">
                0{realActiveIndex + 1} / 0{totalProjects}
              </span>
            </div>

            {/* View All Projects CTA (High-contrast, prominent and clearly visible) */}
            <Link
              href="/projects"
              className="inline-flex items-center gap-2.5 mt-5 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold tracking-wide shadow-[0_4px_20px_rgba(37,99,235,0.45)] hover:shadow-[0_6px_25px_rgba(37,99,235,0.7)] hover:scale-105 active:scale-95 border border-blue-400/80 transition-all duration-200 self-start group cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5 text-blue-200 group-hover:rotate-12 transition-transform" />
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* RIGHT PANEL: Smooth Continuous Hardware-Accelerated Sliding Track */}
          <div className="flex-1 min-w-0 w-full relative overflow-hidden h-[330px] sm:h-[350px] lg:h-[370px] flex items-center [mask-image:linear-gradient(to_right,#000_82%,transparent_100%)]">
            
            {/* Sliding Track Viewport */}
            <div
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              className="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing flex items-center"
            >
              {/* Animated Continuous Track */}
              <div
                onTransitionEnd={handleTransitionEnd}
                className="flex items-center gap-3.5 sm:gap-4"
                style={{
                  transform: `translate3d(-${virtualIndex * cardStep}px, 0px, 0px)`,
                  transition: enableTransition
                    ? 'transform 500ms cubic-bezier(0.25, 1, 0.5, 1)'
                    : 'none',
                  willChange: 'transform',
                }}
              >
                {EXTENDED_PROJECTS.map((item, idx) => {
                  const proj = item.project;
                  const isActive = idx === virtualIndex;

                  return (
                    <div
                      key={`${proj.id}-${idx}`}
                      onClick={() => {
                        if (idx !== virtualIndex) {
                          if (isAnimating) return;
                          setIsAnimating(true);
                          setVirtualIndex(idx);
                        } else {
                          setSelectedProject(proj);
                        }
                      }}
                      className={`h-[320px] sm:h-[340px] lg:h-[360px] shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden relative cursor-pointer select-none transition-[width,border-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                        isActive
                          ? 'w-[78vw] sm:w-[350px] lg:w-[390px] xl:w-[430px] bg-[#090e23] border border-blue-500/60 shadow-[0_0_35px_rgba(59,130,246,0.3)] z-10'
                          : 'w-[120px] sm:w-[135px] lg:w-[150px] xl:w-[160px] bg-[#090e23]/80 border border-white/10 hover:border-blue-500/40 hover:scale-[1.01] shadow-xl opacity-75 hover:opacity-100 z-0'
                      }`}
                    >
                      {/* Full Project Artwork Background */}
                      <div className="absolute inset-0 z-0">
                        <Image
                          src={proj.mockupImage}
                          alt={`${proj.title} Artwork`}
                          fill
                          priority={idx >= totalProjects && idx < totalProjects + 3}
                          className="object-cover object-center"
                          sizes="(max-width: 1024px) 80vw, 40vw"
                        />
                        {/* Gradient Mask for High Contrast Readability */}
                        <div
                          className={`absolute inset-0 transition-opacity duration-500 ${
                            isActive
                              ? 'bg-gradient-to-t from-[#050814] via-[#050814]/80 to-transparent'
                              : 'bg-gradient-to-t from-[#050814] via-[#050814]/70 to-transparent'
                          }`}
                        />
                        {isActive && (
                          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
                        )}
                      </div>

                      {/* CARD CONTENT */}
                      <div className="relative z-10 h-full p-4 sm:p-5 flex flex-col justify-end">
                        {/* Title & Subtitle */}
                        <div className="space-y-0.5">
                            <h3 className={`font-black text-white tracking-tight drop-shadow-md transition-all duration-300 ${
                              isActive ? 'text-lg sm:text-xl xl:text-2xl line-clamp-1' : 'text-xs sm:text-sm font-bold line-clamp-1'
                            }`}>
                              {proj.title}
                            </h3>
                            <div className={`font-semibold text-blue-400 transition-all duration-300 ${
                              isActive ? 'text-[11px] sm:text-xs' : 'text-[10px] line-clamp-1'
                            }`}>
                              {proj.subtitle}
                            </div>
                          </div>

                          {/* EXPANDED CONTENT: Tagline & Buttons (Smoothly revealed when active) */}
                          <div
                            className={`transition-all duration-300 ease-out overflow-hidden ${
                              isActive
                                ? 'opacity-100 max-h-36 mt-2 pointer-events-auto'
                                : 'opacity-0 max-h-0 mt-0 pointer-events-none'
                            }`}
                          >
                            <p className="text-[11px] sm:text-xs text-slate-200 leading-relaxed max-w-md line-clamp-2 drop-shadow">
                              {proj.tagline}
                            </p>

                            {/* Action Buttons */}
                            {proj.liveUrl && (
                              <div className="flex items-center gap-2.5 pt-2.5 whitespace-nowrap">
                                <a
                                  href={proj.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[11px] border border-blue-400/40 backdrop-blur-sm transition-colors cursor-pointer shadow-sm"
                                >
                                  <span>Live Demo</span>
                                  <ExternalLink className="w-3 h-3 text-white/80" />
                                </a>
                              </div>
                            )}
                          </div>

                          {/* COMPACT PREVIEW FOOTER: Shown when inactive */}
                          <div
                            className={`transition-all duration-300 ease-out overflow-hidden ${
                              isActive
                                ? 'opacity-0 max-h-0 mt-0 pointer-events-none'
                                : 'opacity-100 max-h-6 mt-1.5 pointer-events-auto'
                            }`}
                          >
                            <div className="flex items-center justify-between text-[10px] font-semibold text-slate-300">
                              <span className="flex items-center gap-1">
                                <span className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
                                <span className="text-[9px]">Preview</span>
                              </span>
                              <ArrowRight className="w-3 h-3 text-blue-400" />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. BOTTOM TRANSITION WAVE INTO SECTION 03 (#f8fafc) - Mobile only (hidden on desktop so original artwork edges display naturally) */}
      <div className="lg:hidden w-full overflow-hidden leading-none absolute -bottom-1 inset-x-0 z-20 pointer-events-none select-none">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 lg:h-16 block text-[#f8fafc]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,25 C320,55 680,10 1020,40 C1220,58 1350,30 1440,45 L1440,60 L0,60 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* PROJECT DETAILS DEEP-DIVE MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-[#0b112c] border border-white/15 rounded-3xl max-w-3xl w-full p-6 sm:p-8 text-white relative shadow-2xl my-8 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Close Project Details"
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-1">
                  <span>{selectedProject.category}</span>
                  <span>•</span>
                  <span>{selectedProject.isAiPowered ? 'AI-Powered Architecture' : 'Full-Stack Web Engineering'}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-slate-300 mt-1">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Mockup Preview Area */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black/60 border border-white/10">
                <Image
                  src={selectedProject.mockupImage}
                  alt={selectedProject.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Overview & Architecture */}
              <div className="space-y-4 text-sm text-slate-300">
                <div>
                  <h4 className="font-bold text-white text-base mb-1 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-blue-400" />
                    Overview & Architecture
                  </h4>
                  <p className="leading-relaxed text-slate-300">{selectedProject.details.overview}</p>
                  <div className="mt-2 p-3.5 rounded-xl bg-black/40 border border-white/5 font-mono text-xs text-slate-400 leading-relaxed">
                    {selectedProject.details.architecture}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-white text-base mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-green-400" />
                    Verified Outcomes & Real Impact
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.impact.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-white text-base mb-2 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    Technologies Utilized
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/10 text-blue-300 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-glow-blue"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Platform
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/10"
                    >
                      <Github className="w-4 h-4" /> Source Code
                    </a>
                  )}
                  <Link
                    href={`/projects/${selectedProject.id}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white font-semibold text-xs border border-white/10"
                  >
                    <span>Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-full text-xs font-medium text-slate-400 hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
