import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface HeroSectionProps {
  onOpenInvitation: () => void;
}

export default function HeroSection({ onOpenInvitation }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden marble-bg">
      {/* Decorative corner florals */}
      <div className="absolute top-0 left-0 w-40 h-40 sm:w-56 sm:h-56 opacity-20 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <path d="M0 0C0 0 40 20 60 60C80 100 40 140 0 160" stroke="#96a47b" strokeWidth="1" fill="none" />
          <path d="M0 20C0 20 30 35 45 65C60 95 30 120 0 135" stroke="#96a47b" strokeWidth="0.5" fill="none" />
          <ellipse cx="30" cy="50" rx="12" ry="8" fill="rgba(150,164,123,0.3)" transform="rotate(-30 30 50)" />
          <ellipse cx="55" cy="80" rx="10" ry="6" fill="rgba(150,164,123,0.2)" transform="rotate(-45 55 80)" />
          <ellipse cx="15" cy="90" rx="8" ry="5" fill="rgba(232,194,113,0.2)" transform="rotate(-20 15 90)" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-56 sm:h-56 opacity-20 pointer-events-none rotate-180">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <path d="M0 0C0 0 40 20 60 60C80 100 40 140 0 160" stroke="#96a47b" strokeWidth="1" fill="none" />
          <path d="M0 20C0 20 30 35 45 65C60 95 30 120 0 135" stroke="#96a47b" strokeWidth="0.5" fill="none" />
          <ellipse cx="30" cy="50" rx="12" ry="8" fill="rgba(150,164,123,0.3)" transform="rotate(-30 30 50)" />
          <ellipse cx="55" cy="80" rx="10" ry="6" fill="rgba(150,164,123,0.2)" transform="rotate(-45 55 80)" />
        </svg>
      </div>

      {/* Floating leaf particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${10 + i * 25}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${5 + i}s`,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <ellipse cx="10" cy="10" rx="7" ry="4" fill="rgba(150,164,123,0.12)" transform="rotate(45 10 10)" />
            </svg>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className={`text-center px-6 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Couple photo frame */}
        <div className="relative mx-auto mb-8 w-48 h-48 sm:w-56 sm:h-56">
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-full animate-glow" style={{ boxShadow: '0 0 40px rgba(197,145,42,0.2), 0 0 80px rgba(150,164,123,0.1)' }} />
          {/* Gold border ring */}
          <div className="absolute inset-0 rounded-full p-1" style={{ background: 'linear-gradient(135deg, #d4a43e, #e8c271, #d4a43e)' }}>
            <div className="w-full h-full rounded-full marble-bg p-1">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img
                  src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Couple"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/20 to-transparent" />
              </div>
            </div>
          </div>
          {/* Floating leaves around frame */}
          <div className="absolute -top-3 -right-3 animate-float">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 6 8 6 14C6 18 8.5 22 12 22C15.5 22 18 18 18 14C18 8 12 2 12 2Z" fill="rgba(150,164,123,0.25)" />
            </svg>
          </div>
          <div className="absolute -bottom-2 -left-3 animate-float-delay">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 1C10 1 5 6 5 11C5 14.5 7 18 10 18C13 18 15 14.5 15 11C15 6 10 1 10 1Z" fill="rgba(150,164,123,0.2)" />
            </svg>
          </div>
        </div>

        {/* Save the date */}
        <p className="font-sans text-[10px] sm:text-xs tracking-[0.35em] text-gold-600 uppercase mb-3">
          Save The Date
        </p>

        {/* Date */}
        <p className="font-serif text-2xl sm:text-3xl text-sage-700 tracking-wide mb-6" style={{ fontWeight: 300 }}>
          24 <span className="text-gold-500">Februari</span> 2024
        </p>

        {/* Names */}
        <h1 className="font-script text-5xl sm:text-6xl md:text-7xl text-sage-800 mb-2">
          Arka
        </h1>
        <div className="flex items-center justify-center gap-3 my-2">
          <div className="w-12 divider-gold" />
          <Heart className="w-4 h-4 text-gold-500 fill-gold-400" />
          <div className="w-12 divider-gold" />
        </div>
        <h1 className="font-script text-5xl sm:text-6xl md:text-7xl text-sage-800 mb-6">
          Sinta
        </h1>

        {/* Subtitle */}
        <p className="font-serif text-sm sm:text-base text-sage-500 italic mb-10 max-w-xs mx-auto" style={{ fontWeight: 300 }}>
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup"
        </p>

        {/* Open button */}
        <button
          onClick={onOpenInvitation}
          className="btn-primary glass hover:shadow-xl group"
        >
          <span className="relative z-10 flex items-center gap-2">
            Buka Undangan
            <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}
