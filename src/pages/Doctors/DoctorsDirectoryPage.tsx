import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { PageBanner } from '../../components/Hero/PageBanner';
import { DOCTORS, DOCTOR_DEPARTMENTS } from '../../data/doctors';
import { DoctorCard } from '../../components/Cards/DoctorCard';

export const DoctorsDirectoryPage: React.FC = () => {
  useDocumentMeta({
    title: 'Spine Surgeons & Specialists Directory | Momentum Clinic',
    description:
      'Meet Momentum Clinic’s spine and orthopaedic team led by Dr. Dinesh Kumar Agarwal (M.S., DNB Ortho · CMC Vellore Spine Fellow) alongside senior spine surgeons and neuro-spine specialists.',
    canonicalPath: '/doctors',
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('All Departments');

  const filteredDoctors = useMemo(() => {
    return DOCTORS.filter((doc) => {
      const matchesDept =
        selectedDept === 'All Departments' || doc.department === selectedDept;
      const q = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !q ||
        doc.name.toLowerCase().includes(q) ||
        doc.designation.toLowerCase().includes(q) ||
        doc.specialization.toLowerCase().includes(q) ||
        doc.focusAreas.some((f) => f.toLowerCase().includes(q));
      return matchesDept && matchesQuery;
    });
  }, [searchQuery, selectedDept]);

  return (
    <div>
      <PageBanner
        eyebrow="Medical Team"
        title="Doctors & Spine Experts"
        subtitle="Dedicated orthopedic spine surgeons, neuro-spine specialists, and clinical researchers committed to ethical, evidence-based spine care."
        breadcrumbs={[{ label: 'Doctors' }]}
      />

      <section className="py-16 lg:py-[100px] bg-white">
        <div className="site-container">
          {/* Search & Department Filter */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-10 pb-6 border-b border-black/8">
            <div className="relative w-full lg:max-w-sm">
              <Search
                className="w-4 h-4 text-[#59616B] absolute left-3.5 top-1/2 -translate-y-1/2"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search doctor, specialty or condition..."
                aria-label="Search doctors"
                className="w-full rounded-[50px] border border-[#D1D8E0] bg-white pl-10 pr-4 py-2.5 text-sm text-[#213245] focus:outline-none focus:border-[#025EC1]"
              />
            </div>

            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by department">
              {DOCTOR_DEPARTMENTS.map((dept) => (
                <button
                  key={dept}
                  type="button"
                  role="tab"
                  aria-selected={selectedDept === dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-4 py-2 rounded-[50px] text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    selectedDept === dept
                      ? 'bg-[#025EC1] text-white'
                      : 'bg-[#F5F9FE] text-[#213245] hover:bg-[#EAF2FD]'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {filteredDoctors.length === 0 ? (
            <div className="rounded-[12px] bg-[#F5F9FE] p-10 text-center">
              <p className="text-lg font-bold text-[#213245]">No matching specialists found</p>
              <p className="mt-2 text-sm text-[#59616B]">
                Try clearing your search term or selecting All Departments.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedDept('All Departments');
                }}
                className="mt-4 text-sm font-bold text-[#025EC1] hover:underline cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredDoctors.map((doctor) => (
                <DoctorCard key={doctor.slug} doctor={doctor} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
