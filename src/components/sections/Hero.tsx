"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Sparkles, ShieldCheck, Droplet } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Main entrance timeline for text and visual card
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.fromTo("h1", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 })
      .fromTo(".hero-p", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
      .fromTo(".hero-cta", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
      .fromTo(visualRef.current, { opacity: 0, scale: 0.9, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: 1 }, "-=0.8");

    // Continuous floating effect for the main visual card
    gsap.to(visualRef.current, {
      y: -12,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Staggered floating effect for individual floating badges
    gsap.to(".floating-badge-1", {
      y: -15,
      x: 5,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".floating-badge-2", {
      y: 12,
      x: -8,
      duration: 4.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.5,
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-gradient-to-b from-[#f4f8fd] to-[#fff] py-[72px] lg:py-[96px] overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
        
        {/* Left Side: Text Content */}
        <div>
          <h1 className="text-[clamp(40px,6vw,68px)] leading-[1.05] mb-5 font-bold tracking-[-1.5px] text-[var(--blue)]">
            Softness you can feel.
          </h1>
          <p className="hero-p text-[20px] text-[var(--mute)] max-w-[30em] mb-[30px]">
            {siteConfig.description}
          </p>
          <div className="hero-cta flex gap-3 flex-wrap">
            <Button href="/products">See the tissues</Button>
            <Button href="/contact" variant="ghost">Get in touch</Button>
          </div>
          <div className="mt-[34px] text-[14px] text-[var(--mute)]">
            A product of <b className="text-[var(--blue)] tracking-[1px]">{siteConfig.parentBrand}</b>
          </div>
        </div>

        {/* Right Side: Pure GSAP Animated Visual Composition */}
        <div className="relative w-full aspect-square md:aspect-[4/3] flex items-center justify-center">
          
          {/* Background Decorative Glow */}
          <div className="absolute w-72 h-72 bg-blue-200/50 rounded-full blur-3xl -z-10 animate-pulse"></div>

          {/* Main Central Card (Tissue Pack Mockup) */}
          <div 
            ref={visualRef}
            className="w-full max-w-[380px] bg-white rounded-[32px] p-8 border border-[var(--line)] shadow-xl relative z-10 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-[var(--tint)] border border-[var(--line)] grid place-items-center text-[var(--blue)] mb-6 shadow-inner">
              <Droplet className="w-8 h-8 fill-current" />
            </div>

            <span className="text-xs font-bold tracking-widest text-[var(--blue)] uppercase mb-2">
              {siteConfig.parentBrand}
            </span>
            <h3 className="text-2xl font-bold text-[var(--ink)] mb-3">
              {siteConfig.name}
            </h3>
            <p className="text-sm text-[var(--mute)] mb-6">
              3-Ply Ultra Soft Virgin Pulp Tissues engineered for supreme comfort.
            </p>

            <div className="w-full pt-4 border-t border-[var(--line)] flex justify-between items-center text-xs font-semibold text-[var(--blue)]">
              <span>✨ 100% Pure & Safe</span>
              <span>🛡️ Wet Strength</span>
            </div>
          </div>

          {/* Floating Badge 1 (Top Left) */}
          <div className="floating-badge-1 absolute -top-4 left-4 md:-left-6 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-[var(--line)] shadow-lg flex items-center gap-3 z-20">
            <div className="w-8 h-8 rounded-full bg-blue-50 grid place-items-center text-[var(--blue)]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-[var(--ink)]">Cashmere Soft</p>
              <p className="text-[10px] text-[var(--mute)]">Dermatologically tested</p>
            </div>
          </div>

          {/* Floating Badge 2 (Bottom Right) */}
          <div className="floating-badge-2 absolute -bottom-4 right-4 md:-right-6 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-[var(--line)] shadow-lg flex items-center gap-3 z-20">
            <div className="w-8 h-8 rounded-full bg-green-50 grid place-items-center text-green-600">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-[var(--ink)]">Eco Friendly</p>
              <p className="text-[10px] text-[var(--mute)]">Sustainably sourced</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}