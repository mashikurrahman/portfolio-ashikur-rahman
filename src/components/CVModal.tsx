import React from 'react';
import { useThemeLayout } from '../context/ThemeLayoutContext';
import { CV_DATA } from '../data/cvData';
import { PROFILE_DATA } from '../data/portfolioData';
import { X, Download, FileText, Briefcase, GraduationCap, Award, MapPin, Mail, Phone, Globe } from 'lucide-react';

export const CVModal: React.FC = () => {
  const { isCVOpen, setIsCVOpen } = useThemeLayout();

  if (!isCVOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-amber-500/25 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-100 space-y-6 scrollbar-thin">
        {/* Header Actions */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-heading text-slate-100">Curriculum Vitae</h2>
              <p className="text-xs text-slate-400 font-mono">Mohammad Ashikur Rahman — Modern Resume</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PROFILE_DATA.cvPdf}
              download="Mohammad_Ashikur_Rahman_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs shadow-md hover:bg-amber-400 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={() => setIsCVOpen(false)}
              className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Summary Card */}
        <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3">
          <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-300">
            <span className="flex items-center gap-1.5 text-amber-400">
              <MapPin className="w-3.5 h-3.5" /> {CV_DATA.contact.address}
            </span>
            <span className="flex items-center gap-1.5 text-cyan-400">
              <Mail className="w-3.5 h-3.5" /> {CV_DATA.contact.email}
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Phone className="w-3.5 h-3.5" /> {CV_DATA.contact.phone}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2 border-t border-slate-800/80">
            {CV_DATA.summary}
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-4">
          <h3 className="text-sm font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
            <Briefcase className="w-4 h-4" /> Professional Experience
          </h3>

          <div className="space-y-4">
            {CV_DATA.experience.map((exp, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-950/40 border border-slate-800 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h4 className="text-base font-bold text-slate-100">{exp.role}</h4>
                    <p className="text-xs text-amber-400 font-mono">{exp.company} • {exp.location}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700 self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 pt-2">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Core Competencies & Medical Specialties */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-slate-950/40 border border-slate-800 space-y-3">
            <h3 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4" /> Core Competencies
            </h3>
            {CV_DATA.coreCompetencies.map((cat, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-[11px] font-mono text-slate-400">{cat.category}</p>
                <div className="flex flex-wrap gap-1">
                  {cat.items.map((item, iIdx) => (
                    <span key={iIdx} className="px-2 py-0.5 rounded text-[11px] bg-slate-800 text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-slate-950/40 border border-slate-800 space-y-3">
            <h3 className="text-sm font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Education & Credentials
            </h3>
            <div className="space-y-3">
              {CV_DATA.education.map((edu, idx) => (
                <div key={idx} className="border-b border-slate-800/60 pb-2 last:border-0 last:pb-0">
                  <p className="text-xs font-bold text-slate-100">{edu.degree}</p>
                  <p className="text-[11px] font-mono text-slate-400">{edu.institution}</p>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800/80">
              <p className="text-[11px] font-mono text-slate-400 uppercase mb-1">Medical Specialties</p>
              <div className="flex flex-wrap gap-1">
                {CV_DATA.specialties.map((spec, sIdx) => (
                  <span key={sIdx} className="px-2 py-0.5 rounded text-[11px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
