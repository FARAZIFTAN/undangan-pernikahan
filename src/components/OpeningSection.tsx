import { useEffect, useRef } from 'react';

interface OpeningSectionProps {
  guestName: string;
}

export default function OpeningSection({ guestName }: OpeningSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll('[data-aos]');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative section-padding marble-bg overflow-hidden">
      {/* Floral top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 opacity-20 pointer-events-none">
        <svg viewBox="0 0 160 32" fill="none" className="w-full h-full">
          <path d="M0 16C20 8 40 8 80 16C120 24 140 24 160 16" stroke="#96a47b" strokeWidth="0.8" fill="none" />
          <path d="M0 20C20 12 40 12 80 20C120 28 140 28 160 20" stroke="#96a47b" strokeWidth="0.5" fill="none" />
          <circle cx="80" cy="16" r="3" fill="rgba(212,164,62,0.3)" />
        </svg>
      </div>

      <div className="max-w-lg mx-auto text-center">
        {/* Bismillah */}
        <div data-aos="fade-up" data-aos-duration="800">
          <p className="font-serif text-lg sm:text-xl text-sage-600 mb-2" style={{ fontWeight: 400 }}>
            Bismillahirrahmanirrahim
          </p>
        </div>

        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" className="my-8">
          <div className="divider-gold-thick mx-auto w-24" />
        </div>

        {/* Salam */}
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
          <p className="font-serif text-base sm:text-lg text-sage-700 leading-relaxed" style={{ fontWeight: 300 }}>
            Assalamu'alaikum Warahmatullahi Wabarakatuh
          </p>
        </div>

        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" className="mt-8 mb-6">
          <p className="font-body text-sm text-sage-500 leading-relaxed">
            Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i serta teman-teman sekalian untuk menghadiri acara pernikahan kami.
          </p>
        </div>

        {/* Guest name */}
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className="glass rounded-2xl p-6 sm:p-8 shadow-lg shadow-sage-200/30">
          <p className="font-sans text-[10px] tracking-[0.3em] text-gold-600 uppercase mb-3">Kepada Yth.</p>
          <p className="font-body text-sm text-sage-600 mb-2">Bapak/Ibu/Saudara/i</p>
          <p className="font-script text-2xl sm:text-3xl text-sage-800">{guestName || 'Tamu Undangan'}</p>
        </div>

        {/* Quran verse */}
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" className="mt-10">
          <div className="divider-gold mx-auto w-16 mb-6" />
          <p className="font-serif text-xs sm:text-sm text-sage-400 italic leading-relaxed max-w-sm mx-auto" style={{ fontWeight: 300 }}>
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang."
          </p>
          <p className="font-sans text-[10px] tracking-[0.2em] text-gold-500 mt-3 uppercase">QS. Ar-Rum: 21</p>
        </div>
      </div>
    </section>
  );
}
