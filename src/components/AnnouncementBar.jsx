import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(() => {
    return sessionStorage.getItem('diesel_bar_dismissed') !== 'true';
  });

  const dismiss = () => {
    sessionStorage.setItem('diesel_bar_dismissed', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="relative bg-yellow text-base z-[60]">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-3 text-center">
        <span className="text-base/60 font-heading font-bold text-xs">🔥</span>
        <p className="font-heading font-bold text-sm uppercase tracking-wider">
          This Week:{' '}
          <span className="font-body font-semibold normal-case tracking-normal">
            Buy 2 Disposables, Get 1 at 50% Off
          </span>
          {' '}—{' '}
          <Link to="/deals" className="underline underline-offset-2 hover:text-base/70 transition-colors">
            See All Deals →
          </Link>
        </p>
        <button
          onClick={dismiss}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-base/60 hover:text-base transition-colors"
          aria-label="Dismiss"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
