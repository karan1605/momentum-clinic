import { CLINIC_IMAGES } from './clinicInfo';

export interface TechItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  clinicalAdvantage: string;
  applications: string[];
  image: string;
}

export interface TechnologyCategory {
  slug: 'surgical' | 'physiotherapy-rehab' | 'diagnostics';
  title: string;
  heroTitle: string;
  heroDescription: string;
  image: string;
  items: TechItem[];
}

export interface OrbitalTechMachine {
  id: string;
  name: string;
  shortLabel: string;
  category: string;
  image: string;
  to: string;
}

export const ORBITAL_TECH_MACHINES: OrbitalTechMachine[] = [
  {
    id: 'orb-1',
    name: 'Robotic Spine Guidance System',
    shortLabel: 'Robotic Guidance',
    category: 'Surgical',
    image: CLINIC_IMAGES.surgicalSuite,
    to: '/technology/surgical',
  },
  {
    id: 'orb-2',
    name: 'O-Arm 3D Intraoperative Imaging',
    shortLabel: 'O-Arm 3D Scan',
    category: 'Surgical',
    image: CLINIC_IMAGES.diagnosticMri,
    to: '/technology/surgical',
  },
  {
    id: 'orb-3',
    name: 'Open Standing Weight-Bearing MRI',
    shortLabel: 'Standing MRI',
    category: 'Diagnostics',
    image: CLINIC_IMAGES.heroClinic,
    to: '/technology/diagnostics',
  },
  {
    id: 'orb-4',
    name: 'Full-Endoscopic Spine System',
    shortLabel: 'Spine Endoscopy',
    category: 'Surgical',
    image: CLINIC_IMAGES.surgicalSuite,
    to: '/technology/surgical',
  },
  {
    id: 'orb-5',
    name: 'Leica High-Definition Microscope',
    shortLabel: 'HD Microscope',
    category: 'Surgical',
    image: CLINIC_IMAGES.heroClinic,
    to: '/technology/surgical',
  },
  {
    id: 'orb-6',
    name: 'Functional Magnetic Stimulation (FMS)',
    shortLabel: 'FMS Rehab',
    category: 'Physio & Rehab',
    image: CLINIC_IMAGES.physiotherapyRehab,
    to: '/technology/physiotherapy-rehab',
  },
  {
    id: 'orb-7',
    name: 'High-Field 1.5T Wide-Bore MRI',
    shortLabel: '1.5T Wide MRI',
    category: 'Diagnostics',
    image: CLINIC_IMAGES.diagnosticMri,
    to: '/technology/diagnostics',
  },
  {
    id: 'orb-8',
    name: 'Intraoperative Neuromonitoring (IONM)',
    shortLabel: 'Neuromonitoring',
    category: 'Surgical',
    image: CLINIC_IMAGES.surgicalSuite,
    to: '/technology/surgical',
  },
  {
    id: 'orb-9',
    name: 'High-Intensity Therapeutic Laser',
    shortLabel: 'Laser Therapy',
    category: 'Physio & Rehab',
    image: CLINIC_IMAGES.physiotherapyRehab,
    to: '/technology/physiotherapy-rehab',
  },
  {
    id: 'orb-10',
    name: 'Targeted Medical Cryotherapy',
    shortLabel: 'Cryotherapy',
    category: 'Physio & Rehab',
    image: CLINIC_IMAGES.physiotherapyRehab,
    to: '/technology/physiotherapy-rehab',
  },
  {
    id: 'orb-11',
    name: 'Computerized Spinal Decompression',
    shortLabel: 'Decompression',
    category: 'Physio & Rehab',
    image: CLINIC_IMAGES.heroClinic,
    to: '/technology/physiotherapy-rehab',
  },
  {
    id: 'orb-12',
    name: 'Multi-Slice 3D CT Scanner',
    shortLabel: '3D CT Imaging',
    category: 'Diagnostics',
    image: CLINIC_IMAGES.diagnosticMri,
    to: '/technology/diagnostics',
  },
];

export const TECHNOLOGY_CATEGORIES: Record<TechnologyCategory['slug'], TechnologyCategory> = {
  surgical: {
    slug: 'surgical',
    title: 'Surgical Technology',
    heroTitle: 'Precision Surgical Technology',
    heroDescription:
      'Intraoperative robotics, 3D O-arm navigation, high-definition optics, and continuous neuromonitoring designed for maximum surgical safety and accuracy.',
    image: CLINIC_IMAGES.surgicalSuite,
    items: [
      {
        id: 'robotic-guidance',
        name: 'Robotic Spine Guidance System',
        subtitle: 'Sub-millimeter 3D trajectory planning & instrumentation',
        description:
          'Integrates pre-operative and intraoperative 3D spinal scans to align surgical instruments along pre-verified pathways, supporting minimally invasive pedicle screw placement and complex deformity corrections.',
        clinicalAdvantage: 'Higher implant accuracy, smaller incisions, and reduced intraoperative radiation.',
        applications: ['Lumbar & Thoracic Fusion', 'Scoliosis Instrumentation', 'Revision Spine Surgery'],
        image: CLINIC_IMAGES.surgicalSuite,
      },
      {
        id: 'o-arm-navigation',
        name: 'O-Arm 3D Intraoperative Imaging & Navigation',
        subtitle: 'Real-time 360° CT-grade surgical verification',
        description:
          'Provides multidimensional 2D and 3D intraoperative images directly inside the sterile operating theater, giving surgeons live stereotactic feedback before closing the incision.',
        clinicalAdvantage: 'Immediate confirmation of decompression completeness and hardware positioning.',
        applications: ['Complex Deformity', 'Cervicothoracic Junction', 'Minimally Invasive Stabilization'],
        image: CLINIC_IMAGES.surgicalSuite,
      },
      {
        id: 'surgical-microscope',
        name: 'High-Definition Leica Surgical Microscopes',
        subtitle: 'Deep-cavity optical clarity for micro-decompression',
        description:
          'Delivers bright shadow-free xenon/LED illumination and crisp stereoscopic magnification so surgeons can separate herniated disc material from compressed nerve roots safely.',
        clinicalAdvantage: 'Protects delicate dura mater and neural micro-vessels during keyhole procedures.',
        applications: ['Microdiscectomy', 'Cervical Decompression', 'Intradural Tumor Resection'],
        image: CLINIC_IMAGES.heroClinic,
      },
      {
        id: 'neuromonitoring',
        name: 'Multimodal Intraoperative Neuromonitoring (IONM)',
        subtitle: 'Continuous real-time spinal cord & nerve root surveillance',
        description:
          'Dedicated neurophysiology monitoring tracks motor-evoked potentials (MEPs), somatosensory-evoked potentials (SSEPs), and EMG signals continuously during spine surgery.',
        clinicalAdvantage: 'Immediate electrical feedback enhancing neurological safety in complex reconstructions.',
        applications: ['Scoliosis Derotation', 'Cervical Myelopathy', 'Spinal Cord Tumors'],
        image: CLINIC_IMAGES.diagnosticMri,
      },
    ],
  },
  'physiotherapy-rehab': {
    slug: 'physiotherapy-rehab',
    title: 'Physiotherapy & Rehabilitation Technology',
    heroTitle: 'Physiotherapy & Rehabilitation Technology',
    heroDescription:
      'Advanced non-invasive physical medicine platforms supporting conservative recovery for ~90% of patients and structured post-operative rehabilitation.',
    image: CLINIC_IMAGES.physiotherapyRehab,
    items: [
      {
        id: 'functional-magnetic-stimulation',
        name: 'Functional Magnetic Stimulation (FMS)',
        subtitle: 'Deep electromagnetic neuromuscular activation',
        description:
          'Generates focused pulsed magnetic fields that penetrate deep into paraspinal and pelvic musculature without skin electrodes, activating weakened core stabilizers painlessly.',
        clinicalAdvantage: 'Rebuilds deep stabilizing muscles that voluntary exercise struggles to isolate during acute pain.',
        applications: ['Chronic Low Back Pain', 'Post-Operative Core Recovery', 'Neuropathic Muscle Weakness'],
        image: CLINIC_IMAGES.physiotherapyRehab,
      },
      {
        id: 'high-intensity-laser',
        name: 'High-Intensity Therapeutic Laser (HILT)',
        subtitle: 'Targeted photobiomodulation for deep spinal tissue',
        description:
          'Delivers calibrated near-infrared wavelengths into inflamed facet capsules, ligaments, and paraspinal fascia to stimulate cellular microcirculation and calm localized pain.',
        clinicalAdvantage: 'Fast, non-pharmacological reduction of acute inflammation and muscle guarding.',
        applications: ['Cervical Strain', 'Facet Joint Inflammation', 'Acute Lumbar Spasm'],
        image: CLINIC_IMAGES.physiotherapyRehab,
      },
      {
        id: 'cryotherapy-system',
        name: 'Targeted Medical Cryotherapy',
        subtitle: 'Controlled thermal shock for acute edema & spasm',
        description:
          'Applies precisely regulated cold therapy to reduce acute post-injury or post-procedural swelling and nerve irritation without thermal skin discomfort.',
        clinicalAdvantage: 'Speeds early comfort and prepares tissues for active mobilization exercises.',
        applications: ['Acute Disc Flare-Ups', 'Post-Op Swelling Control', 'Sports Spine Injuries'],
        image: CLINIC_IMAGES.physiotherapyRehab,
      },
      {
        id: 'spinal-decompression',
        name: 'Computerized Spinal Decompression Table',
        subtitle: 'Feedback-controlled segmental traction',
        description:
          'Uses computerized tension sensors to apply gentle, rhythmic unloading forces across targeted cervical or lumbar segments while minimizing protective muscle spasm.',
        clinicalAdvantage: 'Reduces intradiscal pressure smoothly in appropriately screened conservative patients.',
        applications: ['Lumbar Disc Bulge', 'Cervical Radiculopathy', 'Degenerative Disc Stiffness'],
        image: CLINIC_IMAGES.physiotherapyRehab,
      },
    ],
  },
  diagnostics: {
    slug: 'diagnostics',
    title: 'Spine Diagnostic Technology',
    heroTitle: 'Spine Diagnostic Technology',
    heroDescription:
      'Evaluating spinal anatomy under real-life gravity and dynamic motion with Open Standing Weight-Bearing MRI, 1.5T MRI, and high-resolution CT.',
    image: CLINIC_IMAGES.diagnosticMri,
    items: [
      {
        id: 'open-standing-mri',
        name: 'Open Standing Weight-Bearing MRI',
        subtitle: 'Dynamic upright spinal imaging under natural gravity',
        description:
          'Unlike conventional lying-down tunnels, the Open Standing MRI scans patients in standing, sitting, flexion, and extension positions—revealing hidden disc bulges or spinal instability that only appear under load.',
        clinicalAdvantage: 'Completely open, claustrophobia-friendly design with true physiological weight-bearing accuracy.',
        applications: ['Dynamic Spondylolisthesis', 'Standing Sciatica', 'Claustrophobic Patients', 'Scoliosis'],
        image: CLINIC_IMAGES.diagnosticMri,
      },
      {
        id: 'wide-tunnel-15t-mri',
        name: 'High-Field 1.5T Wide-Bore MRI',
        subtitle: 'Ultra-sharp soft-tissue & neural root visualization',
        description:
          'High-field 1.5 Tesla magnetic resonance imaging produces crisp multi-planar views of spinal cord parenchyma, nerve roots, intervertebral discs, and early inflammatory changes.',
        clinicalAdvantage: 'High diagnostic detail with shortened scan times and wider patient comfort.',
        applications: ['Cervical Myelopathy', 'Spinal Infections & Tumors', 'Pre-Surgical Mapping'],
        image: CLINIC_IMAGES.diagnosticMri,
      },
      {
        id: 'multislice-ct',
        name: 'High-Resolution Multi-Slice CT Scanner',
        subtitle: 'Sub-millimeter osseous & 3D surgical reconstruction',
        description:
          'Delivers rapid three-dimensional bony architecture detail essential for evaluating complex vertebral fractures, pars defects, ossified ligaments, and robotic surgical planning.',
        clinicalAdvantage: 'Crisp cortical bone mapping for safe implant sizing and trauma triage.',
        applications: ['Spinal Trauma', 'Robotic Trajectory Blueprinting', 'OPLL Assessment'],
        image: CLINIC_IMAGES.heroClinic,
      },
      {
        id: 'digital-scanogram',
        name: 'Full-Spine Digital Standing Radiograph',
        subtitle: 'Whole-spine alignment & pelvic parameter measurement',
        description:
          'Captures seamless full-length cervical-to-pelvis standing views to quantify Cobb angles, sagittal balance, and dynamic flexion-extension stability.',
        clinicalAdvantage: 'Essential baseline for deformity correction and longitudinal scoliosis monitoring.',
        applications: ['Adolescent Scoliosis', 'Adult Sagittal Imbalance', 'Post-Op Alignment Audit'],
        image: CLINIC_IMAGES.heroClinic,
      },
    ],
  },
};
