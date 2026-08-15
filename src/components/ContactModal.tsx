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
  Sparkles,
  MessageSquare,
  Layers,
  User
} from 'lucide-react';

const SERVICE_OPTIONS = [
  '💻 Web App (React / Next.js)',
  '🤖 AI & LLM Systems',
  '📱 Mobile App (Flutter)',
  '📝 Tech & Medical Docs',
  '💼 Job Offer / Full-Time',
  '💡 Advisory / Consulting'
];

const MESSAGE_SHORTCUTS = [
  {
    label: '🚀 New Project',
    text: "Hi Ashikur, I'd like to discuss a new web/mobile project. Let's talk scope, architecture, and timeline."
  },
  {
    label: '💼 Job Opportunity',
    text: "Hi Ashikur, we have an open role for a Full-Stack / AI Engineer and would love to schedule an introductory interview."
  },
  {
    label: '🤖 AI / RAG Build',
    text: "Hi Ashikur, we need technical guidance building an AI assistant / RAG pipeline for our product."
  },
  {
    label: '📝 Documentation',
    text: "Hi Ashikur, looking for technical writing / clinical documentation consulting for our platform."
  }
];

export const ContactModal: React.FC = () => {
  const { isContactOpen, setIsContactOpen } = useThemeLayout();
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const [selectedService, setSelectedService] = useState<string>(SERVICE_OPTIONS[0]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(MESSAGE_SHORTCUTS[0].text);

  if (!isContactOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    const formattedPayload = {
      name: name || 'Interested Client / Recruiter',
      email: email,
      _subject: `Portfolio Inquiry: ${selectedService} (from ${name || 'Website Visitor'})`,
      'Service / Interest': selectedService,
      message: message,
      _template: 'table',
      _captcha: 'false'
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/mashikurrahman7@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formattedPayload)
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
      setFormError(err?.message || 'Unable to send directly. You can send via your email client.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoHref = `mailto:mashikurrahman7@gmail.com?subject=${encodeURIComponent(
    `Portfolio Inquiry: ${selectedService}`
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nInterest: ${selectedService}\n\nMessage:\n${message}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/45 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-150">
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white border border-gray-200 rounded-3xl shadow-2xl p-6 sm:p-8 text-gray-900 space-y-6">
        {/* Close Button */}
        <button
          onClick={() => {
            setIsContactOpen(false);
            setFormSent(false);
            setFormError(null);
          }}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 text-gray-500 hover:text-gray-900 hover:bg-gray-200 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1 pr-6">
          <p className="text-xs font-semibold text-[#E8461E] uppercase tracking-wider font-mono">
            — Direct Contact
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900">
            Let's Build Something Great
          </h2>
          <p className="text-xs text-gray-500">
            Delivered directly to <span className="font-semibold text-gray-800">mashikurrahman7@gmail.com</span>
          </p>
        </div>

        {/* Success State */}
        {formSent ? (
          <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in zoom-in-95">
            <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 grid place-items-center mx-auto text-emerald-600">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Message Delivered!</h3>
            <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
              Your inquiry has been sent to <strong>mashikurrahman7@gmail.com</strong>. Mohammad Ashikur Rahman will reply to you shortly.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={() => setFormSent(false)}
                className="px-5 py-2.5 text-xs font-semibold rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              >
                Send Another Message
              </button>
              <button
                onClick={() => setIsContactOpen(false)}
                className="px-5 py-2.5 text-xs font-bold rounded-full bg-[#E8461E] text-white hover:bg-[#d13a14] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {formError && (
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-2.5 text-xs text-rose-700">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-rose-500" />
                <div className="flex-1">
                  <p className="font-medium">{formError}</p>
                  <a
                    href={mailtoHref}
                    className="underline text-[#E8461E] font-semibold mt-1 inline-block"
                  >
                    Click here to send via your email app instead &rarr;
                  </a>
                </div>
              </div>
            )}

            {/* 1. SERVICE OPTIONS (Simple Pills) */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-700 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#E8461E]" /> What are you looking for?
              </label>
              <div className="flex flex-wrap gap-2">
                {SERVICE_OPTIONS.map((srv) => {
                  const isSelected = selectedService === srv;
                  return (
                    <button
                      type="button"
                      key={srv}
                      onClick={() => setSelectedService(srv)}
                      className={`px-3.5 py-2 rounded-full text-xs font-medium border transition-all ${
                        isSelected
                          ? 'bg-[#E8461E] text-white border-[#E8461E] shadow-sm shadow-[#E8461E]/20'
                          : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-100'
                      }`}
                    >
                      {srv}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. MESSAGE (With 1-click Quick Templates) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-gray-700 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#E8461E]" /> Quick Note / Message *
                </label>
                <span className="text-[11px] text-gray-400">Click to fill</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {MESSAGE_SHORTCUTS.map((shortcut, idx) => (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => setMessage(shortcut.text)}
                    className="px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 text-[11px] font-medium text-gray-600 transition-colors"
                  >
                    {shortcut.label}
                  </button>
                ))}
              </div>
              <textarea
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your project details or note..."
                className="w-full px-3.5 py-2.5 rounded-2xl bg-gray-50 border border-gray-200 text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#E8461E] focus:bg-white resize-none transition-colors"
              />
            </div>

            {/* 3. SENDER NAME & EMAIL */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#E8461E] focus:bg-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Your Email *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sarah@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#E8461E] focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* Submit Action */}
            <div className="flex items-center justify-between pt-2">
              <a
                href={mailtoHref}
                className="text-xs text-[#E8461E] hover:underline flex items-center gap-1 font-mono font-medium"
              >
                Or email directly <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#E8461E] text-white font-semibold text-xs shadow-md shadow-[#E8461E]/20 hover:bg-[#d13a14] active:scale-98 disabled:opacity-50 disabled:pointer-events-none transition-all cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* Footer Quick Info Bar */}
        <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2 text-[11px] text-gray-500 font-mono">
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 hover:text-gray-900 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#E8461E]" />
            <span>{PROFILE_DATA.email}</span>
            {copied ? <CheckCircle className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-gray-400" />}
          </button>
          <span className="flex items-center gap-1">
            <Phone className="w-3.5 h-3.5 text-gray-400" />
            <span>{PROFILE_DATA.phone}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
