import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name}`,
  description: `Learn more about ${siteConfig.name}, a premium product of ${siteConfig.parentBrand}, engineered for daily comfort and uncompromising quality.`,
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description: `Learn more about ${siteConfig.name}, a premium product of ${siteConfig.parentBrand}.`,
    url: '/about',
    images: ['/images/fingersoft-tissues-blue-logo-h.png'],
  },
};

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="max-w-[1100px] mx-auto px-6 max-w-3xl">
        <h1 className="text-[clamp(36px,5vw,56px)] font-bold text-[var(--blue)] mb-6">About Fingersoft</h1>
        <p className="text-lg text-[var(--mute)] mb-6">
          {siteConfig.name} is a proud sub-brand of <strong className="text-[var(--blue)]">{siteConfig.parentBrand}</strong>, dedicated to delivering uncompromised hygiene and daily comfort to households across India.
        </p>
        <h2 className="text-2xl font-bold text-[var(--ink)] mt-8 mb-4">Our Commitment to Quality</h2>
        <p className="text-lg text-[var(--mute)] mb-6">
          We source sustainable virgin pulp and utilize advanced manufacturing processes to ensure every tissue sheet meets rigorous international standards for softness, tear resistance, and skin safety.
        </p>
      </div>
    </div>
  );
}