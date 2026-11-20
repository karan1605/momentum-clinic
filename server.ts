import 'dotenv/config';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface AppointmentPayload {
  patientName: string;
  phone: string;
  email: string;
  department: string;
  doctorSlug?: string;
  preferredDate: string;
  preferredTime: string;
  consultationType: 'in-person' | 'telemedicine' | 'international';
  message?: string;
  country?: string;
}

interface ContactPayload {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

interface CareerPayload {
  fullName: string;
  email: string;
  phone: string;
  track: 'fellowship' | 'work-with-us';
  roleOrProgram: string;
  experienceYears?: string;
  qualification: string;
  resumeFileName: string;
  resumeSizeBytes: number;
  coverNote?: string;
}

const recentSubmissionFingerprints = new Map<string, number>();
const DUPLICATE_WINDOW_MS = 60_000;

function isDuplicateSubmission(key: string): boolean {
  const now = Date.now();
  for (const [k, ts] of recentSubmissionFingerprints.entries()) {
    if (now - ts > DUPLICATE_WINDOW_MS) {
      recentSubmissionFingerprints.delete(k);
    }
  }
  const existing = recentSubmissionFingerprints.get(key);
  if (existing && now - existing < DUPLICATE_WINDOW_MS) {
    return true;
  }
  recentSubmissionFingerprints.set(key, now);
  return false;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s()-]{6,18}$/;

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '');
  return PHONE_RE.test(phone) && digits.length >= 7 && digits.length <= 15;
}

function isValidAppointmentDate(dateStr: string): { valid: boolean; reason?: string } {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return { valid: false, reason: 'Please enter a valid appointment date (YYYY-MM-DD).' };
  }
  const [y, m, d] = dateStr.split('-').map(Number);
  const parsed = new Date(Date.UTC(y, m - 1, d));
  if (
    parsed.getUTCFullYear() !== y ||
    parsed.getUTCMonth() !== m - 1 ||
    parsed.getUTCDate() !== d
  ) {
    return { valid: false, reason: 'Please select a valid calendar date.' };
  }
  // Allow 1-day UTC offset tolerance so users in earlier timezones can book "today"
  const yesterdayUtc = new Date(Date.now() - 86_400_000).toISOString().split('T')[0];
  if (dateStr < yesterdayUtc) {
    return { valid: false, reason: 'Preferred appointment date cannot be in the past.' };
  }
  return { valid: true };
}

function generateReferenceCode(prefix: string): string {
  const randomPart = Math.random().toString(36).substring(2, 7).toUpperCase();
  const timePart = Date.now().toString().slice(-4);
  return `${prefix}-${timePart}-${randomPart}`;
}

async function startServer() {
  const app = express();
  const port = Number(process.env.PORT) || 3000;
  const isProd = process.env.NODE_ENV === 'production';

  app.use(express.json({ limit: '2mb' }));

  const storedAppointments: Array<AppointmentPayload & { referenceId: string; submittedAt: string }> = [];
  const storedContacts: Array<ContactPayload & { referenceId: string; submittedAt: string }> = [];
  const storedCareers: Array<CareerPayload & { referenceId: string; submittedAt: string }> = [];

  app.get('/api/health', (_req, res) => {
    res.json({
      ok: true,
      clinic: 'Momentum Clinic',
      hmsWebhookConfigured: Boolean(process.env.CLINIC_BOOKING_WEBHOOK_URL),
    });
  });

  app.post('/api/appointments', async (req, res) => {
    const body = req.body as Partial<AppointmentPayload>;
    const patientName = (body.patientName || '').trim();
    const phone = (body.phone || '').trim();
    const email = (body.email || '').trim();
    const department = (body.department || '').trim();
    const preferredDate = (body.preferredDate || '').trim();
    const preferredTime = (body.preferredTime || '').trim();
    const consultationType = body.consultationType || 'in-person';

    if (!patientName || patientName.length < 2) {
      return res.status(400).json({ error: 'Please enter the patient full name.' });
    }
    if (!isValidPhone(phone)) {
      return res.status(400).json({ error: 'Please enter a valid contact phone number (7–15 digits).' });
    }
    if (!EMAIL_RE.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }
    if (!department) {
      return res.status(400).json({ error: 'Please select a department or treatment.' });
    }
    if (!preferredDate) {
      return res.status(400).json({ error: 'Please choose a preferred appointment date.' });
    }
    const dateCheck = isValidAppointmentDate(preferredDate);
    if (!dateCheck.valid) {
      return res.status(400).json({ error: dateCheck.reason });
    }
    if (!preferredTime) {
      return res.status(400).json({ error: 'Please select a preferred time window.' });
    }
    if (consultationType === 'international' && !(body.country || '').trim()) {
      return res.status(400).json({ error: 'Please specify your country of residence.' });
    }

    const fingerprint = `appt:${email.toLowerCase()}:${phone}:${preferredDate}:${preferredTime}:${department}`;
    if (isDuplicateSubmission(fingerprint)) {
      return res.status(409).json({
        error: 'A matching appointment request was already submitted moments ago. Please wait before submitting again.',
      });
    }

    const referenceId = generateReferenceCode(consultationType === 'telemedicine' ? 'MC-TELE' : 'MC-APT');
    const record = {
      patientName,
      phone,
      email,
      department,
      doctorSlug: body.doctorSlug || '',
      preferredDate,
      preferredTime,
      consultationType,
      message: (body.message || '').trim(),
      country: (body.country || '').trim(),
      referenceId,
      submittedAt: new Date().toISOString(),
    };
    storedAppointments.push(record);

    const externalWebhook = process.env.CLINIC_BOOKING_WEBHOOK_URL;
    if (externalWebhook) {
      try {
        await fetch(externalWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(record),
        });
      } catch (err) {
        console.error('External booking webhook forwarding failed:', err);
      }
    }

    return res.status(201).json({
      referenceId,
      status: externalWebhook ? 'forwarded_to_clinic_desk' : 'intake_recorded',
      message:
        consultationType === 'telemedicine'
          ? 'Your teleconsultation request has been logged. Our telemedicine coordinator will share the video consultation link and MRI upload portal after verifying slot availability.'
          : 'Your appointment request has been logged. Our scheduling desk will call or email you shortly to confirm your exact consultation slot.',
      submittedAt: record.submittedAt,
    });
  });

  app.post('/api/contact', (req, res) => {
    const body = req.body as Partial<ContactPayload>;
    const name = (body.name || '').trim();
    const phone = (body.phone || '').trim();
    const email = (body.email || '').trim();
    const subject = (body.subject || '').trim();
    const message = (body.message || '').trim();

    if (!name || name.length < 2) {
      return res.status(400).json({ error: 'Please enter your name.' });
    }
    if (!isValidPhone(phone)) {
      return res.status(400).json({ error: 'Please enter a valid phone number (7–15 digits).' });
    }
    if (!EMAIL_RE.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }
    if (!subject) {
      return res.status(400).json({ error: 'Please select or enter an inquiry subject.' });
    }
    if (!message || message.length < 10) {
      return res.status(400).json({ error: 'Please provide details of at least 10 characters.' });
    }

    const fingerprint = `contact:${email.toLowerCase()}:${subject}:${message.slice(0, 40)}`;
    if (isDuplicateSubmission(fingerprint)) {
      return res.status(409).json({
        error: 'This inquiry was already received moments ago.',
      });
    }

    const referenceId = generateReferenceCode('MC-INQ');
    storedContacts.push({
      name,
      phone,
      email,
      subject,
      message,
      referenceId,
      submittedAt: new Date().toISOString(),
    });

    return res.status(201).json({
      referenceId,
      status: 'received',
      message: 'Your inquiry has been received by Momentum Clinic patient desk. A coordinator will respond within one working day.',
    });
  });

  app.post('/api/careers/apply', (req, res) => {
    const body = req.body as Partial<CareerPayload>;
    const fullName = (body.fullName || '').trim();
    const email = (body.email || '').trim();
    const phone = (body.phone || '').trim();
    const roleOrProgram = (body.roleOrProgram || '').trim();
    const qualification = (body.qualification || '').trim();
    const resumeFileName = (body.resumeFileName || '').trim();
    const resumeSizeBytes = Number(body.resumeSizeBytes || 0);

    if (!fullName || fullName.length < 2) {
      return res.status(400).json({ error: 'Please enter your full name.' });
    }
    if (!EMAIL_RE.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }
    if (!isValidPhone(phone)) {
      return res.status(400).json({ error: 'Please enter a valid phone number (7–15 digits).' });
    }
    if (!roleOrProgram) {
      return res.status(400).json({ error: 'Please select a fellowship program or open role.' });
    }
    if (!qualification) {
      return res.status(400).json({ error: 'Please enter your medical degree or highest qualification.' });
    }
    if (!resumeFileName || resumeSizeBytes <= 0) {
      return res.status(400).json({ error: 'Please attach your CV / resume file (PDF or DOC/DOCX).' });
    }
    if (resumeSizeBytes > 5 * 1024 * 1024) {
      return res.status(400).json({ error: 'Resume file size must be 5 MB or smaller.' });
    }

    const fingerprint = `career:${email.toLowerCase()}:${roleOrProgram}`;
    if (isDuplicateSubmission(fingerprint)) {
      return res.status(409).json({
        error: 'Your application for this position was already submitted moments ago.',
      });
    }

    const referenceId = generateReferenceCode(body.track === 'fellowship' ? 'MC-FEL' : 'MC-HR');
    storedCareers.push({
      fullName,
      email,
      phone,
      track: body.track === 'fellowship' ? 'fellowship' : 'work-with-us',
      roleOrProgram,
      experienceYears: body.experienceYears || '',
      qualification,
      resumeFileName,
      resumeSizeBytes,
      coverNote: (body.coverNote || '').trim(),
      referenceId,
      submittedAt: new Date().toISOString(),
    });

    return res.status(201).json({
      referenceId,
      status: 'application_logged',
      message: `Application logged for ${roleOrProgram}. Our academic and HR team will review your CV (${resumeFileName}) and follow up via email.`,
    });
  });

  app.all('/api/*', (_req, res) => {
    res.status(404).json({ error: 'API endpoint not found.' });
  });

  app.use((err: unknown, req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (req.path.startsWith('/api/') && err instanceof SyntaxError) {
      return res.status(400).json({ error: 'Invalid JSON request payload.' });
    }
    return next(err);
  });

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Momentum Clinic server listening on http://0.0.0.0:${port}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
