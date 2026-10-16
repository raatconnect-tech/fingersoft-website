import type { Metadata } from "next";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ProductSplit } from "@/components/sections/ProductSplit";

export const metadata: Metadata = {
  title: "Why Fingersoft — Premium Tissues",
  description: "Explore the superior softness, wet strength, and eco-friendly manufacturing behind Fingersoft Tissues.",
};

export default function ProductsPage() {
  return (
    <div className="py-12">
      <div className="max-w-[1100px] mx-auto px-6 mb-8">
        <h1 className="text-[clamp(36px,5vw,56px)] font-bold text-[var(--blue)] mb-4">Why Fingersoft Tissues</h1>
        <p className="text-xl text-[var(--mute)] max-w-2xl">
          Engineered for everyday comfort, combining luxury softness with reliable durability for your family and office.
        </p>
      </div>
      <FeatureGrid />
      <ProductSplit />
    </div>
  );
}