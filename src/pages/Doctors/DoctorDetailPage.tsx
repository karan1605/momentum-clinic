import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Languages, CheckCircle2, ArrowLeft, Video } from 'lucide-react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { PageBanner } from '../../components/Hero/PageBanner';
import { SafeImage } from '../../components/Media/SafeImage';
import { ClinicButton } from '../../components/Buttons/ClinicButton';
import { DOCTORS } from '../../data/doctors';

export const DoctorDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const doctor = DOCTORS.find((d) => d.slug === slug);

  useDocumentMeta({
    title: doctor ? `${doctor.name} | Momentum Clinic` : 'Doctor Not Found | Momentum Clinic',
    description: doctor
      ? `${doctor.name} — ${doctor.designation} at Momentum Clinic. ${doctor.specialization}`
      : 'Spine specialist profile at Momentum Clinic.',
    canonicalPath: doctor ? `/doctors/${doctor.slug}` : '/doctors',
  });

  if (!doctor) {
    return (
      <div className="py-24 site-container text-center">
        <h1 className="heading-section">Specialist Profile Not Found</h1>
        <p className="body-copy mt-3">
          The requested doctor profile could not be located. Please browse our complete medical directory.
        </p>
        <div className="mt-6">
          <ClinicButton to="/doctors">Back to All Doctors</ClinicButton>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageBanner
        eyebrow={`${doctor.department} · ${doctor.experienceLabel}`}
        title={doctor.name}
        subtitle={doctor.designation}
        breadcrumbs={[
          { label: 'Doctors', to: '/doctors' },
          { label: doctor.name },
        ]}
      />

      <section className="py-16 lg:py-[100px] bg-white">
        <div className="site-container">
          <Link
            to="/doctors"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#025EC1] hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>All Spine Specialists</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-[12px] overflow-hidden shadow-[0_2px_12px_rgba(33,50,69,0.08)] border border-black/8 aspect-[4/3] bg-[#F5F9FE]">
                <SafeImage
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="rounded-[12px] bg-[#F5F9FE] border border-[#025EC1]/12 p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#025EC1] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-bold text-[#213245]">OPD Schedule</p>
                    <p className="text-sm text-[#59616B] mt-0.5">{doctor.consultationDays}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Languages className="w-5 h-5 text-[#025EC1] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-bold text-[#213245]">Languages Spoken</p>
                    <p className="text-sm text-[#59616B] mt-0.5">{doctor.languages.join(', ')}</p>
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-3">
                  <ClinicButton
                    to={`/book-appointment?doctor=${doctor.slug}`}
                    icon={<Calendar className="w-4 h-4" />}
                    className="w-full justify-center"
                  >
                    Book Appointment
                  </ClinicButton>
                  <ClinicButton
                    to={`/telemedicine?doctor=${doctor.slug}`}
                    variant="white"
                    icon={<Video className="w-4 h-4" />}
                    className="w-full justify-center"
                  >
                    Video Telemedicine
                  </ClinicButton>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-8">
              <div>
                <h2 className="heading-section">Clinical Profile</h2>
                <p className="body-copy mt-3">{doctor.summary}</p>
              </div>

              <div className="rounded-[12px] border border-black/8 p-6 sm:p-7">
                <h3 className="text-xl font-bold text-[#213245]">Clinical Focus Areas</h3>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {doctor.focusAreas.map((area) => (
                    <li key={area} className="flex items-start gap-2.5 text-[15px] font-medium text-[#213245]">
                      <CheckCircle2 className="w-5 h-5 text-[#025EC1] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="rounded-[12px] bg-[#F5F9FE] p-6">
                  <h3 className="text-lg font-bold text-[#213245]">Treatment Philosophy</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#59616B]">
                    {doctor.clinicalApproach}
                  </p>
                </div>
                <div className="rounded-[12px] bg-[#F5F9FE] p-6">
                  <h3 className="text-lg font-bold text-[#213245]">Academic &amp; Research Role</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#59616B]">
                    {doctor.academicRole}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
