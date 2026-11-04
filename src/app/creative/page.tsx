'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Sparkles, Film } from 'lucide-react';
import { CREATIVE_ITEMS, PERSONAL_INFO } from '@/data/portfolioData';
import { AnimatedText } from '@/components/AnimatedText';

export default function CreativeServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-neutral-800 selection:text-white relative">
      
      {/* ─── UNIFIED RESPONSIVE DARK HEADER ─── */}
      <header className="border-b border-neutral-900 bg-black/90 backdrop-blur-md sticky top-0 z-40 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex items-center justify-between">
          
          {/* Left: Brand Monogram & Name */}
          <Link href="/" className="flex items-center gap-3 group select-none">
            <div className="w-10 h-10 rounded-xl bg-white text-black font-black text-sm flex items-center justify-center tracking-tight shadow-sm group-hover:scale-105 transition-transform">
              KP
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base text-white tracking-tight leading-tight group-hover:text-orange-400 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] font-medium text-neutral-400 leading-tight hidden sm:block">
                Creative Studio &amp; AI Media
              </span>
            </div>
          </Link>

          {/* Center: Back to Portfolio */}
          <Link
            href="/#studio"
            className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white transition-colors bg-neutral-900 hover:bg-neutral-800 px-4 py-2 rounded-full border border-neutral-800 shadow-xs group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Portfolio</span>
          </Link>

          {/* Right: Section Badge */}
          <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-orange-400 bg-orange-950/40 px-3.5 py-1.5 rounded-full border border-orange-500/30">
            <Film className="w-3.5 h-3.5 text-orange-400" />
            <span>Creative Studio</span>
          </div>

        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-28 relative z-10">

        {/* ─── 01. MAIN PAGE HEADING WITH ANIMATION ─── */}
        <div className="max-w-3xl mb-14 sm:mb-18 space-y-4">
          <AnimatedText animation="swipe-left" delay={100} className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-semibold text-orange-400">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>Creative Studio &amp; Digital Media</span>
          </AnimatedText>

          <AnimatedText animation="fade-up" delay={220} as="h1" className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Creative Studio &amp; Digital Media
          </AnimatedText>

          <AnimatedText animation="swipe-right" delay={340} as="p" className="text-base sm:text-lg font-medium text-neutral-200 tracking-tight">
            Visual ideas. Cinematic stories. Digital experiences.
          </AnimatedText>

          <AnimatedText animation="fade-up" delay={440} as="p" className="text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
            I create engaging visual content that brings ideas to life, combining AI-assisted creative production, video editing, motion graphics and digital design. From animated visuals and product films to promotional campaigns and social media content, I turn concepts into polished digital experiences.
          </AnimatedText>
        </div>

        {/* ─── 02. SERVICE SECTIONS & DESCRIPTIONS WITH LEFT/RIGHT SWIPE ANIMATIONS ─── */}
        <div className="divide-y divide-neutral-900 border-t border-b border-neutral-900">
          {CREATIVE_ITEMS.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={item.id}
                className="py-7 sm:py-9 flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8 transition-colors hover:bg-neutral-950/70 px-3 sm:px-4 rounded-2xl -mx-3 sm:-mx-4"
              >
                {/* Thumbnail Image: Left Swipe on even, Right Swipe on odd */}
                <div className="w-full sm:w-[260px] md:w-[300px] lg:w-[320px] shrink-0">
                  <AnimatedText
                    animation={isEven ? 'swipe-left' : 'swipe-right'}
                    delay={160}
                  >
                    <div className="relative w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-900 shadow-sm border border-neutral-800/80 group">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        className="object-cover object-center group-hover:scale-104 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 320px"
                        priority={item.number === '01' || item.number === '02'}
                      />
                    </div>
                  </AnimatedText>
                </div>

                {/* Text Info: Right Swipe on even, Left Swipe on odd */}
                <div className="flex-1 min-w-0 space-y-2.5">
                  <AnimatedText
                    animation={isEven ? 'swipe-right' : 'swipe-left'}
                    delay={240}
                  >
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">
                      {item.number ? `${item.number}. ` : ''}{item.title}
                    </h2>
                  </AnimatedText>

                  <AnimatedText
                    animation={isEven ? 'swipe-right' : 'swipe-left'}
                    delay={340}
                  >
                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </AnimatedText>

                  <AnimatedText animation="jump" delay={420}>
                    <p className="text-xs sm:text-sm text-neutral-400 font-normal">
                      {item.tags.join(' • ')}
                    </p>
                  </AnimatedText>
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── 03. CLOSING SECTION ─── */}
        <AnimatedText animation="fade-up" delay={260} className="mt-20 sm:mt-28 pt-12 text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Have a creative idea?
          </h2>

          <p className="text-base sm:text-lg font-medium text-neutral-200">
            Let&apos;s turn your concept into something people remember.
          </p>

          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
            Whether it&apos;s a product video, an animated concept, a promotional campaign or a complete visual story, let&apos;s build something worth watching.
          </p>

          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white hover:bg-neutral-200 text-black font-semibold text-sm transition-all hover:scale-105 shadow-md group cursor-pointer"
            >
              <span>Start a Creative Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimatedText>

      </main>

    </div>
  );
}
