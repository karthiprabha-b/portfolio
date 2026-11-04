'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft, Send, CheckCircle2, MessageSquare, Mail, Sparkles,
  Phone, PhoneCall, Video, Calendar, Clock, Check, Copy,
  ArrowUpRight, Code2, Zap, Bot, Smartphone, Database, Loader2, AlertCircle
} from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [selectedService, setSelectedService] = useState('Full-Stack Web App');
  const [selectedTimeline, setSelectedTimeline] = useState('1 - 3 Days (Urgent)');
  const [selectedBudget, setSelectedBudget] = useState('$1k - $3k');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const displayPhone = '+91 99768 93141';
  const cleanPhone = '919976893141';

  // Professional service pills with Lucide icons (No emojis)
  const services = [
    { id: 'web', label: 'Full-Stack Web App', icon: Code2 },
    { id: 'saas', label: 'SaaS Product', icon: Zap },
    { id: 'ai', label: 'AI & Automation Agent', icon: Bot },
    { id: 'mobile', label: 'Mobile App', icon: Smartphone },
    { id: 'data', label: 'Data & Scraping Pipeline', icon: Database },
    { id: 'consulting', label: 'Technical Consulting & Other', icon: Sparkles },
  ];

  // Timeline starting from 1 Day upwards
  const timelines = [
    '1 - 3 Days (Urgent)',
    '1 - 2 Weeks',
    'Within 1 Month',
    '1 - 3 Months',
    'Flexible / Ongoing',
  ];

  const budgets = ['< $1,000', '$1k - $3k', '$3k - $7k', '$7k+', 'Undecided'];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(displayPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Karthikeyan, I visited your portfolio and I would like to discuss a project collaboration with you regarding ${selectedService}.${formData.name ? ` My name is ${formData.name}.` : ''}${formData.message ? ` Project note: ${formData.message}` : ' Are you available for a brief discussion?'}`
    );
    return `https://wa.me/${cleanPhone}?text=${text}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: selectedService,
          timeline: selectedTimeline,
          budget: selectedBudget,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(data.error || 'Failed to send message. Please try again or reach out on WhatsApp.');
      }
    } catch (err: any) {
      setSubmitError('Unable to reach the server. Please check your connection or contact directly via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] text-slate-900 selection:bg-blue-600 selection:text-white relative overflow-x-clip font-sans">
      
      {/* ─── STICKY HEADER ─── */}
      <header className="border-b border-slate-200/90 bg-white/95 backdrop-blur-md sticky top-0 z-40 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex items-center justify-between">
          
          {/* Brand Monogram & Name */}
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
            href="/#contact"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors bg-white hover:bg-slate-50 px-4 py-2 rounded-full border border-slate-300 shadow-xs group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Portfolio</span>
          </Link>

          {/* Right: Availability Badge */}
          <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Projects</span>
          </div>

        </div>
      </header>

      {/* ─── MAIN CONTENT (TAILORED COMFORTABLE DESKTOP WIDTH, NOT OVER-STRETCHED) ─── */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-24">
        
        {/* ─── 1. HEADLINE WITH DOODLES ─── */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 relative">
          
          {/* DOODLE: Paper Airplane */}
          <div className="absolute -left-8 sm:-left-24 lg:-left-32 -top-6 sm:-top-8 animate-doodle-float pointer-events-none select-none hidden sm:block">
            <svg width="170" height="130" viewBox="0 0 170 130" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 100 C 35 120, 80 110, 70 75 C 60 40, 20 50, 35 85 C 50 110, 105 85, 130 35"
                stroke="#0062ff"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="animate-doodle-dash"
              />
              <g transform="translate(120, 15) rotate(-10)">
                <polygon points="0,20 36,0 30,30 16,20" fill="#ffffff" stroke="#1e293b" strokeWidth="2.5" strokeLinejoin="round" />
                <polygon points="0,20 36,0 16,20" fill="#e0f2fe" stroke="#1e293b" strokeWidth="2.5" strokeLinejoin="round" />
                <line x1="16" y1="20" x2="36" y2="0" stroke="#1e293b" strokeWidth="2" />
              </g>
              <path d="M155 12 L157 4 L160 12 L168 15 L160 18 L157 26 L155 18 L147 15 Z" fill="#fbbf24" stroke="#1e293b" strokeWidth="1.5" />
            </svg>
          </div>

          {/* DOODLE: Idea Lightbulb */}
          <div className="absolute -right-8 sm:-right-24 lg:-right-32 -top-6 sm:-top-8 animate-doodle-float-delayed pointer-events-none select-none hidden sm:block">
            <svg width="140" height="150" viewBox="0 0 140 150" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M70 10 L70 22 M35 25 L43 35 M105 25 L97 35 M22 55 L34 55 M118 55 L106 55" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
              <path
                d="M45 65 C45 48 56 35 70 35 C84 35 95 48 95 65 C95 76 88 84 84 90 L56 90 C52 84 45 76 45 65 Z"
                fill="#fef3c7"
                stroke="#1e293b"
                strokeWidth="2.5"
              />
              <circle cx="63" cy="62" r="2.5" fill="#1e293b" />
              <circle cx="77" cy="62" r="2.5" fill="#1e293b" />
              <path d="M66 70 Q70 74 74 70" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" fill="none" />
              <circle cx="58" cy="67" r="3" fill="#fca5a5" opacity="0.7" />
              <circle cx="82" cy="67" r="3" fill="#fca5a5" opacity="0.7" />
              <rect x="58" y="90" width="24" height="5" rx="1.5" fill="#e2e8f0" stroke="#1e293b" strokeWidth="2" />
              <rect x="60" y="97" width="20" height="4" rx="1.5" fill="#cbd5e1" stroke="#1e293b" strokeWidth="2" />
              <text x="48" y="125" fontFamily="sans-serif" fontSize="12" fontWeight="800" fill="#f59e0b" letterSpacing="1">
                IDEA
              </text>
            </svg>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Let&apos;s Build Something Real</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.15]">
            Have a project in mind? <br className="hidden sm:inline" />
            <span className="relative inline-block mt-1">
              <span>Let&apos;s make it </span>
              <span className="text-[#0062ff] relative">
                extraordinary.
                <svg
                  className="absolute -bottom-2.5 left-0 w-full h-3 text-[#ff5e14]"
                  viewBox="0 0 250 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 10 C 50 3, 100 12, 150 7 C 200 2, 230 11, 247 6"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mt-5">
            Fill out the project scope below. When you send, you&apos;ll also receive an immediate email confirmation, and I typically reply within 2 to 4 hours.
          </p>
        </div>

        {/* ─── 2. FORM & ICON CHANNELS GRID ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
          
          {/* ─── LEFT: THE FORM CARD ─── */}
          <div className="lg:col-span-9 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.06)] relative">
            
            {/* Mascot Peeking */}
            <div className="absolute -top-11 right-8 sm:right-14 z-20 pointer-events-none select-none">
              <svg width="110" height="50" viewBox="0 0 110 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 45 C20 18, 90 18, 90 45 Z" fill="#fed7aa" stroke="#1e293b" strokeWidth="2.5" />
                <path d="M22 30 C30 15, 80 15, 88 30 C75 22, 35 22, 22 30 Z" fill="#1e293b" />
                <circle cx="43" cy="32" r="8" fill="#ffffff" stroke="#1e293b" strokeWidth="2" />
                <circle cx="67" cy="32" r="8" fill="#ffffff" stroke="#1e293b" strokeWidth="2" />
                <line x1="51" y1="32" x2="59" y2="32" stroke="#1e293b" strokeWidth="2" />
                <circle cx="44" cy="34" r="2.5" fill="#1e293b" />
                <circle cx="68" cy="34" r="2.5" fill="#1e293b" />
                <circle cx="33" cy="36" r="3" fill="#fca5a5" opacity="0.8" />
                <circle cx="77" cy="36" r="3" fill="#fca5a5" opacity="0.8" />
                <path d="M52 38 Q55 42 58 38" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" fill="none" />
                <ellipse cx="28" cy="46" rx="7" ry="4" fill="#fed7aa" stroke="#1e293b" strokeWidth="2" />
                <ellipse cx="82" cy="46" rx="7" ry="4" fill="#fed7aa" stroke="#1e293b" strokeWidth="2" />
              </svg>
            </div>

            {isSubmitted ? (
              /* Success Screen */
              <div className="py-12 sm:py-16 text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 border-2 border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2 max-w-md mx-auto">
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. A confirmation email has been dispatched to <span className="font-bold text-slate-900">{formData.email}</span>. I will review your requirements for <span className="font-semibold text-blue-600">{selectedService}</span> and reply shortly.
                  </p>
                </div>

                {/* Direct WhatsApp Quick Chat Option */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-sm hover:scale-102"
                  >
                    <span>Chat Directly on WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', message: '' });
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition-all cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              /* Interactive Form Fields */
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {submitError && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-600" />
                    <div>
                      <p className="font-semibold">Unable to submit form</p>
                      <p className="text-xs text-red-600 mt-0.5">{submitError}</p>
                    </div>
                  </div>
                )}

                {/* 1. Project Category Selection (Proper typography, clean icons, no emojis) */}
                <div className="space-y-2.5">
                  <label className="block text-xs font-bold text-slate-800 tracking-wider uppercase">
                    1. What can I help you build?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((item) => {
                      const Icon = item.icon;
                      const isSelected = selectedService === item.label;
                      return (
                        <button
                          type="button"
                          key={item.id}
                          onClick={() => setSelectedService(item.label)}
                          className={`inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                            isSelected
                              ? 'bg-blue-600 text-white border-blue-600 shadow-sm scale-102'
                              : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                          }`}
                        >
                          <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-slate-500'}`} />
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Contact Details: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-800 tracking-wider uppercase">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 focus:border-blue-600 focus:bg-white text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all shadow-2xs font-normal"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-800 tracking-wider uppercase">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 focus:border-blue-600 focus:bg-white text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all shadow-2xs font-normal"
                    />
                  </div>
                </div>

                {/* 3. Phone / WhatsApp (Optional) */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-800 tracking-wider uppercase flex items-center justify-between">
                    <span>Phone / WhatsApp Number</span>
                    <span className="text-[11px] text-slate-400 font-normal lowercase">(optional for fast call/chat)</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 99768 93141 or WhatsApp number"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 focus:border-blue-600 focus:bg-white text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all shadow-2xs font-normal"
                  />
                </div>

                {/* 4. Timeline (From 1 Day to Anything) & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  
                  {/* Timeline starting from 1 Day */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-800 tracking-wider uppercase">
                      Expected Timeline
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {timelines.map((time) => (
                        <button
                          type="button"
                          key={time}
                          onClick={() => setSelectedTimeline(time)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border cursor-pointer ${
                            selectedTimeline === time
                              ? 'bg-slate-900 text-white border-slate-900 shadow-2xs'
                              : 'bg-white hover:bg-slate-50 text-slate-600 border-slate-200'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-800 tracking-wider uppercase">
                      Estimated Budget
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {budgets.map((budget) => (
                        <button
                          type="button"
                          key={budget}
                          onClick={() => setSelectedBudget(budget)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border cursor-pointer ${
                            selectedBudget === budget
                              ? 'bg-slate-900 text-white border-slate-900 shadow-2xs'
                              : 'bg-white hover:bg-slate-50 text-slate-600 border-slate-200'
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

                {/* 5. Project Description */}
                <div className="space-y-1.5 pt-1">
                  <label className="block text-xs font-bold text-slate-800 tracking-wider uppercase">
                    Project Details or Question <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about what you're planning, your tech stack preferences, deliverables, or any links..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 focus:border-blue-600 focus:bg-white text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all resize-none shadow-2xs font-normal"
                  />
                </div>

                {/* Submit Action Row */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span>Typical reply in under 2 hours &bull; Automated confirmation sent</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#0062ff] hover:bg-blue-600 disabled:bg-blue-400 text-white font-bold text-sm tracking-wide shadow-[0_6px_20px_rgba(0,98,255,0.3)] hover:scale-102 active:scale-98 transition-all cursor-pointer group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* ─── RIGHT: ONLY ICONS (The 3 Contact Channels: Phone, WhatsApp, Video/Email) ─── */}
          <div className="lg:col-span-3 flex flex-col items-center sm:items-start lg:items-center space-y-4">
            
            <div className="w-full bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm flex flex-col items-center text-center space-y-4">
              
              <div className="space-y-1">
                <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                  Direct Connect
                </span>
                <p className="text-xs text-slate-600 font-medium">
                  Instant one-click channels
                </p>
              </div>

              {/* ─── THE 3 ICONS ─── */}
              <div className="flex flex-row lg:flex-col items-center justify-center gap-3 w-full">
                
                {/* 1. Phone Call Icon */}
                <div className="group relative flex flex-col items-center">
                  <a
                    href={`tel:${cleanPhone}`}
                    title="Direct Phone Call (+91 99768 93141)"
                    className="w-13 h-13 rounded-2xl bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-200 hover:border-blue-600 flex items-center justify-center shadow-xs hover:shadow-md hover:scale-108 active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    <PhoneCall className="w-6 h-6" />
                  </a>
                  <span className="text-[10px] font-semibold text-slate-600 group-hover:text-blue-600 transition-colors mt-1.5">
                    Phone
                  </span>
                  
                  {/* Subtle Copy Button */}
                  <button
                    onClick={handleCopyPhone}
                    title="Copy Phone Number"
                    className="text-[10px] font-mono text-slate-400 hover:text-slate-700 flex items-center gap-0.5 mt-0.5 cursor-pointer"
                  >
                    {copiedPhone ? (
                      <span className="text-emerald-600 font-semibold flex items-center gap-0.5">
                        <Check className="w-2.5 h-2.5" /> Copied
                      </span>
                    ) : (
                      <span className="flex items-center gap-0.5">
                        <Copy className="w-2.5 h-2.5" /> copy
                      </span>
                    )}
                  </button>
                </div>

                {/* 2. WhatsApp Icon */}
                <div className="group relative flex flex-col items-center">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="WhatsApp Voice & Chat (+91 99768 93141)"
                    className="w-13 h-13 rounded-2xl bg-[#e7f9ee] hover:bg-[#25D366] text-[#25D366] hover:text-white border border-emerald-200 hover:border-[#25D366] flex items-center justify-center shadow-xs hover:shadow-md hover:scale-108 active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    {/* Official WhatsApp SVG Icon */}
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </a>
                  <span className="text-[10px] font-semibold text-slate-600 group-hover:text-emerald-600 transition-colors mt-1.5">
                    WhatsApp
                  </span>
                  <span className="text-[9px] font-medium text-emerald-600 mt-0.5">
                    Fastest
                  </span>
                </div>

                {/* 3. Schedule 15-Min Intro Call (Video / Meeting Icon) */}
                <div className="group relative flex flex-col items-center">
                  <a
                    href="mailto:karthikeyanprabakaran23@gmail.com?subject=Schedule%20a%2015-Min%20Intro%20Call&body=Hello%20Karthikeyan,%0D%0A%0D%0AI%20would%20like%20to%20schedule%20a%20quick%2015-minute%20intro%20call%20regarding%20my%20project.%0D%0A%0D%0ABest%20regards,"
                    title="Schedule 15-Min Intro Video Call"
                    className="w-13 h-13 rounded-2xl bg-purple-50 hover:bg-purple-600 text-purple-600 hover:text-white border border-purple-200 hover:border-purple-600 flex items-center justify-center shadow-xs hover:shadow-md hover:scale-108 active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    <Video className="w-6 h-6" />
                  </a>
                  <span className="text-[10px] font-semibold text-slate-600 group-hover:text-purple-600 transition-colors mt-1.5">
                    Intro Call
                  </span>
                  
                  {/* Subtle Copy Email Button */}
                  <button
                    onClick={handleCopyEmail}
                    title="Copy Email Address"
                    className="text-[10px] font-mono text-slate-400 hover:text-slate-700 flex items-center gap-0.5 mt-0.5 cursor-pointer"
                  >
                    {copiedEmail ? (
                      <span className="text-emerald-600 font-semibold flex items-center gap-0.5">
                        <Check className="w-2.5 h-2.5" /> Copied
                      </span>
                    ) : (
                      <span className="flex items-center gap-0.5">
                        <Copy className="w-2.5 h-2.5" /> email
                      </span>
                    )}
                  </button>
                </div>

              </div>

              {/* Status Indicator */}
              <div className="pt-2 border-t border-slate-100 w-full text-center">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Online &bull; IST</span>
                </span>
              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}
