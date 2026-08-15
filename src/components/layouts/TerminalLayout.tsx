import React, { useState } from 'react';
import { PROFILE_DATA, CASE_STUDIES } from '../../data/portfolioData';
import { CV_DATA } from '../../data/cvData';
import { useThemeLayout } from '../../context/ThemeLayoutContext';
import { Terminal, ShieldCheck, HelpCircle, FileText, Mail, ArrowRight, CornerDownLeft } from 'lucide-react';

export const TerminalLayout: React.FC = () => {
  const { setSelectedCaseStudyId, setIsCVOpen, setIsContactOpen } = useThemeLayout();
  const [commandInput, setCommandInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    'Welcome to Mohammad Ashikur Rahman CLI Terminal v2.4',
    'Type "help" or "ls" to list available commands and projects.',
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = commandInput.trim().toLowerCase();
    if (!cmd) return;

    let response = '';

    if (cmd === 'help') {
      response =
        'Available commands:\n- ls / projects : List all 9 case study projects\n- cat cv / resume : Display CV overview\n- contact : Open contact drawer\n- clear : Clear terminal window';
    } else if (cmd === 'ls' || cmd === 'projects') {
      response = CASE_STUDIES.map(
        (cs) => `[#${cs.number}] ${cs.title} (${cs.category}) — ${cs.summary.slice(0, 60)}...`
      ).join('\n');
    } else if (cmd === 'cat cv' || cmd === 'resume') {
      response = `MOHAMMAD ASHIKUR RAHMAN\n${PROFILE_DATA.title}\nPhone: ${PROFILE_DATA.phone} | Email: ${PROFILE_DATA.email}\nExperience:\n- Capelli Sports (CS Team Leader)\n- BJIT (Sr. Technical Content Writer)\n- Augmedix BD (Sr. Medical Documentation Specialist)`;
    } else if (cmd === 'contact') {
      setIsContactOpen(true);
      response = 'Opening contact dialog...';
    } else if (cmd === 'clear') {
      setHistory([]);
      setCommandInput('');
      return;
    } else {
      response = `Command not recognized: "${cmd}". Type "help" for a list of available commands.`;
    }

    setHistory((prev) => [...prev, `$ ${commandInput}`, response]);
    setCommandInput('');
  };

  return (
    <div className="space-y-6 pb-24 animate-in fade-in duration-300 max-w-5xl mx-auto font-mono text-xs">
      {/* CLI Header Bar */}
      <div className="p-4 rounded-t-2xl bg-slate-900 border-t border-x border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="text-slate-400 text-[11px] ml-2 font-bold">ashikur@portfolio-cli:~</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsCVOpen(true)}
            className="px-2.5 py-1 rounded bg-slate-800 text-amber-400 hover:bg-slate-700 text-[10px]"
          >
            cat cv.txt
          </button>
          <button
            onClick={() => setIsContactOpen(true)}
            className="px-2.5 py-1 rounded bg-amber-500 text-slate-950 font-bold text-[10px]"
          >
            ssh contact
          </button>
        </div>
      </div>

      {/* Terminal Screen Body */}
      <div className="p-6 rounded-b-2xl bg-slate-950 border border-slate-800 space-y-4 shadow-2xl min-h-[400px]">
        {/* Banner */}
        <div className="text-emerald-400 font-bold space-y-1">
          <pre className="text-[9px] sm:text-xs leading-none select-none text-amber-400">
{`   ___   ____ _  ______ ____  __  ______    ____  ___   __  ____  ___   _  __
  / _ \\ / __/ / / /  _// __/ / / / / __ \\  / _ \\/ _ \\ / / / /  |/  /  / |/ /
 / __ /_\\ \\/ /_/ // / _\\ \\  / /_/ / /_/ / / ___/ /_/ / /_/ / /|_/ /  /    / 
/_/ |_/___/\\____/___//___/  \\____/\\____/ /_/   \\____/\\____/_/  /_/  /_/|_/  `}
          </pre>
          <p className="pt-2 text-slate-300">
            System Online. Mohammad Ashikur Rahman — Technical Lead & AI Product Builder.
          </p>
        </div>

        {/* History Terminal Log */}
        <div className="space-y-3 whitespace-pre-wrap text-slate-300">
          {history.map((line, idx) => (
            <div
              key={idx}
              className={line.startsWith('$') ? 'text-amber-400 font-bold' : 'text-slate-300'}
            >
              {line}
            </div>
          ))}
        </div>

        {/* Command Form Line */}
        <form onSubmit={handleCommand} className="flex items-center gap-2 pt-4 border-t border-slate-900">
          <span className="text-emerald-400 font-bold">$</span>
          <input
            type="text"
            value={commandInput}
            onChange={(e) => setCommandInput(e.target.value)}
            placeholder="Type 'help' or 'ls'..."
            className="w-full bg-transparent text-xs text-amber-300 focus:outline-none font-mono"
          />
          <button type="submit" className="text-slate-500 hover:text-slate-300">
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* Quick Visual Grid Below CLI */}
      <div className="space-y-3 pt-6">
        <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
          Quick Case Study Shortcuts (Click to inspect)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {CASE_STUDIES.map((cs) => (
            <div
              key={cs.id}
              onClick={() => setSelectedCaseStudyId(cs.id)}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 cursor-pointer flex items-center justify-between"
            >
              <div className="space-y-0.5">
                <p className="text-xs font-bold text-slate-200">#{cs.number} {cs.title}</p>
                <p className="text-[10px] text-slate-400">{cs.category}</p>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
