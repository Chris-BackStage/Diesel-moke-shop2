import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { CATEGORIES, ALL_PRODUCTS, PRODUCTS, PHONE_HREF } from '../data/index.js';
import FadeIn from '../components/FadeIn.jsx';
import useSEO from '../hooks/useSEO.js';

const NICOTINE_CATEGORIES = ['vapes', 'tobacco', 'mods'];
const DELTA8_CATEGORIES = ['cbd-delta8'];

function ComplianceBadge({ category }) {
  if (DELTA8_CATEGORIES.includes(category)) {
    return (
      <span className="inline-block bg-ember/10 border border-ember/40 text-ember font-body text-[9px] rounded px-1.5 py-0.5 mt-1">
        21+ · Delta-8 · FL Compliant
      </span>
    );
  }
  if (NICOTINE_CATEGORIES.includes(category)) {
    return (
      <span className="inline-block bg-muted/10 border border-muted/30 text-muted font-body text-[9px] rounded px-1.5 py-0.5 mt-1">
        21+ · Nicotine/Tobacco Product
      </span>
    );
  }
  return null;
}

function ProductCard({ product }) {
  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden hover:border-yellow/50 hover:-translate-y-1 transition-all duration-300 group">
      <div className="aspect-square bg-base flex items-center justify-center text-6xl border-b border-border">
        {CATEGORIES.find(c => c.slug === product.category)?.icon || '📦'}
      </div>
      <div className="p-4">
        <span className="font-heading font-semibold text-xs text-teal uppercase tracking-wider">
          {CATEGORIES.find(c => c.slug === product.category)?.label}
        </span>
        <h3 className="font-heading font-bold text-offwhite text-lg uppercase tracking-wide mt-1 mb-1 leading-tight">
          {product.name}
        </h3>
        <ComplianceBadge category={product.category} />
        <p className="font-body text-yellow font-semibold text-sm mb-4 mt-2">{product.priceRange}</p>
        <a
          href={PHONE_HREF}
          className="flex items-center justify-center gap-2 border border-yellow/50 text-yellow font-heading font-semibold text-xs uppercase tracking-wider py-2 rounded-lg hover:bg-yellow/10 transition-all w-full"
        >
          <Phone size={12} />
          Call to Reserve
        </a>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  useSEO({
    title: 'Products | Diesel Smoke Shop — Vapes, Glass, CBD & More | New Port Richey FL',
    description: 'Browse vapes, disposables, glass, CBD, Delta-8, tobacco, and accessories at Diesel Smoke Shop in New Port Richey. Call to confirm stock or reserve your item.',
    canonical: 'https://www.dieselsmokeshop.com/products',
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return ALL_PRODUCTS;
    return PRODUCTS[activeCategory] || [];
  }, [activeCategory]);

  const setCategory = (slug) => {
    if (slug === 'all') searchParams.delete('category');
    else searchParams.set('category', slug);
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen pt-24 pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-10">
            <h1 className="font-heading font-bold text-5xl sm:text-6xl uppercase tracking-wider text-offwhite mb-3">
              WHAT WE CARRY
            </h1>
            <p className="font-body text-muted">
              Browse our selection. Inventory changes daily —{' '}
              <a href={PHONE_HREF} className="text-yellow hover:underline">call ahead</a> to confirm availability.
            </p>
          </div>
        </FadeIn>

        {/* Filter bar */}
        <div className="overflow-x-auto scrollbar-hide mb-10">
          <div className="flex gap-2 pb-2" style={{ width: 'max-content' }}>
            {[{ label: 'All Products', slug: 'all' }, ...CATEGORIES].map(cat => (
              <button
                key={cat.slug}
                onClick={() => setCategory(cat.slug)}
                className={`font-heading font-semibold text-sm uppercase tracking-wider px-5 py-2 rounded-full border transition-all whitespace-nowrap ${
                  activeCategory === cat.slug
                    ? 'bg-yellow text-base border-yellow'
                    : 'bg-surface border-border text-muted hover:border-yellow/50 hover:text-offwhite'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filtered.map((product, i) => (
            <FadeIn key={product.id} delay={i * 50}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={300}>
          <div className="mt-12 bg-surface border border-border rounded-2xl p-8 text-center">
            <p className="font-body text-muted mb-2">📦 Prices and availability subject to change.</p>
            <p className="font-body text-offwhite">
              Call{' '}
              <a href={PHONE_HREF} className="text-yellow hover:underline font-semibold">(727) 555-0100</a>
              {' '}to confirm stock or reserve your item.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
