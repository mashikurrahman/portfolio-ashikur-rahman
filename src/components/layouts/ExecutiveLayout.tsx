import React from 'react';
import { PROFILE_DATA, CASE_STUDIES } from '../../data/portfolioData';
import { CV_DATA } from '../../data/cvData';
import { useThemeLayout } from '../../context/ThemeLayoutContext';
import {
  FileText,
  Mail,
  ArrowUpRight,
  ShieldCheck,
  Award,
  ChevronRight,
  Briefcase,
  GraduationCap,
  Sparkles,
  CheckCircle,
} from 'lucide-react';

export const ExecutiveLayout: React.FC = () => {
  const { setSelectedCaseStudyId, setIsCVOpen, setIsContactOpen } = useThemeLayout();

  return (
    <div className="space-y-16 pb-24 animate-in fade-in duration-300 max-w-6xl mx-auto">
      {/* Executive Hero */}
      <section className="py-12 border-b border-slate-800/80 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5" /> Executive Portfolio & Product Showcase
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-slate-100 leading-none">
            Mohammad Ashikur <br />
            <span className="text-gradient">Rahman</span>
          </h1>

          <p className="text-lg sm:text-xl font-medium text-slate-300 font-heading">
            {PROFILE_DATA.title}
          </p>

          <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">
            {PROFILE_DATA.bio}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => setIsContactOpen(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm shadow-xl hover:bg-amber-400 transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Mohammad</span>
            </button>
            <button
              onClick={() => setIsCVOpen(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold text-sm hover:border-amber-500/40 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Full CV & Resume</span>
            </button>
          </div>
        </div>

        {/* Profile Portrait */}
        <div className="md:col-span-4 flex justify-center">
          <div className="relative group">
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl bg-gradient-to-b from-amber-500/20 to-slate-900 p-1 border border-amber-500/30 overflow-hidden shadow-2xl">
              <img
                src={PROFILE_DATA.avatar}
                alt={PROFILE_DATA.name}
                className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute -bottom-3 inset-x-0 mx-auto px-4 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-center text-xs font-mono text-slate-300 shadow-xl max-w-xs">
              📍 Saidnagar, Vatara, BD
            </div>
          </div>
        </div>
      </section>

      {/* Featured Editorial Case Studies List */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-2xl font-bold font-heading text-slate-100">
              Selected Works & Case Studies
            </h2>
            <p className="text-xs text-slate-400 font-mono">
              9 Full-Stack, AI, RAG, and Healthcare engineering deployments
            </p>
          </div>
          <span className="text-xs font-mono text-amber-400">01 — 09 Projects</span>
        </div>

        <div className="space-y-8">
          {CASE_STUDIES.map((cs) => (
            <div
              key={cs.id}
              onClick={() => setSelectedCaseStudyId(cs.id)}
              className="group cursor-pointer p-6 sm:p-8 rounded-2xl glass-panel border border-slate-800 hover:border-amber-500/40 bg-slate-900/60 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              {/* Image Thumbnail */}
              <div className="md:col-span-4 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 h-44">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Description */}
              <div className="md:col-span-8 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-amber-400">
                    Case Study #{cs.number}
                  </span>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20">
                    {cs.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500 ml-auto">{cs.year}</span>
                </div>

                <h3 className="text-2xl font-bold font-heading text-slate-100 group-hover:text-amber-400 transition-colors">
                  {cs.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {cs.summary}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {cs.tags.slice(0, 5).map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-400 border border-slate-800">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-bold text-amber-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Case Study <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership & Work Timeline */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl glass-panel border border-slate-800 bg-slate-900/60 space-y-6">
          <h3 className="text-xl font-bold font-heading text-slate-100 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-amber-400" /> Executive Experience
          </h3>

          <div className="space-y-6">
            {CV_DATA.experience.map((exp, idx) => (
              <div key={idx} className="space-y-2 border-b border-slate-800/80 pb-4 last:border-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-base font-bold text-slate-100">{exp.role}</h4>
                    <p className="text-xs text-amber-400 font-mono">{exp.company} • {exp.location}</p>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">{exp.period}</span>
                </div>
                <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                  {exp.highlights.map((hl, hIdx) => (
                    <li key={hIdx}>{hl}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-2xl glass-panel border border-slate-800 bg-slate-900/60 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-heading text-slate-100 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-cyan-400" /> Academic & Credentials
            </h3>

            {CV_DATA.education.map((edu, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <p className="text-xs font-bold text-slate-100">{edu.degree}</p>
                <p className="text-[11px] font-mono text-slate-400">{edu.institution}</p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <p className="text-xs font-mono font-bold text-amber-400 uppercase">Languages</p>
            <div className="flex gap-4 text-xs font-mono text-slate-300">
              {CV_DATA.languages.map((l, lIdx) => (
                <span key={lIdx}>{l.language} ({l.level})</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
