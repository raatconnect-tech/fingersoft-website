"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, ShieldCheck, Droplet, HeartHandshake } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function FeatureGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Advanced scroll-in animation with scale, vertical slide, and smooth easing
    gsap.fromTo(
      cardsRef.current.filter(Boolean),
      { opacity: 0, y: 60, scale: 0.92 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", // Triggers when the top of the section hits 75% down the viewport
          toggleActions: "play none none reverse", // Plays when scrolling down, reverses when scrolling back up
        },
      }
    );
  }, { scope: sectionRef });

  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Ultra Soft",
      description: "Carefully layered virgin pulp engineered for a cashmere-like touch on sensitive skin.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Wet Strength",
      description: "Advanced fiber bonding keeps tissues intact even when damp, preventing messy shreds.",
    },
    {
      icon: <Droplet className="w-6 h-6" />,
      title: "100% Pure",
      description: "Zero optical brightening agents or harsh chemicals. Safe for toddlers and facial use.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Eco Friendly",
      description: "Sustainably sourced from certified renewable forests under stringent environmental standards.",
    },
  ];

  return (
    <section ref={sectionRef} id="features" className="py-[88px] overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-[clamp(30px,4vw,44px)] leading-[1.15] mb-[14px] tracking-[-0.8px] font-bold text-[var(--ink)]">
          Engineered for Daily Comfort
        </h2>
        <p className="text-[var(--mute)] max-w-[36em] mb-[44px]">
          Discover why thousands of households and offices trust Fingersoft for uncompromising everyday hygiene.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feat, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="feature-card bg-[var(--tint)] rounded-[22px] p-[30px_26px] transition-transform duration-300 hover:-translate-y-1.5 opacity-0"
            >
              <div className="w-[52px] h-[52px] rounded-full bg-white border-[1.5px] border-[var(--blue)] grid place-items-center mb-[18px] text-[var(--blue)]">
                {feat.icon}
              </div>
              <h3 className="text-[20px] font-bold text-[var(--blue)] mb-1">{feat.title}</h3>
              <p className="text-[var(--mute)] text-[15.5px] m-0">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}