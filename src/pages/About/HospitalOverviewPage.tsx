import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { PageBanner } from '../../components/Hero/PageBanner';
import { SafeImage } from '../../components/Media/SafeImage';
import { ClinicButton } from '../../components/Buttons/ClinicButton';
import { CLINIC_IMAGES } from '../../data/clinicInfo';
import { CLINICAL_MILESTONES } from '../../data/aboutAndResearch';

export const HospitalOverviewPage: React.FC = () => {
  useDocumentMeta({
    title: 'Hospital Overview | About Momentum Speciality Clinic',
    description:
      'Momentum Speciality Clinic — A Centre For Backpain & Spinal Disorders in Dhanbad, led by Dr. Dinesh Kumar Agarwal (M.S., DNB Ortho · CMC Vellore Spine Fellow) with over 10 years of clinical expertise.',
    canonicalPath: '/about/overview',
  });

  return (
    <div>
      <PageBanner
        eyebrow="About Momentum Clinic"
        title="Clinic Overview"
        subtitle="Momentum Speciality Clinic — A Centre For Backpain & Spinal Disorders, dedicated to restoring mobility and enhancing life quality in Dhanbad."
        breadcrumbs={[
          { label: 'About Us', to: '/about/overview' },
          { label: 'Hospital Overview' },
        ]}
      />

      <section className="py-16 lg:py-[100px] bg-white">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-6">
              <div className="rounded-[12px] overflow-hidden shadow-[0_2px_12px_rgba(33,50,69,0.08)] h-full min-h-[320px]">
                <SafeImage
                  src={CLINIC_IMAGES.heroClinic}
                  alt="Momentum Speciality Clinic spine consultation and patient care center"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-6 flex flex-col justify-center space-y-4">
              <h2 className="heading-section">
                A Centre For Backpain &amp; Spinal Disorders in Dhanbad
              </h2>
              <p className="body-copy">
                Dedicated to restoring mobility and enhancing life quality, Momentum Speciality Clinic provides state-of-the-art spinal solutions, disc replacements, and musculoskeletal trauma care across Chandra Arcade (Dhaiya) and Nichtipur Hospital &amp; Research Center (Katras Bazar) in Dhanbad.
              </p>
              <p className="body-copy">
                Led by <strong>Dr. Dinesh Kumar Agarwal</strong> (M.S. (Ortho), DNB (Ortho), Fellowship in Spinal Disorder Surgery trained at CMC Vellore with over 10 years of clinical expertise), our team specializes in complex spine surgeries, scoliosis correction, joint replacements, and conservative spine rehabilitation.
              </p>
              <ul className="space-y-2.5 pt-2 text-[15px] font-semibold text-[#213245]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#025EC1] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Approximately 90% of spine cases managed conservatively without surgery</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#025EC1] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Full spectrum from Open Standing MRI to Robotic &amp; Endoscopic Spine Surgery</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#025EC1] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Active clinical ethics board, indexed publications, and spine fellowship training</span>
                </li>
              </ul>
              <div className="pt-4 flex flex-wrap gap-3">
                <ClinicButton to="/doctors">Meet Our Spine Doctors</ClinicButton>
                <ClinicButton to="/about/facilities" variant="white">
                  Explore Facilities
                </ClinicButton>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLINICAL_MILESTONES.map((m) => (
              <div key={m.label} className="rounded-[12px] bg-[#F5F9FE] p-6 border border-[#025EC1]/12">
                <p className="text-3xl font-extrabold text-[#025EC1] tabular-nums">{m.value}</p>
                <p className="mt-2 text-sm font-bold text-[#213245]">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Vision, Mission & Core Values', to: '/about/vision-mission' },
              { title: 'Leadership Team', to: '/about/leadership' },
              { title: 'Accreditations & Certifications', to: '/about/accreditations' },
              { title: 'Facilities & Infrastructure', to: '/about/facilities' },
            ].map((navCard) => (
              <Link
                key={navCard.to}
                to={navCard.to}
                className="card-surface p-5 flex items-center justify-between gap-3 font-bold text-[#213245] hover:text-[#025EC1]"
              >
                <span>{navCard.title}</span>
                <ArrowRight className="w-4 h-4 text-[#025EC1] shrink-0" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
