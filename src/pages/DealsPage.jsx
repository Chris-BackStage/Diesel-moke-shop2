import { useState } from 'react';
import { Flame } from 'lucide-react';
import { DEALS } from '../data/index.js';
import useSEO from '../hooks/useSEO.js';
import FadeIn from '../components/FadeIn.jsx';

function SMSOptIn() {
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); if (phone.length >= 10) setSubmitted(true); };
  return (
    <div className="bg-gradient-to-r from-yellow/10 to-teal/10 border border-yellow/30 rounded-2xl p-8 text-center">
      <Flame size={32} className="text-yellow mx-auto mb-4" />
      <h3 className="font-heading font-bold text-2xl uppercase tracking-wider text-offwhite mb-2">
        GET DEALS TEXTED TO YOU
      </h3>
      <p className="font-body text-muted text-sm mb-6">New deals drop every week. Be first to know.</p>
      {submitted ? (
        <p className="font-heading font-bold text-yellow text-xl uppercase">You're In! Watch your phone 🔥</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
          <input
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="(727) 555-0000"
            className="flex-1 bg-base border border-border rounded-lg px-4 py-3 font-body text-offwhite placeholder-muted focus:outline-none focus:border-yellow transition-colors"
          />
          <button type="submit" className="bg-yellow text-base font-heading font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-lg hover:brightness-110 transition-all">
            Text Me
          </button>
        </form>
      )}
      <p className="font-body text-muted text-xs mt-3">No spam. Must be 21+. Unsubscribe anytime.</p>
    </div>
  );
}

export default function DealsPage() {
  useSEO({
    title: 'Weekly Deals | Diesel Smoke Shop New Port Richey FL',
    description: 'This week\'s best deals on vapes, glass, CBD, Delta-8, and tobacco at Diesel Smoke Shop in New Port Richey. In-store only. New deals every week.',
    canonical: 'https://www.dieselsmokeshop.com/deals',
  });
  return (
    <div className="min-h-screen pt-24 pb-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="font-heading text-yellow text-sm uppercase tracking-widest mb-2">In-Store Only</p>
            <h1 className="font-heading font-bold text-5xl sm:text-6xl uppercase tracking-wider text-offwhite mb-3">
              THIS WEEK'S DEALS
            </h1>
            <p className="font-body text-muted">New deals drop every week. Get on our text list so you never miss one.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {DEALS.map((deal, i) => (
            <FadeIn key={deal.id} delay={i * 100}>
              <div className={`bg-gradient-to-br ${deal.bg} border border-border rounded-2xl p-6 hover:border-yellow/50 transition-all`}>
                <div className="flex items-start justify-between mb-4">
                  <span className="bg-base text-yellow font-heading font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full border border-yellow/30">
                    {deal.badge}
                  </span>
                  <span className="font-body text-ember text-xs">{deal.expires}</span>
                </div>
                <h3 className="font-heading font-bold text-xl uppercase tracking-wide text-offwhite mb-2 leading-tight">
                  {deal.title}
                </h3>
                <p className="font-body text-muted text-sm leading-relaxed">{deal.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400}>
          <SMSOptIn />
        </FadeIn>
      </div>
    </div>
  );
}
