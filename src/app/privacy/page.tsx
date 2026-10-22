import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `Read the privacy policy for ${siteConfig.name} (${siteConfig.parentBrand}) to understand how we handle your data.`,
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: `Privacy Policy | ${siteConfig.name}`,
    description: `Privacy policy and data handling guidelines for ${siteConfig.name}.`,
    url: '/privacy',
    images: ['/images/fingersoft-tissues-blue-logo-h.png']
  },
};

export default function PrivacyPage() {
  return (
    <div className="py-16">
      <div className="max-w-[800px] mx-auto px-6">
        <h1 className="text-4xl font-bold text-[var(--blue)] mb-6">Privacy Policy</h1>
        <p className="text-[var(--mute)] mb-4">Last updated: October 2026</p>
        <div className="space-y-4 text-[var(--ink)]">
          <p>
            At {siteConfig.name}, operated by {siteConfig.parentBrand}, we respect your privacy and are committed to protecting any personal information you share with us through our website and enquiry forms.
          </p>
          <h2 className="text-2xl font-bold pt-4">Data Collection</h2>
          <p>
            When you submit an enquiry, we collect your name, phone number, email address, and message. These details are transmitted securely to our team via WhatsApp Cloud API and encrypted email channels solely to fulfill your request.
          </p>
        </div>
      </div>
    </div>
  );
}