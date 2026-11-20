import { CLINIC_IMAGES } from './clinicInfo';

export interface DoctorProfile {
  slug: string;
  name: string;
  designation: string;
  department: string;
  specialization: string;
  experienceLabel: string;
  image: string;
  focusAreas: string[];
  summary: string;
  clinicalApproach: string;
  academicRole: string;
  consultationDays: string;
  languages: string[];
}

export const DOCTORS: DoctorProfile[] = [
  {
    slug: 'dr-dinesh-agarwal',
    name: 'Dr. Dinesh Kumar Agarwal',
    designation: 'Consultant Orthopaedic & Spine Surgeon · M.S. (Ortho), DNB (Ortho) · CMC Vellore Spine Fellow',
    department: 'Spine Surgery',
    specialization: 'Complex Spine Surgeries, Scoliosis Correction, Disc Replacements & Joint Replacements',
    experienceLabel: '10+ Years Clinical Expertise',
    image: CLINIC_IMAGES.surgeonMale,
    focusAreas: [
      'Complex Spine Surgeries & Spinal Disorder Surgery',
      'Scoliosis & Spinal Deformity Correction',
      'Cervical & Lumbar Disc Replacements',
      'Joint Replacements & Musculoskeletal Trauma Care',
    ],
    summary:
      'Consultant Orthopaedic & Spine Surgeon with over 10 years of clinical expertise. Trained as a Spine Fellow at CMC Vellore (Fellowship in Spinal Disorder Surgery), Dr. Dinesh Kumar Agarwal leads Momentum Speciality Clinic in Dhanbad—dedicated to restoring mobility and enhancing life quality with state-of-the-art spinal solutions, scoliosis correction, disc replacements, and musculoskeletal trauma care.',
    clinicalApproach:
      'Combines CMC Vellore fellowship surgical discipline with conservative-first clinical evaluation, delivering personalized spinal solutions, disc replacements, deformity correction, and precision musculoskeletal trauma care.',
    academicRole:
      'CMC Vellore Spine Fellow (Fellowship in Spinal Disorder Surgery) · Lead Orthopaedic & Spine Consultant at Momentum Speciality Clinic (Dhaiya) & Nichtipur Hospital & Research Center (Katras Bazar), Dhanbad.',
    consultationDays: 'Mon–Fri: 10:00 AM – 04:00 PM (Nichtipur) · 07:00 PM – 09:00 PM (Dhaiya)',
    languages: ['English', 'Hindi'],
  },
  {
    slug: 'dr-bharat-dave',
    name: 'Dr. Bharat R. Dave',
    designation: 'Senior Advisor & Chief Spine Surgeon',
    department: 'Spine Surgery',
    specialization: 'Complex Spine Reconstruction, Deformity & Ethical Spine Care',
    experienceLabel: '30+ Years Clinical Leadership',
    image: CLINIC_IMAGES.doctorPortrait,
    focusAreas: [
      'Spinal Deformity & Scoliosis Correction',
      'Complex Revision Spine Surgery',
      'Degenerative Lumbar & Cervical Disorders',
      'Non-Surgical Spine Triage & Second Opinions',
    ],
    summary:
      'Founder of the super-specialty spine care model established in 2004, Dr. Bharat R. Dave leads Momentum Clinic with an ethical commitment to conservative-first evaluation and precision spinal surgery only when clinically indicated.',
    clinicalApproach:
      'Champions multidisciplinary spine care where nearly 90% of spine complaints are managed conservatively without surgery through structured diagnostics and physiotherapy.',
    academicRole:
      'Mentor for clinical spine fellowships, peer-reviewed researcher, and active contributor to national and international spine surgical societies.',
    consultationDays: 'Monday – Saturday (Morning & Afternoon OPD)',
    languages: ['English', 'Hindi', 'Gujarati'],
  },
  {
    slug: 'dr-ajay-krishnan',
    name: 'Dr. Ajay Krishnan',
    designation: 'Senior Consultant Spine Surgeon',
    department: 'Minimally Invasive & Endoscopic Spine',
    specialization: 'Endoscopic Spine Surgery, MISS & Motion Preservation',
    experienceLabel: '22+ Years Spine Surgery',
    image: CLINIC_IMAGES.heroClinic,
    focusAreas: [
      'Full-Endoscopic Lumbar Discectomy',
      'Minimally Invasive Spine Surgery (MISS)',
      'Cervical Myelopathy & Disc Prolapse',
      'Spinal Stenosis Micro-Decompression',
    ],
    summary:
      'Internationally recognized specialist in minimally invasive and endoscopic spine surgery, focusing on ultra-small-incision decompression that preserves paraspinal musculature and accelerates functional recovery.',
    clinicalApproach:
      'Combines sub-centimeter endoscopic visualization with intraoperative fluoroscopic and navigation guidance to minimize tissue trauma and hospital stay.',
    academicRole:
      'Faculty lead for minimally invasive spine workshops, clinical outcome studies, and international fellowship training.',
    consultationDays: 'Monday – Saturday (By Prior Appointment)',
    languages: ['English', 'Hindi', 'Malayalam', 'Gujarati'],
  },
  {
    slug: 'dr-mirant-dave',
    name: 'Dr. Mirant Dave',
    designation: 'Managing Director & Consultant Spine Surgeon',
    department: 'Robotic & Motion-Preserving Spine Care',
    specialization: 'Robotic Spine Surgery, Artificial Disc Replacement & Pediatric Spine',
    experienceLabel: '15+ Years Spine Surgery',
    image: CLINIC_IMAGES.surgicalSuite,
    focusAreas: [
      'Robotic-Guided Pedicle Instrumentation',
      'Cervical & Lumbar Artificial Disc Replacement',
      'Early-Onset Scoliosis & Growing Rod Care',
      'Comprehensive Spine Care Pathways',
    ],
    summary:
      'Leads hospital innovation, robotic surgical integration, and structured specialty clinic pathways at Momentum Clinic, ensuring seamless coordination across diagnostics, surgery, and physiotherapy.',
    clinicalApproach:
      'Integrates O-arm 3D imaging and robotic trajectory planning for high-accuracy implant placement and motion-preserving spinal reconstruction.',
    academicRole:
      'Clinical trial coordinator and contributor to indexed spine surgery outcomes research and quality accreditation initiatives.',
    consultationDays: 'Monday – Saturday (OPD & Telemedicine)',
    languages: ['English', 'Hindi', 'Gujarati'],
  },
  {
    slug: 'dr-mukesh-patel',
    name: 'Dr. Mukesh Patel',
    designation: 'Senior Spine Neurosurgeon',
    department: 'Neuro-Spine & Spinal Cord Surgery',
    specialization: 'Intradural Spine Tumors, Cervical Spine & Neuro-Decompression',
    experienceLabel: '20+ Years Neuro-Spine',
    image: CLINIC_IMAGES.specialistFemale,
    focusAreas: [
      'Spinal Cord & Intradural Tumor Microsurgery',
      'Cervical Disc & Myelopathy Management',
      'Intraoperative Neuromonitoring Protocols',
      'Craniovertebral Junction Disorders',
    ],
    summary:
      'Senior neuro-spine specialist dedicated to delicate spinal cord, nerve root, and intradural pathology using high-magnification surgical microscopy and continuous neuromonitoring.',
    clinicalApproach:
      'Prioritizes neurological preservation with real-time neurophysiological monitoring and microsurgical precision.',
    academicRole:
      'Senior surgical mentor and member of institutional clinical governance and neuro-spine research boards.',
    consultationDays: 'Monday, Wednesday, Friday & Saturday',
    languages: ['English', 'Hindi', 'Gujarati'],
  },
  {
    slug: 'dr-devanand-degulmadi',
    name: 'Dr. Devanand Degulmadi',
    designation: 'Senior Consultant Spine Surgeon & Clinical Researcher',
    department: 'Deformity & Degenerative Spine',
    specialization: 'Spinal Deformity, Degenerative Lumbar Spine & Research',
    experienceLabel: '16+ Years Spine & Research',
    image: CLINIC_IMAGES.doctorPortrait,
    focusAreas: [
      'Adult & Adolescent Scoliosis Correction',
      'Spondylolisthesis & Spinal Instability',
      'Evidence-Based Spine Outcome Audits',
      'Ethics Committee & Clinical Trials',
    ],
    summary:
      'Clinician-researcher specializing in degenerative spinal instability and scoliosis correction, while directing clinical registry audits and institutional ethics research.',
    clinicalApproach:
      'Uses weight-bearing standing MRI correlations and quantitative outcome tracking to guide individualized surgical or conservative plans.',
    academicRole:
      'Institutional fellowship faculty, ethics committee contributor, and lead author across peer-reviewed spine journals.',
    consultationDays: 'Tuesday – Saturday (OPD)',
    languages: ['English', 'Hindi', 'Kannada', 'Telugu'],
  },
  {
    slug: 'dr-shivanand-mayi',
    name: 'Dr. Shivanand Mayi',
    designation: 'Consultant Spine Surgeon',
    department: 'Spine Trauma & Deformity',
    specialization: 'Spinal Trauma, Infection & Complex Thoracic Spine',
    experienceLabel: '14+ Years Spine Surgery',
    image: CLINIC_IMAGES.specialistFemale,
    focusAreas: [
      'Acute Spinal Trauma & Fracture Stabilization',
      'Spinal Tuberculosis & Infection Care',
      'Thoracic Disc & Kyphosis Reconstruction',
      'Osteoporotic Vertebral Fractures',
    ],
    summary:
      'Consultant spine surgeon focused on urgent spinal trauma stabilization, infectious spine reconstruction, and kyphotic deformity correction.',
    clinicalApproach:
      'Combines rapid neurological triage with minimally invasive stabilization and structured post-operative rehabilitation.',
    academicRole:
      'Active faculty member in spine trauma workshops and clinical fellowship mentoring.',
    consultationDays: 'Monday – Saturday (OPD & Emergency Call)',
    languages: ['English', 'Hindi', 'Kannada', 'Marathi'],
  },
  {
    slug: 'dr-ravi-ranjan-rai',
    name: 'Dr. Ravi Ranjan Rai',
    designation: 'Consultant Spine Surgeon',
    department: 'Minimally Invasive & Pain Management',
    specialization: 'Minimally Invasive Decompression, Sciatica & Interventional Pain',
    experienceLabel: '12+ Years Spine Care',
    image: CLINIC_IMAGES.surgeonMale,
    focusAreas: [
      'Tubular Microdiscectomy for Sciatica',
      'Targeted Nerve Root Blocks & Epidurals',
      'Lumbar Canal Stenosis Decompression',
      'Post-Rehab Return to Work Protocols',
    ],
    summary:
      'Spine surgeon specializing in targeted pain interventions and minimally invasive decompression for sciatica, herniated discs, and lumbar stenosis.',
    clinicalApproach:
      'Follows a step-ladder protocol starting with guided physical therapy and image-guided pain procedures before considering micro-decompression.',
    academicRole:
      'Clinical researcher focused on early mobilization protocols and minimally invasive lumbar recovery.',
    consultationDays: 'Monday – Saturday (Morning & Evening OPD)',
    languages: ['English', 'Hindi', 'Gujarati'],
  },
];

export const DOCTOR_DEPARTMENTS = [
  'All Departments',
  ...Array.from(new Set(DOCTORS.map((d) => d.department))),
];
