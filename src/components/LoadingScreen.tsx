import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setPhase(2), 600);
          setTimeout(() => onComplete(), 1800);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    setTimeout(() => setPhase(1), 400);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center marble-bg transition-all duration-1000 ${
        phase === 2 ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
      }`}
    >
      {/* Floating petals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-petal-fall"
            style={{
              left: `${15 + i * 15}%`,
              animationDelay: `${i * 1.3}s`,
              animationDuration: `${6 + i}s`,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <ellipse cx="8" cy="8" rx="6" ry="3" fill="rgba(150,164,123,0.15)" transform="rotate(30 8 8)" />
            </svg>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="text-center relative z-10">
        {/* Floral top */}
        <div
          className={`transition-all duration-1000 ${
            phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <svg className="mx-auto mb-6" width="60" height="40" viewBox="0 0 60 40" fill="none">
            <path d="M30 4C30 4 20 14 20 22C20 28 24.5 32 30 32C35.5 32 40 28 40 22C40 14 30 4 30 4Z" fill="rgba(150,164,123,0.2)" />
            <path d="M30 8L30 32" stroke="rgba(150,164,123,0.25)" strokeWidth="0.5" />
            <path d="M24 18C24 18 27 16 30 18C33 16 36 18 36 18" stroke="rgba(150,164,123,0.3)" strokeWidth="0.5" fill="none" />
          </svg>
        </div>

        {/* Names */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="font-script text-3xl sm:text-4xl text-sage-700 mb-1">Arka</p>
          <p className="font-serif text-sm text-gold-500 tracking-[0.3em] mb-1">&</p>
          <p className="font-script text-3xl sm:text-4xl text-sage-700">Sinta</p>
        </div>

        {/* Progress */}
        <div
          className={`mt-10 transition-all duration-1000 delay-500 ${
            phase >= 1 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-32 h-[2px] bg-sage-100 rounded-full mx-auto overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300 ease-out"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #96a47b, #d4a43e)',
              }}
            />
          </div>
          <p className="mt-3 font-sans text-xs text-sage-400 tracking-widest">{progress}%</p>
        </div>
      </div>
    </div>
  );
}
