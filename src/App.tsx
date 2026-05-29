import { useState, useEffect, useCallback, useRef } from 'react';
import LoadingScreen from './components/LoadingScreen';
import HeroSection from './components/HeroSection';
import OpeningSection from './components/OpeningSection';
import EventDetailSection from './components/EventDetailSection';
import LoveStorySection from './components/LoveStorySection';
import GallerySection from './components/GallerySection';
import CountdownSection from './components/CountdownSection';
import RSVPSection from './components/RSVPSection';
import GiftSection from './components/GiftSection';
import FooterSection from './components/FooterSection';
import FloatingNav from './components/FloatingNav';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [guestName, setGuestName] = useState('');
  const mainRef = useRef<HTMLDivElement>(null);

  // Get guest name from URL params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('to');
    if (name) {
      setGuestName(decodeURIComponent(name));
    }
  }, []);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleOpenInvitation = useCallback(() => {
    setIsInvitationOpen(true);

    // Start music
    const audioEl = document.querySelector('audio') as HTMLAudioElement | null;
    if (audioEl) {
      audioEl.volume = 0.3;
      audioEl.play().catch(() => {});
    }

    // Smooth scroll to opening section
    setTimeout(() => {
      const openingSection = document.getElementById('opening');
      if (openingSection) {
        openingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  }, []);

  // Scroll visibility tracking after invitation is opened
  useEffect(() => {
    if (!isInvitationOpen || !mainRef.current) return;

    const sections = mainRef.current.querySelectorAll('section');

    const handleScroll = () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.85 && rect.bottom > 0;
        if (isVisible) {
          section.classList.add('section-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isInvitationOpen]);

  return (
    <div className="relative">
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* Music Player */}
      {!isLoading && <MusicPlayer />}

      {/* Main Content */}
      <div ref={mainRef} className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Hero - always visible */}
        <div id="home">
          <HeroSection onOpenInvitation={handleOpenInvitation} />
        </div>

        {/* Content sections - visible after opening invitation */}
        <div className={`transition-all duration-1000 ${isInvitationOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
          <div id="opening">
            <OpeningSection guestName={guestName} />
          </div>

          <EventDetailSection />
          <LoveStorySection />
          <GallerySection />
          <CountdownSection />
          <RSVPSection />
          <GiftSection />
          <FooterSection />
        </div>

        {/* Floating Nav */}
        {isInvitationOpen && <FloatingNav />}
      </div>
    </div>
  );
}

export default App;
