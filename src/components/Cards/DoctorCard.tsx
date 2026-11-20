import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { DoctorProfile } from '../../data/doctors';
import { SafeImage } from '../Media/SafeImage';

interface DoctorCardProps {
  doctor: DoctorProfile;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <article className="card-surface overflow-hidden flex flex-col h-full">
      <div className="aspect-[4/3] w-full overflow-hidden bg-[#F5F9FE]">
        <SafeImage
          src={doctor.image}
          alt={`${doctor.name} — ${doctor.designation}`}
          className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs font-semibold text-[#025EC1] mb-1.5">
          {doctor.department} · {doctor.experienceLabel}
        </p>
        <h3 className="text-xl font-bold text-[#213245] leading-snug">
          <Link to={`/doctors/${doctor.slug}`} className="hover:text-[#025EC1] transition-colors">
            {doctor.name}
          </Link>
        </h3>
        <p className="text-sm font-semibold text-[#59616B] mt-1">{doctor.designation}</p>
        <p className="text-sm leading-relaxed text-[#59616B] mt-3 line-clamp-3 flex-1">
          {doctor.specialization}
        </p>

        <div className="mt-5 pt-4 border-t border-black/8 flex flex-wrap items-center justify-between gap-2.5">
          <Link
            to={`/doctors/${doctor.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#213245] hover:text-[#025EC1] transition-colors whitespace-nowrap"
          >
            <span>View Profile</span>
            <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </Link>

          <Link
            to={`/book-appointment?doctor=${doctor.slug}`}
            className="inline-flex items-center gap-1.5 rounded-[50px] bg-[#F5F9FE] text-[#025EC1] hover:bg-[#025EC1] hover:text-white px-3.5 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0"
          >
            <Calendar className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>Book Appointment</span>
          </Link>
        </div>
      </div>
    </article>
  );
};
