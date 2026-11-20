import React, { useState, useEffect } from 'react';
import { CheckCircle2, AlertCircle, Loader2, Upload, FileText } from 'lucide-react';
import { clinicApi, ApiSubmissionResponse } from '../../services/api';
import { ClinicButton } from '../Buttons/ClinicButton';

interface CareerApplicationFormProps {
  track: 'fellowship' | 'work-with-us';
  options: string[];
  preselectedOption?: string;
}

export const CareerApplicationForm: React.FC<CareerApplicationFormProps> = ({
  track,
  options,
  preselectedOption = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [roleOrProgram, setRoleOrProgram] = useState(preselectedOption || options[0] || '');
  const [qualification, setQualification] = useState('');
  const [experienceYears, setExperienceYears] = useState('');
  const [coverNote, setCoverNote] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [result, setResult] = useState<ApiSubmissionResponse | null>(null);

  useEffect(() => {
    if (preselectedOption) {
      setRoleOrProgram(preselectedOption);
      setResult(null);
      setSubmitError(null);
    }
  }, [preselectedOption]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (!file) {
      setResumeFile(null);
      return;
    }
    const allowedExt = /\.(pdf|doc|docx)$/i.test(file.name);
    if (!allowedExt) {
      setErrors((prev) => ({
        ...prev,
        resume: 'Accepted CV formats: PDF, DOC, or DOCX.',
      }));
      e.target.value = '';
      setResumeFile(null);
      return;
    }
    if (file.size <= 0) {
      setErrors((prev) => ({
        ...prev,
        resume: 'Selected file appears to be empty. Please choose a valid CV file.',
      }));
      e.target.value = '';
      setResumeFile(null);
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        resume: 'File size must not exceed 5 MB.',
      }));
      e.target.value = '';
      setResumeFile(null);
      return;
    }
    setErrors((prev) => {
      const next = { ...prev };
      delete next.resume;
      return next;
    });
    setResumeFile(file);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    const phoneTrimmed = phone.trim();
    const phoneDigits = phoneTrimmed.replace(/\D/g, '');
    if (!fullName.trim() || fullName.trim().length < 2) errs.fullName = 'Please enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errs.email = 'Enter a valid email address.';
    if (!/^[+\d][\d\s()-]{6,18}$/.test(phoneTrimmed) || phoneDigits.length < 7 || phoneDigits.length > 15) {
      errs.phone = 'Enter a valid phone number (7–15 digits).';
    }
    if (!roleOrProgram) errs.roleOrProgram = 'Please choose a program or position.';
    if (!qualification.trim()) errs.qualification = 'Please enter your medical degree or qualification.';
    if (!resumeFile) errs.resume = 'Please upload your CV / Resume (PDF, DOC, DOCX, max 5 MB).';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    if (!validate() || !resumeFile) return;

    setSubmitting(true);
    try {
      const res = await clinicApi.submitCareerApplication({
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        track,
        roleOrProgram,
        experienceYears: experienceYears.trim(),
        qualification: qualification.trim(),
        resumeFileName: resumeFile.name,
        resumeSizeBytes: resumeFile.size,
        coverNote: coverNote.trim(),
      });
      setResult(res);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : 'Unable to submit application. Please try again.'
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
            <h3 className="text-xl font-bold text-[#213245]">Application Submitted</h3>
            <p className="mt-2 text-sm sm:text-base text-[#59616B]">{result.message}</p>
            <p className="mt-3 text-sm font-semibold text-[#213245]">
              Application ID: <span className="text-[#025EC1] tabular-nums">{result.referenceId}</span>
            </p>
            <button
              type="button"
              onClick={() => {
                setResult(null);
                setResumeFile(null);
              }}
              className="mt-4 text-sm font-semibold text-[#025EC1] hover:underline cursor-pointer"
            >
              Submit another application
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
          <label htmlFor="career-name" className="block text-sm font-semibold text-[#213245] mb-1.5">
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            id="career-name"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Dr. / Candidate Full Name"
            className="w-full rounded-lg border border-[#D1D8E0] bg-white px-4 py-2.5 text-[15px] text-[#213245] focus:outline-none focus:border-[#025EC1]"
          />
          {errors.fullName && <p className="mt-1 text-xs text-red-600 font-medium">{errors.fullName}</p>}
        </div>

        <div>
          <label htmlFor="career-email" className="block text-sm font-semibold text-[#213245] mb-1.5">
            Email Address <span className="text-red-600">*</span>
          </label>
          <input
            id="career-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="candidate@example.com"
            className="w-full rounded-lg border border-[#D1D8E0] bg-white px-4 py-2.5 text-[15px] text-[#213245] focus:outline-none focus:border-[#025EC1]"
          />
          {errors.email && <p className="mt-1 text-xs text-red-600 font-medium">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="career-phone" className="block text-sm font-semibold text-[#213245] mb-1.5">
            Phone Number <span className="text-red-600">*</span>
          </label>
          <input
            id="career-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98765 43210"
            className="w-full rounded-lg border border-[#D1D8E0] bg-white px-4 py-2.5 text-[15px] text-[#213245] focus:outline-none focus:border-[#025EC1]"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600 font-medium">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="career-role" className="block text-sm font-semibold text-[#213245] mb-1.5">
            {track === 'fellowship' ? 'Fellowship Program' : 'Position Applied For'} <span className="text-red-600">*</span>
          </label>
          <select
            id="career-role"
            value={roleOrProgram}
            onChange={(e) => setRoleOrProgram(e.target.value)}
            className="w-full rounded-lg border border-[#D1D8E0] bg-white px-4 py-2.5 text-[15px] text-[#213245] focus:outline-none focus:border-[#025EC1]"
          >
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.roleOrProgram && (
            <p className="mt-1 text-xs text-red-600 font-medium">{errors.roleOrProgram}</p>
          )}
        </div>

        <div>
          <label htmlFor="career-qual" className="block text-sm font-semibold text-[#213245] mb-1.5">
            Highest Qualification / Medical Degree <span className="text-red-600">*</span>
          </label>
          <input
            id="career-qual"
            type="text"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            placeholder={track === 'fellowship' ? 'e.g. MS Orthopaedics / MCh Neurosurgery' : 'e.g. MPT Ortho / B.Sc Nursing'}
            className="w-full rounded-lg border border-[#D1D8E0] bg-white px-4 py-2.5 text-[15px] text-[#213245] focus:outline-none focus:border-[#025EC1]"
          />
          {errors.qualification && (
            <p className="mt-1 text-xs text-red-600 font-medium">{errors.qualification}</p>
          )}
        </div>

        <div>
          <label htmlFor="career-exp" className="block text-sm font-semibold text-[#213245] mb-1.5">
            Years of Clinical / Relevant Experience
          </label>
          <input
            id="career-exp"
            type="text"
            value={experienceYears}
            onChange={(e) => setExperienceYears(e.target.value)}
            placeholder="e.g. 3 years"
            className="w-full rounded-lg border border-[#D1D8E0] bg-white px-4 py-2.5 text-[15px] text-[#213245] focus:outline-none focus:border-[#025EC1]"
          />
        </div>
      </div>

      {/* Resume Upload */}
      <div>
        <label htmlFor="career-resume" className="block text-sm font-semibold text-[#213245] mb-1.5">
          Upload CV / Resume (PDF, DOC, DOCX — max 5 MB) <span className="text-red-600">*</span>
        </label>
        <label
          htmlFor="career-resume"
          className="flex items-center justify-between gap-4 rounded-lg border border-dashed border-[#025EC1]/40 bg-[#F5F9FE] px-4 py-4 cursor-pointer hover:bg-[#EAF2FD] transition-colors"
        >
          <div className="flex items-center gap-3 min-w-0">
            {resumeFile ? (
              <FileText className="w-5 h-5 text-[#025EC1] shrink-0" aria-hidden="true" />
            ) : (
              <Upload className="w-5 h-5 text-[#025EC1] shrink-0" aria-hidden="true" />
            )}
            <span className="text-sm font-medium text-[#213245] truncate">
              {resumeFile
                ? `${resumeFile.name} (${(resumeFile.size / 1024).toFixed(0)} KB)`
                : 'Choose CV / Resume file from your device'}
            </span>
          </div>
          <span className="text-xs font-semibold text-[#025EC1] shrink-0">Browse File</span>
          <input
            id="career-resume"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="sr-only"
          />
        </label>
        {errors.resume && <p className="mt-1 text-xs text-red-600 font-medium">{errors.resume}</p>}
      </div>

      <div>
        <label htmlFor="career-note" className="block text-sm font-semibold text-[#213245] mb-1.5">
          Statement of Purpose / Additional Note
        </label>
        <textarea
          id="career-note"
          rows={3}
          value={coverNote}
          onChange={(e) => setCoverNote(e.target.value)}
          placeholder="Share clinical interests, publications, or preferred joining timeline..."
          className="w-full rounded-lg border border-[#D1D8E0] bg-white px-4 py-2.5 text-[15px] text-[#213245] focus:outline-none focus:border-[#025EC1]"
        />
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
        icon={submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
      >
        {submitting ? 'Submitting Application...' : 'Submit Application'}
      </ClinicButton>
    </form>
  );
};
