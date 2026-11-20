import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Award,
  ChevronLeft,
  ChevronRight,
  Film,
  HeartHandshake,
  Instagram,
  Lightbulb,
  Play,
  ShieldCheck,
  Star,
  Stethoscope,
  ThumbsUp,
  X,
  CheckCircle2,
  Globe,
} from 'lucide-react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { CLINIC_IMAGES, CLINIC_INFO } from '../../data/clinicInfo';
import { DOCTORS } from '../../data/doctors';
import {
  HOMEPAGE_JOURNEY_STEPS,
  SPECIALTY_CLINICS,
  SPINE_KNOWLEDGE_REELS,
  SpineReelItem,
  TESTIMONIALS,
} from '../../data/patientCare';
import { ACHIEVEMENT_SLIDES } from '../../data/aboutAndResearch';
import { ORBITAL_TECH_MACHINES } from '../../data/technology';
import { BLOG_ARTICLES } from '../../data/blog';
import { ClinicButton } from '../../components/Buttons/ClinicButton';
import { SafeImage } from '../../components/Media/SafeImage';
import { Reveal } from '../../components/Motion/Reveal';
import { CounterUp } from '../../components/Motion/CounterUp';

const WHY_CHOOSE_ITEMS = [
  {
    id: 'proven',
    title: 'Proven Results',
    description: '300,000+ patients treated with proven outcomes',
    icon: ThumbsUp,
  },
  {
    id: 'experience',
    title: 'Expert Experience',
    description: '120+ years of combined expertise in spine care',
    icon: Lightbulb,
  },
  {
    id: 'protocols',
    title: 'Precision Protocols',
    description: 'The Momentum Way: Refined Diagnosis & Treatment Protocols',
    icon: ShieldCheck,
  },
  {
    id: 'patients',
    title: '300,000+ Patients',
    description: 'Successfully treated with consistently proven clinical outcomes',
    icon: Stethoscope,
  },
];

const KickerMark: React.FC<{ label: string; light?: boolean }> = ({ label, light = false }) => (
  <span
    className={`sub-title-kicker ${light ? '!text-[#9EC5FE]' : '!text-[#025EC1]'}`}
  >
    <svg
      width="22"
      height="18"
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M12 2C9.5 4.8 8.8 7.5 10.4 10.2C12 12.8 14.4 14.2 13 18"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="12" cy="4.2" r="1.8" fill="currentColor" />
      <circle cx="10.2" cy="10" r="1.8" fill="currentColor" />
      <circle cx="13.2" cy="15.5" r="1.8" fill="currentColor" />
    </svg>
    <span>{label}</span>
  </span>
);

export const HomePage: React.FC = () => {
  useDocumentMeta({
    title: 'Momentum Clinic | Dr. Dinesh Kumar Agarwal — Spine & Orthopaedic Care, Dhanbad',
    description:
      'Momentum Speciality Clinic — A Centre For Backpain & Spinal Disorders in Dhanbad, led by Dr. Dinesh Kumar Agarwal (M.S., DNB Ortho · CMC Vellore Spine Fellow).',
    canonicalPath: '/',
  });

  // Section 4: Specialty Clinics (12 auto-rotating tabs pausing on hover)
  const [activeClinicIdx, setActiveClinicIdx] = useState(0);
  const [clinicPaused, setClinicPaused] = useState(false);

  useEffect(() => {
    if (clinicPaused) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    const timer = window.setInterval(() => {
      setActiveClinicIdx((prev) => (prev + 1) % SPECIALTY_CLINICS.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [clinicPaused]);

  const activeClinic = SPECIALTY_CLINICS[activeClinicIdx] || SPECIALTY_CLINICS[0];

  // Section 5: Meet Our Experts carousel index (window of visible doctors)
  const [expertOffset, setExpertOffset] = useState(0);
  const maxExpertDesktopOffset = Math.max(0, DOCTORS.length - 6);
  const nextExperts = () => setExpertOffset((prev) => (prev >= maxExpertDesktopOffset ? 0 : prev + 1));
  const prevExperts = () => setExpertOffset((prev) => (prev <= 0 ? maxExpertDesktopOffset : prev - 1));

  // Section 6: Spine Knowledge Hub interactive video brief modal & 4-card slice
  const [activeReel, setActiveReel] = useState<SpineReelItem | null>(null);

  // Section 8: Our Technology mobile Load More count
  const [mobileTechCount, setMobileTechCount] = useState(2);

  // Section 9: Voices of Recovery Google review carousel & read-more state
  const [reviewOffset, setReviewOffset] = useState(0);
  const [expandedReviewId, setExpandedReviewId] = useState<string | null>(null);
  const maxReviewOffset = Math.max(0, TESTIMONIALS.length - 4);
  const prevReviews = () => setReviewOffset((prev) => (prev <= 0 ? maxReviewOffset : prev - 1));
  const nextReviews = () => setReviewOffset((prev) => (prev >= maxReviewOffset ? 0 : prev + 1));

  // Section 10: Working Process auto-cycling step highlight (2000ms, pauses on hover)
  const [activeProcessIdx, setActiveProcessIdx] = useState(0);
  const [processPaused, setProcessPaused] = useState(false);

  useEffect(() => {
    if (processPaused) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    const timer = window.setInterval(() => {
      setActiveProcessIdx((prev) => (prev + 1) % HOMEPAGE_JOURNEY_STEPS.length);
    }, 2000);
    return () => window.clearInterval(timer);
  }, [processPaused]);

  const featuredArticle = BLOG_ARTICLES[0];
  const secondaryArticles = BLOG_ARTICLES.slice(1, 4);

  return (
    <div>
      {/* ============================================================
          SECTION 1: HERO SLIDER SECTION WITH NOTCHED FEATURE OVERLAY
      ============================================================ */}
      <section className="hero-slider-section">
        {/* Background Atmospheric Visual */}
        <div className="relative">
          <div className="relative h-[320px] md:h-auto md:absolute md:inset-0 md:top-[84px] overflow-hidden z-0">
            <SafeImage
              src={CLINIC_IMAGES.heroClinic}
              alt="Momentum Clinic super-specialty spine consultation suite"
              eager
              className="w-full h-full object-cover object-center"
            />
            <div
              className="hidden md:block absolute inset-0"
              style={{
                background:
                  'linear-gradient(90deg, rgba(248,251,255,0.96) 0%, rgba(248,251,255,0.88) 46%, rgba(248,251,255,0.22) 100%)',
              }}
            />
          </div>

          <div className="relative z-10 site-container">
            <div className="min-h-0 md:min-h-[700px] xl:min-h-[760px] pt-8 pb-10 md:pt-[140px] xl:pt-[180px] md:pb-[220px] xl:pb-[210px] flex items-center">
              <div className="max-w-[760px] w-full">
                <span className="inline-flex items-center gap-2 text-[#025EC1] text-[13px] sm:text-[14px] font-semibold leading-none bg-[#025EC1]/[0.07] px-4 py-2.5 rounded-full mb-6">
                  <HeartHandshake className="w-[18px] h-[18px] shrink-0" aria-hidden="true" />
                  <span>{CLINIC_INFO.leadDoctorFellowship} · {CLINIC_INFO.badgeLabel}</span>
                </span>

                <h1 className="slider-hero-title">
                  Momentum Speciality Clinic — A Centre For Backpain &amp; Spinal Disorders
                </h1>

                <p className="mt-5 text-[16px] sm:text-[18px] leading-[1.56] text-[#59616B] max-w-[660px] font-medium">
                  Led by <strong className="font-bold text-[#213245]">{CLINIC_INFO.leadDoctor}</strong> ({CLINIC_INFO.leadDoctorCredentials}) — providing{' '}
                  <strong className="font-bold text-[#213245]">
                    complex spine surgeries, scoliosis correction, disc replacements, and musculoskeletal trauma care
                  </strong>{' '}
                  in Dhanbad.
                </p>

                <div className="mt-6 flex items-center flex-wrap gap-3.5">
                  <ClinicButton to="/book-appointment">Book Appointment</ClinicButton>
                  <ClinicButton to="/treatments" variant="white">
                    Explore Services
                  </ClinicButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom-Right Overlapping Features Notch */}
        <div className="md:absolute md:bottom-0 md:left-0 w-full z-20 px-4 md:pl-[4.5rem] md:pr-[4rem] xl:pr-[91px] pb-6 md:pb-0 flex justify-end">
          <div className="features-wrap-notch flex-col sm:flex-row w-full md:w-auto">
            <div className="feature-notch-item">
              <div className="feature-icon-circle" aria-hidden="true">
                <ThumbsUp className="w-8 h-8" strokeWidth={1.8} />
              </div>
              <div>
                <h2 className="text-[19px] sm:text-[22px] font-bold text-[#213245] leading-tight">
                  {CLINIC_INFO.leadDoctor}
                </h2>
                <p className="mt-1.5 text-[14.5px] sm:text-[15.5px] leading-[1.35] text-[#59616B]">
                  Consultant Orthopaedic &amp; Spine Surgeon · {CLINIC_INFO.leadDoctorFellowship} (10+ yrs expertise)
                </p>
              </div>
            </div>

            <div className="feature-notch-item">
              <div className="feature-icon-circle" aria-hidden="true">
                <Lightbulb className="w-8 h-8" strokeWidth={1.8} />
              </div>
              <div>
                <h2 className="text-[19px] sm:text-[22px] font-bold text-[#213245] leading-tight">
                  Chandra Arcade, Dhaiya · Dhanbad
                </h2>
                <p className="mt-1.5 text-[14.5px] sm:text-[15.5px] leading-[1.35] text-[#59616B]">
                  Mon–Fri 7:00 PM – 9:00 PM ({CLINIC_INFO.phone}) · Nichtipur Hospital 10 AM – 4 PM ({CLINIC_INFO.secondaryPhone})
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: ABOUT MOMENTUM CLINIC (ASYMMETRIC MASK + COUNTERS)
      ============================================================ */}
      <section className="py-16 lg:py-[100px] bg-white overflow-hidden">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Masked Heritage Image + Overlapping Counter & Brand Card */}
            <div className="lg:col-span-6">
              <Reveal direction="left" delay={0.15} duration={0.9}>
                <div className="about-img-masked aspect-[640/500] bg-[#EDF4FB]">
                  <SafeImage
                    src={CLINIC_IMAGES.heritageHealing}
                    alt="Classical heritage artwork depicting gentle spine alignment and compassionate care"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>

              <div className="relative z-10 mt-4 md:-mt-[64px] flex flex-col sm:flex-row items-stretch sm:items-end gap-4">
                <Reveal direction="up" delay={0.2} duration={0.85} className="sm:max-w-[270px] w-full">
                  <div className="bg-[#025EC1]/[0.07] rounded-[22px] px-5 py-7">
                    <div className="flex items-baseline text-[#213245] text-[52px] xl:text-[64px] font-semibold leading-none tracking-[-0.03em] mb-2">
                      <CounterUp target={120} />
                      <sup className="text-[28px] ml-0.5">+</sup>
                    </div>
                    <p className="text-[15.5px] font-medium text-[#59616B] leading-snug">
                      years of combined spine care experience
                    </p>
                  </div>
                </Reveal>

                <Reveal direction="up" delay={0.25} duration={0.85} className="flex-1">
                  <div className="bg-[#025EC1]/[0.07] border border-[#213245]/[0.04] rounded-[22px] px-6 py-6 flex items-center justify-between gap-4 h-full">
                    <span className="text-[16px] font-semibold text-[#213245] leading-snug">
                      Excellence in Spine Care
                    </span>
                    <div className="pl-4 border-l border-[#213245]/15 shrink-0 flex items-center gap-2">
                      <span className="w-9 h-9 rounded-[10px] bg-[#025EC1] text-white flex items-center justify-center font-extrabold text-lg">
                        M
                      </span>
                      <span className="text-xs font-extrabold tracking-[0.14em] uppercase text-[#025EC1]">
                        Momentum
                      </span>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Right Column: Editorial Story, Counters, CTA & Rotating Reach Badge */}
            <div className="lg:col-span-6">
              <Reveal direction="right" delay={0.2} duration={0.9}>
                <div className="relative bg-[#F5F9FE] rounded-[22px] p-7 sm:p-10 xl:p-12">
                  <KickerMark label="ABOUT MOMENTUM" />

                  <h2 className="sec-title mb-5">Restoring Mobility &amp; Life Quality in Dhanbad</h2>

                  <p className="body-copy mb-5">
                    Dedicated to restoring mobility and enhancing life quality, {CLINIC_INFO.specialityName} — {CLINIC_INFO.subtitle} — delivers state-of-the-art spinal solutions, disc replacements, and musculoskeletal trauma care across Dhaiya and Katras Bazar.
                  </p>
                  <p className="body-copy mb-7">
                    Led by {CLINIC_INFO.leadDoctor} ({CLINIC_INFO.leadDoctorCredentials}, trained at CMC Vellore with over 10 years of clinical expertise), Momentum Clinic unites ethical second opinions, conservative spine care, and advanced surgical precision.
                  </p>

                  {/* Fun Facts */}
                  <div className="flex flex-wrap sm:flex-nowrap gap-6 sm:gap-12 mb-8">
                    <div className="relative pr-0 sm:pr-7 sm:border-r border-[#213245]/15">
                      <div className="flex items-baseline text-[#213245] text-[50px] xl:text-[64px] font-semibold leading-none tracking-[-0.03em] mb-1.5">
                        <CounterUp target={3} formatLocale={false} />
                        <span>L</span>
                        <sup className="text-[28px] ml-0.5">+</sup>
                      </div>
                      <Link
                        to="/patient-care/international-patients"
                        className="group inline-flex items-center gap-1.5 text-[16px] font-medium text-[#59616B] hover:text-[#025EC1] transition-colors"
                      >
                        <span>Patients Treated</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#025EC1] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>

                    <div>
                      <div className="flex items-baseline text-[#213245] text-[50px] xl:text-[64px] font-semibold leading-none tracking-[-0.03em] mb-1.5">
                        <CounterUp target={25} formatLocale={false} />
                        <sup className="text-[28px] ml-0.5">+</sup>
                      </div>
                      <p className="text-[16px] font-medium text-[#59616B]">Spine Care Experts</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <ClinicButton to="/about/overview">Learn More</ClinicButton>

                    {/* Rotating Patient Reach Circular Emblem */}
                    <Link
                      to="/patient-care/international-patients"
                      title="Explore Global Patient Reach"
                      aria-label="Explore Momentum Clinic Global Patient Reach across 23+ countries"
                      className="award-wrap-btn hidden sm:flex items-center justify-center relative w-[140px] h-[140px] xl:w-[166px] xl:h-[166px] rounded-full bg-white shadow-sm border border-[#025EC1]/10 shrink-0"
                    >
                      <svg
                        viewBox="0 0 160 160"
                        className="award-spin-ring w-full h-full p-1 text-[#025EC1]"
                        aria-hidden="true"
                      >
                        <defs>
                          <path
                            id="momentumCirclePath"
                            d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                          />
                        </defs>
                        <text
                          fill="currentColor"
                          fontSize="11.2"
                          fontWeight="700"
                          letterSpacing="2.4"
                        >
                          <textPath href="#momentumCirclePath">
                            EST. 2004 • GLOBAL SPINE REACH • 23+ COUNTRIES •
                          </textPath>
                        </text>
                      </svg>
                      <span className="award-center-icon absolute w-[68px] h-[68px] rounded-full bg-[#F5F9FE] text-[#025EC1] flex items-center justify-center transition-transform duration-500">
                        <Globe className="w-8 h-8" strokeWidth={1.7} />
                      </span>
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: WHY CHOOSE US — DUAL INFINITE HORIZONTAL MARQUEE
      ============================================================ */}
      <section className="pb-16 lg:pb-[100px] bg-white">
        <div className="site-container">
          <div className="max-w-[565px] mx-auto text-center mb-10">
            <Reveal direction="up" delay={0.1}>
              <KickerMark label="Why Choose Us" />
              <h2 className="sec-title mb-4">What Makes Us Different</h2>
              <p className="body-copy">
                Advanced spine care with proven outcomes, expert specialists, and cutting-edge technology.
              </p>
            </Reveal>
          </div>

          <div className="marquee-viewport">
            {/* Row 1 (Scrolls Left) */}
            <Link to="/about/overview" className="scroll-slider-row">
              {[0, 1].map((dup) => (
                <div key={`row1-${dup}`} className="scroll-track">
                  {WHY_CHOOSE_ITEMS.map((item, idx) => {
                    const Icon = item.icon;
                    const isOdd = idx % 2 === 0;
                    return (
                      <div
                        key={`r1-${dup}-${item.id}`}
                        className={`w-[320px] sm:w-[370px] shrink-0 rounded-[12px] p-7 sm:p-9 flex items-start gap-5 ${
                          isOdd ? 'bg-[#025EC1]/[0.06]' : 'bg-[#59616B]/[0.06]'
                        }`}
                      >
                        <span className="w-[50px] h-[50px] rounded-full bg-[#59616B] text-white flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6" strokeWidth={1.9} />
                        </span>
                        <div>
                          <h3 className="text-[20px] font-bold text-[#213245] capitalize leading-tight">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-[15px] leading-[1.55] text-[#59616B]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </Link>

            {/* Row 2 (Scrolls Right) */}
            <Link to="/about/overview" className="scroll-slider-row reverse">
              {[0, 1].map((dup) => (
                <div key={`row2-${dup}`} className="scroll-track">
                  {WHY_CHOOSE_ITEMS.map((item, idx) => {
                    const Icon = item.icon;
                    const isOdd = idx % 2 === 0;
                    return (
                      <div
                        key={`r2-${dup}-${item.id}`}
                        className={`w-[320px] sm:w-[370px] shrink-0 rounded-[12px] p-7 sm:p-9 flex items-start gap-5 ${
                          isOdd ? 'bg-[#59616B]/[0.06]' : 'bg-[#025EC1]/[0.06]'
                        }`}
                      >
                        <span className="w-[50px] h-[50px] rounded-full bg-[#59616B] text-white flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6" strokeWidth={1.9} />
                        </span>
                        <div>
                          <h3 className="text-[20px] font-bold text-[#213245] capitalize leading-tight">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-[15px] leading-[1.55] text-[#59616B]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: SPECIALTY CLINICS — 12 INTERACTIVE AUTO-ROTATING TABS
      ============================================================ */}
      <section className="pb-16 lg:pb-[100px] bg-white">
        <div className="site-container">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div className="max-w-[820px]">
              <KickerMark label="SPECIALTY CLINICS" />
              <h2 className="sec-title mb-4">We Treat All Kinds of Spine Problems</h2>
              <p className="body-copy">
                At Momentum Clinic Spine Hospital &amp; Research Institute every kind of spine treatment is managed systematically with different areas divided into dedicated specialty clinics led by sub-specialty heads for consistent clinical outcomes.
              </p>
            </div>
            <div className="shrink-0">
              <ClinicButton to="/contact">Contact Us</ClinicButton>
            </div>
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
            onMouseEnter={() => setClinicPaused(true)}
            onMouseLeave={() => setClinicPaused(false)}
          >
            {/* Desktop 12-Item Vertical Tab Sidebar */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="clinic-sidebar-panel h-full">
                <ul role="tablist" aria-label="Specialty Spine Clinics" className="space-y-0.5">
                  {SPECIALTY_CLINICS.map((clinic, idx) => {
                    const isActive = idx === activeClinicIdx;
                    return (
                      <li key={clinic.id} role="presentation">
                        <button
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          onClick={() => setActiveClinicIdx(idx)}
                          className={`clinic-tab-btn ${isActive ? 'is-active' : ''}`}
                        >
                          <span className="tab-num tabular-nums">{clinic.num}</span>
                          <span className="tab-text">{clinic.title}</span>
                          <span className="tab-arrow" aria-hidden="true">
                            <ArrowUpRight className="w-4 h-4" />
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Right Tab Content Panel (Desktop & Mobile Interactive Slider) */}
            <div className="lg:col-span-8">
              <div
                role="tabpanel"
                className="border border-[#213245]/10 rounded-[22px] p-5 sm:p-8 h-full flex flex-col justify-between bg-white"
              >
                <div className="flex flex-col sm:flex-row gap-5 items-start">
                  <div className="w-[62px] h-[62px] sm:w-[70px] sm:h-[70px] rounded-[12px] border border-[#59616B]/15 bg-white flex items-center justify-center shrink-0 text-[#025EC1]">
                    <Stethoscope className="w-8 h-8" strokeWidth={1.7} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3">
                      <span className="lg:hidden text-xs font-bold text-[#025EC1] tabular-nums">
                        {activeClinic.num} / 12
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-[32px] font-bold text-[#213245] leading-[1.25] capitalize">
                      {activeClinic.title}
                    </h3>
                    <p className="body-copy mt-2.5">{activeClinic.description}</p>
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs font-semibold text-[#59616B] min-w-0">
                        Clinic Lead: {activeClinic.lead}
                      </span>
                      <Link to={activeClinic.link} className="text-btn shrink-0">
                        <span className="btn-icon" aria-hidden="true">
                          <ArrowRight className="w-4 h-4" />
                        </span>
                        <span>Explore Care Pathway</span>
                        <span className="btn-icon" aria-hidden="true">
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-[16px] overflow-hidden border border-[#213245]/[0.06] h-[240px] sm:h-[320px] lg:h-[360px] w-full bg-[#F5F9FE]">
                  <SafeImage
                    src={activeClinic.image}
                    alt={`${activeClinic.title} clinic pathway`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Mobile & Tablet Prev/Next & Pagination Controls */}
                <div className="lg:hidden mt-5 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    aria-label="Previous specialty clinic"
                    onClick={() =>
                      setActiveClinicIdx((prev) =>
                        prev === 0 ? SPECIALTY_CLINICS.length - 1 : prev - 1
                      )
                    }
                    className="w-11 h-11 rounded-full border border-[#025EC1]/25 text-[#025EC1] hover:bg-[#025EC1] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-1.5 flex-wrap justify-center">
                    {SPECIALTY_CLINICS.map((c, idx) => (
                      <button
                        key={c.id}
                        type="button"
                        aria-label={`Show ${c.title}`}
                        onClick={() => setActiveClinicIdx(idx)}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          idx === activeClinicIdx ? 'w-6 bg-[#025EC1]' : 'w-2 bg-[#025EC1]/30'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    aria-label="Next specialty clinic"
                    onClick={() =>
                      setActiveClinicIdx((prev) => (prev + 1) % SPECIALTY_CLINICS.length)
                    }
                    className="w-11 h-11 rounded-full border border-[#025EC1]/25 text-[#025EC1] hover:bg-[#025EC1] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5: MEET OUR EXPERTS — 6-UP COMPACT PORTRAIT CAROUSEL
      ============================================================ */}
      <section className="py-16 lg:py-[100px] bg-[#F5F6F6]">
        <div className="site-container">
          <div className="max-w-[758px] mx-auto text-center mb-10">
            <Reveal direction="up" delay={0.1}>
              <KickerMark label="Meet our Experts" />
              <h2 className="sec-title">
                Expert Spine Specialists Across Patient Care Departments
              </h2>
            </Reveal>
          </div>

          <div className="relative group">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {DOCTORS.slice(expertOffset, expertOffset + 6).map((doc) => (
                <article
                  key={doc.slug}
                  className="expert-team-card bg-white border border-[#59616B]/10 rounded-[12px] p-2.5 flex flex-col h-full shadow-[0_2px_10px_rgba(33,50,69,0.03)]"
                >
                  <div className="expert-photo relative overflow-hidden rounded-[10px] aspect-[1/1.02] w-full shrink-0 bg-[#EDF4FB]">
                    <Link to={`/doctors/${doc.slug}`} className="block w-full h-full">
                      <SafeImage
                        src={doc.image}
                        alt={doc.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </Link>
                  </div>

                  <div className="pt-3.5 pb-1.5 px-1.5">
                    <h3 className="text-[16.5px] font-bold text-[#213245] leading-snug">
                      <Link
                        to={`/doctors/${doc.slug}`}
                        className="hover:text-[#025EC1] transition-colors"
                      >
                        {doc.name}
                      </Link>
                    </h3>
                    <span className="mt-1 block text-[12.5px] text-[#59616B] leading-snug">
                      {doc.designation}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            {DOCTORS.length > 6 && (
              <>
                <button
                  type="button"
                  onClick={prevExperts}
                  aria-label="Previous specialists"
                  className="hidden xl:flex items-center justify-center w-10 h-10 rounded-full bg-white border border-[#025EC1]/30 text-[#025EC1] hover:bg-[#025EC1] hover:text-white shadow-md absolute top-1/2 -left-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer z-20"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextExperts}
                  aria-label="Next specialists"
                  className="hidden xl:flex items-center justify-center w-10 h-10 rounded-full bg-white border border-[#025EC1]/30 text-[#025EC1] hover:bg-[#025EC1] hover:text-white shadow-md absolute top-1/2 -right-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer z-20"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex xl:hidden items-center justify-center gap-3 mt-6">
                  <button
                    type="button"
                    onClick={prevExperts}
                    aria-label="Previous specialists"
                    className="w-10 h-10 rounded-full bg-white border border-[#025EC1]/25 text-[#025EC1] hover:bg-[#025EC1] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextExperts}
                    aria-label="Next specialists"
                    className="w-10 h-10 rounded-full bg-white border border-[#025EC1]/25 text-[#025EC1] hover:bg-[#025EC1] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6: SPINE KNOWLEDGE HUB (INSTAGRAM HEADER + 4-COLUMN REELS)
      ============================================================ */}
      <section className="py-16 lg:py-[100px] bg-white">
        <div className="site-container">
          <div className="text-center mb-6">
            <Reveal direction="up" delay={0.1}>
              <h2 className="sec-title mb-0">Spine Knowledge Hub</h2>
            </Reveal>
          </div>

          {/* Instagram Social Feed Header Strip (matches live reference bar) */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-10 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full border-2 border-[#025EC1]/25 bg-[#F5F9FE] text-[#025EC1] flex items-center justify-center font-extrabold text-sm shadow-xs">
                M
              </div>
              <span className="font-bold text-[#213245] text-[15px]">momentumclinic</span>
            </div>

            <div className="flex items-center gap-4 text-[#59616B] text-[13.5px]">
              <span>
                <strong className="font-bold text-[#213245] tabular-nums">634</strong> posts
              </span>
              <span>
                <strong className="font-bold text-[#213245] tabular-nums">8.3K</strong> followers
              </span>
            </div>

            <a
              href={CLINIC_INFO.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-[8px] bg-[#025EC1] hover:bg-[#0D6EFD] text-white text-[13px] font-semibold px-4 py-2 transition-colors shadow-xs"
            >
              <Instagram className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Follow</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SPINE_KNOWLEDGE_REELS.slice(0, 4).map((reel, idx) => (
              <Reveal key={reel.id} direction="up" delay={0.08 * idx} duration={0.7}>
                <button
                  type="button"
                  onClick={() => setActiveReel(reel)}
                  aria-label={`Watch educational video brief: ${reel.title}`}
                  className="group relative w-full rounded-[14px] overflow-hidden text-left block aspect-[3/4] bg-[#213245] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#025EC1] shadow-[0_6px_22px_rgba(33,50,69,0.08)]"
                >
                  <SafeImage
                    src={reel.thumbnail}
                    alt={reel.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(16,32,51,0.12) 0%, rgba(16,32,51,0.25) 45%, rgba(12,24,38,0.88) 100%)',
                    }}
                  />

                  {/* Center Hover Play Ring */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center z-10 opacity-85 group-hover:opacity-100 transition-opacity">
                    <span className="reel-pulse-ring" aria-hidden="true" />
                    <span className="reel-pulse-ring delay" aria-hidden="true" />
                    <span className="relative z-10 w-[46px] h-[46px] rounded-full bg-white/95 text-[#025EC1] group-hover:bg-[#025EC1] group-hover:text-white flex items-center justify-center shadow-lg transition-colors duration-300">
                      <Play className="w-4 h-4 ml-0.5 fill-current" />
                    </span>
                  </div>

                  {/* Bottom Title + Instagram Account Footer Bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                    <h3 className="text-[14.5px] font-bold text-white leading-snug line-clamp-2 mb-3">
                      {reel.title}
                    </h3>
                    <div className="flex items-center justify-between gap-2 pt-2.5 border-t border-white/15">
                      <div className="flex items-center gap-2 min-w-0">
                        <span
                          className="w-7 h-7 rounded-full bg-white text-[#025EC1] font-extrabold text-[11px] flex items-center justify-center shrink-0"
                          aria-hidden="true"
                        >
                          M
                        </span>
                        <div className="min-w-0">
                          <p className="text-[12px] font-bold text-white leading-none truncate">
                            momentumclinic
                          </p>
                          <p className="text-[10.5px] text-white/75 leading-none mt-1 truncate">
                            {reel.publishedDate}
                          </p>
                        </div>
                      </div>
                      <Film className="w-4 h-4 text-white/85 shrink-0" aria-hidden="true" />
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 7: ACHIEVEMENTS CAROUSEL (200x200 SQUARE TILES)
      ============================================================ */}
      <section id="achievements" className="pb-16 lg:pb-[100px] bg-white">
        <div className="site-container">
          <div className="mb-7">
            <Reveal direction="up" delay={0.1}>
              <h3 className="sec-sm-title">Momentum Clinic&apos;s Achievements</h3>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5">
            {ACHIEVEMENT_SLIDES.slice(0, 6).map((ach) => (
              <div key={ach.id} className="group">
                <div className="aspect-square w-full rounded-[14px] bg-[#F5F9FE] border border-[#025EC1]/10 p-4 sm:p-5 flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)]">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-b from-[#FFFFFF] to-[#EDF4FB] border border-[#025EC1]/20 text-[#025EC1] flex flex-col items-center justify-center shadow-xs mb-2.5">
                    <Award className="w-7 h-7 sm:w-9 sm:h-9 text-[#025EC1]" strokeWidth={1.6} />
                    <span className="mt-1 text-[10px] font-extrabold tracking-widest uppercase text-[#213245]">
                      {ach.badge}
                    </span>
                  </div>
                  <span className="text-[13px] font-bold text-[#025EC1] tabular-nums">
                    {ach.year}
                  </span>
                </div>
                <p className="mt-2.5 text-[12px] font-semibold text-[#213245] leading-[1.35] text-center">
                  {ach.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 8: OUR TECHNOLOGY — ORBITAL CIRCULAR GRADIENT SHOWCASE
      ============================================================ */}
      <section className="our-technology-sec py-16 lg:py-[100px]">
        <div className="site-container relative z-10">
          <div className="max-w-[580px] mx-auto text-center mb-8">
            <Reveal direction="up" delay={0.1}>
              <KickerMark label="Our Technology" light />
              <h2 className="sec-title text-white mb-4">
                Precision-Driven Technology for Advanced Spine Treatment
              </h2>
              <p className="text-[16px] font-medium leading-[1.6] text-white/80">
                Cutting-edge robotics, 3D imaging, neuro-monitoring, and endoscopic systems designed to ensure accuracy, safety, and optimal recovery.
              </p>
            </Reveal>
          </div>

          <div className="relative z-10 text-center mb-12">
            <ClinicButton to="/technology/surgical">All Technology</ClinicButton>
          </div>
        </div>

        {/* Desktop & Tablet Rotating Orbital Circle Gradient (Clean Floating Visuals) */}
        <div className="hidden sm:block circle-gradient-ring" aria-label="Spine medical technologies orbit">
          <ul className="relative w-full h-full">
            {ORBITAL_TECH_MACHINES.map((machine, index) => {
              const angle = (index / ORBITAL_TECH_MACHINES.length) * 2 * Math.PI;
              const leftPct = 50 + 50 * Math.cos(angle);
              const topPct = 50 + 50 * Math.sin(angle);
              return (
                <li
                  key={machine.id}
                  style={{ left: `${leftPct}%`, top: `${topPct}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="orbit-node-inner">
                    <Link
                      to={machine.to}
                      title={machine.name}
                      className="group flex flex-col items-center text-center w-[176px] lg:w-[196px] transition-transform duration-300 hover:scale-105"
                    >
                      <div className="w-[144px] h-[112px] lg:w-[164px] lg:h-[128px] rounded-[16px] overflow-hidden border border-white/20 bg-[#012954]/80 shadow-[0_14px_34px_rgba(0,0,0,0.4)]">
                        <SafeImage
                          src={machine.image}
                          alt={machine.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="mt-2 inline-block px-2.5 py-1 rounded-full bg-[#012042]/90 border border-white/15 text-[11px] font-semibold text-white/95 leading-tight line-clamp-1 group-hover:text-[#9EC5FE]">
                        {machine.shortLabel}
                      </span>
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile 2-by-2 Load More Grid (< 640px) */}
        <div className="sm:hidden relative z-10 px-4">
          <div className="grid grid-cols-2 gap-4">
            {ORBITAL_TECH_MACHINES.slice(0, mobileTechCount).map((machine) => (
              <Link
                key={machine.id}
                to={machine.to}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-[16px] p-3.5 flex flex-col items-center text-center"
              >
                <div className="w-full h-28 rounded-[12px] overflow-hidden mb-2.5">
                  <SafeImage
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[11px] font-bold text-[#9EC5FE] uppercase">{machine.category}</span>
                <p className="mt-1 text-sm font-bold text-white leading-snug">
                  {machine.shortLabel}
                </p>
              </Link>
            ))}
          </div>

          {mobileTechCount < ORBITAL_TECH_MACHINES.length && (
            <div className="text-center mt-6">
              <ClinicButton
                variant="white"
                onClick={() =>
                  setMobileTechCount((prev) => Math.min(ORBITAL_TECH_MACHINES.length, prev + 2))
                }
              >
                Load More
              </ClinicButton>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================
          SECTION 9: VOICES OF RECOVERY (GOOGLE REVIEWS HEADER + 4-UP SLIDER)
      ============================================================ */}
      <section className="py-16 lg:py-[100px] bg-white">
        <div className="site-container">
          <div className="max-w-[758px] mx-auto text-center mb-8">
            <Reveal direction="up" delay={0.1}>
              <h2 className="sec-title">Voices of Recovery</h2>
            </Reveal>
          </div>

          {/* Google Reviews Rating Summary Strip (matches live reference widget) */}
          <div className="bg-[#F4F5F7] rounded-[12px] px-5 sm:px-7 py-4 flex flex-wrap items-center justify-between gap-4 mb-6 border border-black/[0.04]">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 font-bold text-[#213245] text-[15px]">
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.14C3.26 21.3 7.31 24 12 24Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.24c-.24-.72-.38-1.49-.38-2.24s.14-1.52.38-2.24V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.99-3.14Z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.99 3.14c.95-2.85 3.6-4.96 6.72-4.96Z"
                  />
                </svg>
                <span>Excellent</span>
              </span>

              <div className="flex items-center gap-0.5 text-[#FBBC05]" aria-label="4.7 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" aria-hidden="true" />
                ))}
              </div>

              <span className="text-sm font-bold text-[#213245] tabular-nums">4.7</span>
              <span className="text-black/20">|</span>
              <span className="text-sm font-medium text-[#59616B] tabular-nums">
                3,807 reviews
              </span>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-[8px] bg-white border border-black/15 px-4 py-2 text-[13px] font-semibold text-[#213245] hover:border-[#025EC1] hover:text-[#025EC1] transition-colors shadow-2xs"
            >
              Write a review
            </Link>
          </div>

          {/* 4-Card Review Slider */}
          <div className="relative">
            <button
              type="button"
              onClick={prevReviews}
              aria-label="Previous patient reviews"
              className="hidden lg:flex items-center justify-center w-9 h-9 rounded-full bg-white border border-black/10 text-[#213245] hover:border-[#025EC1] hover:text-[#025EC1] shadow-md absolute top-1/2 -left-4 -translate-y-1/2 z-10 cursor-pointer transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {TESTIMONIALS.slice(reviewOffset, reviewOffset + 4).map((item) => {
                const isExpanded = expandedReviewId === item.id;
                const initial = item.patientName.charAt(0).toUpperCase();
                return (
                  <article
                    key={item.id}
                    className="h-full bg-[#F4F5F7] border border-black/[0.04] rounded-[12px] p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="relative shrink-0">
                          <span
                            className="w-10 h-10 rounded-full text-white font-bold text-sm flex items-center justify-center"
                            style={{ backgroundColor: item.avatarBg || '#025EC1' }}
                          >
                            {initial}
                          </span>
                          <span
                            className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-white flex items-center justify-center shadow-xs"
                            aria-hidden="true"
                          >
                            <span className="text-[10px] font-extrabold text-[#4285F4]">G</span>
                          </span>
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-[#213245] text-[14.5px] leading-snug truncate">
                            {item.patientName}
                          </p>
                          <p className="text-[11.5px] text-[#59616B]">
                            {item.timeAgo || 'Verified Patient'}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-0.5 text-[#FBBC05] mb-2.5" aria-label="5 out of 5 stars">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                        ))}
                      </div>

                      <p
                        className={`text-[13.5px] leading-[1.58] text-[#213245] ${
                          isExpanded ? '' : 'line-clamp-4'
                        }`}
                      >
                        {item.quote}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedReviewId(isExpanded ? null : item.id)
                        }
                        className="text-xs font-medium text-[#59616B] hover:text-[#025EC1] cursor-pointer"
                      >
                        {isExpanded ? 'Show less' : 'Read more'}
                      </button>
                      <span className="text-[11px] font-medium text-[#59616B] truncate">
                        {item.doctorName}
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>

            <button
              type="button"
              onClick={nextReviews}
              aria-label="Next patient reviews"
              className="hidden lg:flex items-center justify-center w-9 h-9 rounded-full bg-white border border-black/10 text-[#213245] hover:border-[#025EC1] hover:text-[#025EC1] shadow-md absolute top-1/2 -right-4 -translate-y-1/2 z-10 cursor-pointer transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="flex lg:hidden items-center justify-center gap-3 mt-5">
              <button
                type="button"
                onClick={prevReviews}
                aria-label="Previous patient reviews"
                className="w-10 h-10 rounded-full bg-white border border-black/15 text-[#213245] hover:border-[#025EC1] hover:text-[#025EC1] flex items-center justify-center cursor-pointer transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextReviews}
                aria-label="Next patient reviews"
                className="w-10 h-10 rounded-full bg-white border border-black/15 text-[#213245] hover:border-[#025EC1] hover:text-[#025EC1] flex items-center justify-center cursor-pointer transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="text-center mt-10">
            <ClinicButton to="/patient-care/patient-services" variant="outline">
              Read More
            </ClinicButton>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 10: PATIENT JOURNEY / WORKING PROCESS (DARK OVERLAY + WHITE ACTIVE TIMELINE)
      ============================================================ */}
      <section className="relative overflow-hidden z-10">
        <div className="absolute inset-0 -z-10">
          <SafeImage
            src={CLINIC_IMAGES.journeyBg}
            alt="Momentum Clinic spine reception and clinical wing"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(270deg, rgba(0, 19, 39, 0.38) 0%, rgba(0, 19, 39, 0.92) 100%)',
            }}
          />
        </div>

        <div className="py-16 lg:py-[100px]">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              {/* Left Column: Heading, CTA, and 4 Journey Stats */}
              <div className="lg:col-span-6 flex flex-col justify-between gap-10">
                <div>
                  <KickerMark label="PATIENT JOURNEY" light />
                  <h2 className="sec-title text-white leading-[1.1] mb-5">
                    Your Spine Care Journey
                  </h2>
                  <p className="text-[18px] leading-[1.6] text-white/80 max-w-[530px]">
                    A simple, guided path from diagnosis to recovery — focused on ethical spine care with talent, technique and technology.
                  </p>
                  <div className="mt-7">
                    <ClinicButton to="/book-appointment">Book Appointment</ClinicButton>
                  </div>
                </div>

                {/* 4 Stats Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-6 pt-4">
                  <div className="relative pl-4 border-l border-white/25">
                    <div className="text-[32px] font-bold text-white leading-tight tabular-nums">
                      <CounterUp target={25} formatLocale={false} />+
                    </div>
                    <p className="text-sm text-white/75 mt-1">Spine Care Experts</p>
                  </div>

                  <div className="relative pl-4 border-l border-white/25">
                    <div className="text-[32px] font-bold text-white leading-tight tabular-nums">
                      <CounterUp target={120} formatLocale={false} />+
                    </div>
                    <p className="text-sm text-white/75 mt-1">Years of Combined Experience</p>
                  </div>

                  <div className="relative pl-4 border-l border-white/25">
                    <div className="text-[32px] font-bold text-white leading-tight tabular-nums">
                      <CounterUp target={300000} />+
                    </div>
                    <p className="text-sm text-white/75 mt-1">Patients Treated</p>
                  </div>

                  <div className="relative pl-4 border-l border-white/25">
                    <div className="text-[32px] font-bold text-white leading-tight tabular-nums">
                      <CounterUp target={30000} />+
                    </div>
                    <p className="text-sm text-white/75 mt-1">Spine Surgeries</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Auto-Cycling 4-Step Vertical Process Timeline */}
              <div className="lg:col-span-6">
                <div
                  className="relative sm:pl-12 lg:ml-auto lg:max-w-[490px] w-full space-y-4"
                  onMouseEnter={() => setProcessPaused(true)}
                  onMouseLeave={() => setProcessPaused(false)}
                >
                  {HOMEPAGE_JOURNEY_STEPS.map((step, idx) => {
                    const isActive = idx === activeProcessIdx;
                    return (
                      <div
                        key={step.step}
                        onMouseEnter={() => setActiveProcessIdx(idx)}
                        onClick={() => setActiveProcessIdx(idx)}
                        className="relative cursor-pointer"
                      >
                        {/* Step Number Label (matches 01., 02., 03., 04. on left in video) */}
                        <span
                          className={`hidden sm:block absolute left-0 top-6 text-[15px] font-semibold tabular-nums transition-colors duration-300 ${
                            isActive ? 'text-white' : 'text-white/60'
                          }`}
                        >
                          {step.step}
                        </span>

                        {/* Process Card (Crisp White when active, Frosted Translucent when inactive) */}
                        <div
                          className={`rounded-[12px] px-6 py-5 sm:px-7 sm:py-6 border backdrop-blur-md transition-all duration-300 ${
                            isActive
                              ? 'bg-white border-white shadow-[0_12px_32px_rgba(0,0,0,0.22)]'
                              : 'bg-white/[0.1] border-white/[0.14] hover:bg-white/[0.16]'
                          }`}
                        >
                          <span
                            className={`sm:hidden text-xs font-bold tabular-nums block mb-1 ${
                              isActive ? 'text-[#025EC1]' : 'text-[#9EC5FE]'
                            }`}
                          >
                            {step.step}
                          </span>
                          <h3
                            className={`text-[18px] font-bold leading-snug transition-colors ${
                              isActive ? 'text-[#213245]' : 'text-white'
                            }`}
                          >
                            {step.title}
                          </h3>
                          <p
                            className={`mt-1.5 text-[14.5px] leading-relaxed transition-colors ${
                              isActive ? 'text-[#59616B]' : 'text-white/80'
                            }`}
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 11: EXPLORE BLOG — ASYMMETRIC FEATURED + 3 COMPACT CARDS
      ============================================================ */}
      <section className="py-16 lg:py-[100px] bg-white">
        <div className="site-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <KickerMark label="Explore Blog" />
              <h2 className="sec-title mb-3">Spine Care Insights</h2>
              <p className="body-copy">Latest updates and insights from our experts.</p>
            </div>
            <div className="hidden md:block shrink-0">
              <ClinicButton to="/blog">Explore More</ClinicButton>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
            {/* Left Featured Blog Card */}
            {featuredArticle && (
              <div className="lg:col-span-6">
                <article className="group h-full bg-[#59616B]/[0.04] border border-[#213245]/[0.05] rounded-[22px] p-5 flex flex-col">
                  <Link
                    to={`/blog/${featuredArticle.slug}`}
                    className="block h-[260px] sm:h-[360px] lg:h-[400px] rounded-[16px] overflow-hidden bg-[#c7c7c7]"
                  >
                    <SafeImage
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </Link>

                  <div className="pt-6 px-2 sm:px-3 pb-2 flex flex-col flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-[#59616B] mb-4">
                      <span className="font-semibold text-[#025EC1]">{featuredArticle.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>By {featuredArticle.authorName}</span>
                    </div>

                    <h3 className="text-2xl sm:text-[30px] font-extrabold text-[#213245] leading-[1.25] tracking-[-0.02em]">
                      <Link
                        to={`/blog/${featuredArticle.slug}`}
                        className="hover:text-[#025EC1] transition-colors"
                      >
                        {featuredArticle.title}
                      </Link>
                    </h3>

                    <p className="body-copy mt-4 line-clamp-2 flex-1">
                      {featuredArticle.excerpt}
                    </p>

                    <div className="mt-6">
                      <Link to={`/blog/${featuredArticle.slug}`} className="text-btn">
                        <span className="btn-icon" aria-hidden="true">
                          <ArrowRight className="w-4 h-4" />
                        </span>
                        <span>Learn More</span>
                        <span className="btn-icon" aria-hidden="true">
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            )}

            {/* Right Stack of 3 Small Horizontal Blog Items */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-5">
              {secondaryArticles.map((post) => (
                <article
                  key={post.slug}
                  className="group bg-[#59616B]/[0.04] border border-[#213245]/[0.05] rounded-[12px] p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-6"
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="w-full sm:w-[170px] h-[200px] sm:h-[160px] rounded-[16px] overflow-hidden shrink-0 bg-[#c7c7c7] block"
                  >
                    <SafeImage
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </Link>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-[#59616B] mb-2.5">
                      <span className="font-semibold text-[#025EC1]">{post.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>By {post.authorName}</span>
                    </div>

                    <h3 className="text-[20px] sm:text-[22px] font-bold text-[#213245] leading-[1.35] tracking-[-0.02em]">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="hover:text-[#025EC1] transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>

                    <div className="mt-4">
                      <Link to={`/blog/${post.slug}`} className="text-btn">
                        <span className="btn-icon" aria-hidden="true">
                          <ArrowRight className="w-4 h-4" />
                        </span>
                        <span>Read More</span>
                        <span className="btn-icon" aria-hidden="true">
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 md:hidden text-center">
            <ClinicButton to="/blog">Explore More</ClinicButton>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 12: CTA BANNER (OVERLAPPING #F5F9FE FOOTER BACKDROP)
      ============================================================ */}
      <section className="cta-half-backdrop">
        <div className="site-container">
          <div className="bg-[#025EC1] rounded-[22px] py-12 sm:py-[54px] px-6 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 50%, #ffffff 0%, transparent 45%), radial-gradient(circle at 80% 50%, #ffffff 0%, transparent 45%)',
              }}
              aria-hidden="true"
            />
            <Reveal direction="up" delay={0.1}>
              <h2 className="sec-title foot-title-wrap text-white relative z-10 mb-0">
                <span>The Momentum Way</span>
                Talent - Technique - Technology
                <span>for Spine Care</span>
              </h2>
            </Reveal>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 relative z-10">
              <ClinicButton to="/book-appointment" variant="white">
                Book an Appointment
              </ClinicButton>
              <ClinicButton to="/contact" variant="outline-white">
                Contact Us
              </ClinicButton>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          KNOWLEDGE HUB VIDEO BRIEF MODAL
      ============================================================ */}
      {activeReel && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeReel.title}
          className="fixed inset-0 z-[95] flex items-center justify-center p-4 bg-[#213245]/70 backdrop-blur-sm"
          onClick={() => setActiveReel(null)}
        >
          <div
            className="bg-white rounded-[22px] max-w-2xl w-full overflow-hidden shadow-2xl border border-black/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 sm:h-64 bg-[#01264D]">
              <SafeImage
                src={activeReel.thumbnail}
                alt={activeReel.title}
                className="w-full h-full object-cover opacity-75"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(1,38,77,0.2) 0%, rgba(1,38,77,0.92) 100%)',
                }}
              />
              <button
                type="button"
                onClick={() => setActiveReel(null)}
                aria-label="Close video brief"
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-[#213245] hover:bg-[#025EC1] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-5 left-6 right-6 text-white">
                <p className="text-xs font-bold uppercase tracking-wider text-[#9EC5FE]">
                  {activeReel.category} · {activeReel.duration} · {activeReel.speaker}
                </p>
                <h3 className="mt-1 text-xl sm:text-2xl font-bold leading-snug text-white">
                  {activeReel.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <p className="body-copy">{activeReel.summary}</p>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#025EC1] mb-3">
                  Key Clinical Takeaways
                </h4>
                <ul className="space-y-2">
                  {activeReel.keyTakeaways.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-[#213245]">
                      <CheckCircle2 className="w-4 h-4 text-[#025EC1] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-3 flex flex-wrap gap-3">
                <ClinicButton to={activeReel.relatedLink} onClick={() => setActiveReel(null)}>
                  Explore Related Care
                </ClinicButton>
                <ClinicButton
                  to="/book-appointment"
                  variant="outline"
                  onClick={() => setActiveReel(null)}
                >
                  Book Consultation
                </ClinicButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
