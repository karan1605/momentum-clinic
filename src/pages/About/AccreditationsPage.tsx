import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { PageBanner } from '../../components/Hero/PageBanner';
import { ACCREDITATIONS, AWARDS_AND_RECOGNITIONS } from '../../data/aboutAndResearch';

export const AccreditationsPage: React.FC = () => {
  useDocumentMeta({
    title: 'Accreditations & Certifications | Momentum Clinic',
    description:
      'NABH patient-safety alignment, global spine society memberships (AO Spine, NASS, ASSI), and institutional clinical honors.',
    canonicalPath: '/about/accreditations',
  });

  return (
    <div>
      <PageBanner
        eyebrow="About Momentum Clinic"
        title="Accreditations & Certifications"
        subtitle="Committed to transparent clinical quality governance, international spine society partnerships, and NABH-aligned patient safety."
        breadcrumbs={[
          { label: 'About Us', to: '/about/overview' },
          { label: 'Accreditations & Certifications' },
        ]}
      />

      <section className="py-16 lg:py-[100px] bg-white">
        <div className="site-container space-y-16">
          <div>
            <h2 className="heading-section mb-8">Quality Accreditations &amp; Society Memberships</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ACCREDITATIONS.map((acc) => (
                <div key={acc.code} className="card-surface p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-md bg-[#F5F9FE] text-[#025EC1] text-sm font-extrabold">
                      {acc.code}
                    </span>
                    <span className="text-xs font-semibold text-[#59616B]">{acc.status}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#213245]">{acc.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-[#59616B]">
                    {acc.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="heading-section mb-8">Institutional Honors &amp; Recognitions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {AWARDS_AND_RECOGNITIONS.map((award) => (
                <div key={award.title} className="rounded-[12px] bg-[#F5F9FE] border border-[#025EC1]/12 p-6">
                  <Award className="w-7 h-7 text-[#025EC1] mb-3" aria-hidden="true" />
                  <p className="text-xs font-bold text-[#025EC1]">{award.year}</p>
                  <h3 className="mt-1 text-lg font-bold text-[#213245]">{award.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#59616B]">{award.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[12px] border border-black/8 bg-[#F5F6F6] p-7 flex items-start gap-4">
            <ShieldCheck className="w-7 h-7 text-[#025EC1] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="text-lg font-bold text-[#213245]">
                Continuous Clinical Audit &amp; Ethics Oversight
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#59616B]">
                Every surgical pathway undergoes structured safety verification, infection-rate monitoring, and periodic review by our institutional clinical ethics committee.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
