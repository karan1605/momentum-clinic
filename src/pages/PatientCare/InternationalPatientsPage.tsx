import React from 'react';
import { Globe, Plane, Video, FileCheck, HeartHandshake } from 'lucide-react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { PageBanner } from '../../components/Hero/PageBanner';
import { AppointmentForm } from '../../components/Forms/AppointmentForm';

export const InternationalPatientsPage: React.FC = () => {
  useDocumentMeta({
    title: 'International Patients | Momentum Clinic',
    description:
      'Comprehensive spine care for patients from 23+ countries: pre-travel video teleconsultation, medical visa support, airport transfers, and transparent estimates.',
    canonicalPath: '/patient-care/international-patients',
  });

  const pillars = [
    {
      icon: Video,
      title: 'Pre-Travel Telemedicine Evaluation',
      detail:
        'Share MRI/CT scans digitally before flying so our spine surgeons can confirm clinical suitability and treatment options.',
    },
    {
      icon: FileCheck,
      title: 'Transparent Cost & Stay Estimates',
      detail:
        'Detailed itemized treatment plans, expected inpatient duration, and post-discharge recovery timeline prior to departure.',
    },
    {
      icon: Plane,
      title: 'Medical Visa & Travel Logistics',
      detail:
        'Official hospital invitation letters for medical visas, regional airport & rail transfers to Dhanbad, and nearby partner accommodation guidance.',
    },
    {
      icon: HeartHandshake,
      title: 'Dedicated International Coordinator',
      detail:
        'Multilingual coordination throughout diagnostics, admission, rehabilitation, and post-return virtual follow-ups.',
    },
  ];

  return (
    <div>
      <PageBanner
        eyebrow="Patient Care · 23+ Countries Served"
        title="International Patients"
        subtitle="Seamless cross-border spine care—from virtual pre-travel MRI assessment to coordinated arrival, surgery or rehabilitation, and remote follow-up."
        breadcrumbs={[
          { label: 'Patient Care', to: '/patient-care/patient-services' },
          { label: 'International Patients' },
        ]}
      />

      <section className="py-16 lg:py-[100px] bg-white">
        <div className="site-container space-y-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card-surface p-6 h-full flex flex-col">
                  <div className="w-11 h-11 rounded-[12px] bg-[#F5F9FE] text-[#025EC1] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h2 className="text-lg font-bold text-[#213245]">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#59616B]">{item.detail}</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 text-sm font-bold text-[#025EC1]">
                <Globe className="w-4 h-4" aria-hidden="true" />
                <span>Global Spine Assistance</span>
              </div>
              <h2 className="heading-section">
                Plan Your Visit to Momentum Clinic
              </h2>
              <p className="body-copy">
                Patients travel to our Dhanbad centres from across Jharkhand, Eastern India, and international regions for ethical second opinions, scoliosis &amp; deformity correction, disc replacement, and minimally invasive spine care.
              </p>
              <div className="rounded-[12px] bg-[#F5F9FE] p-6 border border-[#025EC1]/12 space-y-2.5 text-sm text-[#213245]">
                <p className="font-bold">Required Documents for Medical Visa Assistance:</p>
                <ul className="list-disc pl-5 space-y-1 text-[#59616B]">
                  <li>Valid passport copy of patient and accompanying attendant</li>
                  <li>Recent spine MRI / X-ray DICOM files or clinical reports</li>
                  <li>Preferred travel dates and local contact details</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="card-surface p-7 sm:p-9">
                <h3 className="text-2xl font-bold text-[#213245] mb-2">
                  International Patient Inquiry &amp; Tele-Review
                </h3>
                <p className="body-copy mb-6">
                  Submit your details below to schedule a pre-travel specialist review with our international desk.
                </p>
                <AppointmentForm defaultMode="international" showCountryField />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
