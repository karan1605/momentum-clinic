import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  ChevronDown,
  Search,
  X,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  MessageCircle,
} from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicInfo';
import { DOCTORS } from '../../data/doctors';
import { TREATMENTS } from '../../data/treatments';
import { BLOG_ARTICLES } from '../../data/blog';
import { SPECIALTY_CLINICS } from '../../data/patientCare';
import { ClinicButton } from '../Buttons/ClinicButton';

interface NavDropdownItem {
  label: string;
  to: string;
}

interface NavGroup {
  id: string;
  label: string;
  to?: string;
  items?: NavDropdownItem[];
}

const NAV_GROUPS: NavGroup[] = [
  {
    id: 'home',
    label: 'Home',
    to: '/',
  },
  {
    id: 'about',
    label: 'About',
    items: [
      { label: 'Hospital Overview', to: '/about/overview' },
      { label: 'Vision, Mission & Core Values', to: '/about/vision-mission' },
      { label: 'Leadership Team', to: '/about/leadership' },
      { label: 'Accreditations & Certifications', to: '/about/accreditations' },
      { label: 'Facilities & Infrastructure', to: '/about/facilities' },
    ],
  },
  {
    id: 'doctors',
    label: 'Doctors',
    to: '/doctors',
  },
  {
    id: 'patient-care',
    label: 'Patient Care',
    items: [
      { label: 'International Patients', to: '/patient-care/international-patients' },
      { label: 'Patient Services', to: '/patient-care/patient-services' },
      { label: 'Insurance & TPA', to: '/patient-care/insurance-tpa' },
      { label: 'Patient Rights & Responsibilities', to: '/patient-care/patient-rights' },
      { label: 'FAQs', to: '/patient-care/faqs' },
    ],
  },
  {
    id: 'treatments',
    label: 'Treatments',
    items: [
      { label: 'All Spine Treatments', to: '/treatments' },
      { label: 'Minimally Invasive Spine Surgery', to: '/treatments/minimally-invasive-spine-surgery' },
      { label: 'Spinal Deformity Correction', to: '/treatments/spinal-deformity-correction' },
      { label: 'Artificial Disc Replacement', to: '/treatments/artificial-disc-replacement' },
      { label: 'Endoscopic Spine Surgery', to: '/treatments/endoscopic-spine-surgery' },
      { label: 'Robotic Spine Surgery', to: '/treatments/robotic-spine-surgery' },
      { label: 'Pain Management Procedures', to: '/treatments/pain-management' },
      { label: 'Physiotherapy & Rehabilitation', to: '/treatments/physiotherapy-rehabilitation' },
      { label: 'Lifestyle & Preventive Care', to: '/treatments/lifestyle-preventive-care' },
    ],
  },
  {
    id: 'technology',
    label: 'Technology',
    items: [
      { label: 'Surgical Technology', to: '/technology/surgical' },
      { label: 'Physiotherapy & Rehab Tech', to: '/technology/physiotherapy-rehab' },
      { label: 'Spine Diagnostic Technology', to: '/technology/diagnostics' },
    ],
  },
  {
    id: 'research',
    label: 'Research',
    to: '/research',
  },
  {
    id: 'careers',
    label: 'Careers',
    items: [
      { label: 'Fellowship Programs', to: '/careers/fellowship' },
      { label: 'Work With Us', to: '/careers/work-with-us' },
    ],
  },
  {
    id: 'contact',
    label: 'Contact',
    to: '/contact',
  },
];

interface SearchEntry {
  title: string;
  subtitle: string;
  to: string;
  type: string;
}

export const Header: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [offcanvasExpanded, setOffcanvasExpanded] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSticky, setIsSticky] = useState(false);
  const [isStickyShow, setIsStickyShow] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const lastScrollTop = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    setOpenDropdown(null);
    setOffcanvasOpen(false);
    setSearchOpen(false);
    setSearchQuery('');
  }, [location.pathname, location.search]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      if (scrollTop > 400) {
        setIsSticky(true);
        if (scrollTop < lastScrollTop.current) {
          setIsStickyShow(true);
        } else {
          setIsStickyShow(false);
        }
      } else {
        setIsSticky(false);
        setIsStickyShow(false);
      }
      lastScrollTop.current = Math.max(0, scrollTop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen) {
      const t = window.setTimeout(() => searchInputRef.current?.focus(), 120);
      return () => window.clearTimeout(t);
    }
  }, [searchOpen]);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        setOffcanvasOpen(false);
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const searchIndex: SearchEntry[] = useMemo(() => {
    const docs = DOCTORS.map((d) => ({
      title: d.name,
      subtitle: `${d.designation} · ${d.department}`,
      to: `/doctors/${d.slug}`,
      type: 'Specialist',
    }));
    const treats = TREATMENTS.map((t) => ({
      title: t.title,
      subtitle: t.heroSubtitle,
      to: `/treatments/${t.slug}`,
      type: 'Treatment',
    }));
    const clinics = SPECIALTY_CLINICS.map((c) => ({
      title: c.title,
      subtitle: c.summary,
      to: c.link,
      type: 'Specialty Clinic',
    }));
    const posts = BLOG_ARTICLES.map((b) => ({
      title: b.title,
      subtitle: `${b.category} · ${b.readTime}`,
      to: `/blog/${b.slug}`,
      type: 'Article',
    }));
    return [...docs, ...treats, ...clinics, ...posts];
  }, []);

  const filteredSearchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return searchIndex.slice(0, 5);
    return searchIndex
      .filter(
        (entry) =>
          entry.title.toLowerCase().includes(q) ||
          entry.subtitle.toLowerCase().includes(q) ||
          entry.type.toLowerCase().includes(q)
      )
      .slice(0, 6);
  }, [searchQuery, searchIndex]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (filteredSearchResults.length > 0) {
      navigate(filteredSearchResults[0].to);
      setSearchOpen(false);
    }
  };

  const isGroupActive = (group: NavGroup): boolean => {
    if (group.to === '/') {
      return location.pathname === '/';
    }
    if (group.to) {
      return location.pathname === group.to || location.pathname.startsWith(`${group.to}/`);
    }
    return Boolean(
      group.items?.some(
        (item) => location.pathname === item.to || location.pathname.startsWith(`${item.to}/`)
      )
    );
  };

  const whatsappHref = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Momentum Clinic, I want to book a spine consultation.'
  )}`;

  const headerPlacementClass = `sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-black/[0.08] transition-all duration-300 ${
    isSticky ? 'shadow-[0_4px_20px_rgba(0,0,0,0.06)]' : ''
  }`;

  const BrandLogo = (
    <Link
      to="/"
      className="flex items-center gap-2.5 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#025EC1] rounded-md"
      aria-label="Momentum Clinic Homepage"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
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
        <span className="text-[19px] font-extrabold tracking-tight text-[#213245] whitespace-nowrap">
          MOMENTUM
        </span>
        <span className="text-[10px] font-bold tracking-[0.2em] text-[#025EC1] uppercase mt-0.5 whitespace-nowrap">
          Spine Clinic
        </span>
      </div>
    </Link>
  );

  return (
    <>
      <header ref={headerRef} className={headerPlacementClass}>
        <div className="site-header-inner">
          <div className="site-header-row">
            {/* Brand Logo */}
            <div className="site-header-brand">{BrandLogo}</div>

            {/* Desktop Main Navigation (inline at >= 1440px where all 9 items fit cleanly; moves to drawer below 1440px) */}
            <nav aria-label="Main navigation" className="site-header-nav">
              {NAV_GROUPS.map((group) => {
                const active = isGroupActive(group);
                const isOpen = openDropdown === group.id;

                if (group.to && !group.items) {
                  return (
                    <NavLink
                      key={group.id}
                      to={group.to}
                      className={`site-header-nav-link ${
                        active
                          ? 'text-[#025EC1]'
                          : 'text-[#213245] hover:text-[#025EC1]'
                      }`}
                    >
                      {group.label}
                    </NavLink>
                  );
                }

                return (
                  <div
                    key={group.id}
                    className="relative shrink-0"
                    onMouseEnter={() => setOpenDropdown(group.id)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                        setOpenDropdown(null);
                      }
                    }}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      onClick={() => setOpenDropdown(isOpen ? null : group.id)}
                      className={`site-header-nav-link cursor-pointer ${
                        active || isOpen
                          ? 'text-[#025EC1]'
                          : 'text-[#213245] hover:text-[#025EC1]'
                      }`}
                    >
                      <span>{group.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#025EC1]' : ''}`}
                        aria-hidden="true"
                      />
                    </button>

                    <div
                      role="menu"
                      className={`absolute left-0 top-full min-w-[260px] rounded-[10px] py-2.5 bg-white border border-black/[0.08] shadow-[0_0_15px_rgba(0,0,0,0.15)] z-50 origin-top transition-all duration-300 ${
                        isOpen
                          ? 'opacity-100 visible scale-y-100'
                          : 'opacity-0 invisible scale-y-0 pointer-events-none'
                      }`}
                    >
                      {group.items?.map((item) => (
                        <NavLink
                          key={item.to}
                          to={item.to}
                          role="menuitem"
                          className={({ isActive }) =>
                            `block px-5 py-2.5 text-[14.5px] font-semibold transition-all duration-200 whitespace-nowrap ${
                              isActive
                                ? 'text-[#025EC1] bg-[#F5F9FE]'
                                : 'text-[#213245] hover:text-[#025EC1] hover:pl-[26px]'
                            }`
                          }
                        >
                          {item.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                );
              })}
            </nav>

            {/* Right Header Action Zone: Search + Book Appointment CTA + Circular 4-Cube Offcanvas Toggle */}
            <div className="site-header-actions">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label="Search clinics, doctors and treatments"
                className="site-header-search-btn"
              >
                <Search className="w-5 h-5" strokeWidth={2.2} />
              </button>

              <div className="site-header-cta">
                <ClinicButton to="/book-appointment">Book Appointment</ClinicButton>
              </div>

              <button
                type="button"
                aria-label="Open menu drawer"
                aria-expanded={offcanvasOpen}
                onClick={() => setOffcanvasOpen(true)}
                className="menu-toggle site-header-toggle"
              >
                <span className="cubes-grid" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Blue Search Popup Overlay (matching Stavya .search_popup) */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site search"
        className={`fixed inset-0 z-[90] transition-all duration-500 ${
          searchOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div
          className="fixed inset-0 bg-[#213245]/45 backdrop-blur-md"
          onClick={() => setSearchOpen(false)}
        />
        <div
          className={`relative z-10 w-full bg-[#025EC1] rounded-b-[24px] pt-20 pb-16 px-4 sm:px-6 transition-transform duration-500 ${
            searchOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <button
            type="button"
            onClick={() => setSearchOpen(false)}
            aria-label="Close search"
            className="absolute top-6 right-6 sm:top-8 sm:right-9 w-10 h-10 rounded-full text-white hover:rotate-90 transition-transform duration-300 flex items-center justify-center cursor-pointer"
          >
            <X className="w-7 h-7" />
          </button>

          <div className="max-w-[720px] mx-auto">
            <h2 className="text-2xl sm:text-[30px] font-bold text-white text-center mb-7">
              Search Spine Care, Doctors &amp; Treatments
            </h2>
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                ref={searchInputRef}
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search doctors, sciatica, endoscopic surgery, standing MRI..."
                className="w-full bg-white text-[#213245] placeholder:text-[#59616B] rounded-[10px] py-4 sm:py-5 pl-6 pr-16 text-base focus:outline-none shadow-lg"
              />
              <button
                type="submit"
                aria-label="Submit search"
                className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-full flex items-center justify-center text-[#025EC1] border-l border-[#D1D8E0] cursor-pointer"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>

            {filteredSearchResults.length > 0 && (
              <div className="mt-4 bg-white rounded-[12px] shadow-xl overflow-hidden divide-y divide-black/[0.06]">
                {filteredSearchResults.map((item) => (
                  <Link
                    key={`${item.type}-${item.to}-${item.title}`}
                    to={item.to}
                    onClick={() => setSearchOpen(false)}
                    className="flex items-center justify-between gap-4 px-5 py-3.5 hover:bg-[#F5F9FE] transition-colors"
                  >
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#025EC1]">
                        {item.type}
                      </span>
                      <p className="text-[15px] font-bold text-[#213245]">{item.title}</p>
                      <p className="text-xs text-[#59616B] line-clamp-1">{item.subtitle}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#025EC1] shrink-0" />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Offcanvas Side Drawer (.hamburger-area matching Stavya clean white slide-out drawer) */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Hospital navigation and contact drawer"
        className={`fixed inset-0 z-[95] transition-all duration-300 ${
          offcanvasOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div
          className="fixed inset-0 bg-[#213245]/45 backdrop-blur-sm"
          onClick={() => setOffcanvasOpen(false)}
        />
        <aside
          className={`fixed top-4 bottom-4 right-4 w-[calc(100%-32px)] max-w-[440px] bg-white rounded-[14px] border-l border-black/10 shadow-2xl overflow-y-auto transition-transform duration-500 p-7 sm:p-9 flex flex-col justify-between gap-8 ${
            offcanvasOpen ? 'translate-x-0' : 'translate-x-[115%]'
          }`}
        >
          <div>
            <div className="flex items-center justify-between gap-4 pb-6 border-b border-black/[0.08]">
              {BrandLogo}
              <button
                type="button"
                onClick={() => setOffcanvasOpen(false)}
                aria-label="Close drawer"
                className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-[#213245] hover:bg-[#025EC1] hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Accordions (visible on mobile & tablet, plus quick links on desktop) */}
            <nav aria-label="Drawer navigation" className="mt-6 space-y-1">
              {NAV_GROUPS.map((group) => {
                if (group.to && !group.items) {
                  return (
                    <NavLink
                      key={group.id}
                      to={group.to}
                      onClick={() => setOffcanvasOpen(false)}
                      className={({ isActive }) =>
                        `block py-3 px-2 border-b border-black/[0.06] text-[16px] font-semibold transition-all ${
                          isActive ? 'text-[#025EC1]' : 'text-[#213245] hover:text-[#025EC1] hover:translate-x-1.5'
                        }`
                      }
                    >
                      {group.label}
                    </NavLink>
                  );
                }

                const expanded = offcanvasExpanded === group.id;
                return (
                  <div key={group.id} className="border-b border-black/[0.06]">
                    <button
                      type="button"
                      aria-expanded={expanded}
                      onClick={() => setOffcanvasExpanded(expanded ? null : group.id)}
                      className="w-full flex items-center justify-between py-3 px-2 text-[16px] font-semibold text-[#213245] hover:text-[#025EC1] transition-colors cursor-pointer"
                    >
                      <span>{group.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${expanded ? 'rotate-180 text-[#025EC1]' : ''}`}
                      />
                    </button>
                    {expanded && group.items && (
                      <div className="pb-3 pl-4 space-y-1">
                        {group.items.map((item) => (
                          <NavLink
                            key={item.to}
                            to={item.to}
                            onClick={() => setOffcanvasOpen(false)}
                            className="block py-2 text-sm font-medium text-[#59616B] hover:text-[#025EC1]"
                          >
                            {item.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <ClinicButton
                to="/book-appointment"
                onClick={() => setOffcanvasOpen(false)}
                className="w-full justify-center"
              >
                Book Appointment
              </ClinicButton>
              <ClinicButton
                to="/telemedicine"
                variant="outline"
                onClick={() => setOffcanvasOpen(false)}
                className="w-full justify-center"
              >
                Telemedicine
              </ClinicButton>
            </div>
          </div>

          <div className="pt-6 border-t border-black/[0.08] space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-[1.5px] text-[#025EC1]">
              Centers &amp; Contact Information
            </h3>
            <div className="space-y-3 text-sm text-[#59616B]">
              {CLINIC_INFO.centers.map((center) => (
                <div key={center.name} className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#025EC1] shrink-0 mt-1" />
                  <div className="min-w-0">
                    <p className="font-bold text-[#213245] leading-snug">{center.name}</p>
                    <p className="text-xs text-[#59616B]">{center.address}</p>
                    <p className="text-xs text-[#59616B] tabular-nums">{center.timings}</p>
                    <a
                      href={center.phoneHref}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#025EC1] hover:underline tabular-nums mt-0.5"
                    >
                      <Phone className="w-3.5 h-3.5 shrink-0" />
                      <span>{center.phone}</span>
                    </a>
                  </div>
                </div>
              ))}
              <p className="flex items-center gap-2.5 pt-1">
                <Mail className="w-4 h-4 text-[#025EC1] shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-[#025EC1] font-semibold">
                  {CLINIC_INFO.email}
                </a>
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={CLINIC_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Momentum Clinic on LinkedIn"
                className="w-9 h-9 rounded-full bg-[#0A66C2] text-white flex items-center justify-center shadow hover:scale-110 transition-transform"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={CLINIC_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Momentum Clinic on Facebook"
                className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow hover:scale-110 transition-transform"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={CLINIC_INFO.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Momentum Clinic on YouTube"
                className="w-9 h-9 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow hover:scale-110 transition-transform"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow hover:scale-110 transition-transform"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={CLINIC_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Momentum Clinic on Instagram"
                className="w-9 h-9 rounded-full instagram-gradient text-white flex items-center justify-center shadow hover:scale-110 transition-transform"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};
