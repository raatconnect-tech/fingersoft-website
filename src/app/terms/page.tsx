import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
  description: `Terms and conditions for using the ${siteConfig.name} website and purchasing products from ${siteConfig.parentBrand}.`,
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: `Terms of Service | ${siteConfig.name}`,
    description: `Terms and conditions for ${siteConfig.name}.`,
    url: '/terms',
    images: ['/images/fingersoft-tissues-blue-logo-h.png']
  },
};

export default function TermsPage() {
  return (
    <div className="py-16">
      <div className="max-w-[800px] mx-auto px-6">
        <h1 className="text-4xl font-bold text-[var(--blue)] mb-6">Terms of Service</h1>
        <p className="text-[var(--mute)] mb-4">Last updated: October 2026</p>
        <div className="space-y-4 text-[var(--ink)]">
          <p>
            Welcome to {siteConfig.name}. By accessing our website and services provided by {siteConfig.parentBrand}, you agree to comply with and be bound by these terms.
          </p>
          <h2 className="text-2xl font-bold pt-4">Intellectual Property</h2>
          <p>
            All content, logos, branding, and product designs associated with {siteConfig.name} are the property of {siteConfig.parentBrand}.
          </p>
        </div>
      </div>
    </div>
  );
}