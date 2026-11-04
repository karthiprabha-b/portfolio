'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { PERSONAL_INFO } from '@/data/portfolioData';

export const Navigation = () => {
  const pathname = usePathname();

  // Hide on project archive or other non-homepage routes so it doesn't overlap
  if (pathname !== '/') {
    return null;
  }

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="absolute top-6 left-6 sm:left-10 z-40">
      <div
        onClick={() => scrollTo('hero')}
        className="flex items-center gap-3.5 cursor-pointer group select-none"
      >
        {/* KP Monogram Box */}
        <div className="w-11 h-11 rounded-xl bg-black text-white flex items-center justify-center font-black tracking-tight text-lg shadow-sm group-hover:scale-105 transition-transform">
          KP
        </div>

        <div>
          <div className="font-extrabold text-sm sm:text-base tracking-widest uppercase text-slate-950 flex items-center gap-2">
            <span>{PERSONAL_INFO.name}</span>
          </div>
          <div className="text-[11px] font-medium text-slate-500 tracking-normal hidden sm:block">
            Software Developer | Full-Stack Engineer | AI Automation Developer
          </div>
        </div>
      </div>
    </header>
  );
};
