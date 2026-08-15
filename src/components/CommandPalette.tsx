import React, { useState, useEffect } from 'react';
import { useThemeLayout } from '../context/ThemeLayoutContext';
import { CASE_STUDIES } from '../data/portfolioData';
import { Search, X, Sparkles, FileText, Mail, ArrowRight, ExternalLink, Code2 } from 'lucide-react';

export const CommandPalette: React.FC = () => {
  const {
    isCmdPaletteOpen,
    setIsCmdPaletteOpen,
    setSelectedCaseStudyId,
    setIsCVOpen,
    setIsContactOpen,
  } = useThemeLayout();

  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCmdPaletteOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isCmdPaletteOpen) {
        setIsCmdPaletteOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCmdPaletteOpen, setIsCmdPaletteOpen]);

  if (!isCmdPaletteOpen) return null;

  const handleSelectCaseStudy = (id: string) => {
    setSelectedCaseStudyId(id);
    setIsCmdPaletteOpen(false);
    setQuery('');
  };

  const filteredCaseStudies = CASE_STUDIES.filter(
    (cs) =>
      cs.title.toLowerCase().includes(query.toLowerCase()) ||
      cs.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      cs.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase())) ||
      cs.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/45 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-xl bg-white border border-gray-200 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Search Input Bar */}
        <div className="flex items-center px-5 py-4 border-b border-gray-100 gap-3 bg-gray-50/60">
          <Search className="w-5 h-5 text-[#E8461E]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, technologies, clinical docs, or resume..."
            className="w-full bg-transparent text-sm text-gray-900 placeholder-gray-400 focus:outline-none font-medium"
          />
          <button
            onClick={() => setIsCmdPaletteOpen(false)}
            className="px-2 py-1 rounded-md bg-gray-200/70 text-gray-600 text-[11px] font-mono hover:bg-gray-300 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-3 scrollbar-thin text-xs">
          {/* Quick Actions */}
          {!query && (
            <div className="space-y-1">
              <p className="px-3 py-1 text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider">
                Quick Shortcuts
              </p>
              <button
                onClick={() => {
                  setIsCVOpen(true);
                  setIsCmdPaletteOpen(false);
                }}
                className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 text-gray-800 group transition-all text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#E8461E]/10 text-[#E8461E] grid place-items-center">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-xs">View Curriculum Vitae</span>
                    <p className="text-[11px] text-gray-400 font-mono">Download PDF & Career Milestones</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#E8461E] group-hover:translate-x-0.5 transition-all" />
              </button>

              <button
                onClick={() => {
                  setIsContactOpen(true);
                  setIsCmdPaletteOpen(false);
                }}
                className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 text-gray-800 group transition-all text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-600 grid place-items-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-xs">Start a Conversation</span>
                    <p className="text-[11px] text-gray-400 font-mono">Delivered to mashikurrahman7@gmail.com</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-600 group-hover:translate-x-0.5 transition-all" />
              </button>
            </div>
          )}

          {/* Shipped Projects Match */}
          <div className="space-y-1">
            <p className="px-3 py-1 text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider">
              Shipped Projects ({filteredCaseStudies.length})
            </p>
            {filteredCaseStudies.length === 0 ? (
              <p className="px-3 py-4 text-center text-xs text-gray-400 font-mono">
                No matching projects found for "{query}"
              </p>
            ) : (
              filteredCaseStudies.map((cs) => (
                <button
                  key={cs.id}
                  onClick={() => handleSelectCaseStudy(cs.id)}
                  className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 text-gray-800 group transition-all text-left"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-xl bg-gray-100 text-gray-700 grid place-items-center flex-shrink-0 font-mono font-bold text-[11px]">
                      #{cs.number}
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-xs text-gray-900 group-hover:text-[#E8461E] transition-colors truncate">
                        {cs.title}
                      </p>
                      <p className="text-[11px] text-gray-400 truncate">
                        {cs.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-gray-100 text-gray-600 border border-gray-200 flex-shrink-0 ml-2">
                    {cs.category}
                  </span>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Footer info */}
        <div className="px-5 py-3 border-t border-gray-100 bg-gray-50 flex items-center justify-between text-[11px] font-mono text-gray-400">
          <span>Navigate with <kbd className="px-1.5 py-0.5 rounded bg-white border border-gray-200 text-gray-700">↑</kbd> <kbd className="px-1.5 py-0.5 rounded bg-white border border-gray-200 text-gray-700">↓</kbd></span>
          <span>Open with <kbd className="px-1.5 py-0.5 rounded bg-white border border-gray-200 text-gray-700">⌘K</kbd></span>
        </div>
      </div>
    </div>
  );
};
