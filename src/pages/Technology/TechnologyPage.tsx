import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { PageBanner } from '../../components/Hero/PageBanner';
import { SafeImage } from '../../components/Media/SafeImage';
import { ClinicButton } from '../../components/Buttons/ClinicButton';
import { TECHNOLOGY_CATEGORIES, TechnologyCategory } from '../../data/technology';

interface TechnologyPageProps {
  categorySlug: TechnologyCategory['slug'];
}

export const TechnologyPage: React.FC<TechnologyPageProps> = ({ categorySlug }) => {
  const category = TECHNOLOGY_CATEGORIES[categorySlug];

  useDocumentMeta({
    title: `${category.title} | Momentum Clinic`,
    description: category.heroDescription,
    canonicalPath: `/technology/${category.slug}`,
  });

  const navTabs: { slug: TechnologyCategory['slug']; label: string }[] = [
    { slug: 'surgical', label: 'Surgical Technology' },
    { slug: 'physiotherapy-rehab', label: 'Physiotherapy & Rehab Technology' },
    { slug: 'diagnostics', label: 'Spine Diagnostic Technology' },
  ];

  return (
    <div>
      <PageBanner
        eyebrow="Spine Technology"
        title={category.heroTitle}
        subtitle={category.heroDescription}
        breadcrumbs={[
          { label: 'Technology', to: '/technology/surgical' },
          { label: category.title },
        ]}
      />

      <section className="py-16 lg:py-[100px] bg-white">
        <div className="site-container space-y-12">
          {/* Sub-navigation across 3 Technology pillars */}
          <div className="flex flex-wrap gap-2.5 pb-6 border-b border-black/8">
            {navTabs.map((tab) => (
              <Link
                key={tab.slug}
                to={`/technology/${tab.slug}`}
                className={`px-5 py-2.5 rounded-[50px] text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap ${
                  tab.slug === categorySlug
                    ? 'bg-[#025EC1] text-white'
                    : 'bg-[#F5F9FE] text-[#213245] hover:bg-[#EAF2FD]'
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {category.items.map((item) => (
              <article key={item.id} className="card-surface overflow-hidden flex flex-col h-full">
                <div className="aspect-[16/10] w-full overflow-hidden bg-[#F5F9FE]">
                  <SafeImage
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <p className="text-xs font-bold text-[#025EC1]">{item.subtitle}</p>
                  <h2 className="mt-1.5 text-2xl font-bold text-[#213245]">{item.name}</h2>
                  <p className="body-copy mt-3">{item.description}</p>

                  <div className="mt-5 rounded-lg bg-[#F5F9FE] p-4 border border-[#025EC1]/12">
                    <p className="text-xs font-bold text-[#025EC1]">Clinical Advantage</p>
                    <p className="mt-1 text-sm font-semibold text-[#213245]">
                      {item.clinicalAdvantage}
                    </p>
                  </div>

                  <ul className="mt-5 space-y-1.5">
                    {item.applications.map((app) => (
                      <li key={app} className="flex items-center gap-2 text-sm text-[#59616B] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#025EC1] shrink-0" aria-hidden="true" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="rounded-[12px] navy-gradient text-white p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Schedule a Diagnostic or Clinical Evaluation</h3>
              <p className="mt-1.5 text-white/85 max-w-2xl">
                Our clinical specialists match the right diagnostic imaging and treatment technology to your exact spinal condition.
              </p>
            </div>
            <div className="shrink-0">
              <ClinicButton to="/book-appointment" variant="white">
                Book Appointment
              </ClinicButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
