import { Phone, MapPin, Clock } from 'lucide-react';
import { HOURS, ADDRESS, PHONE, PHONE_HREF, MAP_URL, MAP_EMBED } from '../../data/index.js';
import FadeIn from '../FadeIn.jsx';

export default function HoursMap() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <FadeIn>
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl uppercase tracking-wider text-offwhite mb-3">
            COME SEE US
          </h2>
          <p className="text-muted font-body">Conveniently located on US-19 in New Port Richey.</p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Info panel */}
        <FadeIn>
          <div className="bg-surface border border-border rounded-2xl p-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-yellow/10 rounded-lg flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-yellow" />
              </div>
              <div>
                <p className="font-heading font-semibold text-sm uppercase tracking-wider text-muted mb-1">Address</p>
                <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="font-body text-offwhite hover:text-teal transition-colors">
                  {ADDRESS}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-yellow/10 rounded-lg flex items-center justify-center shrink-0">
                <Phone size={20} className="text-yellow" />
              </div>
              <div>
                <p className="font-heading font-semibold text-sm uppercase tracking-wider text-muted mb-1">Phone</p>
                <a href={PHONE_HREF} className="font-body text-offwhite hover:text-yellow transition-colors">{PHONE}</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-yellow/10 rounded-lg flex items-center justify-center shrink-0">
                <Clock size={20} className="text-yellow" />
              </div>
              <div className="w-full">
                <p className="font-heading font-semibold text-sm uppercase tracking-wider text-muted mb-3">Hours</p>
                <div className="space-y-1.5">
                  {HOURS.map(h => (
                    <div
                      key={h.day}
                      className={`flex justify-between text-sm font-body py-1 px-2 rounded ${h.day === today ? 'bg-yellow/10 text-yellow' : 'text-muted'}`}
                    >
                      <span className={h.day === today ? 'font-semibold' : ''}>{h.day}</span>
                      <span>{h.open} – {h.close}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-2 border-teal text-teal font-heading font-bold text-sm uppercase tracking-wider py-3 rounded-xl hover:bg-teal/10 transition-all w-full"
            >
              <MapPin size={16} />
              Open in Google Maps
            </a>
          </div>
        </FadeIn>

        {/* Map embed */}
        <FadeIn delay={200}>
          <div className="rounded-2xl overflow-hidden border border-border h-full min-h-[400px]">
            <iframe
              src={MAP_EMBED}
              width="100%"
              height="100%"
              style={{ minHeight: '400px', border: 0, filter: 'grayscale(30%) invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Diesel Smoke Shop Location"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
