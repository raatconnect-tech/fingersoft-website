import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Journal & Insights",
  description: "Read the latest updates and hygiene tips from Fingersoft Tissues.",
};

export default function BlogPage() {
  return (
    <div className="py-16">
      <div className="max-w-[1100px] mx-auto px-6">
        <h1 className="text-[clamp(36px,5vw,56px)] font-bold text-[var(--blue)] mb-4">Journal</h1>
        <p className="text-xl text-[var(--mute)] mb-12">Insights on home hygiene, sustainable manufacturing, and everyday comfort.</p>

        <div className="grid gap-6 max-w-2xl">
          <article className="bg-[var(--tint)] p-6 rounded-2xl border border-[var(--line)]">
            <span className="text-sm font-semibold text-[var(--blue)] block mb-2">October 20, 2026</span>
            <h2 className="text-2xl font-bold text-[var(--ink)] mb-3">
              <Link href="/blog/why-wet-strength-matters" className="hover:underline">
                Why Wet Strength Matters in Premium Facial Tissues
              </Link>
            </h2>
            <p className="text-[var(--mute)] mb-4">
              Discover how advanced fiber bonding ensures your tissue stays intact when damp without sacrificing cashmere-like softness.
            </p>
            <Link href="/blog/why-wet-strength-matters" className="font-semibold text-[var(--blue)] hover:underline">
              Read Article →
            </Link>
          </article>
        </div>
      </div>
    </div>
  );
}