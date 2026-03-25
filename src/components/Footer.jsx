import { Link } from 'react-router-dom';
import { Phone, MapPin, Share2, Users } from 'lucide-react';
import { PHONE, PHONE_HREF, ADDRESS, MAP_URL } from '../data/index.js';

export default function Footer() {
  return (
    <footer className="bg-base border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <span className="font-display text-3xl text-yellow tracking-wider block">DIESEL</span>
              <span className="font-heading text-xs text-muted tracking-[0.3em] uppercase">Smoke Shop</span>
            </div>
            <p className="text-muted text-sm font-body leading-relaxed mb-4">
              New Port Richey's premier smoke shop. Premium vapes, glass, CBD, Delta-8, and tobacco.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-muted hover:text-yellow transition-colors"><Share2 size={20} /></a>
              <a href="#" className="text-muted hover:text-yellow transition-colors"><Users size={20} /></a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-yellow mb-4">Shop</h4>
            <ul className="space-y-2">
              {['Vapes & Disposables', 'CBD & Delta-8', 'Glass & Accessories', 'Tobacco & Cigars', 'Batteries & Mods'].map(item => (
                <li key={item}>
                  <Link to="/products" className="text-muted text-sm hover:text-offwhite transition-colors font-body">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-yellow mb-4">Info</h4>
            <ul className="space-y-2">
              {[
                { label: 'Weekly Deals', to: '/deals' },
                { label: 'Loyalty Program', to: '/loyalty' },
                { label: 'About Us', to: '/about' },
                { label: 'Visit Us', to: '/visit' },
                { label: 'Reviews', to: '/reviews' },
                { label: 'Blog', to: '/blog' },
              ].map(item => (
                <li key={item.to}>
                  <Link to={item.to} className="text-muted text-sm hover:text-offwhite transition-colors font-body">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-yellow mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href={PHONE_HREF} className="flex items-center gap-2 text-muted hover:text-yellow transition-colors text-sm font-body">
                  <Phone size={14} />
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-muted hover:text-teal transition-colors text-sm font-body">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  {ADDRESS}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-border pt-8 space-y-3">
          <div className="bg-ember/10 border border-ember/40 rounded-lg p-4">
            <p className="text-ember text-xs font-heading font-bold uppercase tracking-wider mb-1">
              ⚠️ Age Restriction — 21+ Only
            </p>
            <p className="text-muted text-xs font-body leading-relaxed">
              You must be 21 years of age or older to purchase tobacco, vaping, or nicotine products. <strong className="text-offwhite">Nicotine is an addictive chemical.</strong> This site contains information about tobacco and nicotine products intended for adult smokers only.
            </p>
          </div>
          <div className="bg-surface border border-border rounded-lg p-4">
            <p className="text-muted text-xs font-heading font-semibold uppercase tracking-wider mb-1">
              Delta-8 THC Disclaimer
            </p>
            <p className="text-muted text-xs font-body leading-relaxed">
              Delta-8 THC products are sold in compliance with applicable Florida law. These statements have not been evaluated by the Food and Drug Administration. Products are not intended to diagnose, treat, cure, or prevent any disease. Consult a qualified healthcare professional before use.
            </p>
          </div>
          <p className="text-muted text-xs font-body">
            © {new Date().getFullYear()} Diesel Smoke Shop. All rights reserved. New Port Richey, FL.
          </p>
        </div>
      </div>
    </footer>
  );
}
