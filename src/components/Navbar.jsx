import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { PHONE, PHONE_HREF } from '../data/index.js';
import useOpenStatus from '../hooks/useOpenStatus.js';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Deals', to: '/deals' },
  { label: 'About', to: '/about' },
  { label: 'Visit', to: '/visit' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { isOpen, label, closesSoon } = useOpenStatus();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-base/95 backdrop-blur-md shadow-lg shadow-black/50' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex flex-col leading-none">
              <span className="font-display text-2xl text-yellow tracking-wider">DIESEL</span>
              <span className="font-heading text-[10px] text-muted tracking-[0.3em] uppercase -mt-1">Smoke Shop</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-heading font-semibold text-sm uppercase tracking-widest transition-colors ${
                    location.pathname === link.to
                      ? 'text-yellow border-b border-yellow pb-0.5'
                      : 'text-offwhite hover:text-yellow'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Open status + Call CTA */}
            <div className="hidden md:flex items-center gap-3">
              <span className={`font-body text-xs px-2 py-1 rounded-full border ${
                closesSoon
                  ? 'border-ember/60 text-ember bg-ember/10'
                  : isOpen
                  ? 'border-teal/60 text-teal bg-teal/10'
                  : 'border-muted/40 text-muted bg-muted/5'
              }`}>
                {isOpen ? '● ' : '○ '}{label}
              </span>
            </div>
            <a
              href={PHONE_HREF}
              className="hidden md:flex items-center gap-2 bg-yellow text-base font-heading font-bold text-sm uppercase tracking-wider px-4 py-2 rounded-lg hover:brightness-110 transition-all"
            >
              <Phone size={14} />
              {PHONE}
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-offwhite p-2"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${open ? 'visible' : 'invisible'}`}>
        <div
          className={`absolute inset-0 bg-black/70 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setOpen(false)}
        />
        <div className={`absolute top-0 right-0 h-full w-72 bg-surface shadow-2xl transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 pt-20">
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-heading font-bold text-lg uppercase tracking-wider py-3 px-4 rounded-lg transition-colors ${
                    location.pathname === link.to
                      ? 'bg-yellow/10 text-yellow'
                      : 'text-offwhite hover:bg-border'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 bg-yellow text-base font-heading font-bold text-lg uppercase tracking-wider py-4 rounded-xl w-full"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
