import { useState, useEffect, useRef } from 'react';
import { Copy, Check, Gift } from 'lucide-react';

const banks = [
  {
    name: 'Bank BCA',
    accountNumber: '1234 5678 9012',
    accountName: 'Arka Pratama',
  },
  {
    name: 'Bank Mandiri',
    accountNumber: '0987 6543 2109',
    accountName: 'Sinta Dewi',
  },
];

export default function GiftSection() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
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

  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text.replace(/\s/g, ''));
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = text.replace(/\s/g, '');
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    }
  };

  return (
    <section ref={sectionRef} id="gift" className="relative section-padding marble-bg overflow-hidden">
      <div className="max-w-md mx-auto text-center">
        {/* Header */}
        <div data-aos="fade-up" className="mb-10">
          <p className="font-sans text-[10px] tracking-[0.35em] text-gold-600 uppercase mb-3">Wedding Gift</p>
          <h2 className="font-script text-3xl sm:text-4xl text-sage-800">Amplop Digital</h2>
          <div className="divider-gold-thick mx-auto w-20 mt-5" />
          <p className="font-body text-xs sm:text-sm text-sage-500 mt-6 max-w-xs mx-auto leading-relaxed">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika Anda ingin memberikan tanda kasih, kami menyediakan amplop digital.
          </p>
        </div>

        {/* Bank cards */}
        <div className="space-y-4">
          {banks.map((bank, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="glass rounded-2xl p-6 shadow-lg shadow-sage-200/20 text-left"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-cream-200 flex items-center justify-center">
                  <Gift className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <p className="font-serif text-base text-sage-800" style={{ fontWeight: 500 }}>{bank.name}</p>
                  <p className="font-body text-xs text-sage-400">a.n. {bank.accountName}</p>
                </div>
              </div>
              <div className="flex items-center justify-between bg-white/50 rounded-xl p-3 border border-sage-100/50">
                <p className="font-sans text-sm sm:text-base text-sage-700 tracking-wider">{bank.accountNumber}</p>
                <button
                  onClick={() => handleCopy(bank.accountNumber, index)}
                  className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    copiedIndex === index
                      ? 'bg-sage-600 text-white'
                      : 'bg-sage-50 text-sage-500 hover:bg-sage-100'
                  }`}
                >
                  {copiedIndex === index ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* QRIS placeholder */}
        <div data-aos="fade-up" data-aos-delay="300" className="mt-6 glass rounded-2xl p-6 shadow-lg shadow-sage-200/20">
          <p className="font-sans text-[10px] tracking-[0.2em] text-gold-500 uppercase mb-4">Scan QRIS</p>
          <div className="w-40 h-40 mx-auto bg-white rounded-xl border border-sage-100 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-sage-50 rounded-lg flex items-center justify-center mb-2">
                <svg className="w-16 h-16 text-sage-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="3" height="3" />
                  <rect x="18" y="14" width="3" height="3" />
                  <rect x="14" y="18" width="3" height="3" />
                  <rect x="18" y="18" width="3" height="3" />
                </svg>
              </div>
              <p className="font-body text-[10px] text-sage-400">QRIS Code</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
