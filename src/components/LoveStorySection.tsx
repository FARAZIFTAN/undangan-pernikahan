import { useEffect, useRef } from 'react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: string;
}

const timeline: TimelineItem[] = [
  {
    year: '2019',
    title: 'Pertama Bertemu',
    description: 'Kami bertemu di sebuah acara kampus. Senyummu yang hangat membuat hari itu terasa berbeda.',
    icon: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
  },
  {
    year: '2020',
    title: 'Mulai Dekat',
    description: 'Obrolan ringan berubah menjadi percakapan panjang. Kami mulai menemukan kesamaan dalam perbedaan.',
    icon: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
  },
  {
    year: '2023',
    title: 'Lamaran',
    description: 'Di bawah langit senja yang berwarna emas, aku mengucapkan janji seumur hidup untukmu.',
    icon: 'M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z',
  },
  {
    year: '2024',
    title: 'Menikah',
    description: 'Hari yang kami nantikan tiba. Kami resmi menjadi satu dalam ikatan suci pernikahan.',
    icon: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
  },
];

export default function LoveStorySection() {
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
    <section ref={sectionRef} className="relative section-padding marble-bg overflow-hidden">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-12">
          <p className="font-sans text-[10px] tracking-[0.35em] text-gold-600 uppercase mb-3">Our Journey</p>
          <h2 className="font-script text-3xl sm:text-4xl text-sage-800">Cerita Cinta Kami</h2>
          <div className="divider-gold-thick mx-auto w-20 mt-5" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold-300 via-sage-300 to-gold-300" />

          {timeline.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 150}
              className="relative pl-16 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 top-1 w-5 h-5 rounded-full border-2 border-gold-400 bg-white shadow-sm shadow-gold-200/50 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gold-400" />
              </div>

              {/* Card */}
              <div className="glass rounded-xl p-5 shadow-md shadow-sage-200/20 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d={item.icon} />
                  </svg>
                  <span className="font-sans text-[10px] tracking-[0.2em] text-gold-500 uppercase">{item.year}</span>
                </div>
                <h3 className="font-serif text-lg text-sage-800 mb-2" style={{ fontWeight: 500 }}>{item.title}</h3>
                <p className="font-body text-xs sm:text-sm text-sage-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
