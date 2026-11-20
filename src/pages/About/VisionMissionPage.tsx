import React from 'react';
import { Target, Compass, HeartHandshake, ShieldCheck, Microscope, GraduationCap } from 'lucide-react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { PageBanner } from '../../components/Hero/PageBanner';
import { ClinicButton } from '../../components/Buttons/ClinicButton';

export const VisionMissionPage: React.FC = () => {
  useDocumentMeta({
    title: 'Vision, Mission & Core Values | Momentum Clinic',
    description:
      'Discover Momentum Clinic’s vision to be a globally trusted Center of Excellence in ethical, evidence-based spine care.',
    canonicalPath: '/about/vision-mission',
  });

  const coreValues = [
    {
      icon: HeartHandshake,
      title: 'Ethical, Patient-First Guidance',
      description:
        'We counsel every patient transparently on conservative options first, recommending surgery only when objective clinical evidence supports it.',
    },
    {
      icon: ShieldCheck,
      title: 'Highest Safety & Quality Standards',
      description:
        'Standardized surgical checklists, continuous neuromonitoring, infection-control discipline, and NABH-aligned clinical audits.',
    },
    {
      icon: Microscope,
      title: 'Evidence-Based Innovation',
      description:
        'Adopting diagnostic and surgical advances—such as Open Standing MRI, endoscopy, and robotics—only when backed by measurable patient outcomes.',
    },
    {
      icon: GraduationCap,
      title: 'Continuous Education & Research',
      description:
        'Training the next generation of spine specialists through clinical fellowships and contributing rigorously to peer-reviewed spine literature.',
    },
  ];

  return (
    <div>
      <PageBanner
        eyebrow="About Momentum Clinic"
        title="Vision, Mission & Core Values"
        subtitle="Our guiding compass in transforming spine care through clinical excellence, ethical transparency, and continuous innovation."
        breadcrumbs={[
          { label: 'About Us', to: '/about/overview' },
          { label: 'Vision, Mission & Core Values' },
        ]}
      />

      <section className="py-16 lg:py-[100px] bg-white">
        <div className="site-container space-y-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-[12px] bg-[#F5F9FE] border border-[#025EC1]/15 p-8">
              <div className="w-12 h-12 rounded-[12px] bg-[#025EC1] text-white flex items-center justify-center mb-5">
                <Target className="w-6 h-6" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold text-[#213245]">Our Vision</h2>
              <p className="body-copy mt-3">
                To be a globally trusted Centre of Excellence in spine care, transforming lives through clinical excellence, innovation, education, and research.
              </p>
            </div>

            <div className="rounded-[12px] bg-[#F5F9FE] border border-[#025EC1]/15 p-8">
              <div className="w-12 h-12 rounded-[12px] bg-[#025EC1] text-white flex items-center justify-center mb-5">
                <Compass className="w-6 h-6" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold text-[#213245]">Our Mission</h2>
              <p className="body-copy mt-3">
                To deliver ethical, patient-centred, and evidence-based spine care with the highest standards of safety and quality, empowered by exceptional talent, advanced technology, and continuous improvement.
              </p>
            </div>
          </div>

          <div>
            <h2 className="heading-section mb-8">Core Clinical Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((val) => {
                const Icon = val.icon;
                return (
                  <div key={val.title} className="card-surface p-6">
                    <div className="w-11 h-11 rounded-[12px] bg-[#F5F9FE] text-[#025EC1] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-[#213245]">{val.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#59616B]">
                      {val.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[12px] navy-gradient text-white p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Need an Honest Spine Second Opinion?</h3>
              <p className="mt-2 text-white/85 max-w-2xl">
                Our clinical team reviews MRI scans objectively and recommends non-surgical recovery whenever safe and effective.
              </p>
            </div>
            <div className="shrink-0">
              <ClinicButton to="/book-appointment" variant="white">
                Book Consultation
              </ClinicButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
