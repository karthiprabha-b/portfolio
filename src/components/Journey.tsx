'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  GraduationCap, Code, Layers, Briefcase, Laptop,
  CheckCircle2, X, Sparkles, ChevronRight
} from 'lucide-react';
import { AnimatedText } from './AnimatedText';

interface JourneyStep {
  number: string;
  title: string;
  date?: string;
  dateColor?: 'blue' | 'amber' | 'emerald';
  description: string;
  highlights: string[];
  skills: string[];
  // Exact percentage positions calibrated to the stone pedestals on 1671x941 artwork
  pedestal: {
    left: string;
    top: string;
  };
  textBlock: {
    left: string;
    top: string;
    maxWidth?: string;
  };
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    number: "01",
    title: "The Foundation",
    date: "2022 onwards",
    dateColor: "blue",
    description: "Started my B.Tech in Artificial Intelligence & Data Science. Built foundations in programming, algorithms, databases, and software development.",
    highlights: [
      "B.Tech in Artificial Intelligence & Data Science at PRIST University",
      "Core mastery of algorithms, data structures, and statistical modeling",
      "Honours Diploma in Full Stack Development (HDFD) certification",
      "Active problem-solving and architectural foundations"
    ],
    skills: ["Python", "DSA", "SQL / Databases", "AI Foundations", "Full Stack"],
    pedestal: { left: "31.80%", top: "68.00%" },
    textBlock: { left: "33.80%", top: "78.50%", maxWidth: "28.5%" }
  },
  {
    number: "02",
    title: "First Real-World Projects",
    description: "Built applications, browser automation tools, lead extraction systems, and campaign automation workflows. Learned to solve practical problems through code.",
    highlights: [
      "Engineered automated Google Maps lead extraction pipeline (50k+ profiles)",
      "Built CampusCV university placement portal and SparkAI chat platform",
      "Automated high-volume business messaging and data validation workflows",
      "Learned to build fault-tolerant production scrapers with anti-detection"
    ],
    skills: ["Playwright", "Web Scraping", "PostgreSQL", "Tailwind CSS", "Next.js"],
    pedestal: { left: "42.50%", top: "51.50%" },
    textBlock: { left: "45.40%", top: "62.20%", maxWidth: "28.0%" }
  },
  {
    number: "03",
    title: "Independent Developer",
    date: "Aug 2025 – Dec 2025",
    dateColor: "amber",
    description: "Worked independently with clients, developing data systems, web scraping pipelines, and business automation workflows.",
    highlights: [
      "Delivered custom automation pipelines for commercial business clients",
      "Reduced manual data extraction and customer messaging labor by 60%–70%",
      "Architected clean REST APIs and database schema migrations",
      "Direct client consultation, scoping, and rapid iterative turnaround"
    ],
    skills: ["Client Solutions", "Data Pipelines", "FastAPI", "AsyncIO", "Docker"],
    pedestal: { left: "52.50%", top: "34.50%" },
    textBlock: { left: "55.00%", top: "44.50%", maxWidth: "27.5%" }
  },
  {
    number: "04",
    title: "Building in Production",
    date: "Jan 2026 – Present",
    dateColor: "emerald",
    description: "Joined Infowaves as an AI Web Developer / Software Developer. Working on SaaS dashboards, AI integrations, APIs, messaging systems, and business automation.",
    highlights: [
      "Architecting enterprise client SaaS dashboards with Next.js App Router",
      "Integrating WhatsApp Cloud APIs, OpenAI/Claude LLM multi-agent loops",
      "Deploying scalable cloud microservices, auth, and automated webhooks",
      "Shipping resilient production code with rapid vibe coding methodology"
    ],
    skills: ["Next.js 15", "TypeScript", "LLM Multi-Agents", "WhatsApp Cloud API", "SaaS Systems"],
    pedestal: { left: "64.00%", top: "18.50%" },
    textBlock: { left: "66.80%", top: "27.00%", maxWidth: "26.0%" }
  }
];

// Recreated pure SVG vector icons matching the holographic glowing style
const HologramIcons: Record<string, React.FC> = {
  "01": () => (
    <svg viewBox="0 0 48 48" className="w-full h-full text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 6L4 16L24 26L44 16L24 6Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 20V31C10 31 15 36 24 36C33 36 38 31 38 31V20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M44 16V30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "02": () => (
    <svg viewBox="0 0 48 48" className="w-full h-full text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 6L4 16L24 26L44 16L24 6Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 24L24 34L44 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 32L24 42L44 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "03": () => (
    <svg viewBox="0 0 48 48" className="w-full h-full text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="14" width="38" height="26" rx="5" stroke="currentColor" strokeWidth="3" />
      <path d="M16 14V9C16 6.8 17.8 5 20 5H28C30.2 5 32 6.8 32 9V14" stroke="currentColor" strokeWidth="3" />
      <path d="M5 25H43" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="3 3" />
      <rect x="21" y="22" width="6" height="6" rx="1.5" fill="#38bdf8" />
    </svg>
  ),
  "04": () => (
    <svg viewBox="0 0 54 48" className="w-full h-full text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Laptop Screen */}
      <rect x="8" y="7" width="38" height="26" rx="3.5" stroke="currentColor" strokeWidth="3" />
      {/* Code symbol on screen */}
      <path d="M21 16L16 20L21 24" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M33 16L38 20L33 24" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M29 14L25 25" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
      {/* Laptop Base */}
      <path d="M2 33H52C53.1 33 54 33.9 54 35L52 39C51.5 40.1 50.4 41 49 41H5C3.6 41 2.5 40.1 2 39L0 35C0 33.9 0.9 33 2 33Z" stroke="currentColor" strokeWidth="3" fill="rgba(3,105,161,0.25)" />
    </svg>
  )
};

export const Journey = () => {
  const [activeStep, setActiveStep] = useState<JourneyStep | null>(null);

  return (
    <section
      id="journey"
      className="relative w-full overflow-hidden bg-[#020512] text-white select-none -mt-px pt-0 pb-0"
    >
      {/* ─── 1. TOP CURVE: Completely flush with Section 05 (#f8fafc) - ZERO GAP ─── */}
      <div className="w-full overflow-hidden leading-none absolute top-0 inset-x-0 z-30 pointer-events-none select-none -mt-px">
        <svg
          viewBox="0 0 1440 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 lg:h-16 xl:h-20 block text-[#f8fafc]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L1440,0 L1440,20 C1160,56 880,10 560,46 C280,74 100,24 0,38 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* ─── 2. DESKTOP PANORAMIC VIEW (Wide Desktop 1280px+ with Calibrated Pedestals) ─── */}
      <div className="hidden xl:block relative w-full aspect-[1671/941] overflow-hidden bg-[#020512]">
        
        {/* Full-Bleed Pristine Background Artwork: learning-sec06.png */}
        <Image
          src="/assets/learning-sec06.png"
          alt="My Growth Journey Background"
          fill
          priority
          className="w-full h-full object-cover object-center pointer-events-none"
          sizes="100vw"
        />

        {/* Ambient Subtle Depth Tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15 pointer-events-none" />

        {/* ─── 3. TOP-LEFT HEADER (FREE OPEN TYPOGRAPHY - PROMINENT & BIG) ─── */}
        <div className="absolute left-[4.8%] top-[8.0%] z-20 max-w-[90%] sm:max-w-[560px] lg:max-w-[680px] xl:max-w-[780px] 2xl:max-w-[880px] space-y-3 sm:space-y-4 lg:space-y-5 pointer-events-auto">
          {/* Section 06 Numbering Badge (Matching Portfolio Design Language) */}
          <AnimatedText animation="swipe-left" delay={100} className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-mono font-bold tracking-widest uppercase">
            <span className="font-mono text-2xl sm:text-3xl font-black text-white/95 tracking-tighter">06</span>
            <span className="text-sky-400 font-bold">//</span>
            <span className="text-slate-200 tracking-wider sm:tracking-widest">GROWTH JOURNEY</span>
            <span className="text-sky-400 font-bold">//</span>
          </AnimatedText>

          {/* Heading with generous line height and clean line breaks */}
          <AnimatedText animation="fade-up" delay={280} as="h2" className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[50px] 2xl:text-[56px] font-black tracking-tight text-white leading-[1.2] sm:leading-[1.22]">
            <span>From First Lines of Code</span>{' '}
            <span className="inline-block">to</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 drop-shadow-[0_0_28px_rgba(56,189,248,0.55)]">
              Building Real Products.
            </span>
          </AnimatedText>

          {/* Subtitle */}
          <AnimatedText animation="swipe-right" delay={460} as="p" className="text-xs sm:text-sm md:text-base lg:text-[16px] xl:text-[17px] text-slate-200 leading-relaxed font-normal pr-4 max-w-xl">
            Every step shaped my journey from an AI &amp; Data Science student into a developer building applications, automation systems, and production-ready digital solutions.
          </AnimatedText>

          {/* Cyan Accent Bar */}
          <div className="w-14 sm:w-20 h-1 sm:h-1.5 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(56,189,248,0.95)]" />
        </div>

        {/* ─── 4. RECREATED VECTOR ICONS & PROMINENT EDITORIAL TEXT OVERLAYS ─── */}
        <div className="absolute inset-0 z-20 pointer-events-auto">
          {JOURNEY_STEPS.map((step, idx) => {
            const IconComp = HologramIcons[step.number];

            return (
              <React.Fragment key={step.number}>
                {/* ─── A. RECREATED GLOWING HOLOGRAPHIC ICON WITH STADIUM CAPSULE BASE ON ROCK ─── */}
                <div
                  style={{
                    left: step.pedestal.left,
                    top: step.pedestal.top,
                    transform: 'translate(-50%, -50%)'
                  }}
                  className="absolute pointer-events-none z-20 flex flex-col items-center justify-center select-none"
                >
                  {/* Glowing Vector Icon (Crisp Pure White with Intense Cyan Neon Glow) */}
                  <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-13 lg:h-13 drop-shadow-[0_0_14px_rgba(56,189,248,0.95)] z-10 -mb-1 animate-pulse-subtle">
                    {IconComp && <IconComp />}
                  </div>

                  {/* Illuminated Cyan Stadium Platform Capsule Beneath Icon */}
                  <div className="relative w-10 sm:w-12 md:w-14 lg:w-16 h-2 sm:h-2.5 md:h-3 rounded-full bg-cyan-400/40 border-1.5 sm:border-2 border-cyan-300 shadow-[0_0_16px_rgba(56,189,248,0.95)] backdrop-blur-xs flex items-center justify-center">
                    <div className="w-1/2 h-0.5 rounded-full bg-white/70 blur-[0.5px]" />
                  </div>

                  {/* Ambient Base Reflection onto Stone */}
                  <div className="w-16 sm:w-20 md:w-24 h-4 sm:h-5 rounded-full bg-cyan-500/30 blur-md -mt-1 pointer-events-none" />
                </div>

                {/* ─── B. OPEN EDITORIAL MILESTONE TEXT (BIG FONT SIZE, NO BOX) ─── */}
                <div
                  style={{
                    left: step.textBlock.left,
                    top: step.textBlock.top,
                    maxWidth: step.textBlock.maxWidth || '30%'
                  }}
                  onClick={() => setActiveStep(step)}
                  className="absolute z-20 cursor-pointer group transition-all duration-300 hover:translate-x-1"
                >
                  <AnimatedText animation="jump" delay={220 * (idx + 1)}>
                    {/* Step Title Row: Blue Badge + Title (+ Date for 01) */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                      {/* Blue Rounded Badge */}
                      <span className="w-7 h-6 sm:w-8 sm:h-7 md:w-9 md:h-8 lg:w-10 lg:h-8.5 rounded-lg sm:rounded-xl bg-blue-600 group-hover:bg-blue-500 text-white font-black text-[11px] sm:text-xs md:text-sm flex items-center justify-center shrink-0 shadow-md transition-colors border border-blue-400/40">
                        {step.number}
                      </span>

                      {/* Bold Title */}
                      <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[19px] font-black text-white group-hover:text-cyan-200 tracking-tight transition-colors drop-shadow-sm">
                        {step.title}
                      </h3>

                      {/* Inline Date Pill for 01 */}
                      {step.date && step.number === '01' && (
                        <span className="px-2 sm:px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] md:text-xs font-mono font-semibold border shadow-sm border-blue-400/50 bg-blue-950/70 text-blue-300">
                          {step.date}
                        </span>
                      )}
                    </div>

                    {/* Sub-row Date Pill for 03 and 04 */}
                    {step.date && step.number !== '01' && (
                      <div className="mt-1 sm:mt-1.5">
                        <span className={`inline-block px-2 sm:px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] md:text-xs font-mono font-semibold border shadow-sm ${
                          step.dateColor === 'emerald'
                            ? 'border-emerald-500/60 bg-emerald-950/70 text-emerald-300'
                            : step.dateColor === 'amber'
                            ? 'border-amber-500/60 bg-amber-950/70 text-amber-300'
                            : 'border-blue-400/50 bg-blue-950/70 text-blue-300'
                        }`}>
                          {step.date}
                        </span>
                      </div>
                    )}

                    {/* Clean Description Text */}
                    <p className="mt-1 sm:mt-1.5 text-[10px] sm:text-xs md:text-[13px] lg:text-[14px] text-slate-100/95 font-medium leading-relaxed group-hover:text-white transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
                      {step.description}
                    </p>
                  </AnimatedText>
                </div>
              </React.Fragment>
            );
          })}
        </div>

      </div>

      {/* ─── MOBILE & TABLET VIEW: STACKED GLOWING TIMELINE & 2-COL GRID (CLEAN, NO OVERLAPPING) ─── */}
      <div className="xl:hidden relative w-full bg-[#020512] px-5 sm:px-8 md:px-12 pt-8 sm:pt-12 pb-16 text-white overflow-hidden">
        {/* Subtle background art watermark */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <Image
            src="/assets/learning-sec06.png"
            alt="My Growth Journey Background"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020512] via-[#020512]/80 to-[#020512]" />
        </div>

        <div className="relative z-10 space-y-6 sm:space-y-8 max-w-5xl mx-auto">
          {/* Header */}
          <div className="space-y-3 sm:space-y-4">
            <AnimatedText animation="swipe-left" delay={100} className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase">
              <span className="font-mono text-2xl font-black text-white/95">06</span>
              <span className="text-sky-400 font-bold">//</span>
              <span className="text-slate-200 tracking-wider">GROWTH JOURNEY</span>
              <span className="text-sky-400 font-bold">//</span>
            </AnimatedText>

            <AnimatedText animation="fade-up" delay={200} as="h2" className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white leading-[1.22] sm:leading-[1.25]">
              <span>From First Lines of Code</span>{' '}
              <span className="inline-block">to</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">
                Building Real Products.
              </span>
            </AnimatedText>

            <AnimatedText animation="swipe-right" delay={300} as="p" className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-2xl">
              Every step shaped my journey from an AI &amp; Data Science student into a developer building applications, automation systems, and production solutions.
            </AnimatedText>
            
            <div className="w-12 h-1 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(56,189,248,0.95)]" />
          </div>

          {/* Clean Responsive Layout: 1-col on Mobile with glowing vertical timeline line, 2-col Grid on Tablets with zero squish */}
          <div className="relative pl-6 md:pl-0 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-sky-500 before:via-cyan-400 before:to-emerald-500 md:before:hidden">
            {JOURNEY_STEPS.map((step) => {
              const IconComp = HologramIcons[step.number];
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(step)}
                  className="relative p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-all cursor-pointer space-y-3 active:scale-98 backdrop-blur-xs flex flex-col justify-between group"
                >
                  {/* Glowing Node on Timeline (Mobile only) */}
                  <div className="md:hidden absolute -left-[27px] top-4 w-5 h-5 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_10px_rgba(56,189,248,0.8)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>

                  <div className="space-y-2.5">
                    {/* Header Row */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-6 rounded-lg bg-blue-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(37,99,235,0.6)]">
                          {step.number}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {step.title}
                        </h3>
                      </div>
                      {step.date && (
                        <span className={`px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-semibold border ${
                          step.dateColor === 'emerald'
                            ? 'border-emerald-500/60 bg-emerald-950/70 text-emerald-300'
                            : step.dateColor === 'amber'
                            ? 'border-amber-500/60 bg-amber-950/70 text-amber-300'
                            : 'border-blue-400/50 bg-blue-950/70 text-blue-300'
                        }`}>
                          {step.date}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {step.description}
                    </p>

                    {/* Skill chips on tablet view */}
                    <div className="hidden sm:flex flex-wrap gap-1.5 pt-1">
                      {step.skills.slice(0, 3).map((skill) => (
                        <span key={skill} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] text-cyan-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[11px] text-cyan-400 font-semibold border-t border-white/5">
                    <span>View milestones &amp; skills</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── 5. BOTTOM CURVE: Pure white wave transitioning into Section 07 (TechStack #ffffff) - ZERO GAP & NO BLACK STRIPE ─── */}
      <div className="w-full overflow-hidden leading-none absolute -bottom-1 inset-x-0 z-30 pointer-events-none select-none">
        <svg
          viewBox="0 0 1440 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 lg:h-16 xl:h-20 block text-white"
          preserveAspectRatio="none"
        >
          <path
            d="M0,25 C320,60 620,10 920,45 C1160,70 1320,35 1440,50 L1440,65 L0,65 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* ─── 6. INTERACTIVE MILESTONE DETAILS MODAL ─── */}
      {activeStep && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
          <div className="bg-[#0b1028] border border-cyan-400/30 rounded-3xl max-w-lg w-full p-6 sm:p-8 text-white relative shadow-2xl my-8">
            <button
              onClick={() => setActiveStep(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-10 h-9 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-md">
                  {activeStep.number}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {activeStep.title}
                  </h3>
                  {activeStep.date && (
                    <span className="text-xs font-mono font-medium text-cyan-400">
                      {activeStep.date}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                {activeStep.description}
              </p>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Key Accomplishments &amp; Milestones</span>
                </h4>
                <div className="space-y-2">
                  {activeStep.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 p-2.5 rounded-xl bg-white/5 border border-white/5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                  Technologies &amp; Competencies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeStep.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-cyan-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-3 border-t border-white/10">
                <button
                  onClick={() => setActiveStep(null)}
                  className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wide transition-colors cursor-pointer shadow-md"
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
