"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ProductSplit() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Left column content entrance
    gsap.fromTo(
      leftColRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Staggered list items entrance
    gsap.fromTo(
      ".split-list-item",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Right panel card entrance
    gsap.fromTo(
      rightColRef.current,
      { opacity: 0, x: 50, scale: 0.95 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, { scope: sectionRef });

  const points = [
    "Dermatologically tested and hypoallergenic formula",
    "Enhanced wet strength technology prevents tearing",
    "Embossed pillow-soft texture for maximum absorption",
    "Responsibly manufactured under RAAT Enterprises quality assurance"
  ];

  return (
    <section ref={sectionRef} id="product" className="py-[88px] bg-[var(--tint)] overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* Left Column */}
        <div ref={leftColRef} className="opacity-0">
          <span className="text-[var(--blue)] font-semibold text-[15px] block mb-1.5">Signature Quality</span>
          <h2 className="text-[clamp(30px,4vw,44px)] leading-[1.15] mb-4 tracking-[-0.8px] font-bold text-[var(--ink)]">
            Experience the Touch of Pure Quality
          </h2>
          <p className="text-[var(--mute)] mb-6 text-[17px]">
            Each sheet is crafted to balance supreme delicacy with robust durability. Whether for personal care, dining, or office hygiene, Fingersoft delivers consistent excellence.
          </p>

          <ul className="list-none p-0 m-0 grid gap-3">
            {points.map((pt, i) => (
              <li key={i} className="split-list-item pl-[30px] relative text-[var(--ink)] font-medium opacity-0">
                <span className="absolute left-0 top-[7px] w-[16px] h-[16px] rounded-full bg-[var(--blue2)] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-3 h-3">
                    <path d="M4.500 8.200l2.200 2.200 4.800-4.800" fill="none" stroke="white" strokeWidth="1.800" strokeLinecap="round" />
                  </svg>
                </span>
                {pt}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column Card with Hover Micro-Interaction */}
        <div 
          ref={rightColRef} 
          className="bg-white rounded-[28px] p-[44px] border border-[var(--line)] shadow-sm opacity-0 transition-transform duration-300 hover:scale-[1.02]"
        >
          <div className="text-[var(--blue)] font-semibold text-[15px] mb-1.5">Family Safe & Certified</div>
          <div className="text-[34px] font-bold leading-[1.2] text-[var(--blue)] mb-3">
            Pure Comfort in Every Sheet
          </div>
          <p className="text-[var(--mute)] text-[16px] mb-6">
            Free from elemental chlorine bleaching and artificial fragrances. Designed for sensitive skin types.
          </p>
          <div className="p-4 rounded-xl bg-[var(--tint)] border border-[var(--line)] text-sm text-[var(--ink)]">
            <strong>Pro Tip:</strong> Keep a pack in your car and office desk for instant freshness on the go.
          </div>
        </div>

      </div>
    </section>
  );
}