import React from 'react';
import { useThemeLayout } from '../context/ThemeLayoutContext';
import { CV_DATA } from '../data/cvData';
import { PROFILE_DATA } from '../data/portfolioData';
import { X, Download, FileText, Briefcase, GraduationCap, MapPin, Mail, Phone, CheckCircle2 } from 'lucide-react';

export const CVModal: React.FC = () => {
  const { isCVOpen, setIsCVOpen, setIsContactOpen } = useThemeLayout();

  if (!isCVOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/50 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white border border-gray-200 rounded-3xl shadow-2xl p-6 sm:p-9 text-gray-900 space-y-6 scrollbar-thin">
        {/* Header Actions */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#E8461E]/10 text-[#E8461E] flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-gray-900">Curriculum Vitae</h2>
              <p className="text-xs text-gray-500 font-mono">Mohammad Ashikur Rahman — Modern Resume</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PROFILE_DATA.cvPdf}
              download="Mohammad_Ashikur_Rahman_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#E8461E] text-white font-bold text-xs shadow-sm hover:bg-[#d13a14] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={() => setIsCVOpen(false)}
              className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 hover:text-gray-900 hover:bg-gray-200 flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CV Summary Card */}
        <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 space-y-3">
          <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-600">
            <span className="flex items-center gap-1.5 text-gray-700">
              <MapPin className="w-3.5 h-3.5 text-[#E8461E]" /> {CV_DATA.contact.address}
            </span>
            <span className="flex items-center gap-1.5 text-gray-700">
              <Mail className="w-3.5 h-3.5 text-[#E8461E]" /> {CV_DATA.contact.email}
            </span>
            <span className="flex items-center gap-1.5 text-gray-700">
              <Phone className="w-3.5 h-3.5 text-[#E8461E]" /> {CV_DATA.contact.phone}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed pt-2 border-t border-gray-200">
            {CV_DATA.summary}
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono font-bold text-[#E8461E] uppercase tracking-wider flex items-center gap-2">
            <Briefcase className="w-4 h-4" /> Professional Experience (6+ Years)
          </h3>

          <div className="space-y-3.5">
            {CV_DATA.experience.map((exp, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-gray-50 border border-gray-100 space-y-2.5 hover:border-gray-200 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h4 className="text-base font-bold text-gray-900">{exp.role}</h4>
                    <p className="text-xs text-[#E8461E] font-mono font-semibold">{exp.company} • {exp.location}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-white text-gray-700 border border-gray-200 self-start sm:self-auto shadow-xs">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-1.5 pt-1">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="text-xs text-gray-600 flex items-start gap-2">
                      <span className="text-[#E8461E] mt-0.5">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Core Competencies Grid */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono font-bold text-gray-800 uppercase tracking-wider">
            Core Competencies & Technical Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {CV_DATA.coreCompetencies.map((cat, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                <h4 className="text-xs font-bold text-gray-900 uppercase font-mono flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E8461E]" />
                  {cat.category}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item, iIdx) => (
                    <span
                      key={iIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white text-gray-700 border border-gray-200 shadow-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono font-bold text-gray-800 uppercase tracking-wider flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-[#E8461E]" /> Education
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CV_DATA.education.map((edu, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <p className="text-xs font-bold text-gray-900">{edu.degree}</p>
                <p className="text-xs text-gray-500 font-mono mt-0.5">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Contact Action */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <button
            onClick={() => {
              setIsCVOpen(false);
              setIsContactOpen(true);
            }}
            className="text-xs text-[#E8461E] hover:underline font-bold font-mono"
          >
            Looking to hire? Let's connect &rarr;
          </button>
          <button
            onClick={() => setIsCVOpen(false)}
            className="px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold hover:bg-gray-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
