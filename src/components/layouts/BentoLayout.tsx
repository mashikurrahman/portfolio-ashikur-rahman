import React, { useState } from 'react';
import { PROFILE_DATA, CASE_STUDIES } from '../../data/portfolioData';
import { CV_DATA } from '../../data/cvData';
import { useThemeLayout } from '../../context/ThemeLayoutContext';
import {
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Activity,
  Cpu,
  FileText,
  Briefcase,
  GraduationCap,
  Mail,
  Zap,
  Code,
  Layers,
  CheckCircle,
  ExternalLink,
  Award,
  Terminal,
  Search,
} from 'lucide-react';

export const BentoLayout: React.FC = () => {
  const { setSelectedCaseStudyId, setIsCVOpen, setIsContactOpen } = useThemeLayout();
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'AI & LLM', 'Mobile / Flutter', 'Web Apps', 'SEO & Marketing', 'Enterprise Tooling'];

  const filteredCaseStudies =
    filterCategory === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((cs) => cs.category === filterCategory);

  return (
    <div className="space-y-10 pb-20 animate-in fade-in duration-300">
      {/* Bento Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Main Hero Card (Span 8) */}
        <div className="lg:col-span-8 p-6 sm:p-10 rounded-3xl glass-panel relative overflow-hidden flex flex-col justify-between space-y-8 group border border-amber-500/20 bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-900">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all duration-500" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500" />

          {/* Top Pill Badges */}
          <div className="relative z-10 flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center gap-1.5 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" /> 0.01% Portfolio Masterpiece
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800">
              📍 Saidnagar, Vatara, BD (Remote)
            </span>
          </div>

          {/* Main Title & Bio */}
          <div className="relative z-10 space-y-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-slate-100 leading-tight">
              Mohammad Ashikur <span className="text-gradient-accent">Rahman</span>
            </h2>
            <p className="text-base sm:text-lg font-semibold text-amber-400 font-heading">
              {PROFILE_DATA.title}
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              {PROFILE_DATA.bio}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="relative z-10 flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80">
            <button
              onClick={() => setIsContactOpen(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs sm:text-sm shadow-xl hover:shadow-amber-500/25 hover:scale-102 transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Get In Touch</span>
            </button>

            <button
              onClick={() => setIsCVOpen(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-500/40 text-slate-200 font-semibold text-xs sm:text-sm transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Explore CV / Resume</span>
            </button>
          </div>
        </div>

        {/* Profile Card with Photo Cutout (Span 4) */}
        <div className="lg:col-span-4 p-6 rounded-3xl glass-panel relative overflow-hidden flex flex-col justify-between items-center text-center space-y-4 border border-amber-500/20 bg-slate-950/80">
          {/* Avatar Container with Glow */}
          <div className="relative mt-2">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-amber-500 via-cyan-500 to-emerald-500 p-1 shadow-2xl animate-pulse-glow">
              <img
                src={PROFILE_DATA.avatar}
                alt={PROFILE_DATA.name}
                className="w-full h-full object-cover object-top rounded-full bg-slate-900"
              />
            </div>
            <div className="absolute -bottom-2 inset-x-0 mx-auto px-3 py-1 rounded-full bg-slate-900/90 border border-amber-500/30 text-[10px] font-mono text-amber-300 font-bold shadow-lg w-max">
              ⚡ Available for Hire
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-100 font-heading">Mohammad Ashikur Rahman</h3>
            <p className="text-xs text-slate-400 font-mono">Customer Service Leader & AI Builder</p>
          </div>

          {/* Quick Metrics Badge Grid */}
          <div className="grid grid-cols-2 gap-2 w-full pt-2">
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
              <p className="text-lg font-extrabold text-amber-400 font-display">95-100%</p>
              <p className="text-[10px] font-mono text-slate-400">Doc Accuracy</p>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
              <p className="text-lg font-extrabold text-cyan-400 font-display">6+ Years</p>
              <p className="text-[10px] font-mono text-slate-400">Cross-Domain</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {PROFILE_DATA.stats.map((st, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl glass-panel border border-slate-800/80 bg-slate-900/60 space-y-1 hover:border-amber-500/40 transition-all"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">{st.label}</p>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>
            <p className="text-3xl font-extrabold font-display text-slate-100">{st.value}</p>
            <p className="text-[11px] text-slate-400 font-mono truncate">{st.detail}</p>
          </div>
        ))}
      </section>

      {/* Case Studies Showcase Header & Filter Tabs */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" />
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-100">
                Shipped Case Studies & Systems
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              Interactive deep-dives into 9 production systems engineered across Healthcare, AI/RAG, E-Commerce & Web.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  filterCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCaseStudies.map((cs) => (
            <div
              key={cs.id}
              onClick={() => setSelectedCaseStudyId(cs.id)}
              className="group cursor-pointer rounded-2xl glass-panel border border-slate-800/80 hover:border-amber-500/50 bg-slate-900/70 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              {/* Image Preview Container */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-950 border-b border-slate-800">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-amber-500/90 text-slate-950 shadow-md">
                    #{cs.number}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-slate-900/90 text-cyan-300 border border-cyan-500/30">
                    {cs.category}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 p-2 rounded-lg bg-slate-900/90 text-amber-400 border border-amber-500/30 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Case Study Details */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <h4 className="text-lg font-bold font-heading text-slate-100 group-hover:text-amber-400 transition-colors">
                    {cs.title}
                  </h4>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {cs.summary}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1">
                    {cs.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-400 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                    {cs.tags.length > 4 && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-amber-400 border border-slate-800">
                        +{cs.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience & Core Competencies Bento Matrix */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Work Timeline (Span 7) */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl glass-panel border border-slate-800/80 bg-slate-900/70 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold font-heading text-slate-100 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-amber-400" /> Career Milestones & Leadership
            </h3>
            <span className="text-xs font-mono text-slate-400">6+ Years Exp</span>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800">
            {CV_DATA.experience.map((exp, idx) => (
              <div key={idx} className="relative pl-8 space-y-2 group">
                <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-amber-400 group-hover:scale-125 transition-transform" />
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <h4 className="text-base font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
                    {exp.role}
                  </h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {exp.period}
                  </span>
                </div>
                <p className="text-xs font-mono text-slate-400">{exp.company} • {exp.location}</p>
                <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside pt-1">
                  {exp.highlights.map((hl, hIdx) => (
                    <li key={hIdx}>{hl}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills & Technical Matrix (Span 5) */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl glass-panel border border-slate-800/80 bg-slate-900/70 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-heading text-slate-100 flex items-center gap-2">
              <Code className="w-5 h-5 text-cyan-400" /> Expertise & Stack Matrix
            </h3>

            {PROFILE_DATA.skills.map((sk, idx) => (
              <div key={idx} className="space-y-2">
                <p className="text-xs font-mono text-amber-400 uppercase tracking-wider">{sk.category}</p>
                <div className="flex flex-wrap gap-1.5">
                  {sk.items.map((item, iIdx) => (
                    <span
                      key={iIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-950 text-slate-200 border border-slate-800 hover:border-cyan-500/40 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 flex items-center gap-3">
            <Award className="w-8 h-8 text-amber-400 flex-shrink-0" />
            <div>
              <p className="font-bold">Medical & Technical Documentation Specialist</p>
              <p className="text-[11px] text-amber-300/80 font-mono">Expert in SOAP, H&P, E/M Coding, HIPAA, and SEO technical writing.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
