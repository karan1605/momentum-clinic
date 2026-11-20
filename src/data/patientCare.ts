export interface FAQItem {
  id: string;
  category: 'General & Appointments' | 'Conservative Care & Rehab' | 'Surgery & Recovery' | 'Insurance & International';
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  patientName: string;
  location: string;
  condition: string;
  treatmentSummary: string;
  quote: string;
  doctorName: string;
}

import { CLINIC_IMAGES } from './clinicInfo';

export interface SpecialtyClinicItem {
  id: string;
  num: string;
  title: string;
  lead: string;
  summary: string;
  description: string;
  image: string;
  link: string;
}

export const SPECIALTY_CLINICS: SpecialtyClinicItem[] = [
  {
    id: 'recurring-back-pain',
    num: '01',
    title: 'Recurring Back Pain',
    lead: 'Dr. Dinesh Kumar Agarwal & Dr. Ravi Ranjan Rai',
    summary: 'Ongoing back pain affecting daily activities and movement.',
    description:
      'Ongoing back pain affecting daily activities and movement—evaluated through upright biomechanical assessment, targeted physiotherapy, and conservative stabilization.',
    image: CLINIC_IMAGES.heroClinic,
    link: '/treatments/physiotherapy-rehabilitation',
  },
  {
    id: 'recurring-neck-pain',
    num: '02',
    title: 'Recurring Neck Pain',
    lead: 'Dr. Ajay Krishnan & Dr. Mukesh Patel',
    summary: 'Specialized care for repeated neck pain and cervical spine issues.',
    description:
      'Specialized care for repeated neck pain, cervical radiculopathy, and posture strain combining targeted nerve relief and motion-preserving arthroplasty.',
    image: CLINIC_IMAGES.physiotherapyRehab,
    link: '/treatments/artificial-disc-replacement',
  },
  {
    id: 'deformity-corrections',
    num: '03',
    title: 'Deformity Corrections',
    lead: 'Dr. Dinesh Kumar Agarwal & Dr. Devanand Degulmadi',
    summary: 'Correction of abnormal spine curvatures such as scoliosis and kyphosis.',
    description:
      'Correction of abnormal spine curvatures such as scoliosis and kyphosis, from pediatric bracing and MCGR growing rods to neuromonitored 3D reconstruction.',
    image: CLINIC_IMAGES.diagnosticMri,
    link: '/treatments/spinal-deformity-correction',
  },
  {
    id: 'age-related-degeneration',
    num: '04',
    title: 'Age Related Spine Degeneration',
    lead: 'Dr. Ajay Krishnan & Dr. Mirant Dave',
    summary: 'Treatment for spinal wear and tear caused by aging.',
    description:
      'Treatment for spinal wear and tear caused by aging, addressing lumbar canal stenosis, facet arthropathy, and spondylolisthesis with minimally invasive precision.',
    image: CLINIC_IMAGES.surgicalSuite,
    link: '/treatments/minimally-invasive-spine-surgery',
  },
  {
    id: 'osteoporosis',
    num: '05',
    title: 'Osteoporosis',
    lead: 'Dr. Shivanand Mayi',
    summary: 'Care for weak and brittle spine bones prone to fractures.',
    description:
      'Care for weak and brittle spine bones prone to compression fractures through bone density restoration, bracing, and day-care vertebral augmentation.',
    image: CLINIC_IMAGES.diagnosticMri,
    link: '/treatments/pain-management',
  },
  {
    id: 'spine-injuries',
    num: '06',
    title: 'Spine Injuries',
    lead: 'Dr. Shivanand Mayi & Dr. Mirant Dave',
    summary: 'Medical and surgical management for accident and trauma-related spine injuries.',
    description:
      'Rapid neurological triage and stabilization for accident and trauma-related spinal fractures using 3D O-arm navigation and robotic instrumentation.',
    image: CLINIC_IMAGES.surgicalSuite,
    link: '/treatments/robotic-spine-surgery',
  },
  {
    id: 'spine-tumours',
    num: '07',
    title: 'Spine Tumours',
    lead: 'Dr. Mukesh Patel',
    summary: 'Focused diagnosis and treatment of spinal column and cord tumours.',
    description:
      'Microsurgical tumor resection under continuous intraoperative neuromonitoring and high-definition microscopy to safeguard delicate neural tracts.',
    image: CLINIC_IMAGES.surgicalSuite,
    link: '/treatments/minimally-invasive-spine-surgery',
  },
  {
    id: 'spine-infections',
    num: '08',
    title: 'Spine Infections',
    lead: 'Dr. Devanand Degulmadi',
    summary: 'Targeted care for spinal tuberculosis, discitis, and post-operative infections.',
    description:
      'Targeted antimicrobial protocols, image-guided biopsy, and structural reconstruction for spinal tuberculosis and pyogenic spondylodiscitis.',
    image: CLINIC_IMAGES.heroClinic,
    link: '/treatments/spinal-deformity-correction',
  },
  {
    id: 'cranio-spinal',
    num: '09',
    title: 'Cranio Spinal Treatment',
    lead: 'Dr. Mukesh Patel',
    summary: 'Precision care for craniovertebral junction and upper cervical anomalies.',
    description:
      'Dedicated surgical and neuro-stabilization expertise for complex craniovertebral junction anomalies, basilar invagination, and upper cervical instability.',
    image: CLINIC_IMAGES.diagnosticMri,
    link: '/treatments/robotic-spine-surgery',
  },
  {
    id: 'posture-related',
    num: '10',
    title: 'Posture Related Problems',
    lead: 'Spine Rehabilitation Team',
    summary: 'Ergonomic assessment and functional rehabilitation for desk and lifestyle strain.',
    description:
      'Comprehensive ergonomic conditioning, core strengthening, and Functional Magnetic Stimulation (FMS) for chronic postural neck and back overload.',
    image: CLINIC_IMAGES.physiotherapyRehab,
    link: '/treatments/lifestyle-preventive-care',
  },
  {
    id: 'sports-injuries',
    num: '11',
    title: 'Sports Related Spine Injuries',
    lead: 'Dr. Ravi Ranjan Rai',
    summary: 'Targeted recovery pathways enabling safe return to athletic performance.',
    description:
      'Structured recovery for spondylolysis, pars stress injuries, and athletic disc strains, focusing on biomechanics and safe return to sport.',
    image: CLINIC_IMAGES.physiotherapyRehab,
    link: '/treatments/physiotherapy-rehabilitation',
  },
  {
    id: 'stiff-spine',
    num: '12',
    title: 'Stiff Spine Condition',
    lead: 'Dr. Bharat R. Dave',
    summary: 'Comprehensive care for ankylosing spondylitis and rigid spinal conditions.',
    description:
      'Specialized medical coordination, mobility preservation, and corrective osteotomy planning for ankylosing spondylitis and rigid kyphotic spines.',
    image: CLINIC_IMAGES.heroClinic,
    link: '/treatments/spinal-deformity-correction',
  },
];

export const HOMEPAGE_JOURNEY_STEPS = [
  {
    step: '01.',
    title: 'Book appointment',
    description: 'Prior appointment is required for consultations',
  },
  {
    step: '02.',
    title: 'Consultation & diagnosis',
    description: 'Expert evaluation to understand your condition accurately.',
  },
  {
    step: '03.',
    title: 'Personalized treatment plan',
    description: 'Customized care plan designed for your specific health needs.',
  },
  {
    step: '04.',
    title: 'Recovery & rehabilitation',
    description: 'Guided recovery with support for long-term health wellness.',
  },
];

export interface SpineReelItem {
  id: string;
  title: string;
  speaker: string;
  duration: string;
  publishedDate: string;
  category: string;
  summary: string;
  keyTakeaways: string[];
  thumbnail: string;
  relatedLink: string;
}

export const SPINE_KNOWLEDGE_REELS: SpineReelItem[] = [
  {
    id: 'reel-1',
    title: 'Removing Nerve Pressure Doesn’t Guarantee Nerve Recovery',
    speaker: 'Dr. Mirant Dave',
    duration: '1:45',
    publishedDate: '15 November 2026',
    category: 'Conservative Spine Care',
    summary:
      'Most acute lumbar disc bulges shrink naturally over 6–8 weeks when paired with directional physiotherapy and anti-inflammatory guidance.',
    keyTakeaways: [
      'Avoid prolonged complete bed rest beyond 48 hours.',
      'Seek urgent care only if red flags like foot drop or bowel changes occur.',
      'Combine core stabilization with ergonomic sitting posture.',
    ],
    thumbnail: CLINIC_IMAGES.surgeonMale,
    relatedLink: '/treatments/physiotherapy-rehabilitation',
  },
  {
    id: 'reel-2',
    title: 'Life at Momentum, Beyond the Scrubs! Part-3',
    speaker: 'Dr. Dinesh Kumar Agarwal',
    duration: '2:10',
    publishedDate: '11 November 2026',
    category: 'Inside Momentum Clinic',
    summary:
      'One more round of candid clinical answers and lighter team moments showing how multidisciplinary spine specialists collaborate every morning.',
    keyTakeaways: [
      'Natural gravity standing MRI reveals dynamic instability missed lying flat.',
      'Every surgical decision passes peer second-opinion consensus.',
      'Dedicated team huddles align physiotherapy and surgical goals.',
    ],
    thumbnail: CLINIC_IMAGES.doctorPortrait,
    relatedLink: '/about/leadership',
  },
  {
    id: 'reel-3',
    title: 'Not All Spine Surgeries Are The Same',
    speaker: 'Dr. Ajay Krishnan',
    duration: '2:25',
    publishedDate: '10 November 2026',
    category: 'Minimally Invasive Surgery',
    summary:
      'An inside look at 8mm full-endoscopic decompression vs microscopic stabilization—choosing the least invasive tool tailored to each pathology.',
    keyTakeaways: [
      'Sub-centimeter incision preserves natural spinal stability.',
      'Patients typically mobilize within 12–24 hours post-procedure.',
      'Minimal blood loss and faster return to daily routines.',
    ],
    thumbnail: CLINIC_IMAGES.surgicalSuite,
    relatedLink: '/treatments/endoscopic-spine-surgery',
  },
  {
    id: 'reel-4',
    title: 'First Spine Consultation At Momentum Clinic? Here Is What To Bring',
    speaker: 'Dr. Ravi Ranjan Rai',
    duration: '1:55',
    publishedDate: '09 November 2026',
    category: 'Patient Preparation',
    summary:
      'What to expect during your initial 30-minute spine evaluation, prior scan review, and conservative-first care planning.',
    keyTakeaways: [
      'Bring prior MRI films, X-rays, and current medication lists.',
      'Clinical exam correlates dermatomal findings directly with scans.',
      'Functional Magnetic Stimulation (FMS) aids non-surgical core recovery.',
    ],
    thumbnail: CLINIC_IMAGES.physiotherapyRehab,
    relatedLink: '/book-appointment',
  },
  {
    id: 'reel-5',
    title: 'Robotic Precision & O-Arm Navigation in Scoliosis Care',
    speaker: 'Dr. Devanand Degulmadi',
    duration: '2:30',
    publishedDate: '05 November 2026',
    category: 'Robotic Spine Tech',
    summary:
      'How real-time 3D O-arm imaging and robotic trajectory guidance protect nerves during complex spinal curve reconstruction.',
    keyTakeaways: [
      'Continuous neuromonitoring checks nerve safety throughout surgery.',
      'Pre-planned 3D trajectories optimize implant accuracy.',
      'Dedicated pediatric and adult deformity pathways.',
    ],
    thumbnail: CLINIC_IMAGES.specialistFemale,
    relatedLink: '/treatments/robotic-spine-surgery',
  },
];

export const PATIENT_JOURNEY_STEPS = [
  {
    step: '01',
    title: 'Registration & Clinical Triage',
    description:
      'Book an in-person OPD slot or submit prior scans via Telemedicine for rapid symptom triage.',
  },
  {
    step: '02',
    title: 'Specialist Spine Evaluation',
    description:
      'One-on-one neurological exam and correlation of symptoms with spinal biomechanics.',
  },
  {
    step: '03',
    title: 'Precision Upright Diagnostics',
    description:
      'Open Standing Weight-Bearing MRI, 1.5T MRI, or digital full-spine X-rays when clinically needed.',
  },
  {
    step: '04',
    title: 'Conservative-First Care Plan',
    description:
      '~90% of patients begin targeted physiotherapy, FMS, or pain blocks; surgery is advised only when indicated.',
  },
  {
    step: '05',
    title: 'Guided Rehab & Recovery Follow-Up',
    description:
      'Structured return-to-work ergonomics, milestone tracking, and remote follow-up support.',
  },
];

export const TESTIMONIALS: (TestimonialItem & { timeAgo?: string; avatarBg?: string })[] = [
  {
    id: 't1',
    patientName: 'Garima Mathur',
    location: 'Ranchi, Jharkhand',
    timeAgo: '3 days ago',
    avatarBg: '#4A148C',
    condition: 'Full-Endoscopic Spine Surgery',
    treatmentSummary: 'Full-Endoscopic Keyhole Discectomy',
    quote:
      'I had an endoscopic spine surgery at Momentum Clinic. Doctors are very good, they explained the surgery very patiently and calmly before and after every step of recovery.',
    doctorName: 'Dr. Ajay Krishnan',
  },
  {
    id: 't2',
    patientName: 'Jagdish Choudhary',
    location: 'Dhanbad, Jharkhand',
    timeAgo: '3 days ago',
    avatarBg: '#025EC1',
    condition: 'Lumbar Canal Stenosis',
    treatmentSummary: 'Conservative & Rehab Pathway',
    quote:
      'Excellent experience at Momentum Speciality Clinic in Dhaiya from consultation through diagnostics and physiotherapy guidance. Dr. Dinesh Kumar Agarwal explained everything clearly.',
    doctorName: 'Dr. Dinesh Kumar Agarwal',
  },
  {
    id: 't3',
    patientName: 'Samundar Singh Solanki',
    location: 'Udaipur, India',
    timeAgo: '3 days ago',
    avatarBg: '#7CB342',
    condition: 'L4–L5 Disc Herniation & Sciatica',
    treatmentSummary: 'Minimally Invasive Decompression',
    quote:
      'I was struggling severely with a slipped disc before visiting. After surgical counseling and minimally invasive care, the team explained everything thoroughly and recovery has been smooth.',
    doctorName: 'Dr. Mirant Dave',
  },
  {
    id: 't4',
    patientName: 'Vipin Surana',
    location: 'Surat, India',
    timeAgo: '4 days ago',
    avatarBg: '#00838F',
    condition: 'Cervical Radiculopathy',
    treatmentSummary: 'Microscopic Nerve Decompression',
    quote:
      'Post-surgery follow-up and nursing support were exceptional. The operating surgeon and rehab team respond attentively whenever we need guidance.',
    doctorName: 'Dr. Mukesh Patel',
  },
  {
    id: 't5',
    patientName: 'Samuel Okafor',
    location: 'Lagos, Nigeria (International)',
    timeAgo: '1 week ago',
    avatarBg: '#D81B60',
    condition: 'Cervical Myelopathy & Cord Compression',
    treatmentSummary: 'Telemedicine Review & Motion-Preserving Care',
    quote:
      'From our first virtual telemedicine call to airport pickup, TPA coordination, and surgery, the international desk handled every detail transparently. I walked comfortably before flying home.',
    doctorName: 'Dr. Mirant Dave',
  },
  {
    id: 't6',
    patientName: 'Meera & Kavya Patel',
    location: 'Vadodara, India',
    timeAgo: '2 weeks ago',
    avatarBg: '#EF6C00',
    condition: 'Early-Onset Pediatric Scoliosis',
    treatmentSummary: 'Magnetically Controlled Growing Rods',
    quote:
      'Learning our daughter had progressive scoliosis was frightening, but the deformity team explained every step clearly. Magnetic outpatient lengthening saved her from repeated surgeries.',
    doctorName: 'Dr. Devanand Degulmadi',
  },
];

export const CLINICAL_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General & Appointments',
    question: 'Do I need a referral to book an appointment at Momentum Clinic?',
    answer:
      'No referral is required. You can book directly online, call 0326-4008249 (Momentum Speciality Clinic, Dhaiya) or 0326-3570833 (Nichtipur Hospital, Katras Bazar), or schedule a Telemedicine evaluation if traveling from outside Dhanbad.',
  },
  {
    id: 'faq-2',
    category: 'General & Appointments',
    question: 'What should I bring to my first spine consultation?',
    answer:
      'Please bring prior X-rays, MRI/CT films or digital CDs/links, current medication lists, and any previous surgical discharge summaries.',
  },
  {
    id: 'faq-3',
    category: 'Conservative Care & Rehab',
    question: 'What percentage of patients at Momentum Clinic actually require spine surgery?',
    answer:
      'Approximately 90% of spine patients are treated conservatively without surgery using evidence-based physiotherapy, Functional Magnetic Stimulation (FMS), ergonomic coaching, and targeted pain management.',
  },
  {
    id: 'faq-4',
    category: 'Conservative Care & Rehab',
    question: 'How is an Open Standing Weight-Bearing MRI different from a regular MRI?',
    answer:
      'An Open Standing MRI images your spine upright while bearing natural body weight, helping clinicians detect disc herniations or vertebral slipping that may disappear when lying flat—and it eliminates claustrophobia.',
  },
  {
    id: 'faq-5',
    category: 'Surgery & Recovery',
    question: 'When can I walk and resume desk work after Minimally Invasive Spine Surgery?',
    answer:
      'Most patients walk within 12–24 hours of keyhole decompression and transition back to light desk duties within 2 to 4 weeks, guided by post-operative physiotherapy milestones.',
  },
  {
    id: 'faq-6',
    category: 'Surgery & Recovery',
    question: 'Is spine surgery safe with modern robotics and neuromonitoring?',
    answer:
      'Combining O-arm 3D intraoperative imaging, robotic trajectory alignment, and continuous SSEP/MEP neuromonitoring substantially enhances implant accuracy and neurological safety.',
  },
  {
    id: 'faq-7',
    category: 'Insurance & International',
    question: 'Does Momentum Clinic support cashless health insurance and TPA claims?',
    answer:
      'Yes. Our dedicated Insurance & TPA desk coordinates pre-authorization and cashless processing with major Indian health insurers and third-party administrators.',
  },
  {
    id: 'faq-8',
    category: 'Insurance & International',
    question: 'What services are available for international patients?',
    answer:
      'Patients from 23+ countries receive pre-travel telemedicine MRI reviews, transparent treatment estimates, medical visa invitation letters, airport transfers, and dedicated care coordinators.',
  },
];

export const INSURANCE_TPA_PARTNERS = [
  'Star Health & Allied Insurance',
  'HDFC ERGO General Insurance',
  'ICICI Lombard Health',
  'New India Assurance',
  'United India Insurance',
  'National Insurance Company',
  'Oriental Insurance',
  'Niva Bupa Health Insurance',
  'Care Health Insurance',
  'Bajaj Allianz General Insurance',
  'Medi Assist TPA',
  'MDIndia Health Insurance TPA',
  'Paramount Health Services & Insurance TPA',
  'Vidal Health TPA',
];

export const PATIENT_RIGHTS = [
  {
    title: 'Informed Consent & Transparent Second Opinions',
    detail:
      'Clear explanation of conservative vs. surgical options, expected benefits, risks, and cost estimates before any procedure.',
  },
  {
    title: 'Dignity, Privacy & Medical Confidentiality',
    detail:
      'Respectful care regardless of age, gender, nationality, or background, with strict confidentiality of diagnostic records.',
  },
  {
    title: 'Safety & Quality Care Standards',
    detail:
      'Treatment delivered under NABH-aligned infection control, surgical safety checklists, and ethical clinical governance.',
  },
  {
    title: 'Access to Records & Discharge Education',
    detail:
      'Prompt access to imaging reports, itemized billing, medication guidance, and post-discharge rehabilitation instructions.',
  },
];

export const PATIENT_RESPONSIBILITIES = [
  'Provide complete and accurate medical history, allergies, and current medications.',
  'Follow prescribed pre-operative fasting, medication, and post-operative rehabilitation instructions.',
  'Respect hospital visiting hours, infection-control protocols, and fellow patients’ privacy.',
  'Submit accurate insurance/TPA policy documentation prior to planned admission.',
];
