import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Cpu, Calendar } from 'lucide-react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { PageBanner } from '../../components/Hero/PageBanner';
import { SafeImage } from '../../components/Media/SafeImage';
import { ClinicButton } from '../../components/Buttons/ClinicButton';
import { DoctorCard } from '../../components/Cards/DoctorCard';
import { FAQAccordion } from '../../components/Accordions/FAQAccordion';
import { TREATMENTS } from '../../data/treatments';
import { DOCTORS } from '../../data/doctors';

interface TreatmentDetailPageProps {
  forcedSlug?: string;
}

export const TreatmentDetailPage: React.FC<TreatmentDetailPageProps> = ({ forcedSlug }) => {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const slug = forcedSlug || paramSlug;
  const treatment = TREATMENTS.find((t) => t.slug === slug);

  useDocumentMeta({
    title: treatment
      ? `${treatment.title} | Momentum Clinic`
      : 'Treatment Not Found | Momentum Clinic',
    description: treatment
      ? treatment.heroSubtitle
      : 'Spine treatment details at Momentum Clinic.',
    canonicalPath: treatment ? `/treatments/${treatment.slug}` : '/treatments',
  });

  if (!treatment) {
    return (
      <div className="py-24 site-container text-center">
        <h1 className="heading-section">Treatment Page Not Found</h1>
        <p className="body-copy mt-3">Browse all spine treatments and procedures below.</p>
        <div className="mt-6">
          <ClinicButton to="/treatments">View All Treatments</ClinicButton>
        </div>
      </div>
    );
  }

  const specialistDoctors = DOCTORS.filter((d) => treatment.specialistSlugs.includes(d.slug));
  const relatedTreatments = TREATMENTS.filter((t) => treatment.relatedSlugs.includes(t.slug));

  return (
    <div>
      <PageBanner
        eyebrow={`Treatments & Procedures · ${treatment.category}`}
        title={treatment.title}
        subtitle={treatment.heroSubtitle}
        breadcrumbs={[
          { label: 'Treatments', to: '/treatments' },
          { label: treatment.shortTitle },
        ]}
      />

      {/* Overview & Hero Visual */}
      <section className="py-16 lg:py-[100px] bg-white">
        <div className="site-container space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <p className="text-sm font-bold text-[#025EC1] mb-2">Treatment Overview</p>
              <h2 className="heading-section">Clinical Purpose &amp; Indications</h2>
              <p className="body-copy mt-4">{treatment.overview}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <ClinicButton
                  to={`/book-appointment?treatment=${encodeURIComponent(treatment.shortTitle)}`}
                  icon={<Calendar className="w-4 h-4" />}
                >
                  Book Consultation
                </ClinicButton>
                <ClinicButton to="/telemedicine" variant="white">
                  Request Second Opinion
                </ClinicButton>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-[12px] overflow-hidden shadow-[0_2px_12px_rgba(33,50,69,0.08)] h-full min-h-[280px]">
                <SafeImage
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Symptoms & Approach Split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-[12px] bg-[#F5F9FE] border border-[#025EC1]/12 p-7 sm:p-8">
              <h2 className="text-2xl font-bold text-[#213245] mb-4">
                Symptoms &amp; Conditions Addressed
              </h2>
              <ul className="space-y-3">
                {treatment.symptomsAndConditions.map((sym) => (
                  <li key={sym} className="flex items-start gap-2.5 text-[15px] text-[#213245]">
                    <CheckCircle2 className="w-5 h-5 text-[#025EC1] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{sym}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[12px] border border-black/8 bg-white p-7 sm:p-8 shadow-[0_2px_12px_rgba(33,50,69,0.05)]">
              <h2 className="text-2xl font-bold text-[#213245] mb-4">
                Momentum Clinic Treatment Approach
              </h2>
              <ul className="space-y-3">
                {treatment.treatmentApproach.map((app) => (
                  <li key={app} className="flex items-start gap-2.5 text-[15px] text-[#59616B]">
                    <CheckCircle2 className="w-5 h-5 text-[#025EC1] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Benefits */}
          <div>
            <h2 className="heading-section mb-6">Clinical Benefits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {treatment.benefits.map((benefit, idx) => (
                <div key={benefit} className="card-surface p-6">
                  <span className="text-lg font-extrabold text-[#025EC1] tabular-nums">
                    0{idx + 1}
                  </span>
                  <p className="mt-2 text-[15px] font-semibold text-[#213245] leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Procedure Steps */}
          <div className="rounded-[12px] bg-[#F5F9FE] p-7 sm:p-10 border border-[#025EC1]/12">
            <h2 className="heading-section mb-8">Step-by-Step Procedure Pathway</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {treatment.procedureSteps.map((step) => (
                <div key={step.step} className="bg-white rounded-[12px] p-6 border border-black/6">
                  <h3 className="text-base font-bold text-[#025EC1]">{step.step}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#59616B]">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Used */}
          <div>
            <h2 className="heading-section mb-6">Technology Supporting This Care</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {treatment.technologyUsed.map((tech) => (
                <div key={tech.name} className="card-surface p-6">
                  <Cpu className="w-6 h-6 text-[#025EC1] mb-3" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-[#213245]">{tech.name}</h3>
                  <p className="mt-2 text-sm text-[#59616B] leading-relaxed">{tech.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Specialist Doctors */}
          {specialistDoctors.length > 0 && (
            <div>
              <h2 className="heading-section mb-6">Specialists Leading This Treatment</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {specialistDoctors.map((doc) => (
                  <DoctorCard key={doc.slug} doctor={doc} />
                ))}
              </div>
            </div>
          )}

          {/* Treatment FAQs */}
          {treatment.faqs.length > 0 && (
            <div className="max-w-4xl">
              <h2 className="heading-section mb-6">Frequently Asked Questions</h2>
              <FAQAccordion items={treatment.faqs} />
            </div>
          )}

          {/* Related Treatments */}
          {relatedTreatments.length > 0 && (
            <div>
              <h2 className="heading-section mb-6">Related Spine Treatments</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedTreatments.map((rel) => (
                  <Link
                    key={rel.slug}
                    to={`/treatments/${rel.slug}`}
                    className="card-surface p-6 flex flex-col justify-between"
                  >
                    <div>
                      <p className="text-xs font-bold text-[#025EC1]">{rel.category}</p>
                      <h3 className="mt-1 text-lg font-bold text-[#213245]">{rel.title}</h3>
                      <p className="mt-2 text-sm text-[#59616B] line-clamp-2">{rel.heroSubtitle}</p>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#025EC1]">
                      <span>View Treatment</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Appointment CTA */}
          <div className="rounded-[12px] navy-gradient text-white p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">
                Discuss {treatment.shortTitle} With Our Spine Team
              </h3>
              <p className="mt-2 text-white/85 max-w-2xl">
                Schedule an OPD visit or upload prior MRI scans via Telemedicine for personalized guidance.
              </p>
            </div>
            <div className="shrink-0">
              <ClinicButton
                to={`/book-appointment?treatment=${encodeURIComponent(treatment.shortTitle)}`}
                variant="white"
              >
                Book Appointment
              </ClinicButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
