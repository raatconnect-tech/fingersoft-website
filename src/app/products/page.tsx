import type { Metadata } from "next";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ProductSplit } from "@/components/sections/ProductSplit";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Tissue Products & Catalog | ${siteConfig.name}`,
  description: `Explore our complete lineup of premium facial tissue boxes, pocket packs, and custom-branded napkins for commercial use.`,
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: `Tissue Products & Catalog | ${siteConfig.name}`,
    description: `High-absorbency, ultra-soft 2-ply and 3-ply facial tissue boxes and customizable napkin packs.`,
    url: "/products",
    images: ["/images/premium-tissues.png"],
  },
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