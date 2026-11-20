import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { PageBanner } from '../../components/Hero/PageBanner';
import { SafeImage } from '../../components/Media/SafeImage';
import { BLOG_ARTICLES, BLOG_CATEGORIES } from '../../data/blog';

export const BlogListPage: React.FC = () => {
  useDocumentMeta({
    title: 'Spine Care Insights & Blog | Momentum Clinic',
    description:
      'Patient-friendly articles authored by Momentum Clinic spine specialists on sciatica, scoliosis, Open Standing MRI, and minimally invasive care.',
    canonicalPath: '/blog',
  });

  const [category, setCategory] = useState('All Insights');
  const [query, setQuery] = useState('');

  const filteredPosts = useMemo(() => {
    return BLOG_ARTICLES.filter((post) => {
      const catOk = category === 'All Insights' || post.category === category;
      const q = query.trim().toLowerCase();
      const textOk =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.authorName.toLowerCase().includes(q);
      return catOk && textOk;
    });
  }, [category, query]);

  return (
    <div>
      <PageBanner
        eyebrow="Patient Education"
        title="Spine Care Insights"
        subtitle="Clear, clinician-reviewed guides on sciatica, pediatric scoliosis, upright MRI diagnostics, and modern spine rehabilitation."
        breadcrumbs={[{ label: 'Spine Care Insights' }]}
      />

      <section className="py-16 lg:py-[100px] bg-white">
        <div className="site-container">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-black/8">
            <div className="relative w-full lg:max-w-sm">
              <Search
                className="w-4 h-4 text-[#59616B] absolute left-3.5 top-1/2 -translate-y-1/2"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search spine topics or doctor..."
                aria-label="Search articles"
                className="w-full rounded-[50px] border border-[#D1D8E0] bg-white pl-10 pr-4 py-2.5 text-sm text-[#213245] focus:outline-none focus:border-[#025EC1]"
              />
            </div>

            <div className="flex flex-wrap gap-2" role="tablist">
              {BLOG_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={category === cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-[50px] text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    category === cat
                      ? 'bg-[#025EC1] text-white'
                      : 'bg-[#F5F9FE] text-[#213245] hover:bg-[#EAF2FD]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="rounded-[12px] bg-[#F5F9FE] p-10 text-center">
              <p className="font-bold text-[#213245]">No articles match your filter.</p>
              <button
                type="button"
                onClick={() => {
                  setCategory('All Insights');
                  setQuery('');
                }}
                className="mt-3 text-sm font-bold text-[#025EC1] hover:underline cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.slug} className="card-surface overflow-hidden flex flex-col h-full">
                  <div className="aspect-[16/10] w-full overflow-hidden bg-[#F5F9FE]">
                    <SafeImage
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-7 flex flex-col flex-1">
                    <p className="text-xs font-semibold text-[#025EC1]">
                      {post.category} · {post.publishedAt} · {post.readTime}
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-[#213245] leading-snug">
                      <Link to={`/blog/${post.slug}`} className="hover:text-[#025EC1] transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="body-copy mt-3 flex-1">{post.excerpt}</p>
                    <div className="mt-5 pt-4 border-t border-black/8 flex flex-wrap items-center justify-between gap-3">
                      <Link
                        to={`/doctors/${post.authorSlug}`}
                        className="text-sm font-semibold text-[#213245] hover:text-[#025EC1]"
                      >
                        By {post.authorName}
                      </Link>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[#025EC1] hover:underline whitespace-nowrap shrink-0"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
