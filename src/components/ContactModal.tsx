import React, { useState } from 'react';
import { useThemeLayout } from '../context/ThemeLayoutContext';
import { PROFILE_DATA } from '../data/portfolioData';
import {
  X,
  Mail,
  Phone,
  Send,
  CheckCircle,
  Copy,
  ArrowUpRight,
  Loader2,
  AlertCircle,
  Briefcase,
  Calendar,
  DollarSign,
  Layers,
  Sparkles,
  MessageSquare,
  UserCheck
} from 'lucide-react';

const SERVICE_OPTIONS = [
  { id: 'fullstack', label: '💻 Full-Stack Web App', desc: 'React 19, Next.js 16, Node' },
  { id: 'ai', label: '🤖 AI & LLM / RAG Systems', desc: 'Gemini, Groq, pgvector, Privacy AI' },
  { id: 'mobile', label: '📱 Flutter Mobile App', desc: 'iOS & Android cross-platform' },
  { id: 'techwriting', label: '📝 Technical Writing & Docs', desc: 'API docs, user guides, SEO' },
  { id: 'medical', label: '🏥 Medical Documentation', desc: 'Clinical notes, SOAP, HIPAA' },
  { id: 'fulltime', label: '👔 Full-Time Role / Lead', desc: 'Engineering & tech leadership' },
];

const SUBJECT_OPTIONS = [
  '🚀 New Project Build',
  '💼 Job Offer / Interview',
  '🤝 Freelance / Contract',
  '💡 Technical Advisory',
  '💬 Quick Discovery Call',
];

const TIMELINE_OPTIONS = [
  '⚡ Immediately (ASAP)',
  '📅 Within 1–2 Weeks',
  '🗓️ 1–3 Months',
  '🔍 Exploring / Flexible',
];

const BUDGET_OPTIONS = [
  '💼 Full-Time Salary',
  '🏷️ $1,000 – $3,000',
  '🚀 $3,000 – $10,000+',
  '⏱️ Hourly / Retainer',
  '🤝 Let\'s Discuss',
];

const SENDER_ROLES = [
  'Founder / CEO',
  'Tech Lead / CTO',
  'Hiring Manager / Recruiter',
  'Healthcare Director',
  'Client / Business Owner',
];

const MESSAGE_TEMPLATES = [
  {
    title: '🚀 New Project Inquiry',
    text: "Hi Ashikur, I'd like to discuss building a new web/mobile product. Let's discuss scope, architecture, and timeline.",
  },
  {
    title: '💼 Open Role / Interview',
    text: "Hi Ashikur, we have an exciting role available for an AI & Full-Stack Engineer. We'd love to invite you for an introductory conversation.",
  },
  {
    title: '🤖 AI & RAG Consulting',
    text: "Hi Ashikur, we need technical guidance building an intelligent AI assistant / RAG pipeline with privacy compliance.",
  },
  {
    title: '📝 Documentation / Medical Writing',
    text: "Hi Ashikur, we're looking for high-accuracy technical writing and clinical documentation consulting for our platform.",
  },
];

export const ContactModal: React.FC = () => {
  const { isContactOpen, setIsContactOpen } = useThemeLayout();
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Form State with pre-selected defaults for 1-click convenience
  const [selectedService, setSelectedService] = useState<string>('fullstack');
  const [selectedSubject, setSelectedSubject] = useState<string>(SUBJECT_OPTIONS[0]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>(TIMELINE_OPTIONS[1]);
  const [selectedBudget, setSelectedBudget] = useState<string>(BUDGET_OPTIONS[1]);
  const [selectedRole, setSelectedRole] = useState<string>(SENDER_ROLES[0]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(MESSAGE_TEMPLATES[0].text);

  if (!isContactOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSelectTemplate = (templateText: string) => {
    setMessage(templateText);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    const serviceObj = SERVICE_OPTIONS.find((s) => s.id === selectedService);
    const serviceLabel = serviceObj ? serviceObj.label : selectedService;

    const formattedPayload = {
      name: name || `${selectedRole} (Contact)`,
      email: email,
      _subject: `New Portfolio Inquiry: ${selectedSubject} (${name || selectedRole})`,
      'Primary Interest': serviceLabel,
      'Project Subject': selectedSubject,
      'Project Timeline': selectedTimeline,
      'Estimated Budget': selectedBudget,
      'Sender Role': selectedRole,
      'Message Details': message,
      _template: 'table',
      _captcha: 'false',
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/mashikurrahman7@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formattedPayload),
      });

      const data = await response.json();
      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        setFormSent(true);
        setName('');
        setEmail('');
      } else {
        throw new Error(data.message || 'Submission failed. Please try again.');
      }
    } catch (err: any) {
      console.error('Contact form submission error:', err);
      setFormError(err?.message || 'Unable to submit directly. Click below to send via your email client.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoHref = `mailto:mashikurrahman7@gmail.com?subject=${encodeURIComponent(
    selectedSubject
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nRole: ${selectedRole}\nInterest: ${selectedService}\nTimeline: ${selectedTimeline}\nBudget: ${selectedBudget}\n\nMessage:\n${message}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-slate-900 border border-amber-500/30 rounded-2xl shadow-2xl p-5 sm:p-8 text-slate-100 space-y-6 scrollbar-thin">
        {/* Close Button */}
        <button
          onClick={() => {
            setIsContactOpen(false);
            setFormSent(false);
            setFormError(null);
          }}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Title */}
        <div className="space-y-1 pr-8">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
              Direct Contact
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Inbox: <strong className="text-amber-400">mashikurrahman7@gmail.com</strong>
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-100 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-amber-400" /> Start a Conversation
          </h2>
          <p className="text-xs text-slate-400">
            Select your preferences below to quickly assemble your inquiry in seconds.
          </p>
        </div>

        {/* Quick Contact Badge Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-amber-400" />
              <div className="text-left">
                <p className="text-[10px] font-mono text-slate-400">Direct Email</p>
                <p className="text-xs font-mono font-bold text-slate-200">{PROFILE_DATA.email}</p>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="p-1.5 rounded-md bg-slate-800 text-slate-300 hover:text-amber-400 transition-colors"
              title="Copy Email"
            >
              {copied ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-cyan-400" />
            <div className="text-left">
              <p className="text-[10px] font-mono text-slate-400">Direct Phone / WhatsApp</p>
              <p className="text-xs font-mono font-bold text-slate-200">{PROFILE_DATA.phone}</p>
            </div>
          </div>
        </div>

        {/* Success State */}
        {formSent ? (
          <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-in fade-in zoom-in-95">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 grid place-items-center mx-auto text-emerald-400">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-100">Inquiry Delivered!</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Your inquiry has been sent directly to <strong>mashikurrahman7@gmail.com</strong>. Mohammad Ashikur Rahman will review your requirements and respond promptly.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={() => setFormSent(false)}
                className="px-5 py-2.5 text-xs font-semibold rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
              >
                Send Another Inquiry
              </button>
              <button
                onClick={() => setIsContactOpen(false)}
                className="px-5 py-2.5 text-xs font-semibold rounded-xl bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {formError && (
              <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-2.5 text-xs text-rose-300">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-rose-400" />
                <div className="flex-1">
                  <p className="font-semibold">{formError}</p>
                  <a
                    href={mailtoHref}
                    className="underline text-amber-400 font-semibold mt-1 inline-block"
                  >
                    Click here to open and send in your email client &rarr;
                  </a>
                </div>
              </div>
            )}

            {/* 1. SELECT SERVICE / INTEREST */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-3.5 h-3.5" /> 1. What are you interested in?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SERVICE_OPTIONS.map((srv) => {
                  const isSelected = selectedService === srv.id;
                  return (
                    <button
                      type="button"
                      key={srv.id}
                      onClick={() => setSelectedService(srv.id)}
                      className={`p-3 rounded-xl text-left border transition-all flex items-start justify-between gap-2 ${
                        isSelected
                          ? 'bg-amber-500/15 border-amber-500 text-amber-200 shadow-md shadow-amber-500/10'
                          : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/50'
                      }`}
                    >
                      <div>
                        <p className="text-xs font-bold font-heading">{srv.label}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">{srv.desc}</p>
                      </div>
                      <span
                        className={`w-4 h-4 rounded-full border flex-shrink-0 mt-0.5 grid place-items-center text-[9px] ${
                          isSelected
                            ? 'border-amber-400 bg-amber-400 text-slate-950 font-bold'
                            : 'border-slate-700 bg-slate-900'
                        }`}
                      >
                        {isSelected && '✓'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. SELECT SUBJECT / TOPIC */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5" /> 2. Purpose / Topic
              </label>
              <div className="flex flex-wrap gap-2">
                {SUBJECT_OPTIONS.map((sub) => {
                  const isSelected = selectedSubject === sub;
                  return (
                    <button
                      type="button"
                      key={sub}
                      onClick={() => setSelectedSubject(sub)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                        isSelected
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-sm'
                          : 'bg-slate-950/50 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {sub}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. TIMELINE & BUDGET GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Timeline */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" /> 3. Timeline
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {TIMELINE_OPTIONS.map((t) => {
                    const isSelected = selectedTimeline === t;
                    return (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setSelectedTimeline(t)}
                        className={`px-3 py-1.5 rounded-lg text-left text-[11px] font-mono border transition-all ${
                          isSelected
                            ? 'bg-amber-500/20 border-amber-400 text-amber-200 font-bold shadow-sm'
                            : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-300'
                        }`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-400" /> 4. Budget / Engagement
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {BUDGET_OPTIONS.map((b) => {
                    const isSelected = selectedBudget === b;
                    return (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setSelectedBudget(b)}
                        className={`px-3 py-1.5 rounded-lg text-left text-[11px] font-mono border transition-all ${
                          isSelected
                            ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200 font-bold shadow-sm'
                            : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-300'
                        }`}
                      >
                        {b}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 4. SENDER ROLE */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <UserCheck className="w-3.5 h-3.5 text-cyan-400" /> 5. What best describes your role?
              </label>
              <div className="flex flex-wrap gap-1.5">
                {SENDER_ROLES.map((r) => {
                  const isSelected = selectedRole === r;
                  return (
                    <button
                      type="button"
                      key={r}
                      onClick={() => setSelectedRole(r)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-mono border transition-all ${
                        isSelected
                          ? 'bg-slate-800 border-amber-400 text-amber-300 font-bold'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {r}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 5. 1-CLICK MESSAGE TEMPLATES */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-amber-400" /> 6. Message Template (1-Click Fill)
                </label>
                <span className="text-[10px] text-slate-500 font-mono">Click to insert</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {MESSAGE_TEMPLATES.map((tmpl, idx) => (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => handleSelectTemplate(tmpl.text)}
                    className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 hover:border-amber-500/40 hover:bg-slate-800/40 text-left transition-all group"
                  >
                    <p className="text-[11px] font-bold text-slate-200 group-hover:text-amber-400 transition-colors">
                      {tmpl.title}
                    </p>
                    <p className="text-[10px] text-slate-400 truncate mt-0.5">{tmpl.text}</p>
                  </button>
                ))}
              </div>
              <textarea
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your custom notes or refine the selected template..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-amber-500 resize-none transition-colors mt-2"
              />
            </div>

            {/* 6. SENDER DETAILS (NAME & EMAIL) */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-3">
              <label className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider block">
                7. Where should Ashikur reply? *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-mono text-slate-400 mb-1">Your Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Miller"
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-slate-400 mb-1">Your Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Submit Action */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <a
                href={mailtoHref}
                className="text-xs text-amber-400 hover:underline flex items-center gap-1 font-mono order-2 sm:order-1"
              >
                Or send via Mail client <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs shadow-lg hover:shadow-amber-500/25 hover:scale-102 active:scale-98 disabled:opacity-50 disabled:pointer-events-none transition-all cursor-pointer order-1 sm:order-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting Inquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Selected Inquiry to Ashikur</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
