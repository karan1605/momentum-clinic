import { CLINIC_IMAGES } from './clinicInfo';

export interface BlogArticle {
  slug: string;
  title: string;
  category: string;
  publishedAt: string;
  readTime: string;
  authorName: string;
  authorSlug: string;
  image: string;
  excerpt: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
}

export const BLOG_CATEGORIES = [
  'All Insights',
  'Sciatica & Disc Care',
  'Scoliosis & Deformity',
  'Surgical Innovation',
  'Diagnostics & Rehab',
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: 'understanding-sciatica-causes-symptoms-and-conservative-recovery',
    title: 'Understanding Sciatica: Causes, Red Flags & Why 90% Recover Without Surgery',
    category: 'Sciatica & Disc Care',
    publishedAt: 'November 12, 2026',
    readTime: '5 min read',
    authorName: 'Dr. Ajay Krishnan',
    authorSlug: 'dr-ajay-krishnan',
    image: CLINIC_IMAGES.heroClinic,
    excerpt:
      'Sharp radiating leg pain from a lumbar disc bulge rarely means immediate surgery. Learn how nerve root compression behaves and how targeted conservative care restores mobility.',
    sections: [
      {
        heading: 'What Triggers Sciatic Nerve Pain?',
        paragraphs: [
          'Sciatica is not a standalone diagnosis—it is a symptom caused when a herniated (slipped) lumbar disc, bone spur, or narrowed spinal canal irritates or compresses a lumbar or sacral nerve root.',
          'Patients typically describe sharp, burning, or electric shock-like pain radiating from the lower back or buttock down the posterior thigh and calf, sometimes accompanied by tingling or numbness.',
        ],
      },
      {
        heading: 'First-Line Conservative Management',
        paragraphs: [
          'Nearly 9 out of 10 acute sciatica episodes settle within 4 to 8 weeks without surgical intervention. Early care focuses on reducing nerve root inflammation while keeping the patient gently mobile.',
        ],
        bullets: [
          'Brief local cold therapy during the first 48–72 hours of acute flare-ups, transitioning to gentle moist heat for muscle relaxation.',
          'Short-term anti-inflammatory medication prescribed by a spine specialist rather than prolonged bed rest.',
          'Directional-preference physiotherapy and deep core stabilization once acute spasm settles.',
        ],
      },
      {
        heading: 'When Is Minimally Invasive Intervention Considered?',
        paragraphs: [
          'Progressive leg or foot weakness (foot drop), bowel or bladder changes, or severe pain persisting despite 6 weeks of structured conservative therapy warrant specialist re-evaluation. When needed, targeted nerve root blocks or keyhole endoscopic discectomy relieve pressure with minimal tissue disruption.',
        ],
      },
    ],
  },
  {
    slug: 'open-standing-weight-bearing-mri-dynamic-spine-diagnosis',
    title: 'Why Open Standing Weight-Bearing MRI Reveals Spine Problems Missed Lying Down',
    category: 'Diagnostics & Rehab',
    publishedAt: 'November 4, 2026',
    readTime: '4 min read',
    authorName: 'Dr. Devanand Degulmadi',
    authorSlug: 'dr-devanand-degulmadi',
    image: CLINIC_IMAGES.diagnosticMri,
    excerpt:
      'Many patients experience back or leg pain only when standing or walking. Upright weight-bearing MRI captures the spine under natural gravity for sharper diagnosis.',
    sections: [
      {
        heading: 'The Limitation of Supine-Only Scanning',
        paragraphs: [
          'Traditional MRI scanners require patients to lie flat on their back. In that unloaded horizontal posture, an unstable vertebra can slip back into place or a disc bulge may appear smaller than it actually is when you stand.',
        ],
      },
      {
        heading: 'Advantages of Upright Weight-Bearing Evaluation',
        paragraphs: [
          'Momentum Clinic’s Open Standing MRI evaluates the cervical and lumbar spine while standing, sitting, flexing, or extending under natural body weight.',
        ],
        bullets: [
          'Detects dynamic spondylolisthesis and posture-dependent spinal stenosis accurately.',
          'Eliminates enclosed-tube claustrophobia with an open front and panoramic viewing field.',
          'Helps surgeons tailor conservative physiotherapy or pinpoint exact surgical levels without guesswork.',
        ],
      },
    ],
  },
  {
    slug: 'magnetically-controlled-growing-rods-early-onset-scoliosis',
    title: 'Magnetically Controlled Growing Rods (MCGR) for Early-Onset Pediatric Scoliosis',
    category: 'Scoliosis & Deformity',
    publishedAt: 'October 25, 2026',
    readTime: '6 min read',
    authorName: 'Dr. Dinesh Kumar Agarwal',
    authorSlug: 'dr-dinesh-agarwal',
    image: CLINIC_IMAGES.doctorPortrait,
    excerpt:
      'How modern magnetically adjustable spinal rods protect lung growth and straighten severe pediatric curves while avoiding repetitive surgical lengthening operations.',
    sections: [
      {
        heading: 'Balancing Curve Control with Spinal Growth',
        paragraphs: [
          'In young children under 10 with progressive early-onset scoliosis, fusing the spine prematurely restricts thoracic cage growth and lung development. Traditional growing rods required surgical incisions every 6 months to manually lengthen the implants.',
        ],
      },
      {
        heading: 'Outpatient Magnetic Lengthening',
        paragraphs: [
          'With Magnetically Controlled Growing Rods (MCGR), an initial implantation anchors the growth-friendly rod, and subsequent lengthening is performed painlessly in the outpatient clinic over minutes using an external magnetic controller.',
        ],
        bullets: [
          'Significantly reduces repeated hospitalizations, anesthesia exposures, and wound complications.',
          'Supports healthy chest-wall expansion and pulmonary maturation throughout childhood.',
          'Followed closely by specialized pediatric spine surgeons until definitive skeletal maturity.',
        ],
      },
    ],
  },
  {
    slug: 'robotic-and-endoscopic-spine-surgery-what-patients-should-know',
    title: 'Robotic & Endoscopic Spine Surgery: Separating Clinical Reality from Hype',
    category: 'Surgical Innovation',
    publishedAt: 'October 14, 2026',
    readTime: '5 min read',
    authorName: 'Dr. Mirant Dave',
    authorSlug: 'dr-mirant-dave',
    image: CLINIC_IMAGES.surgicalSuite,
    excerpt:
      'Understanding how O-arm 3D navigation, robotic arm guidance, and sub-centimeter endoscopes work alongside experienced spine surgeons.',
    sections: [
      {
        heading: 'Technology Empowers Technique—Never Replaces Clinical Judgment',
        paragraphs: [
          'At Momentum Clinic, surgical technology serves a clear goal: making necessary spine procedures safer, less invasive, and more predictable. Yet the most important step remains accurate diagnosis and honest guidance on whether surgery is truly needed.',
        ],
      },
      {
        heading: 'Where Robotics and Endoscopy Excel',
        paragraphs: [
          'Endoscopic systems allow keyhole disc fragment removal through incisions under 8 mm, preserving spinal muscles. Meanwhile, robotic guidance coupled with O-arm 3D imaging excels when stabilizing unstable vertebrae or correcting rotated scoliotic curves.',
        ],
      },
    ],
  },
];
