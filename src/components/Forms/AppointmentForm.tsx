import React, { useState, useEffect } from 'react';
import { CheckCircle2, AlertCircle, Loader2, Calendar } from 'lucide-react';
import { DOCTORS } from '../../data/doctors';
import { TREATMENTS } from '../../data/treatments';
import { CLINIC_INFO } from '../../data/clinicInfo';
import { clinicApi, ApiSubmissionResponse } from '../../services/api';
import { ClinicButton } from '../Buttons/ClinicButton';

interface AppointmentFormProps {
  defaultDoctorSlug?: string;
  defaultDepartment?: string;
  defaultMode?: 'in-person' | 'telemedicine' | 'international';
  showCountryField?: boolean;
}

const TIME_SLOTS = [
  '10:00 AM – 01:00 PM (Nichtipur Hospital)',
  '01:00 PM – 04:00 PM (Nichtipur Hospital)',
  '07:00 PM – 09:00 PM (Momentum Clinic, Dhaiya)',
  'Video Teleconsultation (By Appointment)',
];

const DEPARTMENT_OPTIONS = [
  'General Spine Evaluation',
  ...TREATMENTS.map((t) => t.shortTitle),
  'Second Opinion / MRI Review',
];

function getLocalTodayIso(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function isValidPhone(value: string): boolean {
  const trimmed = value.trim();
  const digits = trimmed.replace(/\D/g, '');
  return /^[+\d][\d\s()-]{6,18}$/.test(trimmed) && digits.length >= 7 && digits.length <= 15;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  defaultDoctorSlug = '',
  defaultDepartment = '',
  defaultMode = 'in-person',
  showCountryField = false,
}) => {
  const todayIso = getLocalTodayIso();

  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState(defaultDepartment || DEPARTMENT_OPTIONS[0]);
  const [doctorSlug, setDoctorSlug] = useState(defaultDoctorSlug);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState(TIME_SLOTS[0]);
  const [consultationType, setConsultationType] = useState<'in-person' | 'telemedicine' | 'international'>(defaultMode);
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submittedResult, setSubmittedResult] = useState<ApiSubmissionResponse | null>(null);
  const [lastSubmittedSignature, setLastSubmittedSignature] = useState<string | null>(null);

  useEffect(() => {
    setConsultationType(defaultMode);
    setSubmittedResult(null);
    setSubmitError(null);
    setFieldErrors({});
  }, [defaultMode]);

  useEffect(() => {
    const validDoctor = DOCTORS.some((d) => d.slug === defaultDoctorSlug) ? defaultDoctorSlug : '';
    setDoctorSlug(validDoctor);
  }, [defaultDoctorSlug]);

  useEffect(() => {
    const validDept = DEPARTMENT_OPTIONS.includes(defaultDepartment)
      ? defaultDepartment
      : DEPARTMENT_OPTIONS[0];
    setDepartment(validDept);
  }, [defaultDepartment]);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!patientName.trim() || patientName.trim().length < 2) {
      errs.patientName = 'Please enter the patient’s full name.';
    }
    if (!isValidPhone(phone)) {
      errs.phone = 'Enter a valid phone or WhatsApp number (7–15 digits).';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = 'Enter a valid email address.';
    }
    if (!department) {
      errs.department = 'Please choose a department or treatment.';
    }
    if (!preferredDate) {
      errs.preferredDate = 'Please select a preferred date.';
    } else if (preferredDate < todayIso) {
      errs.preferredDate = 'Preferred date cannot be in the past.';
    }
    if (!preferredTime) {
      errs.preferredTime = 'Please select a time slot.';
    }
    if ((showCountryField || consultationType === 'international') && !country.trim()) {
      errs.country = 'Please specify your country of residence.';
    }
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) return;

    const signature = `${email.trim().toLowerCase()}|${phone.trim()}|${preferredDate}|${preferredTime}|${department}|${consultationType}`;
    if (lastSubmittedSignature === signature) {
      setSubmitError('This appointment request was already submitted. Please modify your date/time if you need another booking.');
      return;
    }

    setSubmitting(true);
    try {
      const response = await clinicApi.submitAppointment({
        patientName: patientName.trim(),
        phone: phone.trim(),
        email: email.trim(),
        department,
        doctorSlug,
        preferredDate,
        preferredTime,
        consultationType,
        country: country.trim(),
        message: message.trim(),
      });
      setLastSubmittedSignature(signature);
      setSubmittedResult(response);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : `Unable to submit your appointment request right now. Please call ${CLINIC_INFO.phone} / ${CLINIC_INFO.secondaryPhone}.`
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submittedResult) {
    return (
      <div className="rounded-[12px] border border-[#025EC1]/20 bg-[#F5F9FE] p-6 sm:p-8">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-7 h-7 text-[#025EC1] shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <h3 className="text-xl font-bold text-[#213245]">
              Appointment Request Logged
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#59616B] leading-relaxed">
              {submittedResult.message}
            </p>
            <div className="mt-4 p-4 rounded-lg bg-white border border-black/8 text-sm space-y-1">
              <p className="font-semibold text-[#213245]">
                Request Reference: <span className="text-[#025EC1] tabular-nums">{submittedResult.referenceId}</span>
              </p>
              <p className="text-[#59616B]">
                Patient: {patientName} · {department} · {preferredDate} ({preferredTime})
              </p>
              <p className="text-xs text-[#59616B]/85">
                Status: Logged for clinic desk scheduling confirmation (not an automated live slot lock).
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setSubmittedResult(null);
                setMessage('');
              }}
              className="mt-5 text-sm font-semibold text-[#025EC1] hover:underline cursor-pointer"
            >
              Submit another appointment request
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Consultation Mode Toggle */}
      <div>
        <label className="block text-sm font-semibold text-[#213245] mb-2">
          Consultation Mode
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {[
            { id: 'in-person', label: 'In-Clinic OPD Visit' },
            { id: 'telemedicine', label: 'Video Telemedicine' },
            { id: 'international', label: 'International Patient' },
          ].map((mode) => (
            <button
              key={mode.id}
              type="button"
              onClick={() =>
                setConsultationType(mode.id as 'in-person' | 'telemedicine' | 'international')
              }
              className={`px-4 py-2.5 rounded-lg text-sm font-semibold border transition-colors cursor-pointer ${
                consultationType === mode.id
                  ? 'bg-[#025EC1] text-white border-[#025EC1]'
                  : 'bg-white text-[#213245] border-[#D1D8E0] hover:border-[#025EC1]'
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="appt-name" className="block text-sm font-semibold text-[#213245] mb-1.5">
            Patient Full Name <span className="text-red-600">*</span>
          </label>
          <input
            id="appt-name"
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            placeholder="e.g. Aarav Sharma"
            className="w-full rounded-lg border border-[#D1D8E0] bg-white px-4 py-2.5 text-[15px] text-[#213245] focus:outline-none focus:border-[#025EC1]"
          />
          {fieldErrors.patientName && (
            <p className="mt-1 text-xs font-medium text-red-600">{fieldErrors.patientName}</p>
          )}
        </div>

        <div>
          <label htmlFor="appt-phone" className="block text-sm font-semibold text-[#213245] mb-1.5">
            Phone / WhatsApp Number <span className="text-red-600">*</span>
          </label>
          <input
            id="appt-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98765 43210"
            className="w-full rounded-lg border border-[#D1D8E0] bg-white px-4 py-2.5 text-[15px] text-[#213245] focus:outline-none focus:border-[#025EC1]"
          />
          {fieldErrors.phone && (
            <p className="mt-1 text-xs font-medium text-red-600">{fieldErrors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="appt-email" className="block text-sm font-semibold text-[#213245] mb-1.5">
            Email Address <span className="text-red-600">*</span>
          </label>
          <input
            id="appt-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
            className="w-full rounded-lg border border-[#D1D8E0] bg-white px-4 py-2.5 text-[15px] text-[#213245] focus:outline-none focus:border-[#025EC1]"
          />
          {fieldErrors.email && (
            <p className="mt-1 text-xs font-medium text-red-600">{fieldErrors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="appt-dept" className="block text-sm font-semibold text-[#213245] mb-1.5">
            Department / Treatment <span className="text-red-600">*</span>
          </label>
          <select
            id="appt-dept"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full rounded-lg border border-[#D1D8E0] bg-white px-4 py-2.5 text-[15px] text-[#213245] focus:outline-none focus:border-[#025EC1]"
          >
            {DEPARTMENT_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {fieldErrors.department && (
            <p className="mt-1 text-xs font-medium text-red-600">{fieldErrors.department}</p>
          )}
        </div>

        <div>
          <label htmlFor="appt-doctor" className="block text-sm font-semibold text-[#213245] mb-1.5">
            Preferred Spine Specialist (Optional)
          </label>
          <select
            id="appt-doctor"
            value={doctorSlug}
            onChange={(e) => setDoctorSlug(e.target.value)}
            className="w-full rounded-lg border border-[#D1D8E0] bg-white px-4 py-2.5 text-[15px] text-[#213245] focus:outline-none focus:border-[#025EC1]"
          >
            <option value="">Any Available Spine Specialist</option>
            {DOCTORS.map((doc) => (
              <option key={doc.slug} value={doc.slug}>
                {doc.name} — {doc.department}
              </option>
            ))}
          </select>
        </div>

        {(showCountryField || consultationType === 'international') && (
          <div>
            <label htmlFor="appt-country" className="block text-sm font-semibold text-[#213245] mb-1.5">
              Country of Residence <span className="text-red-600">*</span>
            </label>
            <input
              id="appt-country"
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="e.g. Kenya, UAE, UK"
              className="w-full rounded-lg border border-[#D1D8E0] bg-white px-4 py-2.5 text-[15px] text-[#213245] focus:outline-none focus:border-[#025EC1]"
            />
            {fieldErrors.country && (
              <p className="mt-1 text-xs font-medium text-red-600">{fieldErrors.country}</p>
            )}
          </div>
        )}

        <div>
          <label htmlFor="appt-date" className="block text-sm font-semibold text-[#213245] mb-1.5">
            Preferred Date <span className="text-red-600">*</span>
          </label>
          <input
            id="appt-date"
            type="date"
            min={todayIso}
            value={preferredDate}
            onChange={(e) => setPreferredDate(e.target.value)}
            className="w-full rounded-lg border border-[#D1D8E0] bg-white px-4 py-2.5 text-[15px] text-[#213245] focus:outline-none focus:border-[#025EC1]"
          />
          {fieldErrors.preferredDate && (
            <p className="mt-1 text-xs font-medium text-red-600">{fieldErrors.preferredDate}</p>
          )}
        </div>

        <div>
          <label htmlFor="appt-time" className="block text-sm font-semibold text-[#213245] mb-1.5">
            Preferred Time Window <span className="text-red-600">*</span>
          </label>
          <select
            id="appt-time"
            value={preferredTime}
            onChange={(e) => setPreferredTime(e.target.value)}
            className="w-full rounded-lg border border-[#D1D8E0] bg-white px-4 py-2.5 text-[15px] text-[#213245] focus:outline-none focus:border-[#025EC1]"
          >
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          {fieldErrors.preferredTime && (
            <p className="mt-1 text-xs font-medium text-red-600">{fieldErrors.preferredTime}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="appt-msg" className="block text-sm font-semibold text-[#213245] mb-1.5">
          Symptoms, MRI Notes or Message
        </label>
        <textarea
          id="appt-msg"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Briefly describe back/neck symptoms, duration, or prior imaging details..."
          className="w-full rounded-lg border border-[#D1D8E0] bg-white px-4 py-2.5 text-[15px] text-[#213245] focus:outline-none focus:border-[#025EC1]"
        />
      </div>

      {submitError && (
        <div
          role="alert"
          className="flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{submitError}</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
        <ClinicButton
          type="submit"
          disabled={submitting}
          icon={
            submitting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Calendar className="w-4 h-4" />
            )
          }
        >
          {submitting
            ? 'Submitting Request...'
            : consultationType === 'telemedicine'
              ? 'Request Teleconsultation'
              : 'Request Appointment'}
        </ClinicButton>

        <p className="text-xs text-[#59616B] leading-relaxed">
          {CLINIC_INFO.hours} · Helpline {CLINIC_INFO.phone} / {CLINIC_INFO.secondaryPhone}
        </p>
      </div>
    </form>
  );
};
