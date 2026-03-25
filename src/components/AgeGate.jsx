import { useState, useEffect } from 'react';

export default function AgeGate() {
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('diesel_age_confirmed');
    if (stored) {
      const { confirmed, expires } = JSON.parse(stored);
      if (confirmed && Date.now() < expires) setConfirmed(true);
      else localStorage.removeItem('diesel_age_confirmed');
    }
  }, []);

  const handleConfirm = () => {
    const expires = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
    localStorage.setItem('diesel_age_confirmed', JSON.stringify({ confirmed: true, expires }));
    setConfirmed(true);
  };

  const handleDeny = () => {
    window.location.href = 'https://www.google.com';
  };

  if (confirmed) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-base/95 backdrop-blur-sm">
      <div className="mx-4 max-w-md w-full bg-surface border border-border rounded-2xl p-8 text-center">
        <div className="mb-6">
          <span className="font-display text-4xl text-yellow tracking-wider">DIESEL</span>
          <p className="font-heading text-sm text-muted tracking-widest uppercase mt-1">Smoke Shop</p>
        </div>

        <div className="w-16 h-px bg-yellow mx-auto mb-6" />

        <h2 className="font-heading text-2xl font-bold text-offwhite uppercase tracking-wide mb-2">
          Are you 21 or older?
        </h2>
        <p className="text-muted text-sm mb-8 font-body">
          You must be 21 years of age or older to enter this site.<br />
          This site contains information about tobacco, nicotine, and related products.
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={handleConfirm}
            className="w-full bg-yellow text-base font-heading font-bold text-lg uppercase tracking-wider py-3 rounded-lg hover:brightness-110 transition-all pulse-glow"
          >
            Yes, I Am 21+
          </button>
          <button
            onClick={handleDeny}
            className="w-full border border-ember text-ember font-heading font-semibold text-sm uppercase tracking-wider py-3 rounded-lg hover:bg-ember/10 transition-all"
          >
            No, I Am Under 21
          </button>
        </div>

        <p className="text-muted text-xs mt-6 font-body leading-relaxed">
          By entering this site you agree that you are of legal age to purchase tobacco products in your jurisdiction.
        </p>
      </div>
    </div>
  );
}
