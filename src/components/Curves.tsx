import React from 'react';

// Hero to Projects Wave (Transition from light hero to midnight navy)
export const HeroToProjectsCurve = () => (
  <div className="w-full overflow-hidden leading-none relative -mb-1 select-none pointer-events-none z-10">
    <svg
      viewBox="0 0 1440 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-16 sm:h-24 md:h-32 lg:h-40 block preserve-3d"
      preserveAspectRatio="none"
    >
      <path
        d="M0,45 C320,120 480,-20 820,60 C1120,130 1320,30 1440,55 L1440,140 L0,140 Z"
        fill="#050814"
      />
    </svg>
  </div>
);

// Projects to Services Wave (Transition from midnight navy to cool crisp white)
export const ProjectsToServicesCurve = () => (
  <div className="w-full overflow-hidden leading-none relative -mb-1 select-none pointer-events-none z-10">
    <svg
      viewBox="0 0 1440 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-14 sm:h-20 md:h-28 block"
      preserveAspectRatio="none"
    >
      <path
        d="M0,0 C260,95 540,110 880,40 C1140,-15 1320,50 1440,30 L1440,120 L0,120 Z"
        fill="#f8fafc"
      />
    </svg>
  </div>
);

// Services to Studio Wave (Transition from light to deep midnight studio)
export const ServicesToStudioCurve = () => (
  <div className="w-full overflow-hidden leading-none relative -mb-1 select-none pointer-events-none z-10">
    <svg
      viewBox="0 0 1440 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-16 sm:h-24 md:h-32 block"
      preserveAspectRatio="none"
    >
      <path
        d="M0,30 C300,110 600,-10 940,65 C1200,120 1340,40 1440,70 L1440,130 L0,130 Z"
        fill="#04060e"
      />
    </svg>
  </div>
);

// Studio to About Wave (Transition from dark studio to light About section)
export const StudioToAboutCurve = () => (
  <div className="w-full overflow-hidden leading-none relative -mb-1 select-none pointer-events-none z-10">
    <svg
      viewBox="0 0 1440 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-14 sm:h-20 md:h-28 block"
      preserveAspectRatio="none"
    >
      <path
        d="M0,0 C320,80 680,95 1020,35 C1240,-5 1380,45 1440,25 L1440,120 L0,120 Z"
        fill="#f8fafc"
      />
    </svg>
  </div>
);

// About to Journey Wave (Transition from light About to midnight mountain journey)
export const AboutToJourneyCurve = () => (
  <div className="w-full overflow-hidden leading-none relative -mb-1 select-none pointer-events-none z-10">
    <svg
      viewBox="0 0 1440 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-16 sm:h-24 md:h-32 lg:h-36 block"
      preserveAspectRatio="none"
    >
      <path
        d="M0,40 C340,125 580,-10 920,60 C1220,120 1360,25 1440,50 L1440,140 L0,140 Z"
        fill="#050814"
      />
    </svg>
  </div>
);

// Tech Stack Ribbon Wave (Curved container for Tech stack)
export const JourneyToTechCurve = () => (
  <div className="w-full overflow-hidden leading-none relative -mb-1 select-none pointer-events-none z-10">
    <svg
      viewBox="0 0 1440 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-12 sm:h-18 md:h-24 block"
      preserveAspectRatio="none"
    >
      <path
        d="M0,20 C360,85 720,10 1080,75 C1280,105 1390,40 1440,55 L1440,110 L0,110 Z"
        fill="#030611"
      />
    </svg>
  </div>
);

// Tech to Contact Wave (Electric blue ribbon swoop transitioning to heavenly contact archway)
export const TechToContactCurve = () => (
  <div className="w-full overflow-hidden leading-none relative -mb-1 select-none pointer-events-none z-10 bg-[#040716]">
    <svg
      viewBox="0 0 1440 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-16 sm:h-24 md:h-32 block"
      preserveAspectRatio="none"
    >
      {/* Decorative Cyan/Blue Ribbon Flow */}
      <path
        d="M-50,20 C320,130 640,-30 1020,80 C1260,145 1380,40 1500,60 L1500,100 C1380,80 1260,185 1020,120 C640,10 320,170 -50,60 Z"
        fill="url(#blueRibbonGrad)"
        opacity="0.8"
      />
      <path
        d="M0,60 C380,140 760,10 1120,85 C1320,125 1400,60 1440,75 L1440,140 L0,140 Z"
        fill="#080c1d"
      />
      <defs>
        <linearGradient id="blueRibbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0062ff" />
          <stop offset="50%" stopColor="#00d4ff" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

