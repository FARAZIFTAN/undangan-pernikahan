import { useState, useEffect } from 'react';
import { Home, Calendar, Image, MessageSquare, Gift } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: typeof Home;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'acara', label: 'Acara', icon: Calendar },
  { id: 'gallery', label: 'Gallery', icon: Image },
  { id: 'rsvp', label: 'RSVP', icon: MessageSquare },
  { id: 'gift', label: 'Gift', icon: Gift },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.5);

      const sections = navItems.map((item) => {
        const el = document.getElementById(item.id) || document.querySelector(`#${item.id}`);
        if (!el) return { id: item.id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: item.id, top: Math.abs(rect.top) };
      });

      const closest = sections.reduce((prev, curr) =>
        curr.top < prev.top ? curr : prev
      );
      setActiveSection(closest.id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!isVisible) return null;

  return (
    <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 glass rounded-2xl px-2 py-2 shadow-lg shadow-sage-300/20 flex items-center gap-1 transition-all duration-500 animate-fade-up">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`relative flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl transition-all duration-300 ${
              isActive ? 'text-gold-600' : 'text-sage-400 hover:text-sage-600'
            }`}
          >
            <Icon className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'scale-110' : ''}`} />
            <span className="font-sans text-[8px] tracking-wider">{item.label}</span>
            {isActive && (
              <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-gold-400" />
            )}
          </button>
        );
      })}
    </nav>
  );
}
