import { Phone, MapPin, Clock } from 'lucide-react';
import { HOURS, ADDRESS, PHONE, PHONE_HREF, MAP_URL, MAP_EMBED } from '../data/index.js';
import FadeIn from '../components/FadeIn.jsx';
import useSEO from '../hooks/useSEO.js';

export default function VisitPage() {
  useSEO({
    title: 'Visit Us | Diesel Smoke Shop — Hours & Location | New Port Richey FL',
    description: 'Find Diesel Smoke Shop on US-19 in New Port Richey FL. Open 7 days a week, 8AM–12AM. Easy parking. Call (727) 555-0100.',
    canonical: 'https://www.dieselsmokeshop.com/visit',
  });
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  return (
    <div className="min-h-screen pt-24 pb-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="font-heading font-bold text-5xl sm:text-6xl uppercase tracking-wider text-offwhite mb-3">FIND US</h1>
            <p className="font-body text-muted">Conveniently located in New Port Richey on US-19. Easy parking. Quick trip. Big selection.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FadeIn>
            <div className="space-y-6">
              <div className="bg-surface border border-border rounded-2xl p-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-yellow/10 rounded-lg flex items-center justify-center shrink-0"><MapPin size={20} className="text-yellow" /></div>
                <div>
                  <p className="font-heading font-bold text-sm uppercase tracking-wider text-yellow mb-1">Address</p>
                  <p className="font-body text-offwhite">{ADDRESS}</p>
                  <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="font-body text-teal text-sm hover:underline">Open in Google Maps →</a>
                </div>
              </div>
              <div className="bg-surface border border-border rounded-2xl p-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-yellow/10 rounded-lg flex items-center justify-center shrink-0"><Phone size={20} className="text-yellow" /></div>
                <div>
                  <p className="font-heading font-bold text-sm uppercase tracking-wider text-yellow mb-1">Phone</p>
                  <a href={PHONE_HREF} className="font-body text-offwhite text-xl hover:text-yellow transition-colors">{PHONE}</a>
                </div>
              </div>
              <div className="bg-surface border border-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-yellow/10 rounded-lg flex items-center justify-center shrink-0"><Clock size={20} className="text-yellow" /></div>
                  <p className="font-heading font-bold text-sm uppercase tracking-wider text-yellow">Hours</p>
                </div>
                <div className="space-y-1.5">
                  {HOURS.map(h => (
                    <div key={h.day} className={`flex justify-between text-sm font-body py-2 px-3 rounded-lg ${h.day === today ? 'bg-yellow/10 text-yellow font-semibold' : 'text-muted'}`}>
                      <span>{h.day}{h.day === today ? ' (Today)' : ''}</span>
                      <span>{h.open} – {h.close}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="rounded-2xl overflow-hidden border border-border h-full min-h-[500px]">
              <iframe src={MAP_EMBED} width="100%" height="100%" style={{ minHeight: '500px', border: 0, filter: 'grayscale(30%) invert(90%) hue-rotate(180deg)' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Diesel Smoke Shop Map" />
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
