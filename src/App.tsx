import React, { useState, useEffect, useCallback } from 'react';
import CoverModal from './components/wedding/CoverModal';
import HeroSection from './components/wedding/HeroSection';
import StorySection from './components/wedding/StorySection';
import LocationSection from './components/wedding/LocationSection';
import MusicPlayer from './components/wedding/MusicPlayer';
import BottomNav from './components/wedding/BottomNav';
import FloatingPetals from './components/wedding/FloatingPetals';
import type { WeddingSection } from './components/wedding/types';

export function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [audioTrigger, setAudioTrigger] = useState(false);
  const [activeSection, setActiveSection] = useState<WeddingSection>('hero');
  const [animateClose, setAnimateClose] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    html.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    html.style.overscrollBehavior = 'none';
    document.body.style.overscrollBehavior = 'none';
    document.body.style.height = '100dvh';
    return () => {
      html.style.overflow = '';
      document.body.style.overflow = '';
      html.style.overscrollBehavior = '';
      document.body.style.overscrollBehavior = '';
      document.body.style.height = '';
    };
  }, []);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    setAnimateClose(false);
    setActiveSection('hero');
    setAudioTrigger(true);
  };

  const handleCloseInvitation = () => {
    setAnimateClose(true);
    setActiveSection('hero');
    setIsOpened(false);
  };

  const handleCloseAnimDone = useCallback(() => {
    setAnimateClose(false);
  }, []);

  const showOther = isOpened && activeSection !== 'hero';

  return (
    <div className="relative h-[100dvh] max-h-[100dvh] overflow-hidden overscroll-none bg-emerald-950 font-sans text-stone-800 selection:bg-gold-500/30 selection:text-gold-200">
      <HeroSection />

      <CoverModal
        isOpen={!isOpened}
        onOpenInvitation={handleOpenInvitation}
        animateClose={animateClose}
        onCloseAnimDone={handleCloseAnimDone}
      />

      {isOpened && (
        <>
          <FloatingPetals />
          <MusicPlayer autoPlayTrigger={audioTrigger} />
          <BottomNav
            activeSection={activeSection}
            onNavigate={setActiveSection}
            onCloseInvitation={handleCloseInvitation}
          />
        </>
      )}

      {showOther && (
        <div className="absolute inset-0 z-[45] flex flex-col overflow-hidden bg-emerald-950 pb-[4.75rem]">
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
            {activeSection === 'kisah' && <StorySection />}
            {activeSection === 'lokasi' && <LocationSection />}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
