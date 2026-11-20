import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { PageBanner } from '../../components/Hero/PageBanner';
import { CareerApplicationForm } from '../../components/Forms/CareerApplicationForm';
import { OPEN_POSITIONS } from '../../data/aboutAndResearch';

export const WorkWithUsPage: React.FC = () => {
  useDocumentMeta({
    title: 'Work With Us | Careers at Momentum Clinic',
    description:
      'Join Momentum Clinic’s clinical and allied healthcare teams in Dhanbad: Spine Surgeons, Spine Physiotherapists, OT Nurses, and MRI Technologists.',
    canonicalPath: '/careers/work-with-us',
  });

  const [selectedRole, setSelectedRole] = useState(OPEN_POSITIONS[0].title);

  const handleApplyClick = (roleTitle: string) => {
    setSelectedRole(roleTitle);
    const el = document.getElementById('careers-apply-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <PageBanner
        eyebrow="Careers"
        title="Work With Us"
        subtitle="Build a meaningful healthcare career alongside dedicated spine surgeons, specialized physiotherapists, nurses, and diagnostic technologists."
        breadcrumbs={[
          { label: 'Careers', to: '/careers/work-with-us' },
          { label: 'Work With Us' },
        ]}
      />

      <section className="py-16 lg:py-[100px] bg-white">
        <div className="site-container space-y-16">
          <div>
            <h2 className="heading-section mb-8">Current Clinical &amp; Allied Openings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {OPEN_POSITIONS.map((role) => (
                <article key={role.id} className="card-surface p-7 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-[#025EC1]">{role.department}</span>
                      <span className="text-xs font-semibold text-[#59616B] whitespace-nowrap">{role.type}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#213245]">{role.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#59616B]">{role.summary}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-black/8">
                    <button
                      type="button"
                      onClick={() => handleApplyClick(role.title)}
                      className="inline-flex items-center gap-2 rounded-[50px] bg-[#F5F9FE] text-[#025EC1] hover:bg-[#025EC1] hover:text-white px-4 py-2 text-sm font-semibold transition-colors cursor-pointer"
                    >
                      <Briefcase className="w-4 h-4" aria-hidden="true" />
                      <span>Apply for This Role</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div id="careers-apply-form" className="max-w-4xl mx-auto">
            <div className="card-surface p-7 sm:p-9">
              <h2 className="text-2xl font-bold text-[#213245] mb-2">
                Submit Your Career Application
              </h2>
              <p className="body-copy mb-6">
                Upload your resume (PDF, DOC, or DOCX) and select the role you are applying for. Our HR desk reviews all clinical and administrative applications carefully.
              </p>
              <CareerApplicationForm
                track="work-with-us"
                options={[
                  ...OPEN_POSITIONS.map((p) => p.title),
                  'General Clinical / Administrative Talent Pool',
                ]}
                preselectedOption={selectedRole}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
