export interface ClinicCenter {
  name: string;
  address: string;
  timings: string;
  phone: string;
  phoneHref: string;
}

export const CLINIC_INFO = {
  name: 'Momentum Clinic',
  specialityName: 'Momentum Speciality Clinic',
  subtitle: 'A Centre For Backpain & Spinal Disorders',
  fullTitle: 'Momentum Speciality Clinic — A Centre For Backpain & Spinal Disorders',
  badgeLabel: 'Aesthetic Spine Center',
  tagline: 'Dedicated Orthopaedic, Complex Spine, Scoliosis & Disc Replacement Care in Dhanbad',
  leadDoctor: 'Dr. Dinesh Kumar Agarwal',
  leadDoctorShort: 'Dr. Dinesh K. Agarwal',
  leadDoctorCredentials: 'M.S. (Ortho), DNB (Ortho) · Fellowship in Spinal Disorder Surgery',
  leadDoctorFellowship: 'CMC Vellore Spine Fellow',
  foundedYear: 2015,
  addressLine1: 'Chandra Arcade, Dhaiya',
  addressLine2: 'Dhanbad, Jharkhand, India',
  fullAddress: 'Chandra Arcade, Dhaiya, Dhanbad, Jharkhand, India',
  phone: '0326-4008249',
  phoneHref: 'tel:+913264008249',
  secondaryPhone: '0326-3570833',
  secondaryPhoneHref: 'tel:+913263570833',
  whatsappNumber: '913264008249',
  whatsappDisplay: '0326-4008249',
  email: 'info@momentumspine.in',
  hours: 'Mon–Fri: 10:00 AM – 04:00 PM (Nichtipur) · 07:00 PM – 09:00 PM (Dhaiya)',
  primaryHours: 'Mon–Fri: 07:00 PM – 09:00 PM',
  emergencyNote: 'CMC Vellore Spine Fellow · Over 10 Years Clinical Expertise',
  centers: [
    {
      name: 'Momentum Speciality Clinic',
      address: 'Chandra Arcade, Dhaiya, Dhanbad',
      timings: 'Mon–Fri: 07:00 PM – 09:00 PM',
      phone: '0326-4008249',
      phoneHref: 'tel:+913264008249',
    },
    {
      name: 'Nichtipur Hospital & Research Center',
      address: 'Katras Bazar, Dhanbad',
      timings: 'Mon–Fri: 10:00 AM – 04:00 PM',
      phone: '0326-3570833',
      phoneHref: 'tel:+913263570833',
    },
  ] as ClinicCenter[],
  socialLinks: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    youtube: 'https://www.youtube.com/',
    linkedin: 'https://www.linkedin.com/',
  },
};

export const CLINIC_IMAGES = {
  heroClinic: '/src/assets/images/hero_spine_clinic_1794931045284.jpg',
  surgicalSuite: '/src/assets/images/surgical_robotics_suite_1794931045722.jpg',
  diagnosticMri: '/src/assets/images/spine_diagnostic_mri_1794931045487.jpg',
  physiotherapyRehab: '/src/assets/images/physiotherapy_rehab_1794931046089.jpg',
  doctorPortrait: '/src/assets/images/doctor_team_portrait_1794931046293.jpg',
  heritageHealing: '/src/assets/images/krishna_kubja_spine_healing.jpg',
  surgeonMale: '/src/assets/images/senior_spine_surgeon_male_1794933432590.jpg',
  specialistFemale: '/src/assets/images/specialist_spine_doctor_female_1794933432935.jpg',
  journeyBg: '/src/assets/images/spine_patient_journey_bg_1794933434675.jpg',
};
