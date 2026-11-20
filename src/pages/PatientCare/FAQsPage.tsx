import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { PageBanner } from '../../components/Hero/PageBanner';
import { FAQAccordion } from '../../components/Accordions/FAQAccordion';
import { CLINICAL_FAQS } from '../../data/patientCare';
import { ClinicButton } from '../../components/Buttons/ClinicButton';

const FAQ_CATEGORIES = [
  'All Questions',
  'General & Appointments',
  'Conservative Care & Rehab',
  'Surgery & Recovery',
  'Insurance & International',
];

export const FAQsPage: React.FC = () => {
  useDocumentMeta({
    title: 'Frequently Asked Questions (FAQs) | Momentum Clinic',
    description:
      'Answers to common patient questions about spine consultations, Open Standing MRI, conservative physiotherapy, MISS recovery, and insurance.',
    canonicalPath: '/patient-care/faqs',
  });

  const [selectedCategory, setSelectedCategory] = useState('All Questions');
  const [query, setQuery] = useState('');

  const filteredFaqs = useMemo(() => {
    return CLINICAL_FAQS.filter((item) => {
      const catMatch =
        selectedCategory === 'All Questions' || item.category === selectedCategory;
      const q = query.trim().toLowerCase();
      const textMatch =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q);
      return catMatch && textMatch;
    });
  }, [selectedCategory, query]);

  return (
    <div>
      <PageBanner
        eyebrow="Patient Care"
        title="Frequently Asked Questions"
        subtitle="Clear, evidence-based answers regarding spine evaluations, non-surgical rehabilitation, recovery timelines, and hospital services."
        breadcrumbs={[
          { label: 'Patient Care', to: '/patient-care/patient-services' },
          { label: 'FAQs' },
        ]}
      />

      <section className="py-16 lg:py-[100px] bg-white">
        <div className="max-w-[1040px] mx-auto px-4 sm:px-6 md:pl-[4.5rem] md:pr-[4rem] xl:px-8">
          <div className="space-y-5 mb-10">
            <div className="relative">
              <Search
                className="w-4 h-4 text-[#59616B] absolute left-4 top-1/2 -translate-y-1/2"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search spine care questions (e.g. MRI, sciatica, cashless, walking)..."
                aria-label="Search FAQs"
                className="w-full rounded-[50px] border border-[#D1D8E0] bg-white pl-11 pr-4 py-3 text-[15px] text-[#213245] focus:outline-none focus:border-[#025EC1]"
              />
            </div>

            <div className="flex flex-wrap gap-2" role="tablist" aria-label="FAQ categories">
              {FAQ_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-[50px] text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-[#025EC1] text-white'
                      : 'bg-[#F5F9FE] text-[#213245] hover:bg-[#EAF2FD]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filteredFaqs.length === 0 ? (
            <div className="rounded-[12px] bg-[#F5F9FE] p-8 text-center">
              <p className="font-bold text-[#213245]">No matching questions found.</p>
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setSelectedCategory('All Questions');
                }}
                className="mt-3 text-sm font-bold text-[#025EC1] hover:underline cursor-pointer"
              >
                Show all FAQs
              </button>
            </div>
          ) : (
            <FAQAccordion items={filteredFaqs} allowMultiple />
          )}

          <div className="mt-14 rounded-[12px] bg-[#F5F9FE] border border-[#025EC1]/12 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold text-[#213245]">Still Have a Clinical Question?</h2>
              <p className="mt-1 text-sm text-[#59616B]">
                Schedule an OPD visit or submit an inquiry to our patient care desk.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <ClinicButton to="/book-appointment">Book Appointment</ClinicButton>
              <ClinicButton to="/contact" variant="white">
                Ask Our Team
              </ClinicButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
