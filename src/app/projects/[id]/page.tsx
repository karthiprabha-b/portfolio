import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft, ExternalLink, Github, CheckCircle2,
  Sparkles, Layers, ShieldCheck, Terminal, Cpu
} from 'lucide-react';
import { PROJECTS } from '@/data/portfolioData';

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#050814] text-white pt-28 pb-20 selection:bg-blue-600 selection:text-white">
      {/* Background Soft Glows */}
      <div className="fixed top-20 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-10 left-10 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-blue-400 hover:text-blue-300 transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 border border-blue-400/30 text-blue-300">
              {project.category}
            </span>
            {!project.isAiPowered ? (
              <span className="text-xs font-medium text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                Pure Software Engineering (Not AI Powered)
              </span>
            ) : (
              <span className="text-xs font-medium text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-400/20 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> AI Integrated Solution
              </span>
            )}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl font-semibold text-blue-400">
            {project.subtitle}
          </p>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs tracking-wide transition-all shadow-glow-blue"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Visit Live Platform</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/10 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Inspect Repository</span>
              </a>
            )}
          </div>
        </div>

        {/* Featured Mockup Visual */}
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden bg-[#090e24] border border-white/15 shadow-2xl mb-12">
          <Image
            src={project.mockupImage}
            alt={project.title}
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Deep Dive Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#090f24] border border-white/10 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <Terminal className="w-5 h-5 text-blue-400" />
                Architectural Breakdown
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.details.overview}
              </p>
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 text-xs text-slate-400 leading-relaxed font-mono">
                {project.details.architecture}
              </div>
            </div>

            {/* Engineering Challenges & Solutions */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#090f24] border border-white/10 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <Cpu className="w-5 h-5 text-orange-400" />
                Engineering Challenges Overcome
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.details.challenges}
              </p>
            </div>

            {/* Verified Outcomes */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#090f24] border border-white/10 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-green-400" />
                Key Measurable Outcomes
              </h2>
              <div className="space-y-3">
                {project.details.outcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Tech Stack & Specs */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl bg-[#090f24] border border-white/10 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-400" />
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Other Projects Quick Navigation */}
            <div className="p-6 rounded-3xl bg-[#090f24] border border-white/10 space-y-4">
              <h3 className="text-base font-bold text-white">
                Explore More Projects
              </h3>
              <div className="space-y-2">
                {PROJECTS.filter((p) => p.id !== project.id).slice(0, 4).map((other) => (
                  <Link
                    key={other.id}
                    href={`/projects/${other.id}`}
                    className="block p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-xs font-semibold text-slate-300 hover:text-white"
                  >
                    <div className="text-[10px] text-blue-400 font-mono">{other.category}</div>
                    <div className="text-white font-bold mt-0.5">{other.title}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

