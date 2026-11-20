import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { HomePage } from '../pages/Home/HomePage';
import { HospitalOverviewPage } from '../pages/About/HospitalOverviewPage';
import { VisionMissionPage } from '../pages/About/VisionMissionPage';
import { LeadershipPage } from '../pages/About/LeadershipPage';
import { AccreditationsPage } from '../pages/About/AccreditationsPage';
import { FacilitiesPage } from '../pages/About/FacilitiesPage';
import { DoctorsDirectoryPage } from '../pages/Doctors/DoctorsDirectoryPage';
import { DoctorDetailPage } from '../pages/Doctors/DoctorDetailPage';
import { InternationalPatientsPage } from '../pages/PatientCare/InternationalPatientsPage';
import { PatientServicesPage } from '../pages/PatientCare/PatientServicesPage';
import { InsuranceTPAPage } from '../pages/PatientCare/InsuranceTPAPage';
import { PatientRightsPage } from '../pages/PatientCare/PatientRightsPage';
import { FAQsPage } from '../pages/PatientCare/FAQsPage';
import { TreatmentsDirectoryPage } from '../pages/Treatments/TreatmentsDirectoryPage';
import { TreatmentDetailPage } from '../pages/Treatments/TreatmentDetailPage';
import { TechnologyPage } from '../pages/Technology/TechnologyPage';
import { ResearchPage } from '../pages/Research/ResearchPage';
import { FellowshipPage } from '../pages/Careers/FellowshipPage';
import { WorkWithUsPage } from '../pages/Careers/WorkWithUsPage';
import { BlogListPage } from '../pages/Blog/BlogListPage';
import { BlogDetailPage } from '../pages/Blog/BlogDetailPage';
import { ContactPage } from '../pages/Contact/ContactPage';
import { AppointmentPage } from '../pages/Appointment/AppointmentPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const AppRoutes: React.FC = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* About Us */}
        <Route path="/about" element={<Navigate to="/about/overview" replace />} />
        <Route path="/about/overview" element={<HospitalOverviewPage />} />
        <Route path="/about/vision-mission" element={<VisionMissionPage />} />
        <Route path="/about/leadership" element={<LeadershipPage />} />
        <Route path="/about/accreditations" element={<AccreditationsPage />} />
        <Route path="/about/facilities" element={<FacilitiesPage />} />

        {/* Doctors */}
        <Route path="/doctors" element={<DoctorsDirectoryPage />} />
        <Route path="/doctors/:slug" element={<DoctorDetailPage />} />

        {/* Patient Care */}
        <Route path="/patient-care" element={<Navigate to="/patient-care/patient-services" replace />} />
        <Route path="/patient-care/international-patients" element={<InternationalPatientsPage />} />
        <Route path="/patient-care/patient-services" element={<PatientServicesPage />} />
        <Route path="/patient-care/insurance-tpa" element={<InsuranceTPAPage />} />
        <Route path="/patient-care/patient-rights" element={<PatientRightsPage />} />
        <Route path="/patient-care/faqs" element={<FAQsPage />} />

        {/* Treatments & Procedures */}
        <Route path="/treatments" element={<TreatmentsDirectoryPage />} />
        <Route path="/treatments/:slug" element={<TreatmentDetailPage />} />

        {/* Technology */}
        <Route path="/technology" element={<Navigate to="/technology/surgical" replace />} />
        <Route path="/technology/surgical" element={<TechnologyPage categorySlug="surgical" />} />
        <Route path="/technology/physiotherapy-rehab" element={<TechnologyPage categorySlug="physiotherapy-rehab" />} />
        <Route path="/technology/diagnostics" element={<TechnologyPage categorySlug="diagnostics" />} />

        {/* Innovation & Research */}
        <Route path="/research" element={<ResearchPage />} />

        {/* Careers */}
        <Route path="/careers" element={<Navigate to="/careers/work-with-us" replace />} />
        <Route path="/careers/fellowship" element={<FellowshipPage />} />
        <Route path="/careers/work-with-us" element={<WorkWithUsPage />} />

        {/* Blog / Insights */}
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />

        {/* Appointments, Telemedicine & Contact */}
        <Route path="/book-appointment" element={<AppointmentPage mode="in-person" />} />
        <Route path="/telemedicine" element={<AppointmentPage mode="telemedicine" />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Legal & Institutional Charter Links */}
        <Route path="/privacy-policy" element={<PatientRightsPage />} />
        <Route path="/terms-conditions" element={<PatientRightsPage />} />
        <Route path="/refund-policy" element={<PatientRightsPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainLayout>
  );
};
