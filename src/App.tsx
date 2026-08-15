import React from 'react';
import { ThemeLayoutProvider } from './context/ThemeLayoutContext';
import { Header } from './components/Header';
import { EditorialLayout } from './components/layouts/EditorialLayout';
import { CaseStudyModal } from './components/CaseStudyModal';
import { CVModal } from './components/CVModal';
import { ContactModal } from './components/ContactModal';
import { CommandPalette } from './components/CommandPalette';

const MainContent: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      <main><EditorialLayout /></main>

      {/* Modals & Command Palette */}
      <CaseStudyModal />
      <CVModal />
      <ContactModal />
      <CommandPalette />
    </div>
  );
};

export function App() {
  return (
    <ThemeLayoutProvider>
      <MainContent />
    </ThemeLayoutProvider>
  );
}

export default App;
