import React from 'react';
import { ClinicButton } from '../components/Buttons/ClinicButton';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export const NotFoundPage: React.FC = () => {
  useDocumentMeta({
    title: 'Page Not Found | Momentum Clinic',
    description: 'The requested page could not be found on Momentum Clinic.',
  });

  return (
    <section className="py-24 bg-[#F5F9FE]">
      <div className="site-container">
        <div className="max-w-[720px] mx-auto text-center space-y-5">
          <p className="text-sm font-bold text-[#025EC1]">404 · Page Not Found</p>
          <h1 className="heading-section">We Could Not Find That Page</h1>
          <p className="body-copy">
            The page you requested may have moved. You can return to the Momentum Clinic homepage, explore our spine specialists, or schedule an appointment.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <ClinicButton to="/">Return to Homepage</ClinicButton>
            <ClinicButton to="/book-appointment" variant="white">
              Book Appointment
            </ClinicButton>
          </div>
        </div>
      </div>
    </section>
  );
};
