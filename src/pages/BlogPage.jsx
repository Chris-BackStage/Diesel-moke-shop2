import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/index.js';
import FadeIn from '../components/FadeIn.jsx';
import useSEO from '../hooks/useSEO.js';

export default function BlogPage() {
  useSEO({
    title: 'Blog | Vape & Smoke Shop Tips | Diesel Smoke Shop New Port Richey',
    description: 'Tips, guides, and news from New Port Richey\'s favorite smoke shop. Vape reviews, CBD guides, Delta-8 info, and more.',
    canonical: 'https://www.dieselsmokeshop.com/blog',
  });
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <div className="min-h-screen pt-24 pb-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12">
            <h1 className="font-heading font-bold text-5xl sm:text-6xl uppercase tracking-wider text-offwhite mb-3">THE DIESEL BLOG</h1>
            <p className="font-body text-muted">Tips, guides, and news from New Port Richey's favorite smoke shop.</p>
          </div>
        </FadeIn>

        {/* Featured */}
        <FadeIn delay={100}>
          <div className="bg-surface border border-yellow/30 rounded-2xl p-8 mb-8 hover:border-yellow/60 transition-all">
            <span className="bg-yellow text-base font-heading font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-4 inline-block">
              Featured
            </span>
            <span className="ml-3 font-heading text-teal text-xs uppercase tracking-wider">{featured.category}</span>
            <h2 className="font-heading font-bold text-3xl uppercase tracking-wide text-offwhite mt-3 mb-3 leading-tight">{featured.title}</h2>
            <p className="font-body text-muted leading-relaxed mb-4">{featured.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="font-body text-muted text-xs">{featured.date}</span>
              <Link to={`/blog/${featured.slug}`} className="font-heading font-bold text-sm text-yellow uppercase tracking-wider hover:underline">Read More →</Link>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post, i) => (
            <FadeIn key={post.id} delay={i * 100 + 200}>
              <div className="bg-surface border border-border rounded-xl p-6 hover:border-yellow/40 transition-all h-full flex flex-col">
                <span className="font-heading text-teal text-xs uppercase tracking-wider mb-3">{post.category}</span>
                <h3 className="font-heading font-bold text-lg uppercase tracking-wide text-offwhite mb-3 leading-tight flex-1">{post.title}</h3>
                <p className="font-body text-muted text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="font-body text-muted text-xs">{post.date}</span>
                  <Link to={`/blog/${post.slug}`} className="font-heading font-bold text-xs text-yellow uppercase tracking-wider hover:underline">Read →</Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
