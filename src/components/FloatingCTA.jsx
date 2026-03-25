import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { PHONE, PHONE_HREF } from '../data/index.js';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href={PHONE_HREF}
      className={`fixed bottom-8 right-6 z-50 hidden md:flex items-center gap-2 bg-yellow text-base font-heading font-bold text-sm uppercase tracking-wider px-5 py-3 rounded-full shadow-2xl glow-yellow transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <Phone size={16} />
      {PHONE}
    </a>
  );
}
