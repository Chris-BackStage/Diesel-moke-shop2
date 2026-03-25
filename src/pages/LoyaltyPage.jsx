import { Star, Gift, Smartphone, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { PHONE_HREF } from '../data/index.js';
import FadeIn from '../components/FadeIn.jsx';

export default function LoyaltyPage() {
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); if (phone.length >= 10) setSubmitted(true); };

  return (
    <div className="min-h-screen pt-24 pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="font-heading font-bold text-5xl sm:text-6xl uppercase tracking-wider text-offwhite mb-4">
              THE DIESEL<br /><span className="text-yellow">CREW PROGRAM</span>
            </h1>
            <p className="font-body text-muted text-lg">Shop more. Save more. It's that simple.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Star, title: 'Earn Points', body: 'Earn points on every purchase. The more you spend, the more you earn.' },
            { icon: TrendingUp, title: 'Level Up', body: 'Reach new tiers for bigger discounts and exclusive early access to new products.' },
            { icon: Gift, title: 'Redeem Rewards', body: 'Redeem points for discounts, free products, and members-only deals.' },
          ].map((step, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div className="bg-surface border border-border rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon size={24} className="text-yellow" />
                </div>
                <h3 className="font-heading font-bold text-lg uppercase tracking-wider text-offwhite mb-2">{step.title}</h3>
                <p className="font-body text-muted text-sm leading-relaxed">{step.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={300}>
          <div className="bg-gradient-to-r from-yellow/10 to-teal/10 border border-yellow/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Smartphone size={28} className="text-yellow" />
              <h2 className="font-heading font-bold text-2xl uppercase tracking-wider text-offwhite">JOIN VIA TEXT</h2>
            </div>
            <p className="font-body text-muted mb-6">Sign up for our text list to get weekly deals and be first to know about new arrivals. Full loyalty enrollment happens in-store.</p>
            {submitted ? (
              <p className="font-heading font-bold text-yellow text-xl uppercase">You're In! 🔥 See us in-store to complete enrollment.</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="(727) 555-0000" className="flex-1 bg-base border border-border rounded-lg px-4 py-3 font-body text-offwhite placeholder-muted focus:outline-none focus:border-yellow" />
                <button type="submit" className="bg-yellow text-base font-heading font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-lg hover:brightness-110 transition-all">Join Now</button>
              </form>
            )}
            <p className="font-body text-muted text-xs mt-3">Must be 21+. No spam. Unsubscribe anytime.</p>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="font-body text-muted text-sm">Or <a href={PHONE_HREF} className="text-yellow hover:underline">call us</a> and we'll get you signed up over the phone.</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
