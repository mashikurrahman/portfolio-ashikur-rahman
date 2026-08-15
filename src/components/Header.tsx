import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useThemeLayout } from '../context/ThemeLayoutContext';

export const Header: React.FC = () => {
  const { setIsContactOpen, setIsCVOpen } = useThemeLayout();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['top', 'services', 'projects', 'about', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled shadow-sm' : ''}`}>
      <div className="header-inner">
        {/* Brand with subtle pulsing status */}
        <div className="flex items-center gap-3">
          <a href="#top" onClick={(e) => scrollToSection(e, 'top')} className="header-brand">
            <span className="header-brand-icon">A</span>
            Ashikur.
          </a>
          <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Available
          </span>
        </div>

        {/* Nav Links with active indicator */}
        <nav className="header-nav">
          <a
            href="#top"
            onClick={(e) => scrollToSection(e, 'top')}
            className={activeSection === 'top' ? 'active' : ''}
          >
            Home
          </a>
          <a
            href="#services"
            onClick={(e) => scrollToSection(e, 'services')}
            className={activeSection === 'services' ? 'active' : ''}
          >
            Services
          </a>
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, 'projects')}
            className={activeSection === 'projects' ? 'active' : ''}
          >
            Projects
          </a>
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className={activeSection === 'about' ? 'active' : ''}
          >
            About
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className={activeSection === 'contact' ? 'active' : ''}
          >
            Contact
          </a>
        </nav>

        {/* Header Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            className="px-4 py-2 rounded-full border border-gray-200 text-xs font-semibold text-gray-700 hover:border-gray-900 transition-colors"
            onClick={() => setIsCVOpen(true)}
          >
            Resume
          </button>
          <button
            className="header-contact-btn"
            onClick={() => setIsContactOpen(true)}
          >
            Contact Me
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          aria-label="Toggle Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden bg-white/95 backdrop-blur-md px-6 py-5 space-y-3 animate-in slide-in-from-top-2 ${
            isScrolled ? 'rounded-3xl border border-gray-200 mt-2 shadow-xl' : 'border-b border-gray-200'
          }`}
        >
          <nav className="flex flex-col gap-2.5">
            <a
              href="#top"
              onClick={(e) => scrollToSection(e, 'top')}
              className={`py-1.5 text-sm font-semibold ${activeSection === 'top' ? 'text-[#E8461E]' : 'text-gray-700'}`}
            >
              Home
            </a>
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, 'services')}
              className={`py-1.5 text-sm font-semibold ${activeSection === 'services' ? 'text-[#E8461E]' : 'text-gray-700'}`}
            >
              Services
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className={`py-1.5 text-sm font-semibold ${activeSection === 'projects' ? 'text-[#E8461E]' : 'text-gray-700'}`}
            >
              Projects
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className={`py-1.5 text-sm font-semibold ${activeSection === 'about' ? 'text-[#E8461E]' : 'text-gray-700'}`}
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className={`py-1.5 text-sm font-semibold ${activeSection === 'contact' ? 'text-[#E8461E]' : 'text-gray-700'}`}
            >
              Contact
            </a>
          </nav>
          <div className="pt-2 flex gap-2">
            <button
              className="flex-1 py-2 rounded-full border border-gray-300 text-xs font-semibold text-gray-800"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsCVOpen(true);
              }}
            >
              Resume
            </button>
            <button
              className="flex-1 py-2 rounded-full bg-[#E8461E] text-white text-xs font-semibold"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsContactOpen(true);
              }}
            >
              Contact Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
