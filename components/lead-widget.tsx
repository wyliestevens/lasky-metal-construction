'use client';

import { useState } from 'react';

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

const projectOptions = [
  'Commercial Metal Building',
  'Storage Unit Facility',
  'Barndominium / Shop',
  'Metal Roofing',
  'Steel Frame Erection',
  'Car Wash / Specialty',
  'Other',
] as const;

export function LeadWidget() {
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [projectType, setProjectType] = useState('');
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [phoneError, setPhoneError] = useState('');
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneError('');
    setSubmitError('');

    if (honeypot) {
      setStatus('success');
      return;
    }

    const digits = phone.replace(/\D/g, '');
    if (digits.length !== 10) {
      setPhoneError('Please enter a valid 10-digit US phone number.');
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          phone: `+1${digits}`,
          business_name: businessName || projectType,
          consent: true,
          source: 'lasky-metal-construction-widget',
          project_type: projectType,
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
    } catch {
      setSubmitError('Something went wrong. Please try again or email us at joseglezrosas@gmail.com.');
      setStatus('error');
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-forge-red px-5 py-3.5 text-sm font-bold text-white shadow-lift transition-all hover:bg-forge-dk hover:shadow-xl"
        aria-label="Get a free estimate"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className="hidden sm:inline">Get a Free Estimate</span>
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide-out panel */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md transform bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between bg-steel px-6 py-4">
            <div>
              <h3 className="text-lg font-bold text-white">Get a Free Estimate</h3>
              <p className="text-sm text-gray-400">Our AI will call you in about 60 seconds</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition hover:bg-white/10 hover:text-white"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Form content */}
          <div className="flex-1 px-6 py-6">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="mt-4 text-xl font-bold text-steel">Got it, {firstName}!</p>
                <p className="mt-2 max-w-xs leading-relaxed text-gray-600">
                  Our AI voice assistant will be calling you in about 60 seconds. Make sure your phone is nearby.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="w-firstName" className="mb-1 block text-sm font-medium text-steel">First name</label>
                    <input
                      id="w-firstName"
                      type="text"
                      placeholder="First name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition focus:border-forge-red focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="w-lastName" className="mb-1 block text-sm font-medium text-steel">Last name</label>
                    <input
                      id="w-lastName"
                      type="text"
                      placeholder="Last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition focus:border-forge-red focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="w-email" className="mb-1 block text-sm font-medium text-steel">Email</label>
                  <input
                    id="w-email"
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition focus:border-forge-red focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="w-phone" className="mb-1 block text-sm font-medium text-steel">Phone</label>
                  <input
                    id="w-phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={phone}
                    onChange={(e) => {
                      setPhone(formatPhone(e.target.value));
                      if (phoneError) setPhoneError('');
                    }}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition focus:border-forge-red focus:outline-none"
                  />
                  {phoneError && <p className="mt-1 text-xs text-red-500">{phoneError}</p>}
                </div>

                <div>
                  <label htmlFor="w-businessName" className="mb-1 block text-sm font-medium text-steel">Business / Project name</label>
                  <input
                    id="w-businessName"
                    type="text"
                    placeholder="Business or project name"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition focus:border-forge-red focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="w-projectType" className="mb-1 block text-sm font-medium text-steel">Project type</label>
                  <select
                    id="w-projectType"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition focus:border-forge-red focus:outline-none"
                  >
                    <option value="">Select project type...</option>
                    {projectOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Honeypot */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <input
                    type="text"
                    name="website_url"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <label className="flex cursor-pointer items-start gap-2">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                    className="mt-1 accent-forge-red"
                  />
                  <span className="text-xs leading-relaxed text-gray-500">
                    I agree to receive an automated demo call at the number provided from AI Peak Biz on behalf of Lasky Metal Construction. Message and data rates may apply. This consent is not a condition of purchase.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full rounded-lg bg-forge-red px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-forge-dk hover:shadow-xl disabled:opacity-70"
                >
                  {status === 'loading' ? 'Submitting...' : 'Get Your Free Estimate'}
                </button>

                {submitError && <p className="text-center text-xs text-red-500">{submitError}</p>}

                <p className="text-center text-xs text-gray-400">
                  No spam. No obligation. Just a quick call to discuss your project.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
