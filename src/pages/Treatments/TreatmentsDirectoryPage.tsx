import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { PageBanner } from '../../components/Hero/PageBanner';
import { SafeImage } from '../../components/Media/SafeImage';
import { TREATMENTS } from '../../data/treatments';
import { ClinicButton } from '../../components/Buttons/ClinicButton';

const CATEGORIES = ['All Treatments', 'Surgical', 'Motion Preservation', 'Pain & Rehab', 'Preventive'];

export const TreatmentsDirectoryPage: React.FC = () => {
  useDocumentMeta({
    title: 'Spine Treatments & Procedures | Momentum Clinic',
    description:
      'Explore comprehensive spine care at Momentum Clinic: physiotherapy, pain management, endoscopic surgery, robotic navigation, and deformity correction.',
    canonicalPath: '/treatments',
  });

  const [category, setCategory] = useState('All Treatments');
  const filtered =
    category === 'All Treatments'
      ? TREATMENTS
      : TREATMENTS.filter((t) => t.category === category);

  return (
    <div>
      <PageBanner
        eyebrow="Clinical Pathways"
        title="Treatments & Procedures"
        subtitle="From conservative rehabilitation and targeted pain relief to motion preservation, endoscopic decompression, and robotic spine reconstruction."
        breadcrumbs={[{ label: 'Treatments & Procedures' }]}
      />

      <section className="py-16 lg:py-[100px] bg-white">
        <div className="site-container">
          <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-black/8" role="tablist">
            {CATEGORIES.map((cat) => (
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((item) => (
              <article key={item.slug} className="card-surface overflow-hidden flex flex-col h-full">
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#F5F9FE]">
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs font-bold text-[#025EC1]">{item.category}</p>
                  <h2 className="mt-1.5 text-xl font-bold text-[#213245]">
                    <Link to={`/treatments/${item.slug}`} className="hover:text-[#025EC1] transition-colors">
                      {item.title}
                    </Link>
                  </h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#59616B] flex-1">
                    {item.heroSubtitle}
                  </p>
                  <Link
                    to={`/treatments/${item.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#025EC1] hover:underline"
                  >
                    <span>Explore Treatment Details</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-[12px] navy-gradient text-white p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Unsure Which Spine Pathway Fits Your Symptoms?</h3>
              <p className="mt-1.5 text-white/85 max-w-2xl">
                Our spine team evaluates your MRI and symptoms objectively—prioritizing conservative care whenever appropriate.
              </p>
            </div>
            <div className="shrink-0">
              <ClinicButton to="/book-appointment" variant="white">
                Schedule Evaluation
              </ClinicButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
