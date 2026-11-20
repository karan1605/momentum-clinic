import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';
import { clinicApi, ApiSubmissionResponse } from '../../services/api';
import { ClinicButton } from '../Buttons/ClinicButton';

interface ContactFormProps {
  defaultSubject?: string;
}

const SUBJECT_OPTIONS = [
  'General Spine Inquiry',
  'Second Opinion & MRI Review',
  'Insurance & Cashless TPA Desk',
  'International Patient Coordination',
  'Feedback or Medical Records Request',
];

export const ContactForm: React.FC<ContactFormProps> = ({
  defaultSubject = SUBJECT_OPTIONS[0],
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(defaultSubject);
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [result, setResult] = useState<ApiSubmissionResponse | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    const phoneTrimmed = phone.trim();
    const phoneDigits = phoneTrimmed.replace(/\D/g, '');
    if (!name.trim() || name.trim().length < 2) errs.name = 'Please enter your full name.';
    if (!/^[+\d][\d\s()-]{6,18}$/.test(phoneTrimmed) || phoneDigits.length < 7 || phoneDigits.length > 15) {
      errs.phone = 'Enter a valid phone number (7–15 digits).';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errs.email = 'Enter a valid email address.';
    if (!subject.trim()) errs.subject = 'Select an inquiry topic.';
    if (!message.trim() || message.trim().length < 10) {
      errs.message = 'Please enter at least 10 characters describing your inquiry.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    if (!validate()) return;

    setSubmitting(true);
    try {
      const res = await clinicApi.submitContact({
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        subject,
        message: message.trim(),
      });
      setResult(res);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : 'Unable to send message right now. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (result) {
    return (
      <div className="rounded-[12px] border border-[#025EC1]/20 bg-[#F5F9FE] p-6 sm:p-8">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-7 h-7 text-[#025EC1] shrink-0" aria-hidden="true" />
          <div>
            <h3 className="text-xl font-bold text-[#213245]">Inquiry Received</h3>
            <p className="mt-2 text-sm sm:text-base text-[#59616B]">{result.message}</p>
            <p className="mt-3 text-sm font-semibold text-[#213245]">
              Reference ID: <span className="text-[#025EC1] tabular-nums">{result.referenceId}</span>
            </p>
            <button
              type="button"
              onClick={() => {
                setResult(null);
                setMessage('');
              }}
              className="mt-4 text-sm font-semibold text-[#025EC1] hover:underline cursor-pointer"
            >
              Send another inquiry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-semibold text-[#213245] mb-1.5">
            Your Name <span className="text-red-600">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="w-full rounded-lg border border-[#D1D8E0] bg-white px-4 py-2.5 text-[15px] text-[#213245] focus:outline-none focus:border-[#025EC1]"
          />
          {errors.name && <p className="mt-1 text-xs text-red-600 font-medium">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="contact-phone" className="block text-sm font-semibold text-[#213245] mb-1.5">
            Phone Number <span className="text-red-600">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98765 43210"
            className="w-full rounded-lg border border-[#D1D8E0] bg-white px-4 py-2.5 text-[15px] text-[#213245] focus:outline-none focus:border-[#025EC1]"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600 font-medium">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-email" className="block text-sm font-semibold text-[#213245] mb-1.5">
            Email Address <span className="text-red-600">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-lg border border-[#D1D8E0] bg-white px-4 py-2.5 text-[15px] text-[#213245] focus:outline-none focus:border-[#025EC1]"
          />
          {errors.email && <p className="mt-1 text-xs text-red-600 font-medium">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="contact-subject" className="block text-sm font-semibold text-[#213245] mb-1.5">
            Inquiry Topic <span className="text-red-600">*</span>
          </label>
          <select
            id="contact-subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full rounded-lg border border-[#D1D8E0] bg-white px-4 py-2.5 text-[15px] text-[#213245] focus:outline-none focus:border-[#025EC1]"
          >
            {SUBJECT_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.subject && <p className="mt-1 text-xs text-red-600 font-medium">{errors.subject}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-[#213245] mb-1.5">
          Message <span className="text-red-600">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="How can our patient care team assist you?"
          className="w-full rounded-lg border border-[#D1D8E0] bg-white px-4 py-2.5 text-[15px] text-[#213245] focus:outline-none focus:border-[#025EC1]"
        />
        {errors.message && <p className="mt-1 text-xs text-red-600 font-medium">{errors.message}</p>}
      </div>

      {submitError && (
        <div role="alert" className="flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          <AlertCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
          <span>{submitError}</span>
        </div>
      )}

      <ClinicButton
        type="submit"
        disabled={submitting}
        icon={submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
      >
        {submitting ? 'Sending Message...' : 'Send Message'}
      </ClinicButton>
    </form>
  );
};
