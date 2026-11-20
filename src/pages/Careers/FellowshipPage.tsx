import React, { useState } from 'react';
import { GraduationCap, CheckCircle2 } from 'lucide-react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { PageBanner } from '../../components/Hero/PageBanner';
import { CareerApplicationForm } from '../../components/Forms/CareerApplicationForm';
import { FELLOWSHIP_PROGRAMS } from '../../data/aboutAndResearch';

export const FellowshipPage: React.FC = () => {
  useDocumentMeta({
    title: 'Spine Surgery Fellowships | Careers at Momentum Clinic',
    description:
      'Apply for Momentum Clinic’s structured spine fellowships: Dual-Phase Clinical & Research Fellowship, AO Spine Visiting Fellowship, and MISSAB Fellowship.',
    canonicalPath: '/careers/fellowship',
  });

  const [selectedProgram, setSelectedProgram] = useState(FELLOWSHIP_PROGRAMS[0].title);

  const handleSelectProgram = (programTitle: string) => {
    setSelectedProgram(programTitle);
    const el = document.getElementById('fellowship-form-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <PageBanner
        eyebrow="Academic Training & Careers"
        title="Spine Surgery Fellowships"
        subtitle="Structured mentorship in clinical spine evaluation, research methodology, deformity reconstruction, and minimally invasive surgical technique."
        breadcrumbs={[
          { label: 'Careers', to: '/careers/work-with-us' },
          { label: 'Fellowship' },
        ]}
      />

      <section className="py-16 lg:py-[100px] bg-white">
        <div className="site-container space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {FELLOWSHIP_PROGRAMS.map((prog) => (
              <article key={prog.id} className="card-surface p-7 flex flex-col h-full">
                <div className="w-11 h-11 rounded-[12px] bg-[#F5F9FE] text-[#025EC1] flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6" aria-hidden="true" />
                </div>
                <p className="text-xs font-bold text-[#025EC1]">{prog.duration}</p>
                <h2 className="mt-1 text-xl font-bold text-[#213245]">{prog.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[#59616B] flex-1">
                  {prog.description}
                </p>
                <div className="mt-4 pt-4 border-t border-black/8 space-y-3">
                  <p className="text-xs text-[#213245] font-semibold">
                    Eligibility: <span className="font-normal text-[#59616B]">{prog.eligibility}</span>
                  </p>
                  <button
                    type="button"
                    onClick={() => handleSelectProgram(prog.title)}
                    className="w-full rounded-[50px] bg-[#025EC1] text-white text-sm font-semibold py-2.5 px-4 hover:bg-[#013874] transition-colors cursor-pointer"
                  >
                    Apply for This Fellowship
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div
            id="fellowship-form-section"
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
          >
            <div className="lg:col-span-5 space-y-5">
              <h2 className="heading-section">What Fellows Experience</h2>
              <ul className="space-y-3 text-[15px] text-[#213245]">
                {[
                  'Daily multidisciplinary case conferences and MRI correlation rounds',
                  'Hands-on clinical research mentoring and manuscript publication targets',
                  'Observed & assisted exposure to endoscopic, robotic, and deformity suites',
                  'Dedicated teaching sessions led by senior spine faculty',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#025EC1] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7">
              <div className="card-surface p-7 sm:p-9">
                <h3 className="text-2xl font-bold text-[#213245] mb-2">
                  Fellowship Application Form
                </h3>
                <p className="body-copy mb-6">
                  Attach your updated CV (PDF/DOCX) and academic credentials for review by our Fellowship Committee.
                </p>
                <CareerApplicationForm
                  track="fellowship"
                  options={FELLOWSHIP_PROGRAMS.map((p) => p.title)}
                  preselectedOption={selectedProgram}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
