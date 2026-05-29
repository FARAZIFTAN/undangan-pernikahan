import { useState, useEffect, useRef } from 'react';

const WEDDING_DATE = new Date('2024-02-24T08:00:00+07:00').getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const diff = WEDDING_DATE - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

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

  const timeUnits = [
    { value: timeLeft.days, label: 'Hari' },
    { value: timeLeft.hours, label: 'Jam' },
    { value: timeLeft.minutes, label: 'Menit' },
    { value: timeLeft.seconds, label: 'Detik' },
  ];

  return (
    <section ref={sectionRef} className="relative section-padding marble-bg overflow-hidden">
      <div className="max-w-lg mx-auto text-center">
        <div data-aos="fade-up" className="mb-10">
          <p className="font-sans text-[10px] tracking-[0.35em] text-gold-600 uppercase mb-3">Counting Down To</p>
          <h2 className="font-script text-3xl sm:text-4xl text-sage-800">Hari Bahagia</h2>
          <div className="divider-gold-thick mx-auto w-20 mt-5" />
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="grid grid-cols-4 gap-3 sm:gap-4">
          {timeUnits.map((unit, index) => (
            <div key={index} className="glass rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-lg shadow-sage-200/20">
              <div className="relative">
                <p className="font-serif text-2xl sm:text-4xl text-sage-800 tabular-nums" style={{ fontWeight: 300 }}>
                  {String(unit.value).padStart(2, '0')}
                </p>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-px bg-gold-300" />
              </div>
              <p className="font-sans text-[9px] sm:text-[10px] tracking-[0.15em] text-sage-400 uppercase mt-2">
                {unit.label}
              </p>
            </div>
          ))}
        </div>

        <div data-aos="fade-up" data-aos-delay="400" className="mt-8">
          <p className="font-serif text-sm text-sage-500 italic" style={{ fontWeight: 300 }}>
            {timeLeft.days > 0
              ? 'Menghitung hari menuju hari terindah kami'
              : 'Hari bahagia telah tiba!'}
          </p>
        </div>
      </div>
    </section>
  );
}
