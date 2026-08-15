import React from 'react';
import { useThemeLayout } from '../context/ThemeLayoutContext';
import { CASE_STUDIES } from '../data/portfolioData';
import { X, ExternalLink, ShieldCheck, Cpu, Code, CheckCircle, Sparkles, Database, Layers, ArrowUpRight } from 'lucide-react';

export const CaseStudyModal: React.FC = () => {
  const { selectedCaseStudyId, setSelectedCaseStudyId } = useThemeLayout();

  if (!selectedCaseStudyId) return null;

  const caseStudy = CASE_STUDIES.find((cs) => cs.id === selectedCaseStudyId);
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-amber-500/25 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-100 space-y-6 scrollbar-thin">
        {/* Close Button */}
        <button
          onClick={() => setSelectedCaseStudyId(null)}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-slate-100 hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
              Case Study #{caseStudy.number}
            </span>
            <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              {caseStudy.category}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Released: {caseStudy.year}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-100">
            {caseStudy.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            {caseStudy.subtitle}
          </p>
        </div>

        {/* Image Preview Banner */}
        <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 group">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-auto max-h-[420px] object-cover object-top transition-transform duration-500 group-hover:scale-102"
          />
          {caseStudy.liveUrl && (
            <a
              href={caseStudy.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs shadow-lg hover:bg-amber-400 transition-all"
            >
              <span>Visit Live Application</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {caseStudy.metrics.map((m, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">{m.label}</p>
                <p className="text-base font-bold text-slate-100">{m.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary / Problem / Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-5 rounded-xl bg-slate-950/40 border border-slate-800/80 space-y-3">
            <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> The Challenge & Problem
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {caseStudy.problem}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-950/40 border border-slate-800/80 space-y-3">
            <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4" /> Engineered Solution
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>
        </div>

        {/* Key Features & Innovations */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-amber-400" /> Key Shipped Innovations & Features
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
            {caseStudy.keyFeatures.map((feat, idx) => (
              <li key={idx} className="p-3 rounded-lg bg-slate-950/50 border border-slate-800/60 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Highlights */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" /> Architecture & System Design Notes
          </h4>
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-300 space-y-2">
            {caseStudy.architectureHighlights.map((arch, idx) => (
              <p key={idx} className="flex items-start gap-2">
                <span className="text-cyan-400 select-none">▸</span>
                <span>{arch}</span>
              </p>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-2 pt-2 border-t border-slate-800">
          <h4 className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
            Technology Stack & Tools
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {caseStudy.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
