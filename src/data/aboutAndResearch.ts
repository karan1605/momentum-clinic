import { CLINIC_IMAGES } from './clinicInfo';

export const CLINICAL_MILESTONES = [
  { value: '300,000+', label: 'Spine Patients Treated Since 2004' },
  { value: '90%', label: 'Managed Without Spine Surgery' },
  { value: '23+', label: 'Countries Served Globally' },
  { value: '20+ Yrs', label: 'Dedicated Super-Specialty Spine Focus' },
];

export const AWARDS_AND_RECOGNITIONS = [
  {
    year: 'Excellence Legacy',
    title: 'Super-Specialty Spine Care Recognition',
    body: 'Recognized nationally for pioneering an exclusive spine-only clinical model built on Talent, Technique, and Technology.',
  },
  {
    year: 'Leadership Honor',
    title: 'Shalin Manav Ratna & Lifetime Clinical Honors',
    body: 'Leadership accolades honoring decades of ethical spine care, charitable outreach, and surgical education.',
  },
  {
    year: 'Academic Standing',
    title: 'Indexed Research & Global Society Faculty',
    body: 'Active clinical faculty representation across NASS, AO Spine International, and Association of Spine Surgeons of India (ASSI).',
  },
  {
    year: 'Patient Trust',
    title: 'NABH Quality Alignment & Outcome Registry',
    body: 'Structured clinical quality governance and continuous NABH accreditation compliance across surgical and diagnostic wings.',
  },
];

export const ACHIEVEMENT_SLIDES = [
  { id: 'ach-1', year: '2009', title: 'AO Spine National Faculty - 2009', badge: 'AO SPINE' },
  { id: 'ach-2', year: '2013', title: 'Asia Pacific Spine Society Faculty - 2013', badge: 'APSS' },
  { id: 'ach-3', year: '2016', title: 'ASSI Minimally Invasive Excellence - 2016', badge: 'ASSI' },
  { id: 'ach-4', year: '2019', title: 'NASS International Research Contributor - 2019', badge: 'NASS' },
  { id: 'ach-5', year: '2021', title: '90% Non-Surgical Conservative Care Milestone', badge: '90% REHAB' },
  { id: 'ach-6', year: '2023', title: 'O-Arm & Robotic Spine Surgery Center', badge: 'ROBOTICS' },
  { id: 'ach-7', year: '2024', title: '300,000+ Spine Patients Treated Worldwide', badge: '300K+' },
  { id: 'ach-8', year: '2026', title: 'NABH Quality & Patient Safety Alignment', badge: 'NABH' },
];

export const LEADERSHIP_TEAM = [
  {
    name: 'Dr. Dinesh Kumar Agarwal',
    role: 'Consultant Orthopaedic & Spine Surgeon · CMC Vellore Spine Fellow',
    bio: 'M.S. (Ortho), DNB (Ortho) with Fellowship in Spinal Disorder Surgery at CMC Vellore and over 10 years of clinical expertise in complex spine surgeries, scoliosis correction, disc replacements, and joint replacements in Dhanbad.',
    doctorSlug: 'dr-dinesh-agarwal',
    image: CLINIC_IMAGES.surgeonMale,
  },
  {
    name: 'Dr. Bharat R. Dave',
    role: 'Senior Advisor & Chief Spine Surgeon',
    bio: 'Champions ethical, evidence-based spinal diagnosis and conservative-first care pathways uniting surgical mastery with modern rehabilitation.',
    doctorSlug: 'dr-bharat-dave',
    image: CLINIC_IMAGES.doctorPortrait,
  },
  {
    name: 'Dr. Mirant Dave',
    role: 'Managing Director & Senior Spine Surgeon',
    bio: 'Leads clinical operations, robotic spine surgery integration, digital diagnostic modernization, and quality accreditation governance.',
    doctorSlug: 'dr-mirant-dave',
    image: CLINIC_IMAGES.surgicalSuite,
  },
  {
    name: 'Dr. Ajay Krishnan',
    role: 'Director of Minimally Invasive & Endoscopic Spine',
    bio: 'Heads ultra-minimally invasive surgical pathways, endoscopic workshops, and national/international surgical fellowship mentorship.',
    doctorSlug: 'dr-ajay-krishnan',
    image: CLINIC_IMAGES.heroClinic,
  },
];

export const ACCREDITATIONS = [
  {
    code: 'NABH',
    title: 'National Accreditation Board for Hospitals & Healthcare Providers (NABH)',
    status: 'Quality & Patient Safety Standards Compliance / Expansion Facility Application',
    description:
      'Stringent patient safety, sterilization, medication management, and clinical audit protocols aligned with national hospital accreditation benchmarks.',
  },
  {
    code: 'AO Spine',
    title: 'AO Spine International Fellowship & Academic Collaboration',
    status: 'Active International Faculty & Training Center',
    description:
      'Structured international spine education, standardized deformity classification, and global multicenter clinical research participation.',
  },
  {
    code: 'NASS',
    title: 'North American Spine Society (NASS)',
    status: 'Active Member & Research Contributor',
    description:
      'Evidence-based guideline adherence, peer-reviewed clinical studies, and international scientific exchange.',
  },
  {
    code: 'ASSI',
    title: 'Association of Spine Surgeons of India (ASSI)',
    status: 'Accredited Faculty & Fellowship Partner',
    description:
      'National leadership in minimally invasive spine surgery training, ethics governance, and annual scientific symposia.',
  },
];

export const HOSPITAL_FACILITIES = [
  {
    title: 'Modular Laminar-Flow Operating Suites',
    detail:
      'Dedicated spine OTs equipped with HEPA laminar airflow, O-arm 3D imaging, robotic arm navigation, and continuous neuromonitoring.',
    image: CLINIC_IMAGES.surgicalSuite,
  },
  {
    title: 'Comprehensive Spine Diagnostic Wing',
    detail:
      'In-house Open Standing Weight-Bearing MRI, 1.5T Wide-Bore MRI, Multi-Slice CT, and digital full-spine X-ray under one roof.',
    image: CLINIC_IMAGES.diagnosticMri,
  },
  {
    title: 'Dedicated Physiotherapy & Rehab Studio',
    detail:
      'Functional Magnetic Stimulation (FMS), High-Intensity Laser Therapy, Cryotherapy, and ergonomic recovery stations.',
    image: CLINIC_IMAGES.physiotherapyRehab,
  },
  {
    title: 'In-House Pharmacy & Patient Recovery Suites',
    detail:
      '24/7 clinical pharmacy, ergonomic spine-friendly inpatient beds, ICU step-down monitoring, and attentive nursing teams.',
    image: CLINIC_IMAGES.heroClinic,
  },
];

export const RESEARCH_PUBLICATIONS = [
  {
    year: '2026',
    title: 'Long-Term Functional Outcomes of Full-Endoscopic Discectomy vs. Tubular Microdiscectomy in Lumbar Disc Prolapse',
    authors: 'Krishnan A., Dave B.R., Rai R.R., Degulmadi D.',
    journal: 'Global Spine Clinical Outcomes Registry',
    category: 'Minimally Invasive',
  },
  {
    year: '2025',
    title: 'Diagnostic Yield of Upright Weight-Bearing MRI in Dynamic Lumbar Canal Stenosis & Spondylolisthesis',
    authors: 'Degulmadi D., Dave M., Dave B.R.',
    journal: 'International Journal of Spine Diagnostics',
    category: 'Diagnostics',
  },
  {
    year: '2025',
    title: 'Five-Year Pulmonary & Curve Maintenance Outcomes with Magnetically Controlled Growing Rods in Early-Onset Scoliosis',
    authors: 'Dave B.R., Mayi S., Degulmadi D.',
    journal: 'Spine Deformity & Pediatric Care',
    category: 'Deformity',
  },
  {
    year: '2024',
    title: 'Accuracy and Radiation Reduction in O-Arm Coupled Robotic Pedicle Instrumentation: Single-Center Audit',
    authors: 'Dave M., Patel M., Krishnan A.',
    journal: 'Asian Spine Surgical Innovation Review',
    category: 'Robotics & Navigation',
  },
  {
    year: '2024',
    title: 'Conservative-First Triage Protocols: Outcomes in 10,000 Consecutive Outpatient Low Back Pain Presentations',
    authors: 'Dave B.R., Rai R.R., Krishnan A.',
    journal: 'Journal of Ethical Spine Practice',
    category: 'Conservative Care',
  },
];

export const FELLOWSHIP_PROGRAMS = [
  {
    id: 'clinical-research-dual-fellowship',
    title: 'Dual-Phase Clinical & Research Spine Fellowship',
    duration: '12 Months (6 Months Research + 6 Months Clinical/OT)',
    eligibility: 'MS (Orthopaedics) / DNB (Orthopaedics) / MCh (Neurosurgery)',
    description:
      'Structured academic immersion combining institutional clinical outcome registry research with hands-on OPD, ward management, and surgical assistance.',
  },
  {
    id: 'ao-spine-fellowship',
    title: 'AO Spine International Visiting Fellowship',
    duration: '3 to 6 Months',
    eligibility: 'Post-specialty spine surgeons via AO Spine selection framework',
    description:
      'Focused exposure to deformity reconstruction, spinal trauma protocols, and multidisciplinary case conferences.',
  },
  {
    id: 'missab-fellowship',
    title: 'Non-Stipendiary MISSAB Minimally Invasive Spine Fellowship',
    duration: '3 Months Intensive',
    eligibility: 'Practicing Orthopaedic or Neuro-Spine Surgeons',
    description:
      'Focused skill acquisition in tubular decompression, percutaneous instrumentation, and full-endoscopic spine techniques.',
  },
];

export const OPEN_POSITIONS = [
  {
    id: 'associate-spine-surgeon',
    title: 'Associate Consultant Spine Surgeon',
    department: 'Spine Surgery',
    type: 'Full-Time · Dhanbad',
    summary: 'MS/MCh with completed spine fellowship; OPD evaluation, surgical assistance, and academic participation.',
  },
  {
    id: 'spine-physiotherapist',
    title: 'Senior Spine Physiotherapist (MPT Ortho / Neuro)',
    department: 'Physiotherapy & Rehabilitation',
    type: 'Full-Time · Dhanbad',
    summary: 'Lead conservative spine conditioning, FMS sessions, and post-operative mobilization protocols.',
  },
  {
    id: 'ot-scrub-nurse',
    title: 'Spine Operating Theater (OT) Scrub Nurse',
    department: 'Surgical Nursing',
    type: 'Full-Time · Dhanbad',
    summary: 'Experienced in sterile neuro/orthopaedic instrumentation, microscopy draping, and O-arm workflows.',
  },
  {
    id: 'mri-radiographer',
    title: 'MRI & Diagnostic Imaging Technologist',
    department: 'Spine Diagnostics',
    type: 'Full-Time · Dhanbad',
    summary: 'Operate 1.5T Wide-Bore MRI and Open Standing Weight-Bearing MRI consoles with patient-centric care.',
  },
];
