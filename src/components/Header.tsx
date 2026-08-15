import React from 'react';
import { Menu } from 'lucide-react';
import { useThemeLayout } from '../context/ThemeLayoutContext';

export const Header: React.FC = () => {
  const { setIsContactOpen, setIsCmdPaletteOpen } = useThemeLayout();

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Brand */}
        <a href="#top" className="header-brand">
          <span className="header-brand-icon">A</span>
          Ashikur.
        </a>

        {/* Nav */}
        <nav className="header-nav">
          <a href="#top" className="active">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Contact CTA */}
        <button
          className="header-contact-btn"
          onClick={() => setIsContactOpen(true)}
        >
          Contact Me
        </button>

        {/* Mobile */}
        <button
          className="mobile-toggle"
          aria-label="Menu"
          onClick={() => setIsCmdPaletteOpen(true)}
        >
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
};
