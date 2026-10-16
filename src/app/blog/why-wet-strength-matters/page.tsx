import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Wet Strength Matters in Premium Facial Tissues",
  description: "Explore how advanced fiber bonding keeps tissues intact when damp.",
};

export default function BlogPostPage() {
  return (
    <div className="py-16">
      <div className="max-w-[800px] mx-auto px-6">
        <Link href="/blog" className="text-[var(--blue)] font-semibold mb-6 inline-block">← Back to Journal</Link>
        <span className="text-sm text-[var(--mute)] block mb-2">Published on October 20, 2026</span>
        <h1 className="text-[clamp(32px,4vw,48px)] font-bold text-[var(--blue)] mb-6">
          Why Wet Strength Matters in Premium Facial Tissues
        </h1>

        <div className="prose prose-lg text-[var(--ink)] space-y-4">
          <p>
            When evaluating facial tissues, consumers often look purely at dry softness. However, true everyday convenience requires balancing delicacy with structural integrity—especially when encountering moisture.
          </p>
          <h2 className="text-2xl font-bold mt-6 mb-3">The Science of Fiber Bonding</h2>
            Traditional low-grade tissues tend to disintegrate instantly upon contact with moisture, leaving irritating paper lint behind. Fingersoft Tissues utilize advanced hydrogen bond reinforcement during pulping, creating a matrix that maintains tensile strength even when wet.
          <h2 className="text-2xl font-bold mt-6 mb-3">Safe for Sensitive Skin</h2>
            Despite enhanced wet strength, our tissues remain completely hypoallergenic and free from harsh chemical binders, ensuring gentle care for all skin types.
        </div>
      </div>
    </div>
  );
}