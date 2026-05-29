import { useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';

export default function FooterSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('aos-animate');
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll('[data-aos]');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={sectionRef} className="relative section-padding overflow-hidden text-center" style={{ background: 'linear-gradient(180deg, #f5f0e8 0%, #ede8dc 100%)' }}>
      {/* Floral top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-6 opacity-15 pointer-events-none">
        <svg viewBox="0 0 200 24" fill="none" className="w-full h-full">
          <path d="M0 12C30 4 70 4 100 12C130 20 170 20 200 12" stroke="#96a47b" strokeWidth="0.8" fill="none" />
          <path d="M0 16C30 8 70 8 100 16C130 24 170 24 200 16" stroke="#96a47b" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div data-aos="fade-up" className="max-w-md mx-auto">
        {/* Thank you */}
        <p className="font-sans text-[10px] tracking-[0.35em] text-gold-600 uppercase mb-4">Thank You</p>
        <h2 className="font-script text-3xl sm:text-4xl text-sage-800 mb-2">Arka & Sinta</h2>

        <div className="my-6">
          <div className="divider-gold-thick mx-auto w-24" />
        </div>

        <p className="font-serif text-sm sm:text-base text-sage-600 leading-relaxed mb-4" style={{ fontWeight: 300 }}>
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami.
        </p>

        <p className="font-serif text-sm text-sage-500 italic" style={{ fontWeight: 300 }}>
          Wassalamu'alaikum Warahmatullahi Wabarakatuh
        </p>

        <div className="mt-8 flex items-center justify-center gap-2 text-sage-400">
          <p className="font-sans text-[10px] tracking-wider">Made with</p>
          <Heart className="w-3 h-3 text-gold-500 fill-gold-400" />
        </div>
      </div>
    </footer>
  );
}
