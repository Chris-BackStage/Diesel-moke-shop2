import { Link } from 'react-router-dom';
import { DEALS } from '../../data/index.js';

export default function DealsBanner() {
  const items = [...DEALS, ...DEALS];

  return (
    <div className="bg-yellow overflow-hidden py-3 relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((deal, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-8 text-base font-heading font-bold text-sm uppercase tracking-wider">
            <span className="text-base/70">{deal.badge}</span>
            <span>{deal.title}</span>
            <span className="text-base/40">·</span>
          </span>
        ))}
      </div>
      <Link
        to="/deals"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-base text-yellow font-heading font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full hover:bg-surface transition-colors hidden sm:block"
      >
        See All →
      </Link>
    </div>
  );
}
