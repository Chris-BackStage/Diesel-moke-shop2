import { Phone, MapPin, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PHONE_HREF, MAP_URL } from '../data/index.js';

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-surface border-t border-teal">
      <div className="grid grid-cols-3 divide-x divide-border">
        <a
          href={PHONE_HREF}
          className="flex flex-col items-center justify-center gap-1 py-3 text-offwhite hover:text-yellow transition-colors"
        >
          <Phone size={20} />
          <span className="font-heading font-semibold text-xs uppercase tracking-wider">Call</span>
        </a>
        <a
          href={MAP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-offwhite hover:text-teal transition-colors"
        >
          <MapPin size={20} />
          <span className="font-heading font-semibold text-xs uppercase tracking-wider">Directions</span>
        </a>
        <Link
          to="/deals"
          className="flex flex-col items-center justify-center gap-1 py-3 text-offwhite hover:text-yellow transition-colors"
        >
          <Flame size={20} />
          <span className="font-heading font-semibold text-xs uppercase tracking-wider">Deals</span>
        </Link>
      </div>
    </div>
  );
}
