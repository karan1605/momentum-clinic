import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { PageBanner } from '../../components/Hero/PageBanner';
import { SafeImage } from '../../components/Media/SafeImage';
import { ClinicButton } from '../../components/Buttons/ClinicButton';
import { BLOG_ARTICLES } from '../../data/blog';

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = BLOG_ARTICLES.find((a) => a.slug === slug);

  useDocumentMeta({
    title: article ? `${article.title} | Momentum Clinic` : 'Article Not Found | Momentum Clinic',
    description: article ? article.excerpt : 'Spine care insights at Momentum Clinic.',
    canonicalPath: article ? `/blog/${article.slug}` : '/blog',
  });

  if (!article) {
    return (
      <div className="py-24 site-container text-center">
        <h1 className="heading-section">Article Not Found</h1>
        <div className="mt-6">
          <ClinicButton to="/blog">Back to All Articles</ClinicButton>
        </div>
      </div>
    );
  }

  const related = BLOG_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <div>
      <PageBanner
        eyebrow={`${article.category} · ${article.publishedAt} · ${article.readTime}`}
        title={article.title}
        subtitle={`Authored by ${article.authorName} · Momentum Clinic Spine Education`}
        breadcrumbs={[
          { label: 'Insights', to: '/blog' },
          { label: article.category },
        ]}
      />

      <section className="py-16 lg:py-[100px] bg-white">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 md:pl-[4.5rem] md:pr-[4rem] xl:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#025EC1] hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to Spine Care Insights</span>
          </Link>

          <div className="rounded-[12px] overflow-hidden aspect-[16/9] mb-10 shadow-[0_2px_12px_rgba(33,50,69,0.08)]">
            <SafeImage
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-lg font-semibold text-[#213245] leading-relaxed pb-6 border-b border-black/8">
            {article.excerpt}
          </p>

          <div className="py-8 space-y-8">
            {article.sections.map((sec) => (
              <div key={sec.heading} className="space-y-4">
                <h2 className="text-2xl font-bold text-[#213245]">{sec.heading}</h2>
                {sec.paragraphs.map((p, i) => (
                  <p key={i} className="body-copy">
                    {p}
                  </p>
                ))}
                {sec.bullets && (
                  <ul className="list-disc pl-6 space-y-2 text-[16px] text-[#59616B]">
                    {sec.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="rounded-[12px] bg-[#F5F9FE] border border-[#025EC1]/12 p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 my-8">
            <div>
              <p className="text-xs font-bold text-[#025EC1]">Medical Review Author</p>
              <Link
                to={`/doctors/${article.authorSlug}`}
                className="text-lg font-bold text-[#213245] hover:text-[#025EC1]"
              >
                {article.authorName}
              </Link>
              <p className="text-sm text-[#59616B]">Momentum Clinic Spine Specialist</p>
            </div>
            <div className="shrink-0">
              <ClinicButton to={`/book-appointment?doctor=${article.authorSlug}`}>
                Consult Specialist
              </ClinicButton>
            </div>
          </div>

          <div className="pt-8 border-t border-black/8">
            <h3 className="text-xl font-bold text-[#213245] mb-5">More Spine Care Insights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="card-surface p-5 flex flex-col justify-between"
                >
                  <div>
                    <p className="text-xs font-semibold text-[#025EC1]">{post.category}</p>
                    <h4 className="mt-1.5 text-lg font-bold text-[#213245]">{post.title}</h4>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#025EC1]">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
