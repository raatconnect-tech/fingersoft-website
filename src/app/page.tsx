import { Hero } from "@/components/sections/Hero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Categories } from "@/components/sections/Categories";
import { ProductSplit } from "@/components/sections/ProductSplit";
import { BrandQuote } from "@/components/sections/BrandQuote";
import { ContactForm } from "@/components/sections/ContactForm";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Softness You Can Feel`,
  description: `Premium virgin pulp facial tissues and customized B2B napkin solutions for home, car, hotels, and corporate clients.`,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | Softness You Can Feel`,
    description: `Discover ultra-soft 2-ply & 3-ply virgin pulp tissues and custom-branded tissue solutions.`,
    url: "/",
    images: ["/images/premium-tissues.png"],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <FeatureGrid />
      <ProductSplit />
      <BrandQuote />
      <ContactForm />
    </>
  );
}