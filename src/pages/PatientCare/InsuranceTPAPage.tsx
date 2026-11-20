import React from 'react';
import { CheckCircle2, FileText, Phone } from 'lucide-react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { PageBanner } from '../../components/Hero/PageBanner';
import { ClinicButton } from '../../components/Buttons/ClinicButton';
import { INSURANCE_TPA_PARTNERS } from '../../data/patientCare';
import { CLINIC_INFO } from '../../data/clinicInfo';

export const InsuranceTPAPage: React.FC = () => {
  useDocumentMeta({
    title: 'Insurance & TPA Assistance | Momentum Clinic',
    description:
      'Cashless hospitalization and Third-Party Administrator (TPA) insurance guidance at Momentum Clinic Spine Hospital.',
    canonicalPath: '/patient-care/insurance-tpa',
  });

  const processSteps = [
    {
      step: '01',
      title: 'Policy Verification',
      detail: 'Share your health insurance card and photo ID at our ground-floor TPA Desk upon admission advising.',
    },
    {
      step: '02',
      title: 'Pre-Authorization Filing',
      detail: 'Our billing team submits clinical notes, MRI reports, and cost estimates electronically to your insurer/TPA.',
    },
    {
      step: '03',
      title: 'Insurer Approval Tracking',
      detail: 'Coordinators follow up on queries from the TPA medical team until initial cashless sanction arrives.',
    },
    {
      step: '04',
      title: 'Final Settlement at Discharge',
      detail: 'Final bills and discharge summary are submitted for seamless final approval with transparent non-medical itemization.',
    },
  ];

  return (
    <div>
      <PageBanner
        eyebrow="Patient Care"
        title="Insurance & TPA Assistance"
        subtitle="Dedicated support for cashless hospitalization, pre-authorization documentation, and smooth claim settlement with leading health insurers."
        breadcrumbs={[
          { label: 'Patient Care', to: '/patient-care/patient-services' },
          { label: 'Insurance & TPA' },
        ]}
      />

      <section className="py-16 lg:py-[100px] bg-white">
        <div className="site-container space-y-16">
          <div>
            <h2 className="heading-section mb-8">How Cashless TPA Processing Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((s) => (
                <div key={s.step} className="rounded-[12px] bg-[#F5F9FE] border border-[#025EC1]/12 p-6">
                  <span className="text-2xl font-extrabold text-[#025EC1] tabular-nums">{s.step}</span>
                  <h3 className="mt-2 text-lg font-bold text-[#213245]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#59616B]">{s.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <h2 className="heading-section mb-5">Empanelled Insurance &amp; TPA Network</h2>
              <p className="body-copy mb-6">
                Coverage terms depend on individual policy waiting periods and room-category eligibility. Our TPA desk assists with major insurers including:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {INSURANCE_TPA_PARTNERS.map((partner) => (
                  <div
                    key={partner}
                    className="flex items-center gap-2.5 rounded-lg border border-black/8 bg-white px-4 py-3 text-sm font-semibold text-[#213245]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#025EC1] shrink-0" aria-hidden="true" />
                    <span>{partner}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="card-surface p-7 space-y-4">
                <div className="flex items-center gap-2.5 text-[#025EC1]">
                  <FileText className="w-5 h-5" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-[#213245]">Documents Required</h3>
                </div>
                <ul className="space-y-2.5 text-sm text-[#59616B] list-disc pl-5">
                  <li>Valid Health Insurance Policy Card / E-Card</li>
                  <li>Government Photo ID (Aadhaar / PAN / Passport)</li>
                  <li>Consultation prescription advising hospitalization</li>
                  <li>Prior MRI, X-ray, and pathology investigation reports</li>
                  <li>Previous 2–3 years policy renewal copies (for portability/waiting period check)</li>
                </ul>

                <div className="pt-3 border-t border-black/8">
                  <p className="text-sm font-semibold text-[#213245] flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#025EC1]" aria-hidden="true" />
                    <span>TPA Desk Helpline: {CLINIC_INFO.phone}</span>
                  </p>
                </div>

                <div className="pt-2">
                  <ClinicButton to="/contact" className="w-full justify-center">
                    Verify Policy With TPA Desk
                  </ClinicButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
