"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Package, Crown, Building2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Categories() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.fromTo(
      ".category-card",
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="categories" className="py-[88px] bg-[var(--tint)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center max-w-[600px] mx-auto mb-14">
          <span className="text-[var(--blue)] font-semibold text-[15px] uppercase tracking-wider block mb-2">Product Lineup</span>
          <h2 className="text-[clamp(32px,4vw,46px)] leading-[1.15] tracking-[-0.8px] font-bold text-[var(--ink)] mb-4">
            Our Tissue Categories
          </h2>
          <p className="text-[var(--mute)] text-[17px]">
            Whether you need premium everyday essentials for home or custom-branded tissue solutions for your business, we have you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Category 1: Premium Tissues */}
          <div className="category-card bg-white rounded-[28px] p-8 md:p-10 border border-[var(--line)] shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[var(--blue)] mb-6">
                <Crown className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--blue)] bg-[var(--tint)] px-3 py-1 rounded-full">
                Retail & Household
              </span>
              <h3 className="text-2xl font-bold text-[var(--ink)] mt-3 mb-3">
                Premium Tissues
              </h3>
              <p className="text-[var(--mute)] text-[15.5px] leading-relaxed mb-6">
                Ultra-soft 2-ply & 3-ply virgin pulp tissue packs crafted for households, luxury cars, and premium personal care.
              </p>
              
              <ul className="space-y-3 mb-8 text-sm font-medium text-[var(--ink)]">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--blue)] shrink-0" />
                  Facial Tissue Boxes & Pocket Packs
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--blue)] shrink-0" />
                  Ultra Soft & Highly Absorbent Sheets
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--blue)] shrink-0" />
                  Hypoallergenic & Fragrance-Free
                </li>
              </ul>
            </div>

            <Button href="#contact" variant="primary" className="w-full">
              Order Premium Packs
            </Button>
          </div>

          {/* Category 2: Customized Tissues */}
          <div className="category-card bg-white rounded-[28px] p-8 md:p-10 border border-[var(--line)] shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 mb-6">
                <Building2 className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
                B2B & Commercial
              </span>
              <h3 className="text-2xl font-bold text-[var(--ink)] mt-3 mb-3">
                Customized Tissues
              </h3>
              <p className="text-[var(--mute)] text-[15.5px] leading-relaxed mb-6">
                Elevate your business branding with custom-printed tissue boxes, napkin branding, and bespoke packaging for hospitality & corporate clients.
              </p>
              
              <ul className="space-y-3 mb-8 text-sm font-medium text-[var(--ink)]">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  Custom Brand Logo & Color Printing
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  For Hotels, Restaurants, Cafes & Airlines
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  Bulk Wholesale & Flexible MOQ Options
                </li>
              </ul>
            </div>

            <Button href="#contact" variant="ghost" className="w-full">
              Request Custom Quote
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}