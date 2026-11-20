import React, { useState } from 'react';
import { BookOpen, Globe2, ShieldCheck, FlaskConical } from 'lucide-react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { PageBanner } from '../../components/Hero/PageBanner';
import { RESEARCH_PUBLICATIONS, ACCREDITATIONS } from '../../data/aboutAndResearch';
import { ClinicButton } from '../../components/Buttons/ClinicButton';

const PUB_CATEGORIES = [
  'All Publications',
  'Minimally Invasive',
  'Diagnostics',
  'Deformity',
  'Robotics & Navigation',
  'Conservative Care',
];

export const ResearchPage: React.FC = () => {
  useDocumentMeta({
    title: 'Innovation & Clinical Research | Momentum Clinic',
    description:
      'Clinical outcome registries, ethics board trials, global spine society collaborations (NASS, AO Spine, ASSI), and indexed publications.',
    canonicalPath: '/research',
  });

  const [selectedCat, setSelectedCat] = useState('All Publications');
  const publications =
    selectedCat === 'All Publications'
      ? RESEARCH_PUBLICATIONS
      : RESEARCH_PUBLICATIONS.filter((p) => p.category === selectedCat);

  return (
    <div>
      <PageBanner
        eyebrow="Academic Spine Institute"
        title="Innovation & Clinical Research"
        subtitle="Advancing ethical spine medicine through prospective outcome tracking, institutional ethics trials, and global collaborations with NASS, AO Spine, and ASSI."
        breadcrumbs={[{ label: 'Innovation & Research' }]}
      />

      <section className="py-16 lg:py-[100px] bg-white">
        <div className="site-container space-y-16">
          {/* Research Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-surface p-7">
              <FlaskConical className="w-7 h-7 text-[#025EC1] mb-4" aria-hidden="true" />
              <h2 className="text-xl font-bold text-[#213245]">Prospective Outcome Registries</h2>
              <p className="body-copy mt-2.5">
                Structured long-term tracking of pain scores, neurological recovery, and functional mobility across conservative and surgical cohorts.
              </p>
            </div>
            <div className="card-surface p-7">
              <ShieldCheck className="w-7 h-7 text-[#025EC1] mb-4" aria-hidden="true" />
              <h2 className="text-xl font-bold text-[#213245]">Institutional Ethics Committee</h2>
              <p className="body-copy mt-2.5">
                Every clinical trial and retrospective audit operates under formal ethical oversight prioritizing patient safety and informed consent.
              </p>
            </div>
            <div className="card-surface p-7">
              <Globe2 className="w-7 h-7 text-[#025EC1] mb-4" aria-hidden="true" />
              <h2 className="text-xl font-bold text-[#213245]">Global Society Collaborations</h2>
              <p className="body-copy mt-2.5">
                Active research presentation and multi-center study participation with NASS, AO Spine International, and ASSI.
              </p>
            </div>
          </div>

          {/* Indexed Publications */}
          <div>
            <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-4 mb-8">
              <div>
                <p className="text-sm font-bold text-[#025EC1] mb-1">Scientific Contributions</p>
                <h2 className="heading-section">Selected Peer-Reviewed Publications</h2>
              </div>
              <div className="flex flex-wrap gap-2" role="tablist">
                {PUB_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={selectedCat === cat}
                    onClick={() => setSelectedCat(cat)}
                    className={`px-3.5 py-2 rounded-[50px] text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                      selectedCat === cat
                        ? 'bg-[#025EC1] text-white'
                        : 'bg-[#F5F9FE] text-[#213245] hover:bg-[#EAF2FD]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {publications.map((pub) => (
                <article
                  key={pub.title}
                  className="rounded-[12px] border border-black/8 bg-white p-6 shadow-[0_2px_12px_rgba(33,50,69,0.05)] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5">
                    <p className="text-xs font-bold text-[#025EC1]">
                      {pub.category} · {pub.journal} · <span className="tabular-nums">{pub.year}</span>
                    </p>
                    <h3 className="text-lg font-bold text-[#213245]">{pub.title}</h3>
                    <p className="text-sm text-[#59616B]">Authors: {pub.authors}</p>
                  </div>
                  <BookOpen className="w-6 h-6 text-[#025EC1]/60 shrink-0 hidden sm:block" aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>

          {/* Global Societies */}
          <div className="rounded-[12px] bg-[#F5F9FE] p-8 border border-[#025EC1]/12">
            <h2 className="text-2xl font-bold text-[#213245] mb-5">
              Academic Affiliations &amp; Research Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {ACCREDITATIONS.map((acc) => (
                <div key={acc.code} className="bg-white rounded-[12px] p-5 border border-black/6">
                  <p className="text-base font-extrabold text-[#025EC1]">{acc.code}</p>
                  <p className="mt-1 text-sm font-bold text-[#213245]">{acc.title}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <ClinicButton to="/careers/fellowship">Explore Spine Fellowships</ClinicButton>
              <ClinicButton to="/doctors" variant="white">
                Meet Research Faculty
              </ClinicButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
