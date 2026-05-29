import { useState, useEffect, useRef, FormEvent } from 'react';
import { Send, Check, User, Users, MessageSquare } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

export default function RSVPSection() {
  const [formData, setFormData] = useState({
    name: '',
    guestCount: '1',
    attendance: 'hadir',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      if (!supabase) {
        throw new Error('SUPABASE_NOT_CONFIGURED');
      }

      const { error: dbError } = await supabase.from('rsvp_responses').insert({
        guest_name: formData.name,
        number_of_guests: parseInt(formData.guestCount),
        attendance: formData.attendance,
        message: formData.message,
      });

      if (dbError) throw dbError;
      setIsSubmitted(true);
    } catch {
      setError(
        isSupabaseConfigured
          ? 'Terjadi kesalahan. Silakan coba lagi.'
          : 'RSVP belum aktif. Admin belum menyiapkan konfigurasi.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} id="rsvp" className="relative section-padding overflow-hidden" style={{ background: 'linear-gradient(180deg, #f5f0e8 0%, #faf9f6 100%)' }}>
      {/* Floral accent */}
      <div className="absolute top-8 left-0 w-24 h-24 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <path d="M0 50C0 50 20 30 50 30C80 30 100 50 100 50" stroke="#96a47b" strokeWidth="0.5" fill="none" />
          <ellipse cx="50" cy="30" rx="8" ry="5" fill="rgba(150,164,123,0.3)" />
        </svg>
      </div>

      <div className="max-w-md mx-auto">
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-10">
          <p className="font-sans text-[10px] tracking-[0.35em] text-gold-600 uppercase mb-3">Confirmation</p>
          <h2 className="font-script text-3xl sm:text-4xl text-sage-800">Konfirmasi Kehadiran</h2>
          <div className="divider-gold-thick mx-auto w-20 mt-5" />
        </div>

        {isSubmitted ? (
          <div data-aos="fade-up" className="glass rounded-2xl p-8 text-center shadow-lg shadow-sage-200/20">
            <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center mx-auto mb-5">
              <Check className="w-8 h-8 text-sage-600" />
            </div>
            <h3 className="font-serif text-xl text-sage-800 mb-3" style={{ fontWeight: 500 }}>Terima Kasih!</h3>
            <p className="font-body text-sm text-sage-500 leading-relaxed">
              Konfirmasi kehadiran Anda telah kami terima. Kami sangat menantikan kehadiran Anda di hari bahagia kami.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="200" className="glass rounded-2xl p-6 sm:p-8 shadow-lg shadow-sage-200/20 space-y-5">
            {/* Name */}
            <div>
              <label className="flex items-center gap-2 font-sans text-[10px] tracking-[0.2em] text-sage-500 uppercase mb-2">
                <User className="w-3.5 h-3.5" /> Nama
              </label>
              <input
                type="text"
                required
                className="input-elegant"
                placeholder="Masukkan nama Anda"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            {/* Guest count */}
            <div>
              <label className="flex items-center gap-2 font-sans text-[10px] tracking-[0.2em] text-sage-500 uppercase mb-2">
                <Users className="w-3.5 h-3.5" /> Jumlah Tamu
              </label>
              <select
                className="input-elegant appearance-none"
                value={formData.guestCount}
                onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>{n} orang</option>
                ))}
              </select>
            </div>

            {/* Attendance */}
            <div>
              <label className="font-sans text-[10px] tracking-[0.2em] text-sage-500 uppercase mb-3 block">Konfirmasi</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className={`py-3 rounded-xl font-sans text-xs tracking-wider transition-all duration-300 ${
                    formData.attendance === 'hadir'
                      ? 'bg-sage-600 text-white shadow-md shadow-sage-300/30'
                      : 'bg-white/50 text-sage-500 border border-sage-200/50'
                  }`}
                  onClick={() => setFormData({ ...formData, attendance: 'hadir' })}
                >
                  Hadir
                </button>
                <button
                  type="button"
                  className={`py-3 rounded-xl font-sans text-xs tracking-wider transition-all duration-300 ${
                    formData.attendance === 'tidak_hadir'
                      ? 'bg-sage-600 text-white shadow-md shadow-sage-300/30'
                      : 'bg-white/50 text-sage-500 border border-sage-200/50'
                  }`}
                  onClick={() => setFormData({ ...formData, attendance: 'tidak_hadir' })}
                >
                  Tidak Hadir
                </button>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="flex items-center gap-2 font-sans text-[10px] tracking-[0.2em] text-sage-500 uppercase mb-2">
                <MessageSquare className="w-3.5 h-3.5" /> Ucapan
              </label>
              <textarea
                className="input-elegant resize-none h-24"
                placeholder="Tuliskan ucapan untuk kedua mempelai..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            {error && (
              <p className="text-center font-body text-xs text-red-400">{error}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting || !isSupabaseConfigured}
              className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Kirim Konfirmasi
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
