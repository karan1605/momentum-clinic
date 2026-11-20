import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { PageBanner } from '../../components/Hero/PageBanner';
import { SafeImage } from '../../components/Media/SafeImage';
import { LEADERSHIP_TEAM } from '../../data/aboutAndResearch';

export const LeadershipPage: React.FC = () => {
  useDocumentMeta({
    title: 'Leadership Team | Momentum Clinic',
    description:
      'Meet the clinical founders, directors, and research leaders guiding Momentum Clinic’s spine care excellence.',
    canonicalPath: '/about/leadership',
  });

  return (
    <div>
      <PageBanner
        eyebrow="About Momentum Clinic"
        title="Leadership Team"
        subtitle="Guided by pioneer spine surgeons and clinician-researchers committed to ethical care, academic mentorship, and clinical safety."
        breadcrumbs={[
          { label: 'About Us', to: '/about/overview' },
          { label: 'Leadership Team' },
        ]}
      />

      <section className="py-16 lg:py-[100px] bg-white">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {LEADERSHIP_TEAM.map((leader) => (
              <article key={leader.name} className="card-surface overflow-hidden flex flex-col sm:flex-row h-full">
                <div className="w-full sm:w-48 lg:w-52 aspect-[4/3] sm:aspect-auto sm:min-h-[240px] shrink-0 bg-[#F5F9FE]">
                  <SafeImage
                    src={leader.image}
                    alt={`${leader.name} — ${leader.role}`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <p className="text-xs font-bold text-[#025EC1]">{leader.role}</p>
                    <h2 className="mt-1 text-xl font-bold text-[#213245]">{leader.name}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-[#59616B]">{leader.bio}</p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-black/8 flex flex-wrap items-center justify-between gap-3">
                    <Link
                      to={`/doctors/${leader.doctorSlug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#025EC1] hover:underline whitespace-nowrap"
                    >
                      <span>View Clinical Profile</span>
                      <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                    </Link>
                    <Link
                      to={`/book-appointment?doctor=${leader.doctorSlug}`}
                      className="text-xs font-semibold text-[#213245] hover:text-[#025EC1] whitespace-nowrap"
                    >
                      Request Consultation
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
