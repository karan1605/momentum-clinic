import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Video, ShieldCheck, FileText, Clock } from 'lucide-react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { PageBanner } from '../../components/Hero/PageBanner';
import { AppointmentForm } from '../../components/Forms/AppointmentForm';
import { CLINIC_INFO } from '../../data/clinicInfo';

interface AppointmentPageProps {
  mode?: 'in-person' | 'telemedicine';
}

export const AppointmentPage: React.FC<AppointmentPageProps> = ({ mode = 'in-person' }) => {
  const [searchParams] = useSearchParams();
  const doctorParam = searchParams.get('doctor') || '';
  const treatmentParam = searchParams.get('treatment') || '';

  const isTelemedicine = mode === 'telemedicine';

  useDocumentMeta({
    title: isTelemedicine
      ? 'Telemedicine Virtual Spine Consultation | Momentum Clinic'
      : 'Book Appointment | Momentum Speciality Clinic — Dhanbad',
    description: isTelemedicine
      ? 'Consult Dr. Dinesh Kumar Agarwal and Momentum Clinic spine specialists remotely via video telemedicine for MRI reviews and follow-ups.'
      : 'Schedule an OPD spine or orthopaedic consultation at Momentum Speciality Clinic (Chandra Arcade, Dhaiya) or Nichtipur Hospital (Katras Bazar), Dhanbad.',
    canonicalPath: isTelemedicine ? '/telemedicine' : '/book-appointment',
  });

  return (
    <div>
      <PageBanner
        eyebrow={isTelemedicine ? 'Remote Spine Care' : 'OPD Scheduling'}
        title={
          isTelemedicine
            ? 'Telemedicine Video Spine Consultation'
            : 'Book Online Consultation'
        }
        subtitle={
          isTelemedicine
            ? 'Connect remotely with Momentum Clinic spine specialists for expert MRI evaluation, second opinions, and post-treatment follow-ups from anywhere.'
            : 'Schedule your spine or orthopaedic consultation with Dr. Dinesh Kumar Agarwal at Momentum Speciality Clinic (Dhaiya) or Nichtipur Hospital (Katras Bazar), Dhanbad.'
        }
        breadcrumbs={[
          { label: isTelemedicine ? 'Telemedicine' : 'Book Appointment' },
        ]}
      />

      <section className="py-16 lg:py-[100px] bg-white">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8">
              <div className="card-surface p-7 sm:p-9">
                <h2 className="text-2xl font-bold text-[#213245] mb-2">
                  {isTelemedicine
                    ? 'Request a Video Teleconsultation Slot'
                    : 'Patient Appointment Request Form'}
                </h2>
                <p className="body-copy mb-6">
                  Complete your contact details, preferred specialist or treatment, and convenient date. Our scheduling desk confirms slots during working hours ({CLINIC_INFO.hours}).
                </p>

                <AppointmentForm
                  defaultDoctorSlug={doctorParam}
                  defaultDepartment={treatmentParam}
                  defaultMode={isTelemedicine ? 'telemedicine' : 'in-person'}
                />
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-[12px] bg-[#F5F9FE] border border-[#025EC1]/12 p-6 space-y-4">
                <div className="flex items-center gap-2.5 text-[#025EC1]">
                  <Video className="w-5 h-5" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-[#213245]">
                    How Telemedicine Works
                  </h3>
                </div>
                <ol className="space-y-3 text-sm text-[#59616B]">
                  <li>
                    <strong className="text-[#213245]">1. Submit Request:</strong> Choose Video Telemedicine and preferred date/time.
                  </li>
                  <li>
                    <strong className="text-[#213245]">2. Share Prior Scans:</strong> Our coordinator emails a secure imaging upload link for your MRI/X-rays.
                  </li>
                  <li>
                    <strong className="text-[#213245]">3. Video Review:</strong> Discuss diagnosis, conservative physiotherapy, or surgical necessity live with a specialist.
                  </li>
                </ol>
              </div>

              <div className="card-surface p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-[#025EC1] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h4 className="text-sm font-bold text-[#213245]">Prepare for Your Visit</h4>
                    <p className="text-xs text-[#59616B] mt-1 leading-relaxed">
                      Keep recent MRI/CT reports, standing spine X-rays, and current medications ready.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#025EC1] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h4 className="text-sm font-bold text-[#213245]">Clinic Helplines</h4>
                    <p className="text-xs text-[#59616B] mt-1 leading-relaxed">
                      Momentum (Dhaiya):{' '}
                      <a href={CLINIC_INFO.phoneHref} className="font-bold text-[#025EC1] tabular-nums">
                        {CLINIC_INFO.phone}
                      </a>
                      <br />
                      Nichtipur (Katras Bazar):{' '}
                      <a href={CLINIC_INFO.secondaryPhoneHref} className="font-bold text-[#025EC1] tabular-nums">
                        {CLINIC_INFO.secondaryPhone}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#025EC1] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h4 className="text-sm font-bold text-[#213245]">Ethical Second Opinions</h4>
                    <p className="text-xs text-[#59616B] mt-1 leading-relaxed">
                      ~90% of spine cases at Momentum Clinic are managed conservatively without surgery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
