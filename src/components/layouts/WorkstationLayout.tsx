import React, { useState } from 'react';
import { PROFILE_DATA, CASE_STUDIES } from '../../data/portfolioData';
import { CV_DATA } from '../../data/cvData';
import { useThemeLayout } from '../../context/ThemeLayoutContext';
import {
  Monitor,
  Code,
  Layers,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  CheckCircle,
  FileText,
  Mail,
  Zap,
  Terminal,
  Activity,
  ArrowUpRight,
  Database,
  Cpu,
} from 'lucide-react';

export const WorkstationLayout: React.FC = () => {
  const { setSelectedCaseStudyId, setIsCVOpen, setIsContactOpen } = useThemeLayout();
  const [activeCaseStudy, setActiveCaseStudy] = useState(CASE_STUDIES[0]);

  return (
    <div className="space-y-8 pb-24 animate-in fade-in duration-300">
      {/* Workstation Header Toolbar */}
      <section className="p-6 rounded-2xl glass-panel border border-slate-800 bg-slate-900/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Monitor className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold font-heading text-slate-100 flex items-center gap-2">
              Developer Workstation & Interactive Lab
            </h2>
            <p className="text-xs font-mono text-slate-400">
              Live dual-pane project inspector • 9 Shipped Deployments
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsCVOpen(true)}
            className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono font-semibold hover:border-amber-500/40"
          >
            CV Spec Sheet
          </button>
          <button
            onClick={() => setIsContactOpen(true)}
            className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs shadow-md hover:bg-amber-400"
          >
            Deploy Inquiry
          </button>
        </div>
      </section>

      {/* Dual-Pane Workstation Inspector */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Pane: Project Selector List (Span 5) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Project Explorer (9)</span>
            <span>Select to inspect</span>
          </div>

          <div className="space-y-2 max-h-[650px] overflow-y-auto pr-1 scrollbar-thin">
            {CASE_STUDIES.map((cs) => (
              <div
                key={cs.id}
                onClick={() => setActiveCaseStudy(cs)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  activeCaseStudy.id === cs.id
                    ? 'bg-slate-800/90 border-amber-500/50 shadow-lg'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                      activeCaseStudy.id === cs.id
                        ? 'bg-amber-500 text-slate-950'
                        : 'bg-slate-950 text-slate-400 border border-slate-800'
                    }`}
                  >
                    #{cs.number}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-100">{cs.title}</h4>
                    <p className="text-[11px] text-slate-400 truncate max-w-[200px]">{cs.subtitle}</p>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 hidden sm:inline-block">
                  {cs.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Pane: Live Active Project Inspector (Span 7) */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl glass-panel border border-slate-800 bg-slate-900/80 space-y-6">
          {/* Header & Category */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  Case Study #{activeCaseStudy.number}
                </span>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20">
                  {activeCaseStudy.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold font-heading text-slate-100">
                {activeCaseStudy.title}
              </h3>
            </div>

            <button
              onClick={() => setSelectedCaseStudyId(activeCaseStudy.id)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs shadow-md hover:bg-amber-400 transition-all cursor-pointer"
            >
              <span>Full Case Study View</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Interactive Screen Preview */}
          <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 relative h-64 sm:h-72">
            <img
              src={activeCaseStudy.image}
              alt={activeCaseStudy.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-3 left-3 text-xs font-mono text-slate-300 bg-slate-900/90 px-3 py-1 rounded-md border border-slate-800">
              Role: {activeCaseStudy.role}
            </div>
          </div>

          {/* Metrics & Highlights */}
          <div className="grid grid-cols-3 gap-3">
            {activeCaseStudy.metrics.map((m, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-1">
                <p className="text-[10px] font-mono text-slate-400 uppercase">{m.label}</p>
                <p className="text-sm font-bold text-amber-400 font-mono">{m.value}</p>
              </div>
            ))}
          </div>

          {/* Summary & Tech Stack */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
              Architecture & Features Overview
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeCaseStudy.summary}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-2">
              {activeCaseStudy.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Matrix & Competencies Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROFILE_DATA.skills.map((sk, idx) => (
          <div key={idx} className="p-6 rounded-2xl glass-panel border border-slate-800 bg-slate-900/70 space-y-3">
            <h4 className="text-sm font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <Code className="w-4 h-4" /> {sk.category}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {sk.items.map((item, iIdx) => (
                <span key={iIdx} className="px-2 py-0.5 rounded text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
