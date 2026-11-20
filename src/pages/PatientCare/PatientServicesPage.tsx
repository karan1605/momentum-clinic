import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Pill, Scan, Activity, Shield, FileCheck2, Stethoscope } from 'lucide-react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { PageBanner } from '../../components/Hero/PageBanner';
import { ClinicButton } from '../../components/Buttons/ClinicButton';

export const PatientServicesPage: React.FC = () => {
  useDocumentMeta({
    title: 'Patient Services | Momentum Clinic',
    description:
      'Integrated spine patient services at Momentum Clinic: in-house MRI diagnostics, clinical pharmacy, physiotherapy, TPA insurance desk, and teleconsultation.',
    canonicalPath: '/patient-care/patient-services',
  });

  const services = [
    {
      icon: Scan,
      title: 'In-House Diagnostic Imaging Suite',
      description:
        'Open Standing Weight-Bearing MRI, 1.5T Wide-Bore MRI, Multi-Slice CT, and digital full-spine radiography in one ground-floor wing.',
      link: '/technology/diagnostics',
      linkLabel: 'Explore Diagnostics',
    },
    {
      icon: Activity,
      title: 'Dedicated Spine Physiotherapy & Rehab',
      description:
        'Supervised Functional Magnetic Stimulation (FMS), high-intensity laser therapy, cryotherapy, and tailored core conditioning.',
      link: '/treatments/physiotherapy-rehabilitation',
      linkLabel: 'View Rehab Programs',
    },
    {
      icon: Pill,
      title: '24/7 In-House Clinical Pharmacy',
      description:
        'Hospital-verified spine medications, ergonomic braces, and post-operative dressing supplies dispensed with clear pharmacist counseling.',
      link: '/contact',
      linkLabel: 'Contact Pharmacy Desk',
    },
    {
      icon: FileCheck2,
      title: 'Insurance & Cashless TPA Desk',
      description:
        'Dedicated billing counselors helping verify policy coverage, file cashless pre-authorization, and prepare itemized reimbursement records.',
      link: '/patient-care/insurance-tpa',
      linkLabel: 'View Insurance & TPA',
    },
    {
      icon: Stethoscope,
      title: 'Telemedicine & Second Opinion Clinic',
      description:
        'Virtual consultations for outstation and overseas patients seeking objective MRI review before traveling.',
      link: '/telemedicine',
      linkLabel: 'Request Telemedicine',
    },
    {
      icon: Shield,
      title: 'Inpatient Comfort & Discharge Planning',
      description:
        'Spine-ergonomic patient rooms, step-down ICU monitoring, nutrition guidance, and structured home-recovery training before discharge.',
      link: '/about/facilities',
      linkLabel: 'Tour Facilities',
    },
  ];

  return (
    <div>
      <PageBanner
        eyebrow="Patient Care"
        title="Patient Services"
        subtitle="Everything required for accurate spine diagnosis, comfortable inpatient recovery, and smooth post-discharge rehabilitation—coordinated seamlessly."
        breadcrumbs={[
          { label: 'Patient Care', to: '/patient-care/patient-services' },
          { label: 'Patient Services' },
        ]}
      />

      <section className="py-16 lg:py-[100px] bg-white">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((srv) => {
              const Icon = srv.icon;
              return (
                <article key={srv.title} className="card-surface p-7 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-[12px] bg-[#F5F9FE] text-[#025EC1] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h2 className="text-xl font-bold text-[#213245]">{srv.title}</h2>
                  <p className="body-copy mt-3 flex-1">{srv.description}</p>
                  <Link
                    to={srv.link}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#025EC1] hover:underline"
                  >
                    <span>{srv.linkLabel}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>

          <div className="mt-14 rounded-[12px] bg-[#F5F9FE] p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-[#025EC1]/12">
            <div>
              <h3 className="text-2xl font-bold text-[#213245]">Have Questions About Admissions or Diagnostics?</h3>
              <p className="mt-1.5 text-[#59616B]">
                Browse our patient FAQs or connect directly with our clinic reception desk.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <ClinicButton to="/patient-care/faqs">Read FAQs</ClinicButton>
              <ClinicButton to="/book-appointment" variant="white">
                Book Appointment
              </ClinicButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
