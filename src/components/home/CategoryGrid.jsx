import { Link } from 'react-router-dom';
import { CATEGORIES } from '../../data/index.js';
import FadeIn from '../FadeIn.jsx';

export default function CategoryGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <FadeIn>
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl uppercase tracking-wider text-offwhite mb-3">
            WHAT WE CARRY
          </h2>
          <p className="text-muted font-body">Browse our categories. Call ahead to confirm today's stock.</p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {CATEGORIES.map((cat, i) => (
          <FadeIn key={cat.slug} delay={i * 80}>
            <Link
              to={`/products?category=${cat.slug}`}
              className="group flex flex-col items-center justify-center gap-3 bg-surface border border-border rounded-xl p-6 hover:border-yellow hover:bg-yellow/5 transition-all duration-300 hover:-translate-y-1 hover:glow-yellow"
            >
              <span className="text-4xl">{cat.icon}</span>
              <span className="font-heading font-semibold text-xs text-center uppercase tracking-wider text-offwhite group-hover:text-yellow transition-colors leading-tight">
                {cat.label}
              </span>
            </Link>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={600}>
        <div className="text-center mt-8">
          <Link
            to="/products"
            className="inline-flex font-heading font-bold text-sm uppercase tracking-widest text-teal border-b border-teal/40 pb-0.5 hover:border-teal transition-colors"
          >
            View Full Catalog →
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
