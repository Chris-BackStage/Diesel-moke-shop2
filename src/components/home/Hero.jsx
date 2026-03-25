import { Phone, MapPin } from 'lucide-react';
import { PHONE_HREF, MAP_URL } from '../../data/index.js';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-base via-surface to-base" />
      <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-transparent to-transparent" />

      {/* Neon accent lines */}
      <div className="absolute top-1/3 left-0 w-1/3 h-px bg-gradient-to-r from-transparent to-yellow/40" />
      <div className="absolute bottom-1/3 right-0 w-1/3 h-px bg-gradient-to-l from-transparent to-teal/40" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <div className="fade-in-up">
          <p className="font-heading text-teal text-sm uppercase tracking-[0.4em] mb-4 font-semibold">
            New Port Richey, Florida
          </p>
          <h1 className="font-display text-6xl sm:text-8xl lg:text-[10rem] text-offwhite leading-none tracking-wider mb-2">
            DIESEL
          </h1>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-yellow tracking-widest mb-8">
            SMOKE SHOP
          </h2>
          <p className="font-body text-muted text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Premium vapes, glass, CBD, Delta-8, and tobacco —<br />
            all under one roof on US-19. Real selection. Real staff. No BS.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href={PHONE_HREF}
            className="flex items-center justify-center gap-2 bg-yellow text-base font-heading font-bold text-lg uppercase tracking-wider px-8 py-4 rounded-xl hover:brightness-110 transition-all glow-yellow"
          >
            <Phone size={20} />
            Call Now
          </a>
          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border-2 border-teal text-teal font-heading font-bold text-lg uppercase tracking-wider px-8 py-4 rounded-xl hover:bg-teal/10 transition-all"
          >
            <MapPin size={20} />
            Get Directions
          </a>
        </div>

        <p className="font-body text-muted text-sm mb-8">
          Open 7 days a week &nbsp;·&nbsp; New Port Richey, FL
        </p>

        {/* Social proof strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-1.5">
            <span className="text-yellow text-base">★★★★★</span>
            <span className="font-heading font-bold text-offwhite">5.0</span>
            <span className="text-muted font-body">on Google</span>
          </div>
          <div className="w-px h-4 bg-border hidden sm:block" />
          <div className="flex items-center gap-1.5">
            <span className="text-yellow font-heading font-bold">200+</span>
            <span className="text-muted font-body">happy customers</span>
          </div>
          <div className="w-px h-4 bg-border hidden sm:block" />
          <div className="flex items-center gap-1.5">
            <span className="text-teal font-heading font-bold">#1</span>
            <span className="text-muted font-body">smoke shop in Pasco County</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 bg-gradient-to-b from-yellow/60 to-transparent" />
      </div>
    </section>
  );
}
