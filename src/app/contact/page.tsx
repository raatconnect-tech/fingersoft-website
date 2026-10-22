import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.name}`,
  description: `Get in touch with ${siteConfig.name} for bulk wholesale orders, retail availability, or customized tissue branding inquiries.`,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Contact Us | ${siteConfig.name}`,
    description: `Have questions about bulk orders or custom tissue branding? Drop us a line or chat with us on WhatsApp.`,
    url: "/contact",
    images: ["/images/premium-tissues.png"],
  },
};

export default function ContactPage() {
  return (
    <div className="py-8">
      <ContactForm />
    </div>
  );
}