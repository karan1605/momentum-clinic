import React, { useEffect, useState } from 'react';
import {
  ArrowUp,
  MessageCircle,
  Linkedin,
  Youtube,
  Facebook,
  Instagram,
} from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicInfo';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappHref = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello I want to book a spine consultation'
  )}`;

  return (
    <>
      {/* Fixed Left Vertical Social Rail ("Follow us" + 5 brand icons, matches live site) */}
      <aside
        aria-label="Follow Momentum Clinic on social media"
        className="hidden md:flex fixed left-2.5 xl:left-3.5 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-2.5 bg-white/85 backdrop-blur-sm border border-black/[0.06] rounded-full px-1.5 py-3 shadow-[0_6px_22px_rgba(33,50,69,0.08)]"
      >
        <a
          href={CLINIC_INFO.socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          aria-label="Connect with Momentum Clinic on LinkedIn"
          className="w-[30px] h-[30px] rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xs"
        >
          <Linkedin className="w-3.5 h-3.5" />
        </a>
        <a
          href={CLINIC_INFO.socialLinks.youtube}
          target="_blank"
          rel="noopener noreferrer"
          title="YouTube"
          aria-label="Subscribe to Momentum Clinic on YouTube"
          className="w-[30px] h-[30px] rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xs"
        >
          <Youtube className="w-3.5 h-3.5" />
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
          aria-label="Chat with Momentum Clinic on WhatsApp"
          className="w-[30px] h-[30px] rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xs"
        >
          <MessageCircle className="w-3.5 h-3.5" />
        </a>
        <a
          href={CLINIC_INFO.socialLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
          aria-label="Follow Momentum Clinic on Facebook"
          className="w-[30px] h-[30px] rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xs"
        >
          <Facebook className="w-3.5 h-3.5" />
        </a>
        <a
          href={CLINIC_INFO.socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
          aria-label="Follow Momentum Clinic on Instagram"
          className="w-[30px] h-[30px] rounded-full instagram-gradient text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xs"
        >
          <Instagram className="w-3.5 h-3.5" />
        </a>

        <span className="w-3.5 h-px bg-[#213245]/20 my-0.5" aria-hidden="true" />
        <span className="text-[11px] font-semibold tracking-wide text-[#213245] back-to-top-text-vertical select-none py-0.5">
          Follow us
        </span>
      </aside>

      {/* Back to Top Button with vertical "Scroll Top" label (matches backToTop.css) */}
      <div
        className={`fixed right-3.5 sm:right-[22px] xl:right-[30px] z-50 transition-all duration-300 ${
          showScrollTop
            ? 'bottom-[78px] md:bottom-[56px] opacity-100 visible hover:-translate-y-1.5'
            : 'bottom-0 opacity-0 invisible pointer-events-none'
        }`}
      >
        <button
          id="back_to_top"
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="group flex flex-col items-center gap-3 cursor-pointer"
        >
          <span className="relative inline-flex items-center justify-center w-[35px] h-[35px] rounded-full bg-[#025EC1] text-white overflow-hidden shadow-md">
            <ArrowUp
              className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-8"
              strokeWidth={2.2}
            />
            <ArrowUp
              className="w-4 h-4 absolute translate-y-8 transition-transform duration-300 group-hover:translate-y-0"
              strokeWidth={2.2}
            />
          </span>
          <span className="hidden md:inline-block text-sm font-semibold text-[#213245] back-to-top-text-vertical select-none">
            Scroll Top
          </span>
        </button>
      </div>

      {/* Fixed Mobile WhatsApp Button (<= 767px) matching Stavya footer.css */}
      <div className="fixed right-3 bottom-5 z-50 md:hidden">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
          aria-label="Chat with Momentum Clinic on WhatsApp"
          className="relative whatsapp-mobile-pulse flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366] text-white shadow-[0_4px_14px_rgba(37,211,102,0.45)] hover:scale-105 transition-transform"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
      </div>
    </>
  );
};
