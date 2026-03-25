import { Star, ExternalLink } from 'lucide-react';
import { REVIEWS, GOOGLE_REVIEW_URL } from '../../data/index.js';
import FadeIn from '../FadeIn.jsx';

export default function ReviewsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <FadeIn>
        <div className="text-center mb-4">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl uppercase tracking-wider text-offwhite mb-3">
            DON'T TAKE OUR WORD FOR IT
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-yellow fill-yellow" />)}
            <span className="font-heading font-bold text-yellow ml-2">5.0</span>
          </div>
          <p className="text-muted font-body text-sm">
            Hundreds of happy customers across New Port Richey, Port Richey, and Holiday.
          </p>
        </div>
      </FadeIn>

      <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
        <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
          {REVIEWS.map((review, i) => (
            <FadeIn key={review.id} delay={i * 100}>
              <div className="w-72 sm:w-80 bg-surface border border-border rounded-xl p-6 shrink-0 hover:border-yellow/40 transition-all">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} className="text-yellow fill-yellow" />)}
                </div>
                <p className="font-body text-offwhite text-sm leading-relaxed mb-4">"{review.text}"</p>
                <div>
                  <p className="font-heading font-semibold text-sm text-offwhite">{review.name}</p>
                  <p className="font-body text-muted text-xs">{review.location}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <FadeIn delay={400}>
        <div className="text-center mt-8">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-yellow/50 text-yellow font-heading font-semibold text-sm uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-yellow/10 transition-all"
          >
            <ExternalLink size={14} />
            Leave Us a Review on Google
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
