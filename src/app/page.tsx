import { Hero } from "@/components/sections/Hero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ProductSplit } from "@/components/sections/ProductSplit";
import { BrandQuote } from "@/components/sections/BrandQuote";
import { ContactForm } from "@/components/sections/ContactForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <ProductSplit />
      <BrandQuote />
      <ContactForm />
    </>
  );
}