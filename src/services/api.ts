export interface AppointmentRequest {
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

export interface ApiSubmissionResponse {
  referenceId: string;
  status: string;
  message: string;
  submittedAt?: string;
}

export interface ContactRequest {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

export interface CareerApplicationRequest {
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

async function postJson<TRequest, TResponse>(url: string, payload: TRequest): Promise<TResponse> {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => ({}))) as { error?: string } & TResponse;
  if (!response.ok) {
    throw new Error(data.error || 'Unable to complete your request. Please verify your entries and try again.');
  }
  return data;
}

export const clinicApi = {
  submitAppointment(payload: AppointmentRequest): Promise<ApiSubmissionResponse> {
    return postJson<AppointmentRequest, ApiSubmissionResponse>('/api/appointments', payload);
  },
  submitContact(payload: ContactRequest): Promise<ApiSubmissionResponse> {
    return postJson<ContactRequest, ApiSubmissionResponse>('/api/contact', payload);
  },
  submitCareerApplication(payload: CareerApplicationRequest): Promise<ApiSubmissionResponse> {
    return postJson<CareerApplicationRequest, ApiSubmissionResponse>('/api/careers/apply', payload);
  },
};
