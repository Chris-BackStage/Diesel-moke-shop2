import { useState } from 'react';
import { Flame } from 'lucide-react';
import FadeIn from '../FadeIn.jsx';

export default function LoyaltyTeaser() {
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length >= 10) setSubmitted(true);
  };

  return (
    <section className="bg-gradient-to-r from-yellow/10 via-surface to-teal/10 border-y border-border py-20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <FadeIn>
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 bg-yellow/20 rounded-full flex items-center justify-center">
              <Flame size={28} className="text-yellow" />
            </div>
          </div>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl uppercase tracking-wider text-offwhite mb-3">
            DEALS. STRAIGHT TO YOUR PHONE.
          </h2>
          <p className="font-body text-muted mb-8 leading-relaxed">
            Join the Diesel crew and get weekly deals, early access to new drops,
            and exclusive in-store offers — texted directly to you.
          </p>

          {submitted ? (
            <div className="bg-yellow/10 border border-yellow/50 rounded-xl p-6">
              <p className="font-heading font-bold text-xl text-yellow uppercase tracking-wider">You're In! 🔥</p>
              <p className="font-body text-muted text-sm mt-2">Watch your phone for this week's deals.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="(727) 555-0000"
                className="flex-1 bg-base border border-border rounded-lg px-4 py-3 font-body text-offwhite placeholder-muted focus:outline-none focus:border-yellow transition-colors"
              />
              <button
                type="submit"
                className="bg-yellow text-base font-heading font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-lg hover:brightness-110 transition-all whitespace-nowrap pulse-glow"
              >
                🔥 Text Me Deals
              </button>
            </form>
          )}

          <p className="font-body text-muted text-xs mt-4">
            No spam. Unsubscribe anytime. Must be 21+ to join.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
