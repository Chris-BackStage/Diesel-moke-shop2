import { Star, ExternalLink } from 'lucide-react';
import { REVIEWS, GOOGLE_REVIEW_URL } from '../data/index.js';
import FadeIn from '../components/FadeIn.jsx';
import useSEO from '../hooks/useSEO.js';

export default function ReviewsPage() {
  useSEO({
    title: 'Customer Reviews | Diesel Smoke Shop New Port Richey FL',
    description: 'See what customers across New Port Richey, Port Richey, and Holiday are saying about Diesel Smoke Shop. 5-star rated local smoke shop on US-19.',
    canonical: 'https://www.dieselsmokeshop.com/reviews',
  });
  return (
    <div className="min-h-screen pt-24 pb-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={28} className="text-yellow fill-yellow" />)}
            </div>
            <h1 className="font-heading font-bold text-5xl sm:text-6xl uppercase tracking-wider text-offwhite mb-2">
              DON'T TAKE OUR WORD FOR IT
            </h1>
            <p className="font-body text-muted">Hundreds of happy customers across New Port Richey, Port Richey, and Holiday.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {REVIEWS.map((review, i) => (
            <FadeIn key={review.id} delay={i * 80}>
              <div className="bg-surface border border-border rounded-xl p-6 hover:border-yellow/40 transition-all h-full flex flex-col">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} className="text-yellow fill-yellow" />)}
                </div>
                <p className="font-body text-offwhite text-sm leading-relaxed mb-4 flex-1">"{review.text}"</p>
                <div>
                  <p className="font-heading font-semibold text-sm text-offwhite">{review.name}</p>
                  <p className="font-body text-muted text-xs">{review.location}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400}>
          <div className="text-center">
            <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-yellow text-base font-heading font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl hover:brightness-110 transition-all">
              <ExternalLink size={16} />
              Leave a Review on Google
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
