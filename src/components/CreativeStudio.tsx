'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Film, Video, Sparkles, Layers, Image as ImageIcon,
  ArrowRight, X, Wand2
} from 'lucide-react';
import { CREATIVE_ITEMS, CreativeItem } from '@/data/portfolioData';
import { AnimatedText } from './AnimatedText';

const STUDIO_CAPABILITIES = [
  { label: "AI Video Generation", icon: Wand2, category: "AI Video" },
  { label: "Video Editing", icon: Video, category: "Video Editing" },
  { label: "Motion Graphics", icon: Layers, category: "Motion Graphics" },
  { label: "Posters & Creatives", icon: ImageIcon, category: "Posters" },
  { label: "Product Videos", icon: Film, category: "Product Videos" },
  { label: "Commercial Advertisements", icon: Wand2, category: "Advertisements" },
  { label: "Social Media Content", icon: Sparkles, category: "Social Media" },
  { label: "Cartoon & Animation", icon: Sparkles, category: "Cartoons" }
];

export const CreativeStudio = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<CreativeItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Bulletproof continuous autoplay & loop watchdog
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const playVideo = () => {
      if (video.paused) {
        const p = video.play();
        if (p !== undefined) {
          p.catch(() => {});
        }
      }
    };

    playVideo();

    // 1. Force seamless loop on ended (overcomes Chromium frame drop bug)
    const handleEnded = () => {
      video.currentTime = 0;
      playVideo();
    };

    // 2. Auto-resume if browser or OS low power mode pauses video while in view
    const handlePause = () => {
      setTimeout(() => {
        if (document.visibilityState === 'visible') {
          playVideo();
        }
      }, 50);
    };

    // 3. Tab visibility: immediately wake up and loop when switching tabs
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        playVideo();
      }
    };

    // 4. Viewport Intersection: start playing whenever user scrolls near section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playVideo();
          }
        });
      },
      { threshold: 0.1 }
    );

    video.addEventListener('ended', handleEnded);
    video.addEventListener('pause', handlePause);
    document.addEventListener('visibilitychange', handleVisibility);
    observer.observe(video);

    return () => {
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('pause', handlePause);
      document.removeEventListener('visibilitychange', handleVisibility);
      observer.disconnect();
    };
  }, []);

  const filteredItems = activeTab === 'All'
    ? CREATIVE_ITEMS
    : CREATIVE_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="studio" className="relative w-full bg-[#020512] text-white select-none overflow-hidden">
      {/* 1. TOP WAVE: Smooth organic transition from Section 03 (#f8fafc) into Dark Studio Pod */}
      <div className="w-full overflow-hidden leading-none relative -mb-1 select-none pointer-events-none z-10">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 lg:h-14 block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L1440,0 L1440,25 C1150,55 850,10 500,45 C250,65 100,20 0,35 Z"
            fill="#f8fafc"
          />
        </svg>
      </div>

      {/* 2. ATMOSPHERIC AMBIENT GLOWS */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none select-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none select-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[350px] bg-gradient-to-tr from-red-600/30 via-orange-500/20 to-transparent rounded-full blur-3xl pointer-events-none select-none" />

      {/* 3. SWEEPING RADIANT FIERY FLAME ARC ON BOTTOM-LEFT (Exact as Reference Image!) */}
      <div className="absolute -bottom-2 sm:-bottom-4 left-0 pointer-events-none select-none z-10 w-[380px] sm:w-[500px] lg:w-[620px] h-[180px] sm:h-[240px] lg:h-[280px]">
        <svg
          className="w-full h-full"
          viewBox="0 0 600 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sec4FlameGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#dc2626" stopOpacity="0.95" />
              <stop offset="30%" stopColor="#ea580c" stopOpacity="0.9" />
              <stop offset="65%" stopColor="#f97316" stopOpacity="0.85" />
              <stop offset="90%" stopColor="#fbbf24" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
            </linearGradient>
            <filter id="sec4GlowDeep" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="24" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="sec4GlowCore" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          {/* Deep luminous atmospheric bloom */}
          <path
            d="M0,230 C120,200 230,145 380,95 C470,60 530,30 600,5"
            stroke="url(#sec4FlameGradient)"
            strokeWidth="56"
            opacity="0.38"
            filter="url(#sec4GlowDeep)"
          />
          {/* Intense vibrant orange flame body */}
          <path
            d="M0,235 C130,205 240,150 390,100 C475,68 535,38 590,12"
            stroke="url(#sec4FlameGradient)"
            strokeWidth="20"
            opacity="0.85"
            filter="url(#sec4GlowCore)"
          />
          {/* Brilliant golden core ray */}
          <path
            d="M0,238 C140,208 250,155 400,105 C480,72 540,45 595,22"
            stroke="#fef08a"
            strokeWidth="5"
            opacity="0.95"
          />
          {/* Secondary harmonic ribbon */}
          <path
            d="M0,250 C110,230 215,185 345,142 C425,110 490,82 550,52"
            stroke="#f97316"
            strokeWidth="8"
            opacity="0.65"
            filter="url(#sec4GlowCore)"
          />
        </svg>
      </div>

      {/* 4. MAIN POD CONTENT GRID (Full-Bleed Panoramic Layout) */}
      <div className="w-full max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 pt-4 sm:pt-6 lg:pt-8 pb-6 sm:pb-10 lg:pb-14 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-2 xl:gap-4 items-center">
          
          {/* LEFT COLUMN: Badge, Headline, Subtitle & Action Buttons */}
          <div className="lg:col-span-3 xl:col-span-3 space-y-5 sm:space-y-6 relative z-20">
            {/* Badge: 04 // CREATIVE STUDIO ⊙ */}
            <AnimatedText animation="swipe-left" delay={100} className="flex items-center gap-2.5">
              <span className="font-mono text-2xl sm:text-3xl font-black text-white/90 tracking-tighter">04</span>
              <span className="h-4 w-px bg-white/20" />
              <span className="font-mono text-xs font-bold tracking-widest text-slate-300 uppercase flex items-center gap-1.5">
                CREATIVE STUDIO
                <span className="text-orange-400 text-sm animate-rotate-slow inline-block">⊙</span>
              </span>
            </AnimatedText>

            {/* Title (Crisp Bold Sans-Serif Exact as Reference) */}
            <AnimatedText animation="rotate" delay={280} as="h2" className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[46px] font-black tracking-tight text-white leading-[1.08]">
              AI-Powered <br />
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">Creative Media</span>
            </AnimatedText>

            {/* Subtitle */}
            <AnimatedText animation="swipe-right" delay={460} as="p" className="text-xs sm:text-[13px] text-slate-300/90 leading-relaxed max-w-xs sm:max-w-sm">
              From AI videos to motion graphics, posters and social media creatives.
            </AnimatedText>

            {/* Action Buttons: Pill + Circular Arrow Linking to Dedicated /creative Page */}
            <AnimatedText animation="jump" delay={640} className="flex items-center gap-3 pt-2">
              <Link
                href="/creative"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0a0f24]/90 hover:bg-white/15 border border-white/25 text-white font-semibold text-xs tracking-wide transition-all shadow-md group backdrop-blur-md cursor-pointer hover-jump"
              >
                <span>Explore Creative Work</span>
              </Link>
              <Link
                href="/creative"
                aria-label="Explore Creative Work"
                className="w-10 h-10 rounded-full border border-white/25 hover:border-orange-400/80 bg-[#0a0f24]/90 hover:bg-white/15 text-white flex items-center justify-center transition-all shadow-sm backdrop-blur-md group cursor-pointer hover-jump"
              >
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </AnimatedText>
          </div>

          {/* CENTER COLUMN: Large Cinematic 3D Video with Transparent Feathered Edges */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center z-10 my-4 lg:my-0 px-2 lg:px-4">
            <div
              className="relative w-full aspect-video max-w-[840px] lg:max-w-[920px] xl:max-w-[1040px] 2xl:max-w-[1140px] scale-100 sm:scale-105 lg:scale-110 xl:scale-112 translate-x-0 lg:translate-x-2 overflow-hidden group/vid select-none pointer-events-none"
              style={{
                WebkitMaskImage: 'radial-gradient(ellipse 84% 80% at 50% 50%, black 48%, rgba(0,0,0,0.5) 68%, transparent 94%)',
                maskImage: 'radial-gradient(ellipse 84% 80% at 50% 50%, black 48%, rgba(0,0,0,0.5) 68%, transparent 94%)'
              }}
            >
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                disablePictureInPicture
                disableRemotePlayback
                className="w-full h-full object-cover scale-[1.02]"
                onEnded={() => {
                  if (videoRef.current) {
                    videoRef.current.currentTime = 0;
                    videoRef.current.play().catch(() => {});
                  }
                }}
              >
                <source src="/assets/ai_video_and_creative.mp4?v=3" type="video/mp4" />
                <source src="/assets/ai_video_creative_media.mp4" type="video/mp4" />
                <source src="/assets/ai%20video%20creative%20media%20%20(1).mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* RIGHT COLUMN: 8 Stacked Capability Items (Purple Rounded-Square Icons with Cascade Animation) */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col justify-center space-y-3 sm:space-y-3.5 pl-0 lg:pl-8 xl:pl-12 relative z-20">
            {STUDIO_CAPABILITIES.map((cap, idx) => {
              const IconComp = cap.icon;
              return (
                <AnimatedText
                  key={cap.label}
                  animation="swipe-right"
                  delay={180 + idx * 90}
                >
                  <div
                    onClick={() => {
                      setActiveTab(cap.category as any);
                      setIsModalOpen(true);
                    }}
                    className="cursor-pointer group flex items-center gap-3.5 py-0.5 transition-all duration-300 hover:translate-x-2"
                  >
                    {/* Purple Rounded Square Icon with Breathing Glow */}
                    <div
                      style={{ animationDelay: `${idx * 0.4}s` }}
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-[#7c3aed] via-[#9333ea] to-[#c084fc] text-white flex items-center justify-center shrink-0 animate-purple-pulse group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(168,85,247,0.9)] transition-all duration-300"
                    >
                      <IconComp className="w-4 h-4 text-white group-hover:rotate-6 transition-transform" />
                    </div>
                    {/* Capability Title */}
                    <span className="text-xs sm:text-[13px] font-semibold text-slate-100 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(192,132,252,0.8)] transition-all tracking-wide whitespace-nowrap">
                      {cap.label}
                    </span>
                  </div>
                </AnimatedText>
              );
            })}
          </div>

        </div>
      </div>

      {/* 5. BOTTOM WAVE: Organic transition from Studio Dark Pod into Section 05 (#f8fafc) */}
      <div className="w-full overflow-hidden leading-none relative -mt-1 select-none pointer-events-none z-10">
        <svg
          viewBox="0 0 1440 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 sm:h-14 lg:h-16 block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C220,15 450,65 780,68 C1100,72 1300,45 1440,58 L1440,70 L0,70 Z"
            fill="#f8fafc"
          />
        </svg>
      </div>

      {/* 6. CREATIVE WORKS EXPLORER MODAL */}
      {(isModalOpen || selectedItem) && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-[#0b1026] border border-white/15 rounded-3xl max-w-4xl w-full p-6 sm:p-8 text-white relative shadow-2xl my-8">
            <button
              onClick={() => {
                setIsModalOpen(false);
                setSelectedItem(null);
              }}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {selectedItem ? (
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-500/20 text-purple-300 border border-purple-400/30">
                  {selectedItem.category}
                </span>
                <h3 className="text-2xl font-black text-white">
                  {selectedItem.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedItem.description}
                </p>
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                  {selectedItem.thumbnail ? (
                    <Image
                      src={selectedItem.thumbnail}
                      alt={selectedItem.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-600 bg-slate-900">
                      <Film className="w-10 h-10" />
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedItem.tools?.map((tool, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-slate-300 font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="border-b border-white/10 pb-4">
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Creative Deliverables & Case Studies
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Select a category to filter through our digital media portfolio.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {(['All', 'AI Video', 'Motion Graphics', 'Posters', 'Product Videos', 'Social Media'] as const).map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveTab(cat)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                          activeTab === cat
                            ? 'bg-purple-600 text-white shadow-md'
                            : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[55vh] overflow-y-auto pr-2">
                  {filteredItems.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedItem(item)}
                      className="group cursor-pointer rounded-2xl bg-[#101736]/80 hover:bg-[#16214d] border border-white/10 hover:border-purple-400/40 p-4 transition-all"
                    >
                      <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 mb-3">
                        {item.thumbnail ? (
                          <Image
                            src={item.thumbnail}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-600">
                            <Film className="w-8 h-8" />
                          </div>
                        )}
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 font-bold">
                        {item.category}
                      </span>
                      <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-1 mt-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
