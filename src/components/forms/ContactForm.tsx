"use client";

import { ArrowUpRight, Check, CheckCircle2, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cityNames } from "@/config/cities";
import { services } from "@/config/content";
import { siteConfig } from "@/config/site";
import {
  cn,
  createDemoReference,
  isValidEmail,
  isValidIndianPhone,
  whatsappUrl,
} from "@/lib/utils";
import { DemoTag } from "@/components/ui/DemoTag";

type FormState = {
  name: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  message: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  city: "",
  service: "Not sure yet",
  message: "",
  consent: false,
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [reference, setReference] = useState<string | null>(null);
  const successRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!reference) return;
    const timer = window.setTimeout(() => successRef.current?.focus(), 60);
    return () => window.clearTimeout(timer);
  }, [reference]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    if (errors[key]) {
      setErrors((current) => ({ ...current, [key]: undefined }));
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: FormErrors = {};

    if (form.name.trim().length < 2) {
      nextErrors.name = "Enter your name so we know who we are replying to.";
    }
    if (!isValidIndianPhone(form.phone)) {
      nextErrors.phone = "Enter a valid 10-digit Indian mobile number.";
    }
    if (form.email.trim() && !isValidEmail(form.email)) {
      nextErrors.email = "Check the email address, or leave it blank.";
    }
    if (!form.city) {
      nextErrors.city = "Choose the city the move starts in.";
    }
    if (form.message.trim().length < 10) {
      nextErrors.message = "Add a little more detail — at least 10 characters.";
    }
    if (!form.consent) {
      nextErrors.consent = "Please confirm you understand this is a demonstration.";
    }

    setErrors(nextErrors);
    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      document.getElementById(`contact-${firstError}`)?.focus();
      return;
    }

    setReference(createDemoReference("MSG"));
  }

  function reset() {
    setForm(initialForm);
    setErrors({});
    setReference(null);
  }

  if (reference) {
    return (
      <div className="rounded-3xl border border-line bg-surface p-6 sm:p-9 shadow-xl" role="status" aria-live="polite">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent bg-accent-soft text-accent-strong shadow-sm">
          <Check aria-hidden className="h-6 w-6" strokeWidth={2.5} />
        </span>
        <h2 ref={successRef} tabIndex={-1} className="display-sm mt-5 outline-none font-display">
          Demo enquiry reference issued.
        </h2>
        <p className="mt-2.5 max-w-md text-[0.95rem] leading-relaxed text-ink-soft">
          <strong className="font-bold text-ink">Nothing was sent or stored.</strong> This is an
          interactive demonstration form. In a live production deployment, a move manager would reply
          within one working business day.
        </p>
        <div className="mt-6 rounded-2xl border border-line bg-paper p-4">
          <p className="label text-[0.65rem] font-bold text-accent-strong">Demo Reference ID</p>
          <p className="mt-1 font-mono text-[1.1rem] font-bold text-ink tracking-wider">{reference}</p>
        </div>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappUrl(
              `Hello Setu, I would like to discuss a move from ${form.city}. Reference: ${reference}.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <MessageCircle aria-hidden className="h-4 w-4" strokeWidth={2} />
            Continue on WhatsApp
          </a>
          <button type="button" onClick={reset} className="btn btn-outline btn-sm">
            Send another enquiry
          </button>
        </div>
        <p className="mt-4 text-[0.72rem] leading-relaxed text-muted">
          WhatsApp opens with a prefilled message draft. You choose whether to send it.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-line bg-surface p-6 sm:p-8 lg:p-10 shadow-lg"
    >
      <div className="flex items-center justify-between gap-4 border-b border-line/60 pb-5">
        <div>
          <h2 className="display-sm text-ink">Send a message.</h2>
          <p className="mt-1 text-[0.85rem] text-muted">
            Directly to the desk of a regional move coordinator.
          </p>
        </div>
        <DemoTag>Interactive Form</DemoTag>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="field-label">
            Your Name <span className="text-accent">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            className={cn("field", errors.name && "field-error")}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            placeholder="e.g. Ramesh Kulkarni"
          />
          {errors.name ? (
            <p id="contact-name-error" className="field-message" role="alert">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-phone" className="field-label">
            Mobile Number <span className="text-accent">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
            className={cn("field", errors.phone && "field-error")}
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? "contact-phone-error" : undefined}
            placeholder="10-digit mobile number"
          />
          {errors.phone ? (
            <p id="contact-phone-error" className="field-message" role="alert">
              {errors.phone}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="contact-email" className="field-label">
          Email Address <span className="font-normal text-muted">(optional)</span>
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={(event) => update("email", event.target.value)}
          className={cn("field", errors.email && "field-error")}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          placeholder="e.g. name@company.com"
        />
        {errors.email ? (
          <p id="contact-email-error" className="field-message" role="alert">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="mt-4 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-city" className="field-label">
            Origin City <span className="text-accent">*</span>
          </label>
          <select
            id="contact-city"
            value={form.city}
            onChange={(event) => update("city", event.target.value)}
            className={cn("field", errors.city && "field-error")}
            aria-invalid={errors.city ? true : undefined}
            aria-describedby={errors.city ? "contact-city-error" : undefined}
          >
            <option value="">Select a city</option>
            {cityNames.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
            <option value="Other city">Other Pan-India City</option>
          </select>
          {errors.city ? (
            <p id="contact-city-error" className="field-message" role="alert">
              {errors.city}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-service" className="field-label">
            Relocation Type
          </label>
          <select
            id="contact-service"
            value={form.service}
            onChange={(event) => update("service", event.target.value)}
            className="field"
          >
            <option value="Not sure yet">Not sure yet (advise me)</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="contact-message" className="field-label">
          What are we moving? <span className="text-accent">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          maxLength={800}
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          className={cn("field min-h-[8.5rem] resize-y", errors.message && "field-error")}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "contact-message-error" : "contact-message-hint"}
          placeholder="e.g. 2 BHK from Bandra to Kalyani Nagar around the 15th of next month. Two pianos and fragile glass showcase."
        />
        {errors.message ? (
          <p id="contact-message-error" className="field-message" role="alert">
            {errors.message}
          </p>
        ) : (
          <p id="contact-message-hint" className="field-hint">
            Include dates, floor, lift access, or fragile items. {form.message.length}/800 characters
          </p>
        )}
      </div>

      <div className="mt-5">
        <label
          htmlFor="contact-consent"
          className="flex cursor-pointer items-start gap-3 rounded-xl border border-line bg-paper p-4 text-[0.8rem] leading-relaxed text-ink-soft transition-colors hover:border-accent/60"
        >
          <input
            id="contact-consent"
            type="checkbox"
            checked={form.consent}
            onChange={(event) => update("consent", event.target.checked)}
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? "contact-consent-error" : undefined}
            className="mt-0.5 h-4 w-4 shrink-0 accent-accent"
          />
          <span>
            I understand this is a demonstration website template. No personal data is transmitted
            or stored, and no actual binding enquiry is created.
          </span>
        </label>
        {errors.consent ? (
          <p id="contact-consent-error" className="field-message" role="alert">
            {errors.consent}
          </p>
        ) : null}
      </div>

      <div className="mt-7 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-line/60 pt-5">
        <p className="text-[0.72rem] leading-relaxed text-muted">
          Prefer a phone consultation?{" "}
          <a href={siteConfig.contact.phoneHref} className="font-bold text-ink underline decoration-accent underline-offset-4 hover:text-accent">
            {siteConfig.contact.phone}
          </a>
        </p>
        <button type="submit" className="btn btn-primary">
          <span>Send demo message</span>
          <ArrowUpRight aria-hidden className="h-4 w-4" strokeWidth={2.2} />
        </button>
      </div>
    </form>
  );
}
