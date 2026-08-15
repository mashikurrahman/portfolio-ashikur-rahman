import React, { useState } from 'react';
import { useThemeLayout, LayoutMode, ThemeMode } from '../context/ThemeLayoutContext';
import { CASE_STUDIES } from '../data/portfolioData';
import { Search, X, LayoutGrid, Layers, Monitor, Terminal, Sparkles, FileText, Mail, ArrowRight } from 'lucide-react';

export const CommandPalette: React.FC = () => {
  const {
    isCmdPaletteOpen,
    setIsCmdPaletteOpen,
    setLayout,
    setTheme,
    setSelectedCaseStudyId,
    setIsCVOpen,
    setIsContactOpen,
  } = useThemeLayout();

  const [query, setQuery] = useState('');

  if (!isCmdPaletteOpen) return null;

  const handleSelectCaseStudy = (id: string) => {
    setSelectedCaseStudyId(id);
    setIsCmdPaletteOpen(false);
    setQuery('');
  };

  const handleSelectLayout = (l: LayoutMode) => {
    setLayout(l);
    setIsCmdPaletteOpen(false);
    setQuery('');
  };

  const handleSelectTheme = (t: ThemeMode) => {
    setTheme(t);
    setIsCmdPaletteOpen(false);
    setQuery('');
  };

  const filteredCaseStudies = CASE_STUDIES.filter(
    (cs) =>
      cs.title.toLowerCase().includes(query.toLowerCase()) ||
      cs.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      cs.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-xl bg-slate-900 border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 gap-3">
          <Search className="w-5 h-5 text-amber-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a project, technology, layout, or action..."
            className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none font-sans"
          />
          <button
            onClick={() => setIsCmdPaletteOpen(false)}
            className="p-1 rounded bg-slate-800 text-slate-400 hover:text-slate-200 text-xs font-mono"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4 scrollbar-thin text-xs">
          {/* Quick Actions */}
          {!query && (
            <div className="space-y-1">
              <p className="px-2 py-1 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                Quick Actions
              </p>
              <button
                onClick={() => {
                  setIsCVOpen(true);
                  setIsCmdPaletteOpen(false);
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-800 text-slate-200 group transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span>View Curriculum Vitae & Resume</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400" />
              </button>

              <button
                onClick={() => {
                  setIsContactOpen(true);
                  setIsCmdPaletteOpen(false);
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-800 text-slate-200 group transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>Get in Touch / Contact</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
              </button>
            </div>
          )}

          {/* Switch Layouts */}
          {(!query || 'layout bento executive workstation terminal'.includes(query.toLowerCase())) && (
            <div className="space-y-1">
              <p className="px-2 py-1 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                Switch Portfolio Layout
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  onClick={() => handleSelectLayout('bento')}
                  className="flex items-center gap-2 p-2 rounded-lg bg-slate-950/60 hover:bg-slate-800 text-slate-300 text-left border border-slate-800"
                >
                  <LayoutGrid className="w-4 h-4 text-amber-400" />
                  <span>🍱 Bento Studio</span>
                </button>
                <button
                  onClick={() => handleSelectLayout('executive')}
                  className="flex items-center gap-2 p-2 rounded-lg bg-slate-950/60 hover:bg-slate-800 text-slate-300 text-left border border-slate-800"
                >
                  <Layers className="w-4 h-4 text-pink-400" />
                  <span>👔 Executive Editorial</span>
                </button>
                <button
                  onClick={() => handleSelectLayout('workstation')}
                  className="flex items-center gap-2 p-2 rounded-lg bg-slate-950/60 hover:bg-slate-800 text-slate-300 text-left border border-slate-800"
                >
                  <Monitor className="w-4 h-4 text-cyan-400" />
                  <span>💻 Workstation</span>
                </button>
                <button
                  onClick={() => handleSelectLayout('terminal')}
                  className="flex items-center gap-2 p-2 rounded-lg bg-slate-950/60 hover:bg-slate-800 text-slate-300 text-left border border-slate-800"
                >
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span>⚡ Hacker CLI</span>
                </button>
              </div>
            </div>
          )}

          {/* Shipped Case Studies */}
          <div className="space-y-1">
            <p className="px-2 py-1 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
              Shipped Case Studies ({filteredCaseStudies.length})
            </p>
            {filteredCaseStudies.length === 0 ? (
              <p className="px-2 py-3 text-slate-500 text-center font-mono">No matching case studies found.</p>
            ) : (
              filteredCaseStudies.map((cs) => (
                <button
                  key={cs.id}
                  onClick={() => handleSelectCaseStudy(cs.id)}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-800/80 text-left border border-transparent hover:border-amber-500/20 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                      #{cs.number}
                    </span>
                    <div>
                      <p className="font-bold text-slate-200 group-hover:text-amber-400 transition-colors">
                        {cs.title}
                      </p>
                      <p className="text-[11px] text-slate-400 truncate max-w-xs">{cs.subtitle}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    {cs.category}
                  </span>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Use ⌘K to open anytime</span>
          <span>Mohammad Ashikur Rahman Portfolio</span>
        </div>
      </div>
    </div>
  );
};
