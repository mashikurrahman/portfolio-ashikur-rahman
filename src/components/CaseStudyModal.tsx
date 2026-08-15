import React from 'react';
import { useThemeLayout } from '../context/ThemeLayoutContext';
import { CASE_STUDIES } from '../data/portfolioData';
import { X, ExternalLink, ShieldCheck, Cpu, Sparkles, CheckCircle2, ArrowUpRight, Github, Tag } from 'lucide-react';

export const CaseStudyModal: React.FC = () => {
  const { selectedCaseStudyId, setSelectedCaseStudyId, setIsContactOpen } = useThemeLayout();

  if (!selectedCaseStudyId) return null;

  const caseStudy = CASE_STUDIES.find((cs) => cs.id === selectedCaseStudyId);
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/50 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white border border-gray-200 rounded-3xl shadow-2xl p-6 sm:p-9 text-gray-900 space-y-6 scrollbar-thin">
        {/* Close Button */}
        <button
          onClick={() => setSelectedCaseStudyId(null)}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 text-gray-500 hover:text-gray-900 hover:bg-gray-200 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#E8461E]/10 text-[#E8461E] border border-[#E8461E]/20">
              Case Study #{caseStudy.number}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-gray-100 text-gray-700 border border-gray-200">
              {caseStudy.category}
            </span>
            <span className="text-xs text-gray-400 font-mono">
              Shipped {caseStudy.year}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-gray-900 leading-tight">
            {caseStudy.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-medium">
            {caseStudy.subtitle}
          </p>
        </div>

        {/* Image Preview Banner with Live Action */}
        <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 group shadow-sm">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-auto max-h-[440px] object-cover object-top transition-transform duration-500 group-hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
            {caseStudy.liveUrl && (
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E8461E] text-white font-bold text-xs shadow-lg hover:bg-[#d13a14] transition-all"
              >
                <span>Visit Live Platform</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {caseStudy.metrics.map((m, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#E8461E]/10 text-[#E8461E] flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">{m.label}</p>
                <p className="text-base font-bold text-gray-900">{m.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary / Problem / Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 space-y-2.5">
            <h4 className="text-xs font-mono font-bold text-[#E8461E] uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> The Challenge
            </h4>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              {caseStudy.problem}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 space-y-2.5">
            <h4 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#E8461E]" /> Engineered Solution
            </h4>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>
        </div>

        {/* Key Features Checklist */}
        <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 space-y-3">
          <h4 className="text-xs font-mono font-bold text-gray-800 uppercase tracking-wider">
            Key Architecture & Features
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {caseStudy.keyFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="space-y-2">
          <p className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
            Technologies & Tools
          </p>
          <div className="flex flex-wrap gap-2">
            {caseStudy.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            {caseStudy.liveUrl && (
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#E8461E] text-white text-xs font-bold shadow-sm hover:bg-[#d13a14] transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {caseStudy.githubUrl && (
              <a
                href={caseStudy.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 text-gray-700 text-xs font-semibold hover:border-gray-900 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}
          </div>

          <button
            onClick={() => {
              setSelectedCaseStudyId(null);
              setIsContactOpen(true);
            }}
            className="text-xs text-[#E8461E] hover:underline font-semibold font-mono"
          >
            Discuss a similar project with Ashikur &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
