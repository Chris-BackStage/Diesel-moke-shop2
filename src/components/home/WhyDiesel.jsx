import { Package, Users, MapPin } from 'lucide-react';
import { WHY_PILLARS } from '../../data/index.js';
import FadeIn from '../FadeIn.jsx';

const ICONS = { Package, Users, MapPin };

export default function WhyDiesel() {
  return (
    <section className="bg-surface border-y border-border py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl sm:text-5xl uppercase tracking-wider text-offwhite mb-3">
              WHY DIESEL?
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WHY_PILLARS.map((pillar, i) => {
            const Icon = ICONS[pillar.icon];
            return (
              <FadeIn key={i} delay={i * 150}>
                <div className="bg-base border border-border rounded-xl p-8 hover:border-yellow/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-yellow/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow/20 transition-colors">
                    <Icon size={24} className="text-yellow" />
                  </div>
                  <h3 className="font-heading font-bold text-lg uppercase tracking-wider text-offwhite mb-3 leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-muted text-sm leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
