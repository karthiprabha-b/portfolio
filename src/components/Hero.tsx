'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, Play, X, Sparkles, Volume2, Maximize2 } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { AnimatedText } from './AnimatedText';
import { CountUpNumber } from './CountUpNumber';

export const Hero = () => {
  const [introModalOpen, setIntroModalOpen] = useState(false);
  const [isPlayingRight, setIsPlayingRight] = useState(false);
  const rightVideoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const handlePlayRight = () => {
    setIsPlayingRight(true);
    setTimeout(() => {
      if (rightVideoRef.current) {
        rightVideoRef.current.muted = false;
        rightVideoRef.current.play().catch(() => {});
      }
    }, 150);
  };

  const handleOpenModal = () => {
    setIntroModalOpen(true);
    setTimeout(() => {
      if (modalVideoRef.current) {
        modalVideoRef.current.muted = false;
        modalVideoRef.current.play().catch(() => {});
      }
    }, 150);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[660px] sm:min-h-[720px] lg:min-h-[780px] pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 bg-[#f8fafc] overflow-hidden flex flex-col justify-start"
    >
      {/* FULL HERO BACKGROUND IMAGE */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Artwork container positioned so developer workstation and screens sit crisply on the right */}
        <div className="absolute inset-y-0 right-0 w-[110%] sm:w-[115%] lg:w-[122%] xl:w-[128%] translate-x-[4%] sm:translate-x-[6%] lg:translate-x-[8%] xl:translate-x-[10%]">
          <Image
            src="/assets/hero2.png"
            alt="Developer Workstation and Engineering Command Center"
            fill
            priority
            className="object-cover object-right lg:object-[85%_center]"
            sizes="100vw"
          />
        </div>

        {/* Seamless horizontal gradient fade: 100% solid #f8fafc behind all left-side content, fading smoothly into the right workstation visuals */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc] via-[38%] sm:via-[42%] lg:via-[46%] via-[#f8fafc]/80 via-[52%] lg:via-[56%] via-[#f8fafc]/25 via-[62%] lg:via-[66%] to-transparent pointer-events-none z-[1]" />

        {/* Smooth bottom feather gradient to seamlessly blend into #f8fafc and Section 02, eliminating any dark lines or cutoffs */}
        <div className="absolute bottom-0 inset-x-0 h-36 sm:h-44 lg:h-52 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/70 to-transparent pointer-events-none z-[1]" />

        {/* Soft top gradient to harmonize seamlessly with navbar */}
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#f8fafc] via-[#f8fafc]/60 to-transparent pointer-events-none z-[1]" />
      </div>

      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 w-full relative z-10">
        <div className="flex items-start gap-6 sm:gap-10">
          {/* LEFT DECORATIVE TECHNICAL DATA RAIL (Exact from Reference Image!) */}
          <div className="hidden md:flex flex-col items-center pt-4 select-none pointer-events-none text-slate-400">
            {/* Top vertical line */}
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-slate-300 to-slate-400" />

            {/* Cable / Connector glyph */}
            <div className="w-3.5 h-6 rounded-sm border border-slate-400 flex items-center justify-center my-2 text-[9px] font-mono">
              ⚡
            </div>

            {/* Mid vertical line */}
            <div className="w-px h-12 bg-slate-300" />

            {/* Circular node with number 01 */}
            <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-mono font-bold my-2 shadow">
              01
            </div>

            {/* Binary data stream rotated vertically */}
            <div className="w-px h-16 bg-slate-300" />
            <div className="[writing-mode:vertical-lr] text-[9px] font-mono tracking-widest text-slate-400 py-3 uppercase">
              10101 • DEV
            </div>

            {/* Terminal dot node */}
            <div className="w-2.5 h-2.5 rounded-full border-2 border-slate-900 bg-white" />
          </div>

          {/* MAIN HERO CONTENT ROW (Left Text & Buttons + Right Video Showcase) */}
          <div className="flex flex-col items-start justify-between w-full">
            
            {/* LEFT COLUMN: Giant Typography, Subtitle, Buttons, Stats (Never shifts or gets pushed) */}
            <div className="max-w-2xl xl:max-w-3xl space-y-4 sm:space-y-5 lg:space-y-5.5">
              {/* GIANT TYPOGRAPHY WITH DYNAMIC ANIMATIONS (Gracefully paced cascade) */}
              <h1 className="text-4xl sm:text-5xl md:text-[52px] lg:text-6xl xl:text-[70px] font-black tracking-tight leading-[0.96] text-slate-950 uppercase select-none">
                <AnimatedText animation="swipe-left" delay={80} as="span" className="block text-slate-950 font-black">
                  BUILDING
                </AnimatedText>
                <AnimatedText animation="swipe-right" delay={200} as="span" className="block text-[#1a56db] font-black">
                  DIGITAL
                </AnimatedText>
                <AnimatedText animation="fade-up" delay={320} as="span" className="block text-[#7e22ce] font-black">
                  EXPERIENCES.
                </AnimatedText>
                <AnimatedText animation="swipe-left" delay={440} as="span" className="block text-[#ea580c] font-black">
                  ENGINEERING
                </AnimatedText>
                <AnimatedText animation="swipe-right" delay={560} as="span" className="block text-slate-950 font-black">
                  WHAT&apos;S NEXT.
                </AnimatedText>
              </h1>

              {/* Description Subtitle */}
              <AnimatedText animation="fade-up" delay={680} as="p" className="text-xs sm:text-sm md:text-base text-slate-700 font-normal leading-relaxed max-w-xl">
                I build software products, intelligent systems, applications, and digital experiences that turn complex ideas into practical solutions.
              </AnimatedText>

              {/* Action Buttons */}
              <AnimatedText animation="jump" delay={800} className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
                <button
                  onClick={() => scrollTo('projects')}
                  className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-[#050814] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg hover:shadow-glow-blue group cursor-pointer hover-jump"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={handlePlayRight}
                  className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white border border-slate-300/80 hover:border-blue-500 text-slate-900 font-bold text-xs sm:text-sm transition-all shadow-sm group cursor-pointer hover-jump"
                >
                  <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-blue-50 text-blue-600 flex items-center justify-center transition-colors">
                    <Play className="w-3.5 h-3.5 fill-blue-600 ml-0.5" />
                  </div>
                  <span>Watch Intro</span>
                </button>
              </AnimatedText>

              {/* Stats Row: Always in visible hero viewport on load & refresh, counter runs immediately */}
              <div className="pt-4 sm:pt-5 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-xl border-t border-slate-200/80">
                {PERSONAL_INFO.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="space-y-0.5 hover-jump cursor-pointer transition-transform duration-200"
                  >
                    <div className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                      <CountUpNumber
                        value={stat.value}
                        delay={250}
                        duration={2200}
                      />
                    </div>
                    <div className="text-[11px] font-semibold text-slate-500 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: Positioned Cleanly in the Right Workspace (Nudged a little to the right) */}
            {isPlayingRight && (
              <div className="w-full lg:w-auto relative lg:absolute lg:right-[10%] xl:right-[14%] 2xl:right-[18%] lg:top-[44%] xl:top-[42%] lg:-translate-y-1/2 z-30 mt-8 lg:mt-0 flex justify-center items-center animate-fade-in">
                <div className="relative h-[500px] sm:h-[550px] lg:h-[580px] xl:h-[620px] 2xl:h-[650px] max-h-[72vh] aspect-[9/16] rounded-[32px] overflow-hidden shadow-[0_30px_90px_-15px_rgba(0,0,0,0.6)] border-4 border-white/95 bg-black group transition-all duration-300">
                  <video
                    ref={rightVideoRef}
                    src="/assets/Intro.mp4?v=2"
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  {/* Floating Action Controls */}
                  <div className="absolute top-4 right-4 flex items-center gap-2.5 z-20">
                    <button
                      onClick={handleOpenModal}
                      title="Expand Theater View"
                      className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs shadow-md"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        setIsPlayingRight(false);
                        if (rightVideoRef.current) rightVideoRef.current.pause();
                      }}
                      title="Close Video"
                      className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs shadow-md"
                    >
                      <X className="w-4.5 h-4.5" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-xs text-xs font-mono font-semibold text-white flex items-center gap-2 pointer-events-none shadow-md">
                    <Volume2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Sound On</span>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Full Theater Modal for 9:16 Portrait Video */}
      {introModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div className="relative max-w-sm sm:max-w-md w-full aspect-[9/16] max-h-[90vh] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            {/* Close Button */}
            <button
              onClick={() => {
                setIntroModalOpen(false);
                if (modalVideoRef.current) modalVideoRef.current.pause();
              }}
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Container in 9:16 */}
            <video
              ref={modalVideoRef}
              src="/assets/Intro.mp4?v=2"
              controls
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
};
