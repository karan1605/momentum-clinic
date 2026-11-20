import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicInfo';
import { Reveal } from '../Motion/Reveal';

export const Footer: React.FC = () => {
  const whatsappHref = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello I want to book a spine consultation'
  )}`;

  return (
    <footer className="bg-[#F5F9FE] relative z-10">
      {/* Top Appointment Contact Card Grid */}
      <Reveal direction="up" delay={0.15} duration={0.8} className="py-10 lg:py-[48px]">
        <div className="site-container">
          <div className="bg-white rounded-[18px] border border-black/[0.04] shadow-[0_2px_18px_rgba(33,50,69,0.03)] px-6 py-6 sm:px-8 sm:py-7 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Clinic Phones (Momentum & Nichtipur) */}
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-[54px] h-[54px] rounded-[14px] bg-[#025EC1] text-white flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" strokeWidth={1.9} />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-semibold text-[#59616B]">Clinic Phones</span>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-0.5">
                  <a
                    href={CLINIC_INFO.phoneHref}
                    className="text-[14.5px] font-semibold text-[#213245] hover:text-[#025EC1] transition-colors tracking-wide tabular-nums"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                  <span className="text-[#59616B]/50" aria-hidden="true">/</span>
                  <a
                    href={CLINIC_INFO.secondaryPhoneHref}
                    className="text-[14.5px] font-semibold text-[#213245] hover:text-[#025EC1] transition-colors tracking-wide tabular-nums"
                  >
                    {CLINIC_INFO.secondaryPhone}
                  </a>
                </div>
              </div>
            </div>

            {/* E-mail */}
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-[54px] h-[54px] rounded-[14px] bg-[#025EC1] text-white flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" strokeWidth={1.9} />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-semibold text-[#59616B]">E-Mail</span>
                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="text-[15px] font-semibold text-[#213245] hover:text-[#025EC1] transition-colors mt-0.5 break-all sm:break-normal truncate"
                >
                  {CLINIC_INFO.email}
                </a>
              </div>
            </div>

            {/* Chat on WhatsApp */}
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-[54px] h-[54px] rounded-[14px] bg-[#025EC1] text-white flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6" strokeWidth={1.9} />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-semibold text-[#59616B]">Chat With Us</span>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] font-semibold text-[#213245] hover:text-[#025EC1] transition-colors mt-0.5 truncate"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Main Footer */}
      <div className="pb-10 lg:pb-[52px]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-9 items-start">
            {/* Brand Column */}
            <Reveal direction="up" delay={0.15} duration={0.8} className="lg:col-span-4">
              <div className="mb-5">
                <Link to="/" className="inline-flex items-center gap-2.5">
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <rect width="40" height="40" rx="10" fill="#025EC1" />
                    <path
                      d="M20 7C17.5 10.5 16.5 14 18.2 17.5C19.8 20.8 22.8 22.5 21.5 26.8C20.5 29.8 18.5 31.8 17 33.2"
                      stroke="#FFFFFF"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                    />
                    <circle cx="20" cy="11.5" r="2.2" fill="#FFFFFF" />
                    <circle cx="18.2" cy="17.5" r="2.2" fill="#FFFFFF" />
                    <circle cx="21.4" cy="23.5" r="2.2" fill="#FFFFFF" />
                    <circle cx="19" cy="29.5" r="2.2" fill="#FFFFFF" />
                  </svg>
                  <div className="flex flex-col leading-none">
                    <span className="text-xl font-extrabold tracking-tight text-[#213245]">
                      MOMENTUM
                    </span>
                    <span className="text-[10.5px] font-bold tracking-[0.2em] text-[#025EC1] uppercase mt-0.5">
                      Spine Clinic
                    </span>
                  </div>
                </Link>
              </div>
              <p className="text-[14.5px] leading-[1.65] text-[#59616B] mb-6">
                {CLINIC_INFO.fullTitle}. Led by {CLINIC_INFO.leadDoctor} ({CLINIC_INFO.leadDoctorCredentials}) — providing complex spine surgeries, scoliosis correction, disc replacements, and musculoskeletal trauma care in Dhanbad.
              </p>

              <div className="flex items-center flex-wrap gap-3">
                <a
                  href={CLINIC_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with Momentum Clinic on LinkedIn"
                  className="w-9 h-9 rounded-full bg-[#0A66C2] text-white flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.16)] hover:-translate-y-0.5 hover:scale-110 transition-transform"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={CLINIC_INFO.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Momentum Clinic on Facebook"
                  className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.16)] hover:-translate-y-0.5 hover:scale-110 transition-transform"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={CLINIC_INFO.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe to Momentum Clinic on YouTube"
                  className="w-9 h-9 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.16)] hover:-translate-y-0.5 hover:scale-110 transition-transform"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Momentum Clinic on WhatsApp"
                  className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.16)] hover:-translate-y-0.5 hover:scale-110 transition-transform"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href={CLINIC_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Momentum Clinic on Instagram"
                  className="w-9 h-9 rounded-full instagram-gradient text-white flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.16)] hover:-translate-y-0.5 hover:scale-110 transition-transform"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </Reveal>

            {/* Quick Links & Our Department Columns */}
            <Reveal
              direction="up"
              delay={0.2}
              duration={0.8}
              className="lg:col-span-5 footer-links-bordered grid grid-cols-2 gap-6"
            >
              <div>
                <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#213245] mb-4">
                  Quick Links
                </h4>
                <ul className="space-y-2.5 text-[14px] font-medium text-[#59616B]">
                  <li>
                    <Link to="/about/overview" className="hover:text-[#025EC1] transition-colors">
                      Why Momentum
                    </Link>
                  </li>
                  <li>
                    <Link to="/treatments/robotic-spine-surgery" className="hover:text-[#025EC1] transition-colors">
                      Robotics
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/vision-mission" className="hover:text-[#025EC1] transition-colors">
                      Vision &amp; Mission
                    </Link>
                  </li>
                  <li>
                    <Link to="/research" className="hover:text-[#025EC1] transition-colors">
                      Innovation &amp; Research
                    </Link>
                  </li>
                  <li>
                    <Link to="/doctors" className="hover:text-[#025EC1] transition-colors">
                      Our Doctors
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers/fellowship" className="hover:text-[#025EC1] transition-colors">
                      Fellowships
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="hover:text-[#025EC1] transition-colors">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="hover:text-[#025EC1] transition-colors">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#213245] mb-4">
                  Our Department
                </h4>
                <ul className="space-y-2.5 text-[14px] font-medium text-[#59616B]">
                  <li>
                    <Link to="/treatments/minimally-invasive-spine-surgery" className="hover:text-[#025EC1] transition-colors">
                      Spine Surgery
                    </Link>
                  </li>
                  <li>
                    <Link to="/treatments/physiotherapy-rehabilitation" className="hover:text-[#025EC1] transition-colors">
                      Spine Rehabilitation
                    </Link>
                  </li>
                  <li>
                    <Link to="/treatments/pain-management" className="hover:text-[#025EC1] transition-colors">
                      Spine Pain Management
                    </Link>
                  </li>
                  <li>
                    <Link to="/technology/diagnostics" className="hover:text-[#025EC1] transition-colors">
                      Spine Diagnostics
                    </Link>
                  </li>
                  <li>
                    <Link to="/technology/physiotherapy-rehab" className="hover:text-[#025EC1] transition-colors">
                      Spine Physiotherapy
                    </Link>
                  </li>
                  <li>
                    <Link to="/treatments/lifestyle-preventive-care" className="hover:text-[#025EC1] transition-colors">
                      Lifestyle Modification
                    </Link>
                  </li>
                  <li>
                    <Link to="/patient-care/patient-services" className="hover:text-[#025EC1] transition-colors">
                      Patient Services
                    </Link>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Contact Info Column */}
            <Reveal direction="up" delay={0.25} duration={0.8} className="lg:col-span-3">
              <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#213245] mb-4">
                Our Centers
              </h4>
              <div className="space-y-4">
                {CLINIC_INFO.centers.map((center) => (
                  <div key={center.name} className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#025EC1] shrink-0 mt-1" strokeWidth={1.9} />
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <Link
                        to="/contact"
                        className="text-[13.5px] font-bold text-[#213245] hover:text-[#025EC1] transition-colors leading-snug"
                      >
                        {center.name}
                      </Link>
                      <span className="text-[13px] text-[#59616B] leading-snug">
                        {center.address}
                      </span>
                      <span className="text-[12px] font-medium text-[#59616B] tabular-nums">
                        {center.timings}
                      </span>
                      <a
                        href={center.phoneHref}
                        className="text-[12.5px] font-semibold text-[#025EC1] hover:underline tabular-nums"
                      >
                        {center.phone}
                      </a>
                    </div>
                  </div>
                ))}

                <div className="inline-block px-4 py-2 rounded-[12px] border border-black/10 bg-white/60 text-[12.5px] font-semibold text-[#213245]">
                  {CLINIC_INFO.leadDoctorFellowship} · {CLINIC_INFO.badgeLabel}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Bottom White Rounded Bar */}
      <div className="pb-6 lg:pb-8">
        <div className="site-container">
          <div className="bg-white rounded-[14px] border border-black/[0.04] px-6 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-[#59616B]">
              © {new Date().getFullYear()} {CLINIC_INFO.fullTitle}
            </p>
            <div className="footer-slash-links flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-[#59616B]">
              <Link to="/privacy-policy" className="hover:text-[#025EC1] hover:underline">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="hover:text-[#025EC1] hover:underline">
                Terms &amp; Conditions
              </Link>
              <Link to="/refund-policy" className="hover:text-[#025EC1] hover:underline">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
