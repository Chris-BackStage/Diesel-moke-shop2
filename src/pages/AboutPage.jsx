import { MapPin } from 'lucide-react';
import FadeIn from '../components/FadeIn.jsx';
import { PHONE_HREF, MAP_URL } from '../data/index.js';
import useSEO from '../hooks/useSEO.js';

export default function AboutPage() {
  useSEO({
    title: 'About Us | Diesel Smoke Shop — Built for New Port Richey FL',
    description: 'Diesel Smoke Shop is New Port Richey\'s dedicated local smoke shop. Not a chain. Real selection, knowledgeable staff, and a commitment to the Pasco County community.',
    canonical: 'https://www.dieselsmokeshop.com/about',
  });
  return (
    <div className="min-h-screen pt-24 pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-16">
            <p className="font-heading text-teal text-sm uppercase tracking-widest mb-3">Our Story</p>
            <h1 className="font-heading font-bold text-5xl sm:text-7xl uppercase tracking-wider text-offwhite mb-8 leading-none">
              BUILT FOR<br /><span className="text-yellow">NEW PORT RICHEY</span>
            </h1>
            <div className="w-24 h-1 bg-yellow mb-10" />
            <div className="space-y-6 font-body text-muted text-lg leading-relaxed">
              <p>
                Diesel Smoke Shop was built with one goal: give New Port Richey a smoke shop
                that actually earns your loyalty.
              </p>
              <p>
                We're not a chain. We're not a gas station counter.
                We're a dedicated shop with a real selection, knowledgeable staff,
                and a commitment to the community we serve.
              </p>
              <p>
                Whether you're a longtime regular or walking in for the first time —
                you're going to find what you need here.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {[
              { number: '1000+', label: 'Products In Stock' },
              { number: '5★', label: 'Google Rating' },
              { number: '7', label: 'Days a Week' },
            ].map((stat, i) => (
              <div key={i} className="bg-surface border border-border rounded-xl p-6 text-center">
                <p className="font-display text-5xl text-yellow mb-2">{stat.number}</p>
                <p className="font-heading font-semibold text-sm uppercase tracking-wider text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="bg-surface border border-border rounded-2xl p-8">
            <h2 className="font-heading font-bold text-2xl uppercase tracking-wider text-offwhite mb-4">
              ROOTED IN THE COMMUNITY
            </h2>
            <p className="font-body text-muted leading-relaxed mb-6">
              New Port Richey is home, and we take that seriously. We stock what our neighbors actually want,
              price things fairly, and treat every customer like they're coming back — because they do.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={PHONE_HREF} className="flex-1 text-center bg-yellow text-base font-heading font-bold text-sm uppercase tracking-wider py-3 rounded-xl hover:brightness-110 transition-all">
                Call Us
              </a>
              <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 border border-teal text-teal font-heading font-bold text-sm uppercase tracking-wider py-3 rounded-xl hover:bg-teal/10 transition-all">
                <MapPin size={14} />
                Get Directions
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
