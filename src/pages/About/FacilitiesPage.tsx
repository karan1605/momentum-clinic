import React from 'react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { PageBanner } from '../../components/Hero/PageBanner';
import { SafeImage } from '../../components/Media/SafeImage';
import { ClinicButton } from '../../components/Buttons/ClinicButton';
import { HOSPITAL_FACILITIES } from '../../data/aboutAndResearch';

export const FacilitiesPage: React.FC = () => {
  useDocumentMeta({
    title: 'Facilities & Infrastructure | Momentum Clinic',
    description:
      'Explore Momentum Clinic’s laminar-flow spine operating suites, Open Standing MRI diagnostic wing, FMS rehabilitation center, and patient rooms.',
    canonicalPath: '/about/facilities',
  });

  return (
    <div>
      <PageBanner
        eyebrow="About Momentum Clinic"
        title="Facilities & Infrastructure"
        subtitle="Purpose-built clinical spaces integrating advanced diagnostics, sterile modular operating theaters, and specialized spine rehabilitation under one roof."
        breadcrumbs={[
          { label: 'About Us', to: '/about/overview' },
          { label: 'Facilities & Infrastructure' },
        ]}
      />

      <section className="py-16 lg:py-[100px] bg-white">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {HOSPITAL_FACILITIES.map((facility) => (
              <article key={facility.title} className="card-surface overflow-hidden flex flex-col h-full">
                <div className="aspect-[16/10] w-full overflow-hidden bg-[#F5F9FE]">
                  <SafeImage
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-[#213245]">{facility.title}</h2>
                    <p className="body-copy mt-3">{facility.detail}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center space-y-4">
            <h3 className="text-2xl font-bold text-[#213245]">
              Experience Seamless Diagnostic-to-Recovery Care
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <ClinicButton to="/book-appointment">Schedule OPD Visit</ClinicButton>
              <ClinicButton to="/technology/diagnostics" variant="white">
                View Diagnostic Suite
              </ClinicButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
