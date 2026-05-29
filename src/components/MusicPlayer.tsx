import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element with a royalty-free romantic instrumental
    const audio = new Audio(
      'https://cdn.pixabay.com/audio/2022/01/18/audio_d0a13f69d2.mp3'
    );
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <button
      onClick={toggleMusic}
      className={`fixed top-5 right-5 z-40 w-10 h-10 rounded-full glass flex items-center justify-center shadow-md transition-all duration-500 hover:scale-110 ${
        isPlaying ? 'text-gold-600' : 'text-sage-400'
      }`}
      aria-label={isPlaying ? 'Mute music' : 'Play music'}
    >
      {isPlaying ? (
        <Volume2 className="w-4 h-4 animate-pulse-soft" />
      ) : (
        <VolumeX className="w-4 h-4" />
      )}
    </button>
  );
}

// Export a function to start music (called after opening invitation)
export function startMusic() {
  const audioEl = document.querySelector('audio') as HTMLAudioElement | null;
  if (audioEl) {
    audioEl.volume = 0.3;
    audioEl.play().catch(() => {});
  }
}
