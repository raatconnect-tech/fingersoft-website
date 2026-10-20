import { Hero } from "@/components/sections/Hero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Categories } from "@/components/sections/Categories";
import { ProductSplit } from "@/components/sections/ProductSplit";
import { BrandQuote } from "@/components/sections/BrandQuote";
import { ContactForm } from "@/components/sections/ContactForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <Categories />
      <ProductSplit />
      <BrandQuote />
      <ContactForm />
    </>
  );
}