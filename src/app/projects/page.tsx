'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft, ArrowUpRight, ExternalLink, Layers, Sparkles, Wrench
} from 'lucide-react';
import { ALL_PROJECTS, PERSONAL_INFO } from '@/data/portfolioData';
import { AnimatedText } from '@/components/AnimatedText';

export default function ProjectsPage() {
  const [filter, setFilter] = useState<'all' | 'products' | 'services'>('all');

  const products = ALL_PROJECTS.filter((p) => !p.isService);
  const services = ALL_PROJECTS.filter((p) => p.isService);

  const displayedList =
    filter === 'products'
      ? products
      : filter === 'services'
      ? services
      : ALL_PROJECTS;

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      
      {/* ─── UNIFIED RESPONSIVE HEADER ─── */}
      <header className="border-b border-slate-200/90 bg-white/95 backdrop-blur-md sticky top-0 z-40 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex items-center justify-between">
          
          {/* Left: Brand Monogram & Name */}
          <Link href="/" className="flex items-center gap-3 group select-none">
            <div className="w-10 h-10 rounded-xl bg-slate-950 text-white font-black text-sm flex items-center justify-center tracking-tight shadow-sm group-hover:scale-105 transition-transform">
              KP
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base text-slate-950 tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] font-medium text-slate-500 leading-tight hidden sm:block">
                Software &amp; AI Automation Developer
              </span>
            </div>
          </Link>

          {/* Center: Back to Portfolio */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors bg-white hover:bg-slate-50 px-4 py-2 rounded-full border border-slate-300 shadow-xs group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Portfolio</span>
          </Link>

          {/* Right: Section Badge */}
          <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>Project Showcase</span>
          </div>

        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-28">

        {/* Page Title & Subheading with Swipe Animations */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16 space-y-3">
          <AnimatedText animation="swipe-left" delay={100} className="text-xs font-bold uppercase tracking-widest text-blue-600">
            FULL ARCHIVE &amp; SPECIFICATIONS
          </AnimatedText>

          <AnimatedText animation="fade-up" delay={240} as="h1" className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Projects &amp; Solutions
          </AnimatedText>

          <AnimatedText animation="swipe-right" delay={380} as="p" className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            A comprehensive catalog of production SaaS platforms, AI-driven applications, automation pipelines, and software engineering services.
          </AnimatedText>

          {/* Clean Filter Tabs */}
          <AnimatedText animation="jump" delay={520} className="inline-flex items-center gap-1.5 bg-slate-100 p-1 rounded-full border border-slate-200 mt-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All ({ALL_PROJECTS.length})
            </button>
            <button
              onClick={() => setFilter('products')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                filter === 'products'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Products ({products.length})
            </button>
            <button
              onClick={() => setFilter('services')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                filter === 'services'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Services ({services.length})
            </button>
          </AnimatedText>
        </div>

        {/* ─── ALTERNATING EDITORIAL Z-PATTERN WITH LEFT & RIGHT ANIMATIONS ─── */}
        <div className="space-y-20 sm:space-y-28 lg:space-y-32">
          {displayedList.map((item, idx) => {
            const isImageLeft = idx % 2 === 0;

            return (
              <div
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center"
              >
                
                {/* ─── IMAGE BLOCK (Swipe Left on even, Swipe Right on odd) ─── */}
                <div
                  className={`lg:col-span-6 ${
                    isImageLeft ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <AnimatedText
                    animation={isImageLeft ? 'swipe-left' : 'swipe-right'}
                    delay={160}
                  >
                    <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-[#faf9f8] border border-slate-200/80 p-4 sm:p-6 flex items-center justify-center shadow-sm hover:shadow-md transition-all group">
                      
                      {/* Inner Project Image */}
                      <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xs bg-white">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover object-top group-hover:scale-103 transition-transform duration-500"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        ) : (
                          <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400 font-mono text-xs">
                            {item.title}
                          </div>
                        )}
                      </div>

                      {/* Action Button at Bottom Left of Image */}
                      <div className="absolute bottom-5 left-5 z-10">
                        {item.liveUrl ? (
                          <a
                            href={item.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#b88656] hover:bg-[#a07244] text-white text-xs font-semibold tracking-wide transition-colors shadow-sm"
                          >
                            <span className="w-0 h-0 border-y-[4px] border-y-transparent border-l-[7px] border-l-white" />
                            <span>Live Demo &amp; Site</span>
                            <ExternalLink className="w-3 h-3 opacity-90" />
                          </a>
                        ) : item.isService ? (
                          <Link
                            href="/#contact"
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#b88656] hover:bg-[#a07244] text-white text-xs font-semibold tracking-wide transition-colors shadow-sm"
                          >
                            <span className="w-0 h-0 border-y-[4px] border-y-transparent border-l-[7px] border-l-white" />
                            <span>Inquire Service</span>
                            <ArrowUpRight className="w-3 h-3 opacity-90" />
                          </Link>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800 text-white text-[11px] font-mono shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Client Production</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </AnimatedText>
                </div>

                {/* ─── TEXT BLOCK (Swipe Right on even, Swipe Left on odd) ─── */}
                <div
                  className={`lg:col-span-6 space-y-4 ${
                    isImageLeft ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <AnimatedText
                    animation={isImageLeft ? 'swipe-right' : 'swipe-left'}
                    delay={240}
                  >
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#1a365d] tracking-wide uppercase leading-snug">
                        {item.title} {item.subtitle ? `— ${item.subtitle.toUpperCase()}` : ''}
                      </h2>
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">
                        {item.category}
                      </div>
                    </div>
                  </AnimatedText>

                  {/* Bulleted Highlights List */}
                  <AnimatedText
                    animation={isImageLeft ? 'swipe-right' : 'swipe-left'}
                    delay={360}
                  >
                    <ul className="list-disc list-outside ml-4 sm:ml-5 space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      {item.highlights && item.highlights.length > 0 ? (
                        item.highlights.map((point, pIdx) => (
                          <li key={pIdx}>
                            {point}
                          </li>
                        ))
                      ) : (
                        <li>{item.description}</li>
                      )}
                      <li>
                        {item.description}
                      </li>
                    </ul>
                  </AnimatedText>

                  {/* Live Domain pill */}
                  {item.liveUrl && (
                    <AnimatedText animation="jump" delay={480} className="pt-2">
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        <span>{item.liveUrl}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </AnimatedText>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* ─── BOTTOM CALL TO ACTION ─── */}
        <AnimatedText animation="fade-up" delay={300} className="mt-28 pt-16 border-t border-slate-200 text-center space-y-4 max-w-xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
            Interested in Building Something Similar?
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            From SaaS MVPs to high-throughput automation pipelines and AI agents, let&apos;s engineer your solution.
          </p>
          <div className="pt-2">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-blue-600 text-white font-semibold text-xs tracking-wide transition-colors shadow-sm"
            >
              <span>Get in Touch with Karthikeyan</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedText>

      </div>
    </div>
  );
}
