import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Fingersoft Tissues for distribution, wholesale, or customer support.",
};

export default function ContactPage() {
  return (
    <div className="py-8">
      <ContactForm />
    </div>
  );
}