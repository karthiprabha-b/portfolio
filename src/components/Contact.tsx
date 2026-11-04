'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Mail, Linkedin, Github, MapPin, Download, ArrowUp,
  ArrowRight, X, Send, CheckCircle2, Copy, Check
} from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { AnimatedText } from './AnimatedText';

export const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: 'Full-Stack Web Application',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setFormSubmitted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="contact"
      className="relative z-20 -mt-10 sm:-mt-14 lg:-mt-16 w-full min-h-[780px] sm:min-h-[840px] lg:min-h-[880px] xl:min-h-[940px] flex flex-col justify-between overflow-hidden bg-[#030614] select-none"
    >
      {/* 1. TOP TRANSITION WAVE: White wave body extending from Section 07 (which sits behind) directly joining into Section 08 */}
      <div className="w-full overflow-hidden leading-none relative z-30 select-none pointer-events-none -mt-px">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 lg:h-15 block preserve-3d"
          preserveAspectRatio="none"
        >
          {/* Pure White Wave body seamlessly continuing Section 07's white canvas down into Section 08 */}
          <path
            d="M0,0 L1440,0 L1440,24 C1360,10 1200,44 1040,32 C680,6 320,48 0,22 Z"
            fill="#ffffff"
          />
          {/* Glowing Neon Cyan-Blue Crest Wave Line */}
          <path
            d="M0,22 C320,48 680,6 1040,32 C1200,44 1360,10 1440,24"
            stroke="#00d4ff"
            strokeWidth="6"
            strokeOpacity="0.45"
            strokeLinecap="round"
            className="blur-[2px]"
          />
          <path
            d="M0,22 C320,48 680,6 1040,32 C1200,44 1360,10 1440,24"
            stroke="url(#contactJoinWaveGlow)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="contactJoinWaveGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00d4ff" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#00d4ff" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 2. CINEMATIC BACKGROUND ARTWORK (section 8.png): Full Unzoomed Panorama with Traveler and Portal Open on the Right */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/assets/art/section_8.png"
          alt="Celestial Portal Archway over Sea of Clouds"
          fill
          priority
          className="object-cover object-[center_35%] pointer-events-none select-none"
          sizes="100vw"
        />
        {/* Seamless horizontal white gradient fade matching Hero: 100% solid white behind all left-side content, fading smoothly into the right celestial portal visuals */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white via-[38%] sm:via-[42%] lg:via-[46%] via-white/80 via-[52%] lg:via-[56%] via-white/25 via-[62%] lg:via-[66%] to-transparent pointer-events-none z-[1]" />

        {/* Soft top gradient to harmonize seamlessly with Section 07 white transition */}
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-white via-white/60 to-transparent pointer-events-none z-[1]" />

        {/* Soft bottom gradient to ensure crisp footer readability */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white/80 via-white/30 to-transparent pointer-events-none z-[1]" />
      </div>

      {/* 3. FOREGROUND CONTENT: Left Column (Text, Actions & Contact Items) | Right Side (Unobstructed Celestial Artwork) */}
      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 flex-1 flex flex-col justify-between pt-10 sm:pt-14 pb-8 sm:pb-10 my-auto">
        
        {/* MAIN ROW: All Content Gathered on the Left, Leaving the Celestial Portal & Traveler 100% Unobstructed */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 sm:gap-10 w-full my-auto">
          
          {/* LEFT COLUMN: Badge, Headline, Subtitle, Dual Action Pills & 4 Contact Items */}
          <div className="w-full lg:w-auto max-w-2xl space-y-6 sm:space-y-7">
            
            {/* Top Badge: 08 // LET'S CONNECT */}
            <AnimatedText animation="swipe-left" delay={100} className="flex items-center gap-3">
              <div className="flex flex-col text-xs sm:text-sm font-mono font-black leading-none text-slate-400">
                <span>08</span>
                <span className="text-slate-400/80">08</span>
              </div>
              <div className="h-6 w-px bg-slate-300" />
              <span className="font-mono text-sm sm:text-base font-bold tracking-widest text-slate-700 uppercase">
                LET&apos;S CONNECT
              </span>
            </AnimatedText>

            {/* Headline: Have an Idea? Let's Make It Real. (Big & Impactful) */}
            <AnimatedText animation="fade-up" delay={280} as="h2" className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[64px] font-black text-slate-900 tracking-tight leading-[1.05]">
              Have an Idea? <br />
              <span>Let&apos;s Make It </span>
              <span className="text-[#0062ff]">Real.</span>
            </AnimatedText>

            {/* Description Paragraph */}
            <AnimatedText animation="swipe-right" delay={460} as="p" className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed max-w-xl font-medium">
              Whether it&apos;s a web application, AI automation, a mobile app or a creative project, I&apos;m always open to discussing new ideas and opportunities.
            </AnimatedText>

            {/* Action Buttons: Dual Pills (EXACT SAME SIZES - UNTOUCHED) */}
            <div className="pt-1 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Button 1: Send a Message Pill (Links to creative Contact page) */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 pl-5 sm:pl-6 pr-2 py-2 rounded-full bg-[#0062ff] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm tracking-wide shadow-[0_6px_20px_rgba(0,98,255,0.35)] transition-all hover:scale-105 active:scale-95 group cursor-pointer"
              >
                <span>Send a Message</span>
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/35 group-hover:bg-black/50 flex items-center justify-center transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>

              {/* Button 2: View Resume Pill */}
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Karthikeyan_Prabakaran_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs sm:text-sm tracking-wide shadow-[0_3px_12px_rgba(0,0,0,0.08)] border border-slate-300 transition-all hover:scale-105 active:scale-95 group cursor-pointer"
              >
                <span>View Resume</span>
                <Download className="w-3.5 h-3.5 text-slate-700 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* 4 CONTACT ITEMS: Scaled Up Prominently with Jump Animation & Subtle Hover Jump */}
            <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-xl border-t border-slate-300/70">
              
              {/* 1. Email */}
              <AnimatedText animation="jump" delay={540}>
                <div
                  onClick={handleCopyEmail}
                  className="flex items-center gap-3.5 cursor-pointer group p-2 rounded-xl hover:bg-white/60 transition-colors hover-jump"
                >
                  <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-[#0062ff] text-white flex items-center justify-center shrink-0 shadow-[0_4px_16px_rgba(0,98,255,0.35)] group-hover:scale-108 transition-transform">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs sm:text-[13px] font-semibold text-slate-500 leading-none mb-1">Email</span>
                    <span className="text-sm sm:text-base font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors truncate">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                  <div className="ml-auto text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    {copiedEmail ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </div>
                </div>
              </AnimatedText>

              {/* 2. LinkedIn */}
              <AnimatedText animation="jump" delay={680}>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 cursor-pointer group p-2 rounded-xl hover:bg-white/60 transition-colors hover-jump"
                >
                  <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-[#0062ff] text-white flex items-center justify-center shrink-0 shadow-[0_4px_16px_rgba(0,98,255,0.35)] group-hover:scale-108 transition-transform">
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs sm:text-[13px] font-semibold text-slate-500 leading-none mb-1">LinkedIn</span>
                    <span className="text-sm sm:text-base font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors truncate">
                      karthikeyan-prabakaran
                    </span>
                  </div>
                </a>
              </AnimatedText>

              {/* 3. GitHub */}
              <AnimatedText animation="jump" delay={820}>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 cursor-pointer group p-2 rounded-xl hover:bg-white/60 transition-colors hover-jump"
                >
                  <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-[#0062ff] text-white flex items-center justify-center shrink-0 shadow-[0_4px_16px_rgba(0,98,255,0.35)] group-hover:scale-108 transition-transform">
                    <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs sm:text-[13px] font-semibold text-slate-500 leading-none mb-1">GitHub</span>
                    <span className="text-sm sm:text-base font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors truncate">
                      karthikeyanprabakaran23-gif
                    </span>
                  </div>
                </a>
              </AnimatedText>

              {/* 4. Location */}
              <AnimatedText animation="jump" delay={960}>
                <div className="flex items-center gap-3.5 p-2 rounded-xl hover-jump">
                  <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-[#0062ff] text-white flex items-center justify-center shrink-0 shadow-[0_4px_16px_rgba(0,98,255,0.35)]">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs sm:text-[13px] font-semibold text-slate-500 leading-none mb-1">Location</span>
                    <span className="text-sm sm:text-base font-bold text-slate-900 tracking-tight truncate">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>
              </AnimatedText>

            </div>

          </div>

          {/* RIGHT SIDE: Dedicated Open Breathing Room for the Celestial Portal, Traveler & Futuristic Skyline */}
          <div className="hidden lg:block lg:flex-1 pointer-events-none" />

        </div>

        {/* 4. BOTTOM FOOTER BAR: Copyright on Left, Blue Scroll-to-Top Pill on Right */}
        <AnimatedText animation="fade-up" delay={200} className="relative z-20 pt-6 mt-6 flex items-center justify-between">
          <p className="text-[11px] sm:text-xs font-semibold text-slate-700 tracking-wide drop-shadow-sm">
            © 2026 {PERSONAL_INFO.name}. Built with Next.js, TypeScript & Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-10 h-10 rounded-full bg-[#0062ff] hover:bg-blue-600 text-white flex items-center justify-center shadow-[0_4px_16px_rgba(0,98,255,0.45)] hover:scale-110 active:scale-95 transition-all cursor-pointer ml-auto hover-jump"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </AnimatedText>

      </div>

      {/* 5. INTERACTIVE SEND MESSAGE MODAL DIALOG */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
          <div className="bg-[#0b122e] border border-white/15 rounded-3xl max-w-lg w-full p-6 sm:p-8 text-white relative shadow-2xl my-8">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {formSubmitted ? (
              <div className="p-8 text-center space-y-4 my-auto">
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto shadow-glow-blue">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">Message Dispatched!</h4>
                <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out, {formState.name}. I&apos;ll get back to you at {formState.email} shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setIsModalOpen(false);
                      setFormState({ name: '', email: '', projectType: 'Full-Stack Web Application', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold tracking-wide transition-all shadow-glow-blue cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1 mb-2">
                  <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest">
                    LET&apos;S CONNECT
                  </span>
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    Start a Conversation
                  </h3>
                  <p className="text-xs text-slate-400">
                    Fill out the details below and I&apos;ll get back to you within 24 hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 text-sm text-white placeholder:text-slate-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 text-sm text-white placeholder:text-slate-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                    Project Scope
                  </label>
                  <select
                    value={formState.projectType}
                    onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090e24] border border-white/10 focus:border-blue-500 text-sm text-white outline-none transition-all cursor-pointer"
                  >
                    <option value="Full-Stack Web Application">Full-Stack Web Application</option>
                    <option value="SaaS Platform Engineering">SaaS Platform Engineering</option>
                    <option value="AI Automation & Agents">AI Automation & Agents</option>
                    <option value="Web Scraping & Data Pipeline">Web Scraping & Data Pipeline</option>
                    <option value="Creative Media & Studio Production">Creative Media & Studio Production</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                    Message / Requirement
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about what you are looking to build..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 text-sm text-white placeholder:text-slate-500 outline-none transition-all resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0062ff] hover:bg-blue-600 text-white font-bold text-xs tracking-wide shadow-glow-blue transition-all cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
