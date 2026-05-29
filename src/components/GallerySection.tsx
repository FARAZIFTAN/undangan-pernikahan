import { useState, useEffect, useRef } from 'react';
import { X, ZoomIn } from 'lucide-react';

const images = [
  {
    src: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Pre-wedding photo 1',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Pre-wedding photo 2',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Pre-wedding photo 3',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/1457856/pexels-photo-1457856.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Pre-wedding photo 4',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Pre-wedding photo 5',
    span: 'col-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Pre-wedding photo 6',
    span: 'row-span-2',
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
    <section ref={sectionRef} id="gallery" className="relative section-padding overflow-hidden" style={{ background: 'linear-gradient(180deg, #faf9f6 0%, #f5f0e8 100%)' }}>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-10">
          <p className="font-sans text-[10px] tracking-[0.35em] text-gold-600 uppercase mb-3">Our Moments</p>
          <h2 className="font-script text-3xl sm:text-4xl text-sage-800">Galeri</h2>
          <div className="divider-gold-thick mx-auto w-20 mt-5" />
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 auto-rows-[180px] sm:auto-rows-[200px]">
          {images.map((img, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={index * 100}
              className={`relative group rounded-xl overflow-hidden cursor-pointer ${img.span}`}
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-sage-900/0 group-hover:bg-sage-900/30 transition-all duration-500 flex items-center justify-center">
                <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full glass flex items-center justify-center text-sage-700 hover:text-sage-900 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={selectedImage.replace('w=400', 'w=800').replace('w=600', 'w=1200')}
            alt="Gallery preview"
            className="max-w-full max-h-[85vh] object-contain rounded-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
