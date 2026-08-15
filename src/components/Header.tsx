import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useThemeLayout } from '../context/ThemeLayoutContext';

export const Header: React.FC = () => {
  const { setIsContactOpen, setIsCVOpen, setIsCmdPaletteOpen } = useThemeLayout();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 25);

          const sections = ['top', 'services', 'projects', 'about', 'contact'];
          const scrollPos = window.scrollY + 120;

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
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
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
    <header className={`site-header-wrapper ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="header-capsule">
        {/* Brand with subtle pulsing status */}
        <div className="header-brand-group">
          <a href="#top" onClick={(e) => scrollToSection(e, 'top')} className="header-brand">
            <span className="header-brand-icon">A</span>
            <span className="header-brand-name">Ashikur.</span>
          </a>
          <span className="header-status-badge">
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

        {/* Header Action Buttons with Guaranteed No-Wrap */}
        <div className="header-actions">
          <button
            className="header-search-btn"
            onClick={() => setIsCmdPaletteOpen(true)}
            title="Search projects & actions (Ctrl+K / ⌘K)"
          >
            <span>Search</span>
            <kbd className="header-search-kbd">⌘K</kbd>
          </button>
          <button
            className="header-resume-btn"
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
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav-panel animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-2">
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
