'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Image from 'next/image';
import {
  Code2, Globe, Smartphone, Brain, BarChart3, Cloud, Terminal, ShieldCheck,
  Layout, Network, Cpu, Building2, ShoppingBag, CreditCard, Activity, GraduationCap,
  Radio, Layers, Coins, Bot, Gamepad2, CheckCircle2, Server, Sparkles, Film,
  Search, ArrowRight, X, ChevronDown, Check
} from 'lucide-react';
import { SERVICE_CATEGORIES, ServiceCategory } from '@/data/portfolioData';
import { AnimatedText } from './AnimatedText';

// Map icon string to Lucide component
const ICON_MAP: Record<string, React.ElementType> = {
  Code2, Globe, Smartphone, Brain, BarChart3, Cloud, Terminal, ShieldCheck,
  Layout, Network, Cpu, Building2, ShoppingBag, CreditCard, Activity, GraduationCap,
  Radio, Layers, Coins, Bot, Gamepad2, CheckCircle2, Server, Sparkles, Film
};

export const Services = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);
  const [filterTag, setFilterTag] = useState<'all' | 'engineering' | 'ai' | 'business'>('all');
  const videoRef = useRef<HTMLVideoElement>(null);

  // Robust auto-play & loop watchdog for background video
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

    const handleEnded = () => {
      video.currentTime = 0;
      playVideo();
    };

    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        playVideo();
      }
    };

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
    document.addEventListener('visibilitychange', handleVisibility);
    observer.observe(video);

    return () => {
      video.removeEventListener('ended', handleEnded);
      document.removeEventListener('visibilitychange', handleVisibility);
      observer.disconnect();
    };
  }, []);

  // Filter categories based on search query
  const filteredCategories = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return SERVICE_CATEGORIES.filter((cat) => {
      // Exclude creative studio from top grid since it is featured as the studio banner below the cards
      if (cat.id === 'creative-media-studio') return false;

      // When searching, match across titles, descriptions, services list, badge, and common synonyms
      if (q) {
        const titleMatch = cat.title.toLowerCase().includes(q) || cat.shortTitle.toLowerCase().includes(q);
        const descMatch = cat.description.toLowerCase().includes(q);
        const badgeMatch = cat.badge.toLowerCase().includes(q);
        const serviceMatch = cat.services.some((s) => s.toLowerCase().includes(q));

        // Common tech aliases / synonyms
        const aliasMap: Record<string, string[]> = {
          'software-engineering': ['code', 'backend', 'api', 'systems', 'microservices', 'architecture', 'database', 'sql', 'nosql', 'kafka', 'c++', 'java', 'go', 'golang', 'rust'],
          'web-engineering': ['next.js', 'nextjs', 'react', 'typescript', 'javascript', 'tailwind', 'frontend', 'website', 'css', 'html', 'vue', 'angular', 'web'],
          'mobile-engineering': ['flutter', 'react native', 'ios', 'android', 'swift', 'kotlin', 'mobile', 'app', 'cross-platform', 'whatsapp'],
          'ai-intelligence': ['llm', 'ai', 'gpt', 'gemini', 'claude', 'nlp', 'vision', 'machine learning', 'deep learning', 'agents', 'agentic', 'langchain', 'rag', 'openai'],
          'data-analytics': ['data', 'analytics', 'bi', 'tableau', 'powerbi', 'etl', 'pipeline', 'warehouse', 'snowflake', 'bigquery', 'sql', 'databricks', 'statistics'],
          'cloud-engineering': ['aws', 'cloud', 'gcp', 'azure', 'serverless', 'lambda', 'terraform', 'infrastructure', 'devops', 'iam', 's3', 'ec2'],
          'devops-platform': ['docker', 'kubernetes', 'k8s', 'ci/cd', 'jenkins', 'github actions', 'helm', 'ansible', 'monitoring', 'prometheus', 'grafana', 'devops'],
          'cybersecurity': ['security', 'pentest', 'audit', 'soc2', 'iso', 'encryption', 'vulnerability', 'firewall', 'auth', 'oauth', 'compliance', 'infosec'],
          'ui-ux-design': ['figma', 'design', 'ui', 'ux', 'wireframe', 'prototype', 'user experience', 'interface', 'mobile design', 'design system'],
          'api-integration': ['api', 'rest', 'graphql', 'grpc', 'webhook', 'stripe', 'payment', 'crm', 'integration', 'sdk', 'gateway'],
          'automation-rpa': ['automation', 'whatsapp', 'bot', 'n8n', 'zapier', 'make', 'selenium', 'puppeteer', 'crawler', 'scraping', 'workflow', 'rpa'],
          'enterprise-systems': ['erp', 'crm', 'salesforce', 'sap', 'enterprise', 'portal', 'internal tool', 'hr', 'workflow', 'supply chain'],
          'ecommerce': ['shopify', 'e-commerce', 'ecommerce', 'store', 'cart', 'checkout', 'woocommerce', 'magento', 'stripe', 'commerce'],
          'fintech': ['finance', 'payment', 'banking', 'wallet', 'crypto', 'accounting', 'invoicing', 'ledger', 'trading', 'fintech'],
          'healthtech': ['health', 'hipaa', 'medical', 'clinic', 'ehr', 'telehealth', 'telemedicine', 'wellness', 'pharma'],
          'edtech': ['education', 'lms', 'learning', 'course', 'school', 'quiz', 'classroom', 'student', 'elearning'],
          'iot-systems': ['iot', 'hardware', 'embedded', 'sensors', 'mqtt', 'raspberry pi', 'arduino', 'bluetooth', 'ble', 'connected'],
          'ar-vr-spatial': ['ar', 'vr', 'xr', 'metaverse', 'unity', 'unreal', '3d', 'spatial', 'vision pro', 'oculus', 'three.js'],
          'blockchain-web3': ['blockchain', 'web3', 'crypto', 'solidity', 'smart contract', 'ethereum', 'solana', 'defi', 'nft', 'token'],
          'robotics-autonomous': ['robotics', 'ros', 'autonomous', 'drone', 'computer vision', 'motion planning', 'lidar', 'slam', 'simulation'],
          'game-interactive': ['game', 'unity', 'unreal', 'godot', 'gamedev', 'interactive', 'physics', 'multiplayer', 'shader'],
          'software-testing-qa': ['testing', 'qa', 'automation test', 'cypress', 'playwright', 'jest', 'unit test', 'e2e', 'load test', 'jmeter'],
          'it-infrastructure': ['it', 'networking', 'linux', 'sysadmin', 'servers', 'hardware', 'vpn', 'dns', 'backup', 'disaster recovery'],
          'digital-transformation': ['digital transformation', 'strategy', 'consulting', 'modernization', 'migration', 'innovation', 'agile']
        };

        const aliasMatch = (aliasMap[cat.id] || []).some((alias) => q.includes(alias) || alias.includes(q));

        return titleMatch || descMatch || badgeMatch || serviceMatch || aliasMatch;
      }

      if (filterTag === 'engineering') {
        return ['software-engineering', 'web-engineering', 'mobile-engineering', 'cloud-engineering', 'devops-platform', 'api-integration'].includes(cat.id);
      }
      if (filterTag === 'ai') {
        return ['ai-intelligence', 'data-analytics', 'automation-rpa', 'robotics-autonomous'].includes(cat.id);
      }
      if (filterTag === 'business') {
        return ['enterprise-systems', 'ecommerce', 'fintech', 'healthtech', 'edtech', 'digital-transformation'].includes(cat.id);
      }

      return true;
    });
  }, [searchQuery, filterTag]);

  const totalServicesCount = useMemo(() => {
    return SERVICE_CATEGORIES.reduce((acc, cat) => acc + cat.serviceCount, 0);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative z-30 mt-0 pt-14 sm:pt-18 lg:pt-22 pb-20 sm:pb-24 bg-[#f8fafc] text-slate-900 overflow-hidden">
      {/* Background Video (Positioned with Clear Breathing Space Below Action Buttons) */}
      <div className="absolute top-[420px] sm:top-[450px] lg:top-[460px] xl:top-[480px] -left-6 sm:-left-10 lg:-left-16 xl:-left-20 w-full sm:w-[100%] lg:w-[62%] xl:w-[55%] max-w-[1100px] xl:max-w-[1180px] pointer-events-none select-none z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          className="w-full aspect-video object-contain object-left-top"
          onEnded={() => {
            if (videoRef.current) {
              videoRef.current.currentTime = 0;
              videoRef.current.play().catch(() => {});
            }
          }}
        >
          <source src="/assets/what_can_we_do.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* Top Header & Search Control */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start mb-10 sm:mb-12">
          {/* Left Hero Overview */}
          <div className="lg:col-span-4 xl:col-span-3 space-y-6 sm:space-y-7">
            <AnimatedText animation="swipe-left" delay={100} className="flex items-center gap-2 text-xs font-mono font-semibold text-blue-600 uppercase tracking-widest">
              <span>03</span>
              <span>//</span>
              <span>WHAT WE CAN DO</span>
              <span>//</span>
            </AnimatedText>

            <AnimatedText animation="fade-up" delay={280} as="h2" className="text-3xl sm:text-4xl xl:text-5xl font-black tracking-tight text-slate-950 leading-[1.12]">
              Comprehensive <br />
              <span className="text-gradient-hero-digital">Digital Solutions</span> <br />
              Under One Roof.
            </AnimatedText>

            <AnimatedText animation="swipe-right" delay={460} as="p" className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm sm:max-w-md">
              From software engineering to AI and creative media, we deliver end-to-end digital solutions designed to scale.
            </AnimatedText>
          </div>

          {/* Right Column: Search & 24 Category Grid */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-5 sm:space-y-6">
            {/* Search Input & Category Filter Chips */}
            <AnimatedText animation="jump" delay={620} className="space-y-3.5">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Search across ${totalServicesCount}+ capabilities (e.g. Next.js, LLM, WhatsApp, Flutter, AWS)...`}
                  className="w-full pl-11 pr-4 py-3 bg-white rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Quick Filter Tags */}
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: 'all', label: 'All Disciplines' },
                  { id: 'engineering', label: 'Engineering & Cloud' },
                  { id: 'ai', label: 'AI, Data & RPA' },
                  { id: 'business', label: 'Industry Systems' },
                ].map((tag) => (
                  <button
                    key={tag.id}
                    onClick={() => setFilterTag(tag.id as any)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      filterTag === tag.id && !searchQuery
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {tag.label}
                  </button>
                ))}
              </div>
            </AnimatedText>

            {/* Category Cards Grid (Spacious 6-column grid with generous padding and min-height) */}
            {filteredCategories.length === 0 ? (
              <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center space-y-3">
                <Search className="w-8 h-8 text-slate-300 mx-auto" />
                <p className="text-sm font-semibold text-slate-700">No capabilities found matching &ldquo;{searchQuery}&rdquo;</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-bold hover:bg-blue-100 transition-colors"
                >
                  Clear Search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-3.5 xl:gap-4">
                {filteredCategories.map((cat) => {
                  const IconComponent = ICON_MAP[cat.icon] || Code2;
                  return (
                    <div
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat)}
                      className="cursor-pointer bg-white p-4 sm:p-4.5 xl:p-5 min-h-[145px] sm:min-h-[155px] xl:min-h-[160px] rounded-2xl border border-slate-200/90 hover:border-blue-500 hover:shadow-md transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1"
                    >
                      <div className="space-y-2.5 sm:space-y-3">
                        <div className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-xl bg-blue-50/90 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex items-center justify-center shadow-xs">
                          <IconComponent className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                        </div>
                        <h4 className="text-xs sm:text-[13px] xl:text-[13.5px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                          {cat.title}
                        </h4>
                      </div>

                      <div className="pt-3 sm:pt-3.5 border-t border-slate-100/80 flex items-center justify-between text-[11px] font-semibold text-slate-400 group-hover:text-blue-500">
                        <span>{cat.badge}</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Featured Banner: AI Creative & Digital Media Studio (with breathing space from cards grid) */}
            <div
              onClick={() => scrollTo('studio')}
              className="cursor-pointer relative overflow-hidden mt-6 sm:mt-8 rounded-2xl sm:rounded-3xl border border-blue-500/20 px-5 sm:px-6 py-4 sm:py-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl hover:border-blue-500/50 transition-all duration-300 group"
            >
              {/* Card Background Image: service bottom card for ai video.png */}
              <div className="absolute inset-0 z-0 pointer-events-none select-none">
                <Image
                  src="/assets/service_bottom_card_ai_video.png"
                  alt="AI Creative & Digital Media Studio"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 pointer-events-none select-none"
                />
              </div>

              <div className="relative z-10 flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-glow-blue group-hover:scale-105 transition-transform">
                  <Film className="w-5 h-5" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-[9px] sm:text-[10px] font-mono uppercase tracking-wider mb-0.5">
                    <Sparkles className="w-3 h-3" /> Creative Studio
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-black tracking-tight text-white group-hover:text-blue-300 transition-colors leading-tight">
                    AI Creative & Digital Media Studio
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 font-medium line-clamp-1">
                    4K Videos • Motion Graphics • Posters • Social Media • Product Videos • Commercials
                  </p>
                </div>
              </div>

              <div className="relative z-10 flex items-center gap-3 w-full sm:w-auto justify-end shrink-0">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-600 group-hover:bg-blue-500 flex items-center justify-center text-white shadow-glow-blue group-hover:translate-x-0.5 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Category Modal / Accordion */}
      {selectedCategory && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-6 sm:p-8 text-slate-900 relative shadow-2xl my-8">
            <button
              onClick={() => setSelectedCategory(null)}
              aria-label="Close"
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                  {React.createElement(ICON_MAP[selectedCategory.icon] || Code2, { className: "w-5 h-5" })}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">
                    {selectedCategory.title}
                  </h3>
                  <div className="text-xs font-semibold text-blue-600">
                    {selectedCategory.badge} • Full Service Catalogue
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedCategory.description}
              </p>

              {/* Services List Display */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Available Services & Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[50vh] overflow-y-auto pr-1">
                  {selectedCategory.services.map((service, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-xs font-semibold text-slate-800 hover:bg-blue-50/50 hover:border-blue-200 transition-colors"
                    >
                      <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    scrollTo('contact');
                  }}
                  className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all shadow-sm"
                >
                  Request Service Consultation
                </button>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-500 hover:text-slate-800"
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
