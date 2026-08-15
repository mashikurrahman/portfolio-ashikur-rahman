import React, { useState } from 'react';
import { useThemeLayout } from '../context/ThemeLayoutContext';
import { PROFILE_DATA } from '../data/portfolioData';
import { X, Mail, Phone, Send, CheckCircle, Copy, ArrowUpRight, Loader2, AlertCircle } from 'lucide-react';

export const ContactModal: React.FC = () => {
  const { isContactOpen, setIsContactOpen } = useThemeLayout();
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

    try {
      const response = await fetch('https://formsubmit.co/ajax/mashikurrahman7@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `New Portfolio Message: ${formData.subject || 'Inquiry'} (from ${formData.name})`,
          subject: formData.subject,
          message: formData.message,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json();
      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        setFormSent(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Submission failed. Please try again.');
      }
    } catch (err: any) {
      console.error('Contact form submission error:', err);
      setFormError(err?.message || 'Unable to send directly. You can send directly via your mail client.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoHref = `mailto:mashikurrahman7@gmail.com?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-amber-500/25 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-100 space-y-6">
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

        {/* Modal Title */}
        <div className="space-y-1">
          <h2 className="text-2xl font-bold font-heading text-slate-100 flex items-center gap-2">
            <Mail className="w-6 h-6 text-amber-400" /> Let's Connect & Collaborate
          </h2>
          <p className="text-xs text-slate-400">
            Messages are delivered directly to <span className="text-amber-400 font-mono">mashikurrahman7@gmail.com</span>.
          </p>
        </div>

        {/* Quick Contact Badge Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
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

          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-cyan-400" />
            <div className="text-left">
              <p className="text-[10px] font-mono text-slate-400">Phone / WhatsApp</p>
              <p className="text-xs font-mono font-bold text-slate-200">{PROFILE_DATA.phone}</p>
            </div>
          </div>
        </div>

        {/* Message Form */}
        {formSent ? (
          <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-in fade-in zoom-in-95">
            <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="text-lg font-bold text-slate-100">Message Delivered!</h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto">
              Your message was sent directly to <strong>mashikurrahman7@gmail.com</strong>. Ashikur Rahman will reply to you shortly.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setFormSent(false)}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {formError && (
              <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-start gap-2.5 text-xs text-rose-300">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-rose-400" />
                <div className="flex-1">
                  <p>{formError}</p>
                  <a
                    href={mailtoHref}
                    className="underline text-amber-400 font-semibold mt-1 inline-block"
                  >
                    Click here to send via your email app instead &rarr;
                  </a>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Your Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="sarah@example.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Project Inquiry / Job Opportunity / Collaboration"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Message *</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hi Ashikur, I'd like to discuss a project / role..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-amber-500 resize-none transition-colors"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <a
                href={mailtoHref}
                className="text-xs text-amber-400 hover:underline flex items-center gap-1 font-mono"
              >
                Or open in mail client <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs shadow-lg hover:shadow-amber-500/20 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:pointer-events-none transition-all cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send to Ashikur</span>
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
