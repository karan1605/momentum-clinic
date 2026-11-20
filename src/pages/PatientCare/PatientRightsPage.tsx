import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { PageBanner } from '../../components/Hero/PageBanner';
import { PATIENT_RIGHTS, PATIENT_RESPONSIBILITIES } from '../../data/patientCare';
import { ClinicButton } from '../../components/Buttons/ClinicButton';

export const PatientRightsPage: React.FC = () => {
  useDocumentMeta({
    title: 'Patient Rights & Responsibilities | Momentum Clinic',
    description:
      'Ethical NABH-aligned Patient Rights and Responsibilities Charter at Momentum Clinic Spine Hospital.',
    canonicalPath: '/patient-care/patient-rights',
  });

  return (
    <div>
      <PageBanner
        eyebrow="Patient Care & Governance"
        title="Patient Rights & Responsibilities"
        subtitle="Guided by NABH-aligned clinical ethics, Momentum Clinic safeguards informed consent, medical privacy, and respectful care for every patient."
        breadcrumbs={[
          { label: 'Patient Care', to: '/patient-care/patient-services' },
          { label: 'Patient Rights & Responsibilities' },
        ]}
      />

      <section className="py-16 lg:py-[100px] bg-white">
        <div className="site-container space-y-14">
          <div>
            <h2 className="heading-section mb-8">Your Rights as a Patient</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PATIENT_RIGHTS.map((right) => (
                <div key={right.title} className="card-surface p-7 flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-[#025EC1] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-lg font-bold text-[#213245]">{right.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#59616B]">{right.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[12px] bg-[#F5F9FE] border border-[#025EC1]/12 p-8">
            <h2 className="text-2xl font-bold text-[#213245] mb-5">
              Patient &amp; Attendant Responsibilities
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PATIENT_RESPONSIBILITIES.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#213245] font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#025EC1] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ClinicButton to="/contact">Contact Patient Relations Desk</ClinicButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
