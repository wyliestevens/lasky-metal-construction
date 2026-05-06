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

export function DemoForm({ source = 'hero' }: { source?: string }) {
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
          source: `lasky-metal-construction-${source}`,
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

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur">
        <svg className="mx-auto h-12 w-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="mt-4 text-xl font-bold text-white">Got it, {firstName}!</p>
        <p className="mt-2 leading-relaxed text-gray-300">
          Our AI voice assistant will be calling you in about 60 seconds. Make sure your phone is nearby.
        </p>
      </div>
    );
  }

  const inputClasses =
    'w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:border-forge-red focus:outline-none transition-colors';

  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur lg:p-8">
      <div className="mb-3 flex items-center gap-2">
        <svg className="h-5 w-5 text-forge-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <h3 className="text-lg font-bold text-white">
          Hear the AI Call You Right Now
        </h3>
      </div>
      <p className="mb-5 text-sm leading-relaxed text-gray-300">
        Fill out the form and our AI will call you within 60 seconds. Experience exactly how we handle incoming leads for your business.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className={inputClasses}
          />
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className={inputClasses}
          />
        </div>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={inputClasses}
        />

        <div>
          <input
            type="tel"
            placeholder="(555) 123-4567"
            value={phone}
            onChange={(e) => {
              setPhone(formatPhone(e.target.value));
              if (phoneError) setPhoneError('');
            }}
            required
            className={inputClasses}
          />
          {phoneError && <p className="mt-1 text-xs text-red-400">{phoneError}</p>}
        </div>

        <input
          type="text"
          placeholder="Business or project name"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          className={inputClasses}
        />

        <select
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          required
          className={`${inputClasses} ${!projectType ? 'text-gray-400' : ''}`}
        >
          <option value="">Select project type...</option>
          {projectOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>

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
          <span className="text-xs leading-relaxed text-gray-400">
            I agree to receive an automated demo call at the number provided from AI Peak Biz on behalf of Lasky Metal Construction. Message and data rates may apply. This consent is not a condition of purchase.
          </span>
        </label>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full rounded-lg bg-forge-red px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-forge-dk hover:shadow-xl disabled:opacity-70"
        >
          {status === 'loading' ? 'Calling you...' : 'Get Your Live Demo'}
        </button>

        {submitError && <p className="text-center text-xs text-red-400">{submitError}</p>}

        <p className="text-center text-xs text-gray-400">
          No spam. No obligation. Just a quick live demo.
        </p>
      </form>
    </div>
  );
}
