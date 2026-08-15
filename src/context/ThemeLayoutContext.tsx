import React, { createContext, useContext, useState, useEffect } from 'react';

export type LayoutMode = 'bento' | 'executive' | 'workstation' | 'terminal';
export type ThemeMode = 'obsidian' | 'cyber' | 'emerald' | 'light';

interface ThemeLayoutContextType {
  layout: LayoutMode;
  setLayout: (layout: LayoutMode) => void;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  selectedCaseStudyId: string | null;
  setSelectedCaseStudyId: (id: string | null) => void;
  isCVOpen: boolean;
  setIsCVOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isContactOpen: boolean;
  setIsContactOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCmdPaletteOpen: boolean;
  setIsCmdPaletteOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeLayoutContext = createContext<ThemeLayoutContextType | undefined>(undefined);

export const ThemeLayoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [layout, setLayoutState] = useState<LayoutMode>(() => {
    return (localStorage.getItem('ashikur_layout') as LayoutMode) || 'bento';
  });
  
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    return (localStorage.getItem('ashikur_theme') as ThemeMode) || 'obsidian';
  });

  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string | null>(null);
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCmdPaletteOpen, setIsCmdPaletteOpen] = useState(false);

  const setLayout = (newLayout: LayoutMode) => {
    setLayoutState(newLayout);
    localStorage.setItem('ashikur_layout', newLayout);
  };

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem('ashikur_theme', newTheme);
  };

  // Keyboard shortcut for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCmdPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Update HTML class attribute for theme rendering
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('theme-obsidian', 'theme-cyber', 'theme-emerald', 'theme-light', 'dark', 'light');

    if (theme === 'light') {
      root.classList.add('light', 'theme-light');
    } else {
      root.classList.add('dark', `theme-${theme}`);
    }
  }, [theme]);

  return (
    <ThemeLayoutContext.Provider
      value={{
        layout,
        setLayout,
        theme,
        setTheme,
        selectedCaseStudyId,
        setSelectedCaseStudyId,
        isCVOpen,
        setIsCVOpen,
        isContactOpen,
        setIsContactOpen,
        isCmdPaletteOpen,
        setIsCmdPaletteOpen,
      }}
    >
      {children}
    </ThemeLayoutContext.Provider>
  );
};

export const useThemeLayout = () => {
  const context = useContext(ThemeLayoutContext);
  if (!context) {
    throw new Error('useThemeLayout must be used within a ThemeLayoutProvider');
  }
  return context;
};
