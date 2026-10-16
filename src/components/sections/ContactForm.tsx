"use client";

import { useState, useTransition } from "react";
import { submitEnquiry } from "../../app/actions/contact";
import { MessageSquare, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{ success?: boolean; message?: string } | null>(null);

  async function handleSubmit(formData: FormData) {
    setStatus(null);
    startTransition(async () => {
      const result = await submitEnquiry(formData);
      setStatus(result);
    });
  }

  return (
    <section id="contact" className="py-[88px]">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-[clamp(30px,4vw,44px)] leading-[1.15] mb-3 tracking-[-0.8px] font-bold text-[var(--ink)]">
          Get in Touch
        </h2>
        <p className="text-[var(--mute)] max-w-[36em] mb-10">
          Have questions about bulk orders, distribution partnerships, or retail availability? Drop us a line below.
        </p>

        <form action={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[760px]">
          {/* Honeypot field */}
          <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

          <label className="grid gap-1.5 text-[14px] font-medium text-[var(--mute)]">
            Full Name *
            <input
              type="text"
              name="name"
              required
              placeholder="Rony Peter"
              className="font-sans text-[var(--ink)] px-4 py-3.5 border-[1.5px] border-[var(--line)] rounded-[14px] bg-white w-full focus:outline-hidden focus:border-[var(--blue2)]"
            />
          </label>

          <label className="grid gap-1.5 text-[14px] font-medium text-[var(--mute)]">
            Phone Number
            <input
              type="tel"
              name="phone"
              placeholder="+91 98765 43210"
              className="font-sans text-[var(--ink)] px-4 py-3.5 border-[1.5px] border-[var(--line)] rounded-[14px] bg-white w-full focus:outline-hidden focus:border-[var(--blue2)]"
            />
          </label>

          <label className="grid gap-1.5 text-[14px] font-medium text-[var(--mute)]">
            Email Address
            <input
              type="email"
              name="email"
              placeholder="rony@example.com"
              className="font-sans text-[var(--ink)] px-4 py-3.5 border-[1.5px] border-[var(--line)] rounded-[14px] bg-white w-full focus:outline-hidden focus:border-[var(--blue2)]"
            />
          </label>

          <label className="grid gap-1.5 text-[14px] font-medium text-[var(--mute)]">
            Enquiry Type
            <select
              name="enquiryType"
              defaultValue="general"
              className="font-sans text-[var(--ink)] px-4 py-3.5 border-[1.5px] border-[var(--line)] rounded-[14px] bg-white w-full focus:outline-hidden focus:border-[var(--blue2)]"
            >
              <option value="general">General Enquiry</option>
              <option value="distribution">Distribution & Wholesale</option>
              <option value="retail">Retail Partnership</option>
              <option value="support">Customer Support</option>
            </select>
          </label>

          <label className="grid gap-1.5 text-[14px] font-medium text-[var(--mute)] md:col-span-2">
            Message * (max 1000 characters)
            <textarea
              name="message"
              required
              rows={4}
              maxLength={1000}
              placeholder="How can we help you today?"
              className="font-sans text-[var(--ink)] px-4 py-3.5 border-[1.5px] border-[var(--line)] rounded-[14px] bg-white w-full focus:outline-hidden focus:border-[var(--blue2)] resize-y"
            ></textarea>
          </label>

          <p className="text-xs text-[var(--mute)] md:col-span-2">
            By submitting this form, you acknowledge that your details will be sent to our team via WhatsApp and email. Read our{" "}
            <Link href="/privacy" className="underline hover:text-[var(--blue)]">Privacy Policy</Link>.
          </p>

          <div className="md:col-span-2 flex flex-col sm:flex-row items-center gap-4 pt-2">
            <button
              type="submit"
              disabled={isPending}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--blue)] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[var(--blue2)] transition-colors cursor-pointer disabled:opacity-70"
            >
              {isPending && <Loader2 className="w-5 h-5 animate-spin" />}
              Send Enquiry
            </button>

            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20Fingersoft%20Tissues."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-full font-semibold hover:bg-[#20ba5a] transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>

          {status && (
            <div
              role="alert"
              aria-live="polite"
              className={`md:col-span-2 p-4 rounded-xl flex items-center gap-3 ${
                status.success ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {status.success ? <CheckCircle2 className="w-5 h-5 shrink-0 text-green-600" /> : <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />}
              <span className="text-sm font-medium">{status.message}</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}