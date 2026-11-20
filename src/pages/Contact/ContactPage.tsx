import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from 'lucide-react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { PageBanner } from '../../components/Hero/PageBanner';
import { ContactForm } from '../../components/Forms/ContactForm';
import { ClinicButton } from '../../components/Buttons/ClinicButton';
import { CLINIC_INFO } from '../../data/clinicInfo';

export const ContactPage: React.FC = () => {
  useDocumentMeta({
    title: 'Contact Us | Momentum Speciality Clinic — Dhanbad',
    description:
      'Visit Momentum Speciality Clinic at Chandra Arcade, Dhaiya (0326-4008249) or Nichtipur Hospital & Research Center, Katras Bazar (0326-3570833), Dhanbad. Email: info@momentumspine.in.',
    canonicalPath: '/contact',
  });

  const whatsappHref = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Momentum Clinic, I would like assistance with an appointment.'
  )}`;

  return (
    <div>
      <PageBanner
        eyebrow="Patient Desk & Locations"
        title="Clinic Timings & Contact"
        subtitle="Consult Dr. Dinesh Kumar Agarwal across Momentum Speciality Clinic (Dhaiya) and Nichtipur Hospital & Research Center (Katras Bazar), Dhanbad."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className="py-16 lg:py-[100px] bg-white">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-[12px] bg-[#F5F9FE] border border-[#025EC1]/12 p-7 space-y-5">
                <h2 className="text-2xl font-bold text-[#213245]">Our Consultation Centers</h2>

                {CLINIC_INFO.centers.map((center) => (
                  <div
                    key={center.name}
                    className="rounded-[10px] bg-white border border-black/[0.06] p-4 space-y-2"
                  >
                    <p className="text-base font-bold text-[#213245]">{center.name}</p>
                    <div className="flex items-start gap-2.5 text-sm text-[#59616B]">
                      <MapPin className="w-4 h-4 text-[#025EC1] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{center.address}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-[#59616B]">
                      <Clock className="w-4 h-4 text-[#025EC1] shrink-0" aria-hidden="true" />
                      <span className="tabular-nums">{center.timings}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm">
                      <Phone className="w-4 h-4 text-[#025EC1] shrink-0" aria-hidden="true" />
                      <a
                        href={center.phoneHref}
                        className="font-semibold text-[#025EC1] hover:underline tabular-nums"
                      >
                        {center.phone}
                      </a>
                    </div>
                  </div>
                ))}

                <div className="flex items-start gap-3.5 min-w-0">
                  <Mail className="w-5 h-5 text-[#025EC1] shrink-0 mt-1" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-[#213245]">Email Address</p>
                    <a
                      href={`mailto:${CLINIC_INFO.email}`}
                      className="text-sm font-semibold text-[#025EC1] hover:underline break-all"
                    >
                      {CLINIC_INFO.email}
                    </a>
                    <p className="text-xs font-semibold text-[#025EC1] mt-1">
                      {CLINIC_INFO.emergencyNote}
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <ClinicButton to="/book-appointment">Book Appointment</ClinicButton>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-[50px] bg-[#25D366] text-white font-semibold text-sm px-5 py-3 hover:opacity-95 transition-opacity"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    <span>WhatsApp Desk</span>
                  </a>
                </div>
              </div>

              {/* Social Links Card */}
              <div className="card-surface p-6">
                <h3 className="text-base font-bold text-[#213245] mb-3">Follow Momentum Clinic</h3>
                <div className="flex items-center gap-3">
                  <a
                    href={CLINIC_INFO.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={CLINIC_INFO.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-full instagram-gradient text-white flex items-center justify-center"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={CLINIC_INFO.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-10 h-10 rounded-full bg-[#FF0000] text-white flex items-center justify-center"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a
                    href={CLINIC_INFO.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-full bg-[#0A66C2] text-white flex items-center justify-center"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="card-surface p-7 sm:p-9">
                <h2 className="text-2xl font-bold text-[#213245]">Send Us a Message</h2>
                <p className="body-copy mt-2 mb-6">
                  Have a question about consultations, diagnostic imaging, or TPA insurance? Our patient support team responds within one working day.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Location Map Embed */}
          <div className="mt-14 rounded-[12px] overflow-hidden border border-black/10 shadow-[0_2px_12px_rgba(33,50,69,0.08)] bg-[#F5F9FE]">
            <div className="px-6 py-4 bg-white border-b border-black/8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-[#213245]">
                  Clinic Location — Chandra Arcade, Dhaiya, Dhanbad
                </h3>
                <p className="text-xs text-[#59616B]">
                  {CLINIC_INFO.fullAddress} · Also consulting at Nichtipur Hospital &amp; Research Center, Katras Bazar, Dhanbad
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Chandra+Arcade+Dhaiya+Dhanbad+Jharkhand"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-[#025EC1] hover:underline"
              >
                Open in Google Maps
              </a>
            </div>
            <iframe
              title="Momentum Speciality Clinic Location Map — Chandra Arcade, Dhaiya, Dhanbad"
              src="https://www.openstreetmap.org/export/embed.html?bbox=86.4180%2C23.7980%2C86.4580%2C23.8280&layer=mapnik&marker=23.8130%2C86.4380"
              className="w-full h-[280px] sm:h-[360px] border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
