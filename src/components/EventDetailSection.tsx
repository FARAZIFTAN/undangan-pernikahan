import { useEffect, useRef } from 'react';
import { MapPin, Calendar, Clock, Church, PartyPopper } from 'lucide-react';

export default function EventDetailSection() {
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
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll('[data-aos]');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="acara" className="relative section-padding overflow-hidden" style={{ background: 'linear-gradient(180deg, #f5f0e8 0%, #faf9f6 50%, #f0ebe0 100%)' }}>
      {/* Corner floral */}
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 opacity-15 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <path d="M200 0C200 0 160 30 140 70C120 110 160 150 200 170" stroke="#96a47b" strokeWidth="0.8" fill="none" />
          <ellipse cx="170" cy="50" rx="10" ry="6" fill="rgba(150,164,123,0.3)" transform="rotate(30 170 50)" />
          <ellipse cx="145" cy="90" rx="8" ry="5" fill="rgba(150,164,123,0.2)" transform="rotate(45 145 90)" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 opacity-15 pointer-events-none rotate-180">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <path d="M200 0C200 0 160 30 140 70C120 110 160 150 200 170" stroke="#96a47b" strokeWidth="0.8" fill="none" />
          <ellipse cx="170" cy="50" rx="10" ry="6" fill="rgba(150,164,123,0.3)" transform="rotate(30 170 50)" />
        </svg>
      </div>

      <div className="max-w-lg mx-auto text-center">
        {/* Header */}
        <div data-aos="fade-up" data-aos-duration="800">
          <p className="font-sans text-[10px] tracking-[0.35em] text-gold-600 uppercase mb-4">The Wedding Of</p>
        </div>

        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
          <h2 className="font-script text-4xl sm:text-5xl text-sage-800 mb-1">Arka & Sinta</h2>
        </div>

        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" className="my-6">
          <p className="font-serif text-base sm:text-lg text-sage-600" style={{ fontWeight: 300 }}>
            Kami Mengundang Untuk Hadir Pada Pernikahan
          </p>
        </div>

        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="300" className="mb-10">
          <div className="divider-gold-thick mx-auto w-32" />
        </div>

        {/* Akad Nikah */}
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" className="glass rounded-2xl p-6 sm:p-8 mb-6 shadow-lg shadow-sage-200/20 text-left">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center">
              <Church className="w-5 h-5 text-sage-600" />
            </div>
            <div>
              <h3 className="font-serif text-lg text-sage-800" style={{ fontWeight: 500 }}>Akad Nikah</h3>
              <p className="font-sans text-[10px] tracking-[0.2em] text-gold-500 uppercase">Holy Matrimony</p>
            </div>
          </div>
          <div className="space-y-3 pl-1">
            <div className="flex items-start gap-3">
              <Calendar className="w-4 h-4 text-sage-400 mt-0.5 shrink-0" />
              <p className="font-body text-sm text-sage-600">Sabtu, 24 Februari 2024</p>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-sage-400 mt-0.5 shrink-0" />
              <p className="font-body text-sm text-sage-600">08:00 - 10:00 WIB</p>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-sage-400 mt-0.5 shrink-0" />
              <div>
                <p className="font-body text-sm text-sage-600">Masjid Agung Al-Azhar</p>
                <p className="font-body text-xs text-sage-400">Jl. Sisingamangaraja, Kebayoran Baru, Jakarta Selatan</p>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-4 border-t border-sage-100">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-xs tracking-wider text-gold-600 hover:text-gold-700 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5" />
              Lihat di Google Maps
            </a>
          </div>
        </div>

        {/* Resepsi */}
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="500" className="glass rounded-2xl p-6 sm:p-8 mb-8 shadow-lg shadow-sage-200/20 text-left">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full bg-cream-200 flex items-center justify-center">
              <PartyPopper className="w-5 h-5 text-gold-600" />
            </div>
            <div>
              <h3 className="font-serif text-lg text-sage-800" style={{ fontWeight: 500 }}>Resepsi</h3>
              <p className="font-sans text-[10px] tracking-[0.2em] text-gold-500 uppercase">Wedding Reception</p>
            </div>
          </div>
          <div className="space-y-3 pl-1">
            <div className="flex items-start gap-3">
              <Calendar className="w-4 h-4 text-sage-400 mt-0.5 shrink-0" />
              <p className="font-body text-sm text-sage-600">Sabtu, 24 Februari 2024</p>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-sage-400 mt-0.5 shrink-0" />
              <p className="font-body text-sm text-sage-600">11:00 - 14:00 WIB</p>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-sage-400 mt-0.5 shrink-0" />
              <div>
                <p className="font-body text-sm text-sage-600">The Glass House Senayan</p>
                <p className="font-body text-xs text-sage-400">Jl. Asia Afrika, Gelora, Tanah Abang, Jakarta Pusat</p>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-4 border-t border-sage-100">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-xs tracking-wider text-gold-600 hover:text-gold-700 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5" />
              Lihat di Google Maps
            </a>
          </div>
        </div>

        {/* Action buttons */}
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://calendar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-center"
          >
            Simpan ke Kalender
          </a>
          <a
            href="#rsvp"
            className="px-8 py-3.5 rounded-full font-sans text-sm tracking-widest uppercase border border-gold-400 text-gold-600 hover:bg-gold-50 transition-all duration-300 text-center"
          >
            Konfirmasi Kehadiran
          </a>
        </div>
      </div>
    </section>
  );
}
