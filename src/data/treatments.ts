import { CLINIC_IMAGES } from './clinicInfo';

export interface TreatmentFAQ {
  question: string;
  answer: string;
}

export interface TreatmentData {
  slug: string;
  title: string;
  shortTitle: string;
  category: 'Surgical' | 'Motion Preservation' | 'Pain & Rehab' | 'Preventive';
  image: string;
  heroSubtitle: string;
  overview: string;
  symptomsAndConditions: string[];
  treatmentApproach: string[];
  benefits: string[];
  procedureSteps: { step: string; detail: string }[];
  technologyUsed: { name: string; role: string }[];
  specialistSlugs: string[];
  relatedSlugs: string[];
  faqs: TreatmentFAQ[];
}

export const TREATMENTS: TreatmentData[] = [
  {
    slug: 'minimally-invasive-spine-surgery',
    title: 'Minimally Invasive Spine Surgery (MISS)',
    shortTitle: 'Minimally Invasive Spine Surgery',
    category: 'Surgical',
    image: CLINIC_IMAGES.surgicalSuite,
    heroSubtitle:
      'Muscle-sparing tubular and microscopic decompression through sub-centimeter incisions for faster recovery and minimal tissue disruption.',
    overview:
      'Minimally Invasive Spine Surgery (MISS) treats compressed spinal nerves, herniated discs, and lumbar instability without cutting major back muscles. Using specialized tubular retractors, high-definition surgical microscopes, and real-time 3D imaging, Momentum Clinic surgeons access the target pathology through small keyhole openings.',
    symptomsAndConditions: [
      'Lumbar disc herniation with persistent sciatica radiating down the leg',
      'Lumbar spinal canal stenosis causing walking intolerance or neurogenic claudication',
      'Degenerative spondylolisthesis with nerve root compression',
      'Foraminal stenosis causing unilateral arm or leg numbness and weakness',
      'Recurrent disc prolapse unresponsive to structured conservative therapy',
    ],
    treatmentApproach: [
      'Comprehensive neurological and upright MRI correlation before surgical planning',
      'Sequential muscle dilation via tubular retractors instead of muscle stripping',
      'High-magnification microsurgical decompression of compressed nerve roots',
      'Early post-operative mobilization and guided spine physiotherapy',
    ],
    benefits: [
      'Smaller surgical incisions with reduced soft-tissue and muscle trauma',
      'Lower intraoperative blood loss and reduced post-operative discomfort',
      'Shorter inpatient hospital stay and earlier return to daily mobility',
      'Lower risk of surgical-site infection compared with wide open exposures',
    ],
    procedureSteps: [
      {
        step: '01. Precision Localization',
        detail:
          'Fluoroscopic or O-arm 3D imaging verifies the exact vertebral level before skin incision.',
      },
      {
        step: '02. Muscle-Sparing Access',
        detail:
          'Serial dilators gently part muscle fibers to place a narrow working tube directly over the lamina.',
      },
      {
        step: '03. Microsurgical Decompression',
        detail:
          'Under high-definition microscopy, disc fragments or thickened bone compressing the nerve are carefully removed.',
      },
      {
        step: '04. Stabilization & Mobilization',
        detail:
          'If fusion is required, percutaneous instrumentation is placed accurately, followed by supervised walking within 24 hours.',
      },
    ],
    technologyUsed: [
      {
        name: 'High-Definition Surgical Microscopes',
        role: 'Illuminated 3D magnification around delicate neural structures.',
      },
      {
        name: 'O-Arm 3D Intraoperative Imaging',
        role: 'Real-time cross-sectional verification of decompression and screw placement.',
      },
      {
        name: 'Intraoperative Neuromonitoring',
        role: 'Continuous feedback protecting spinal cord and nerve root function.',
      },
    ],
    specialistSlugs: ['dr-dinesh-agarwal', 'dr-ajay-krishnan', 'dr-ravi-ranjan-rai'],
    relatedSlugs: ['endoscopic-spine-surgery', 'robotic-spine-surgery', 'pain-management'],
    faqs: [
      {
        question: 'Am I guaranteed to need surgery if I have a slipped disc?',
        answer:
          'No. Approximately 90% of spine patients at Momentum Clinic improve with structured conservative care, targeted medication, and physiotherapy. MISS is recommended only when nerve compression causes progressive weakness or pain that fails non-surgical management.',
      },
      {
        question: 'How soon can patients walk after Minimally Invasive Spine Surgery?',
        answer:
          'Most patients undergoing single-level minimally invasive decompression begin supervised standing and walking within 12 to 24 hours, depending on individual clinical recovery.',
      },
    ],
  },
  {
    slug: 'spinal-deformity-correction',
    title: 'Spinal Deformity Correction',
    shortTitle: 'Spinal Deformity Correction',
    category: 'Surgical',
    image: CLINIC_IMAGES.diagnosticMri,
    heroSubtitle:
      'Comprehensive evaluation and three-dimensional alignment reconstruction for adolescent scoliosis, adult degenerative deformity, and kyphosis.',
    overview:
      'Spinal deformity encompasses abnormal lateral curvature (scoliosis), forward rounding (kyphosis), or multi-planar imbalance in children, adolescents, and adults. Momentum Clinic combines dynamic full-spine imaging, growth-friendly pediatric options such as Magnetically Controlled Growing Rods (MCGR), and neuromonitored 3D reconstruction.',
    symptomsAndConditions: [
      'Adolescent Idiopathic Scoliosis (progressive rib prominence or shoulder asymmetry)',
      'Early-Onset Scoliosis in young children requiring growth-preserving instrumentation',
      'Adult Degenerative Lumbar Scoliosis with nerve compression and postural stoop',
      'Post-traumatic or congenital kyphosis causing sagittal imbalance',
      'Ankylosing spondylitis or post-infectious spinal curvature',
    ],
    treatmentApproach: [
      'Full-spine standing radiographic and Open Standing MRI evaluation',
      'Individualized bracing and Schroth-inspired scoliosis physiotherapy for mild curves',
      'Magnetically Controlled Growing Rods (MCGR) for skeletally immature children to limit repeat surgeries',
      'Multilevel 3D deformity correction under continuous SSEP/MEP neuromonitoring',
    ],
    benefits: [
      'Restores coronal and sagittal spinal balance for upright posture',
      'Relieves spinal cord and nerve root stretching or compression',
      'Preserves pulmonary cavity development in growing pediatric patients',
      'Improves walking endurance and reduces mechanical postural fatigue',
    ],
    procedureSteps: [
      {
        step: '01. Biomechanical Mapping',
        detail:
          'Standing full-length spine radiographs and dynamic bending films quantify curve flexibility.',
      },
      {
        step: '02. Pre-Operative Planning',
        detail:
          'Surgeons model corrective rod contours and osteotomy angles tailored to pelvic incidence.',
      },
      {
        step: '03. Neuromonitored Correction',
        detail:
          'O-arm navigation and continuous spinal cord monitoring guide safe pedicle anchor placement and derotation.',
      },
      {
        step: '04. Structured Post-Op Rehab',
        detail:
          'Graduated core strengthening and posture training support long-term spinal fusion balance.',
      },
    ],
    technologyUsed: [
      {
        name: 'O-Arm & Stereotactic Navigation',
        role: 'High-precision anchor placement in rotated scoliotic vertebrae.',
      },
      {
        name: 'Multimodal Neuromonitoring',
        role: 'Real-time sensory and motor pathway surveillance during curve correction.',
      },
      {
        name: 'Magnetically Controlled Growing Rods (MCGR)',
        role: 'Non-invasive outpatient lengthening for pediatric early-onset scoliosis.',
      },
    ],
    specialistSlugs: ['dr-dinesh-agarwal', 'dr-bharat-dave', 'dr-devanand-degulmadi'],
    relatedSlugs: ['robotic-spine-surgery', 'physiotherapy-rehabilitation', 'minimally-invasive-spine-surgery'],
    faqs: [
      {
        question: 'Does every child with scoliosis require surgery?',
        answer:
          'Not at all. Mild curves are closely monitored with growth tracking and targeted physiotherapy, while moderate progressive curves in growing children may be managed with custom bracing.',
      },
      {
        question: 'How do Magnetically Controlled Growing Rods work?',
        answer:
          'MCGR implants allow pediatric spine specialists to gently lengthen the spinal rod externally in the outpatient clinic using a magnetic controller, avoiding repeated surgical incisions as the child grows.',
      },
    ],
  },
  {
    slug: 'artificial-disc-replacement',
    title: 'Artificial Disc Replacement',
    shortTitle: 'Artificial Disc Replacement',
    category: 'Motion Preservation',
    image: CLINIC_IMAGES.heroClinic,
    heroSubtitle:
      'Motion-preserving cervical and lumbar arthroplasty engineered to relieve nerve pain while maintaining natural spinal flexibility.',
    overview:
      'For carefully selected patients with isolated cervical or lumbar disc degeneration causing arm or leg pain, Artificial Disc Replacement (total disc arthroplasty) replaces the damaged intervertebral disc with a biomechanical prosthesis rather than fusing adjacent vertebrae together.',
    symptomsAndConditions: [
      'Single- or two-level cervical disc herniation with radiculopathy (arm pain/numbness)',
      'Early cervical myelopathy without severe facet arthritis or instability',
      'Isolated lumbar discogenic pain in younger active adults with healthy facet joints',
      'Failed conservative therapy after 6–12 weeks of structured rehabilitation',
    ],
    treatmentApproach: [
      'Strict patient selection verifying intact facet joints and normal bone mineral density',
      'Anterior microsurgical removal of the herniated disc and posterior osteophytes',
      'Precision sizing and implantation of an articulated motion-preserving disc prosthesis',
      'Protected early cervical or lumbar mobility without rigid fusion collars',
    ],
    benefits: [
      'Preserves physiological flexion, extension, and rotation at the treated segment',
      'Reduces abnormal mechanical stress on adjacent spinal levels',
      'Eliminates donor-site bone graft requirements and fusion non-union risks',
      'Facilitates quicker return to neck and torso movement',
    ],
    procedureSteps: [
      {
        step: '01. Dynamic Eligibility Screening',
        detail:
          'Flexion-extension X-rays and MRI confirm preserved facet integrity and segmental motion.',
      },
      {
        step: '02. Microsurgical Discectomy',
        detail:
          'Through a discreet anterior skin-crease incision, the damaged disc and nerve compression are cleared.',
      },
      {
        step: '03. Prosthesis Sizing & Placement',
        detail:
          'Under fluoroscopic guidance, the artificial disc is centered precisely within the prepared endplates.',
      },
      {
        step: '04. Functional Physiotherapy',
        detail:
          'Guided range-of-motion and postural endurance exercises commence in the weeks following discharge.',
      },
    ],
    technologyUsed: [
      {
        name: 'High-Resolution Digital Fluoroscopy',
        role: 'Millimeter-accurate midline positioning of the disc prosthesis.',
      },
      {
        name: 'Microsurgical Illumination Systems',
        role: 'Complete decompression of the spinal canal and neural foramina.',
      },
      {
        name: 'Open Standing Weight-Bearing MRI',
        role: 'Pre-operative evaluation of adjacent segments under physiological load.',
      },
    ],
    specialistSlugs: ['dr-dinesh-agarwal', 'dr-mirant-dave', 'dr-ajay-krishnan'],
    relatedSlugs: ['minimally-invasive-spine-surgery', 'endoscopic-spine-surgery', 'physiotherapy-rehabilitation'],
    faqs: [
      {
        question: 'Who is a candidate for Artificial Disc Replacement vs. spinal fusion?',
        answer:
          'Ideal candidates have nerve compression or pain originating from one or two discs without severe facet joint arthritis, spinal instability, or osteoporosis. Our specialists review imaging thoroughly to recommend the safest option.',
      },
      {
        question: 'How long does a cervical artificial disc last?',
        answer:
          'Modern medical-grade cobalt-chrome and polyethylene disc prostheses are engineered and biomechanically tested for decades of physiological wear.',
      },
    ],
  },
  {
    slug: 'endoscopic-spine-surgery',
    title: 'Endoscopic Spine Surgery',
    shortTitle: 'Endoscopic Spine Surgery',
    category: 'Surgical',
    image: CLINIC_IMAGES.surgicalSuite,
    heroSubtitle:
      'Ultra-minimally invasive stitchless or keyhole spine decompression using high-definition fiber-optic spinal endoscopes.',
    overview:
      'Endoscopic Spine Surgery represents the frontier of ultra-minimally invasive spine care. Through an incision typically under 8 millimeters, a slender high-definition camera and precision micro-instruments navigate natural anatomical corridors to remove herniated disc fragments or relieve foraminal stenosis.',
    symptomsAndConditions: [
      'Acute or chronic lumbar disc herniation with severe sciatic nerve pain',
      'Foraminal and lateral recess stenosis causing leg pain while walking',
      'Migrated disc fragments compressing single nerve roots',
      'Select cervical radiculopathy cases suitable for posterior foraminotomy',
    ],
    treatmentApproach: [
      'Transforaminal or interlaminar corridor selection tailored to disc anatomy',
      'Continuous saline irrigation providing crystal-clear optical visualization',
      'Selective fragment removal preserving healthy disc nucleus and ligaments',
      'Awake or regional/general anesthesia pathways suited to patient health',
    ],
    benefits: [
      'Sub-centimeter skin incision (< 8 mm) with virtually zero muscle dissection',
      'Minimal blood loss and preservation of natural spinal stability',
      'Rapid post-operative pain relief and same-day or next-day ambulation',
      'Reduced scar tissue formation around delicate spinal nerves',
    ],
    procedureSteps: [
      {
        step: '01. Corridor Trajectory Planning',
        detail:
          'MRI and CT slices map the safest transforaminal or interlaminar entry angle.',
      },
      {
        step: '02. Working Cannula Insertion',
        detail:
          'A narrow working sheath is positioned gently under real-time X-ray guidance.',
      },
      {
        step: '03. Endoscopic Decompression',
        detail:
          'Under magnified HD video view, herniated disc material or bony spurs are removed cleanly.',
      },
      {
        step: '04. Same-Day Ambulation',
        detail:
          'Once the cannula is withdrawn, a single stitch or adhesive strip closes the portal.',
      },
    ],
    technologyUsed: [
      {
        name: '4K HD Spinal Endoscope System',
        role: 'Direct angled optics inside the spinal canal with continuous irrigation.',
      },
      {
        name: 'Radiofrequency Micro-Ablation Probes',
        role: 'Controlled hemostasis and tissue shrinkage around nerve roots.',
      },
      {
        name: 'C-Arm Digital Fluoroscopy',
        role: 'Real-time multi-planar guidance for accurate cannula docking.',
      },
    ],
    specialistSlugs: ['dr-ajay-krishnan', 'dr-ravi-ranjan-rai'],
    relatedSlugs: ['minimally-invasive-spine-surgery', 'pain-management', 'artificial-disc-replacement'],
    faqs: [
      {
        question: 'What is the difference between endoscopic and microscopic spine surgery?',
        answer:
          'Microscopic tubular surgery typically uses a 16–22 mm tube with an external microscope, whereas full-endoscopic surgery places a camera directly at the surgical site through a ~7–8 mm portal.',
      },
      {
        question: 'Can elderly patients with medical comorbidities undergo endoscopic spine surgery?',
        answer:
          'Yes, because endoscopic decompression involves minimal blood loss and can often be performed under local/sedation or tailored anesthesia, it is frequently suitable for medically frail patients after pre-anesthetic clearance.',
      },
    ],
  },
  {
    slug: 'robotic-spine-surgery',
    title: 'Robotic Spine Surgery',
    shortTitle: 'Robotic Spine Surgery',
    category: 'Surgical',
    image: CLINIC_IMAGES.surgicalSuite,
    heroSubtitle:
      'Computer-assisted 3D robotic trajectory guidance integrated with O-arm imaging for sub-millimeter surgical accuracy.',
    overview:
      'Robotic Spine Surgery pairs the clinical judgment of Momentum Clinic’s senior spine surgeons with computer-guided robotic arm precision. Before and during the procedure, 3D imaging builds a customized anatomical blueprint of the patient’s spine, guiding instrumentation along pre-planned safe corridors.',
    symptomsAndConditions: [
      'Spondylolisthesis and lumbar segmental instability requiring fusion',
      'Complex spinal deformities with narrow or rotated pedicles',
      'Revision spine surgeries where normal anatomical landmarks are altered',
      'Multi-level degenerative disc disease and spinal fractures',
    ],
    treatmentApproach: [
      'Pre-operative and intraoperative 3D CT/O-arm registration of every vertebra',
      'Virtual screw sizing and trajectory simulation prior to bone instrumentation',
      'Robotic arm alignment guiding minimally invasive percutaneous placement',
      'Intraoperative 3D confirmation prior to wound closure',
    ],
    benefits: [
      'High placement accuracy for spinal implants in complex anatomy',
      'Reduced radiation exposure for patients and operating room teams',
      'Facilitates smaller minimally invasive incisions during fusion procedures',
      'Predictable alignment outcomes in deformity and revision reconstructions',
    ],
    procedureSteps: [
      {
        step: '01. 3D Spine Blueprint',
        detail:
          'High-resolution CT/O-arm scans generate a real-time 3D model of the patient’s vertebrae.',
      },
      {
        step: '02. Optical Registration',
        detail:
          'The robotic workstation synchronizes intraoperative anatomy with the planned surgical map.',
      },
      {
        step: '03. Guided Instrumentation',
        detail:
          'The robotic arm locks onto each planned trajectory while the surgeon performs placement.',
      },
      {
        step: '04. Intraoperative Verification',
        detail:
          'A confirmation scan verifies ideal implant position before concluding the procedure.',
      },
    ],
    technologyUsed: [
      {
        name: 'Spine Robotic Guidance Platform',
        role: 'Rigid stereotactic alignment of surgical trajectories.',
      },
      {
        name: 'O-Arm 3D Surgical Imaging',
        role: 'Real-time intraoperative 3D CT registration and verification.',
      },
      {
        name: 'Intraoperative Neuromonitoring',
        role: 'Continuous spinal pathway safety feedback.',
      },
    ],
    specialistSlugs: ['dr-dinesh-agarwal', 'dr-mirant-dave', 'dr-bharat-dave'],
    relatedSlugs: ['minimally-invasive-spine-surgery', 'spinal-deformity-correction', 'artificial-disc-replacement'],
    faqs: [
      {
        question: 'Does the robot perform the surgery on its own?',
        answer:
          'No. Your Momentum Clinic spine surgeon remains in full control throughout the entire operation. The robotic arm acts as a precision guidance instrument that aligns tools to the surgeon’s pre-planned 3D coordinates.',
      },
      {
        question: 'Is robotic spine surgery safe for revision spine cases?',
        answer:
          'Yes, robotic 3D navigation is particularly helpful in revision surgery where prior scar tissue or hardware obscures visual landmarks.',
      },
    ],
  },
  {
    slug: 'pain-management',
    title: 'Pain Management Procedures',
    shortTitle: 'Pain Management Procedures',
    category: 'Pain & Rehab',
    image: CLINIC_IMAGES.diagnosticMri,
    heroSubtitle:
      'Targeted, image-guided non-surgical interventions designed to calm inflamed spinal nerves and enable active rehabilitation.',
    overview:
      'Many acute and chronic spinal pain conditions can be effectively relieved without open surgery. Momentum Clinic offers precision image-guided pain procedures—performed in sterile suites under fluoroscopic guidance—to break the pain cycle so patients can participate comfortably in restorative physiotherapy.',
    symptomsAndConditions: [
      'Acute radicular pain (sciatica or cervical brachialgia) limiting sleep and mobility',
      'Lumbar facet joint arthropathy causing localized mechanical backache',
      'Sacroiliac (SI) joint dysfunction and persistent lower back pain',
      'Osteoporotic vertebral compression fractures causing severe focal pain',
    ],
    treatmentApproach: [
      'Diagnostic localization correlating pain pattern with MRI and physical exam',
      'Image-guided selective nerve root blocks (SNRB) and transforaminal epidurals',
      'Radiofrequency ablation (RFA) for chronic facet-mediated back or neck pain',
      'Seamless transition into guided core stabilization physiotherapy',
    ],
    benefits: [
      'Outpatient day-care procedures without general anesthesia',
      'Delivers targeted relief directly at the inflamed nerve or joint source',
      'Avoids or delays surgery in carefully selected radicular pain cases',
      'Minimal downtime with rapid return to rehabilitative exercise',
    ],
    procedureSteps: [
      {
        step: '01. Target Localization',
        detail:
          'Clinical exam and MRI identify the specific nerve root or facet joint generating pain.',
      },
      {
        step: '02. Image-Guided Placement',
        detail:
          'Under live fluoroscopy, a fine needle is positioned accurately beside the target structure.',
      },
      {
        step: '03. Contrast Confirmation & Therapy',
        detail:
          'Contrast dye confirms exact spread before administering anti-inflammatory therapy or RFA.',
      },
      {
        step: '04. Rehab Follow-Through',
        detail:
          'Patients receive a tailored movement plan to consolidate long-term recovery.',
      },
    ],
    technologyUsed: [
      {
        name: 'High-Definition C-Arm Fluoroscopy',
        role: 'Pinpoint real-time needle guidance with minimal contrast.',
      },
      {
        name: 'Cooled & Conventional Radiofrequency Generator',
        role: 'Controlled modulation of painful facet joint sensory nerves.',
      },
    ],
    specialistSlugs: ['dr-ravi-ranjan-rai', 'dr-ajay-krishnan'],
    relatedSlugs: ['physiotherapy-rehabilitation', 'lifestyle-preventive-care', 'endoscopic-spine-surgery'],
    faqs: [
      {
        question: 'How long does an epidural or nerve root block take?',
        answer:
          'Most targeted spine pain injections take 15 to 30 minutes in a sterile suite, followed by a brief observation period before returning home the same day.',
      },
      {
        question: 'Are spine pain injections a permanent cure on their own?',
        answer:
          'They calm acute nerve inflammation and create a pain-free window; combining them with Momentum Clinic’s spine physiotherapy yields the most durable outcomes.',
      },
    ],
  },
  {
    slug: 'physiotherapy-rehabilitation',
    title: 'Physiotherapy & Rehabilitation Programs',
    shortTitle: 'Physiotherapy & Rehabilitation',
    category: 'Pain & Rehab',
    image: CLINIC_IMAGES.physiotherapyRehab,
    heroSubtitle:
      'Evidence-based conservative and post-operative spine rehabilitation integrating Functional Magnetic Stimulation, laser therapy, and core conditioning.',
    overview:
      'Conservative spine rehabilitation is the cornerstone of Momentum Clinic’s clinical philosophy—helping nearly 90% of patients recover without surgical intervention. Our dedicated Spine Physiotherapy & Rehabilitation Wing pairs specialized spine physiotherapists with modern neuromodulation and decompression technologies.',
    symptomsAndConditions: [
      'Mechanical lower back pain and cervical postural strain',
      'Non-surgical management of disc bulges and mild sciatica',
      'Post-operative functional recovery after MISS, decompression, or fusion',
      'Adolescent postural asymmetry and osteoporosis bone-safe conditioning',
    ],
    treatmentApproach: [
      'Individualized biomechanical posture, core endurance, and flexibility assessment',
      'Functional Magnetic Stimulation (FMS) for deep paraspinal and pelvic floor activation',
      'High-intensity therapeutic laser and cryotherapy for acute soft-tissue inflammation',
      'Graduated home exercise blueprints for sustained self-management',
    ],
    benefits: [
      'Addresses root muscular imbalances rather than masking symptoms',
      'Accelerates safe return to work, driving, and recreational sports',
      'Evidence-backed alternative to surgery for most mechanical spine disorders',
      'Dedicated supervision coordinated directly with your spine surgeon',
    ],
    procedureSteps: [
      {
        step: '01. Functional Baseline Audit',
        detail:
          'Physiotherapists assess spinal range, deep core activation, and movement ergonomics.',
      },
      {
        step: '02. Modality-Assisted Pain Relief',
        detail:
          'FMS, laser therapy, or cryotherapy eases muscle spasm and local inflammation.',
      },
      {
        step: '03. Progressive Core Stabilization',
        detail:
          'Targeted exercises rebuild deep multifidus, transverse abdominis, and scapular support.',
      },
      {
        step: '04. Long-Term Maintenance Plan',
        detail:
          'Patients graduate with workstation ergonomics and a sustainable weekly routine.',
      },
    ],
    technologyUsed: [
      {
        name: 'Functional Magnetic Stimulation (FMS)',
        role: 'Non-invasive electromagnetic strengthening of deep spinal stabilizers.',
      },
      {
        name: 'High-Intensity Laser & Cryotherapy',
        role: 'Accelerated deep-tissue recovery and acute edema control.',
      },
      {
        name: 'Computerized Spinal Decompression',
        role: 'Gentle segmental unloading for select discogenic pain syndromes.',
      },
    ],
    specialistSlugs: ['dr-dinesh-agarwal', 'dr-ravi-ranjan-rai', 'dr-bharat-dave'],
    relatedSlugs: ['lifestyle-preventive-care', 'pain-management', 'minimally-invasive-spine-surgery'],
    faqs: [
      {
        question: 'Can physiotherapy worsen a slipped disc?',
        answer:
          'Generic unsupervised exercises can aggravate a disc bulge, which is why Momentum Clinic uses spine-specialized physiotherapists who tailor movements strictly to your MRI findings and directional preference.',
      },
      {
        question: 'Do I need to attend physiotherapy in person forever?',
        answer:
          'No. Our programs typically span 2 to 6 weeks of supervised sessions before transitioning you to an independent home and workplace routine.',
      },
    ],
  },
  {
    slug: 'lifestyle-preventive-care',
    title: 'Lifestyle & Preventive Spine Care',
    shortTitle: 'Lifestyle & Preventive Care',
    category: 'Preventive',
    image: CLINIC_IMAGES.physiotherapyRehab,
    heroSubtitle:
      'Proactive ergonomic coaching, bone-health screening, and spine-protective lifestyle medicine to stop back and neck pain before it starts.',
    overview:
      'Sedentary desk hours, improper lifting mechanics, vitamin D deficiency, and declining core endurance account for the vast majority of recurring back and neck episodes. Momentum Clinic’s Lifestyle & Preventive Spine Care program empowers corporate teams, seniors, and active adults to protect spinal longevity.',
    symptomsAndConditions: [
      'Recurring neck stiffness and desk-related cervical postural fatigue ("tech neck")',
      'Episodic lower back stiffness after prolonged sitting or commuting',
      'Osteopenia and osteoporosis fracture prevention in older adults',
      'Post-recovery relapse prevention after overcoming sciatica or disc pain',
    ],
    treatmentApproach: [
      'Workplace and workstation ergonomic audit (chair height, monitor alignment, sit-stand cadence)',
      'Bone mineral density, vitamin D, and metabolic spine-health guidance',
      '15-minute daily spine hygiene and mobility micro-break protocols',
      'Safe strength-training form education for gym and sport participation',
    ],
    benefits: [
      'Dramatically reduces flare-up frequency for chronic back and neck sufferers',
      'Builds lifelong core resilience and healthy spinal loading habits',
      'Lowers risk of osteoporotic vertebral fractures through guided weight-bearing care',
      'Improves daily energy, sleep quality, and workplace productivity',
    ],
    procedureSteps: [
      {
        step: '01. Lifestyle & Posture Profiling',
        detail:
          'Clinicians review daily sitting hours, sleep posture, activity levels, and past flare-ups.',
      },
      {
        step: '02. Ergonomic Optimization',
        detail:
          'Practical adjustments for office desks, driving seats, and lifting mechanics.',
      },
      {
        step: '03. Spine Hygiene Routine',
        detail:
          'A concise daily mobility and isometric core sequence tailored to your schedule.',
      },
      {
        step: '04. Periodic Wellness Check-Ins',
        detail:
          'Annual or semi-annual posture and bone-health reviews keep progress on track.',
      },
    ],
    technologyUsed: [
      {
        name: 'Digital Posture & Mobility Screening',
        role: 'Objective baseline mapping of spinal alignment and flexibility.',
      },
      {
        name: 'Preventive Bone & Ergonomic Protocols',
        role: 'Clinically validated checklists for workstation and home safety.',
      },
    ],
    specialistSlugs: ['dr-bharat-dave', 'dr-mirant-dave'],
    relatedSlugs: ['physiotherapy-rehabilitation', 'pain-management', 'minimally-invasive-spine-surgery'],
    faqs: [
      {
        question: 'Is bed rest recommended for preventive or acute back stiffness?',
        answer:
          'Prolonged bed rest weakens spinal support muscles and slows recovery. Controlled gentle walking and ergonomic posture modifications are almost always preferred.',
      },
      {
        question: 'How often should office professionals take spine movement breaks?',
        answer:
          'Changing posture or standing for 2–3 minutes every 40–45 minutes significantly reduces sustained compressive loading on lumbar discs.',
      },
    ],
  },
];
