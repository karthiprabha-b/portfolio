'use client';

import React from 'react';
import Image from 'next/image';
import { Download, Award, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { AnimatedText } from './AnimatedText';

export const AboutMe = () => {
  return (
    <section id="about" className="relative pt-14 pb-12 sm:pb-16 lg:pb-20 bg-[#f8fafc] text-slate-900 overflow-hidden">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          {/* Left Column: Bio & Core Values */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-6">
            <AnimatedText animation="swipe-left" delay={100} className="flex items-center gap-2 text-xs font-mono font-semibold text-blue-600 uppercase tracking-widest">
              <span>05</span>
              <span>//</span>
              <span>ABOUT ME</span>
              <span>//</span>
            </AnimatedText>

            <AnimatedText animation="fade-up" delay={280} as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-[1.1]">
              A Developer Who <br />
              <span className="text-gradient-hero-digital">Builds Solutions.</span>
            </AnimatedText>

            <AnimatedText animation="swipe-right" delay={460} as="p" className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              {PERSONAL_INFO.bio}
            </AnimatedText>

            <div className="space-y-3 pt-2">
              {[
                "Hands-on full-stack development across modern React, Next.js, TypeScript, and Node.js",
                "Advanced AI automation, LLM agent integration, and browser scraping pipelines",
                "Practical vibe coding workflow: rapid prototyping, architecture, debugging, and production shipping",
                "B.Tech in Artificial Intelligence & Data Science (PRIST University, Thanjavur)"
              ].map((highlight, idx) => (
                <AnimatedText
                  key={idx}
                  animation="fade-up"
                  delay={620 + idx * 140}
                  className="flex items-start gap-3 hover-jump"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-600 font-medium">
                    {highlight}
                  </span>
                </AnimatedText>
              ))}
            </div>

            {/* CTAs: Direct Certificate Download & Resume Download */}
            <AnimatedText animation="jump" delay={1180} className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="/assets/FullStack_Certificate.jpg"
                download="Karthikeyan_FullStack_Development_Certificate.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#050814] hover:bg-blue-600 text-white font-semibold text-xs tracking-wide transition-all shadow-md group cursor-pointer hover-jump"
              >
                <Award className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors" />
                <span>Download Full Stack Certificate</span>
                <Download className="w-3.5 h-3.5 opacity-80 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Karthikeyan_Prabakaran_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-300 hover:border-blue-500 hover:text-blue-600 text-slate-800 font-semibold text-xs transition-all shadow-sm cursor-pointer hover-jump"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </AnimatedText>
          </div>

          {/* Right Column: Clean Avatar in Open Space */}
          <div className="lg:col-span-5 xl:col-span-6 relative flex flex-col items-center justify-center">
            {/* Open Space Avatar Stage */}
            <div className="relative w-full max-w-[540px] h-[460px] sm:h-[500px] lg:h-[540px] flex items-end justify-center select-none">
              
              {/* Soft Ambient Radial Glow Aura in Open Space */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-gradient-to-tr from-blue-500/15 via-indigo-500/10 to-amber-500/15 rounded-full blur-3xl pointer-events-none select-none" />
              
              {/* Subtle Decorative Orbital Rings in Open Space */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[390px] sm:w-[470px] h-[390px] sm:h-[470px] rounded-full border border-slate-300/60 pointer-events-none select-none -rotate-12" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] sm:w-[560px] h-[480px] sm:h-[560px] rounded-full border border-blue-400/20 border-dashed pointer-events-none select-none" />

              {/* Grounding Elliptical Shadow Beneath Avatar */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-slate-900/15 rounded-[100%] blur-xl pointer-events-none" />

              {/* Unboxed Foreground Developer Avatar (Cutout in Open Space) */}
              <div className="relative z-10 w-full h-full flex items-end justify-center pointer-events-none select-none">
                <Image
                  src="/assets/avatar.png"
                  alt="Karthikeyan Prabakaran - Developer Avatar"
                  width={580}
                  height={550}
                  priority
                  className="w-auto h-[98%] max-h-[520px] object-contain object-bottom drop-shadow-[0_20px_40px_rgba(15,23,42,0.22)] hover:scale-105 transition-transform duration-500 pointer-events-auto cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

