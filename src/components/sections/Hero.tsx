"use client";

import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Sparkles, ShieldCheck } from "lucide-react";

// Paste your image URL or relative path here (e.g., "/images/tissue-box.webp")
const HERO_IMAGE_URL = "/images/tissue-box.jpg";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo("h1", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 })
      .fromTo(".hero-p", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
      .fromTo(".hero-cta", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
      .fromTo(visualRef.current, { opacity: 0, scale: 0.95, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: 1 }, "-=0.8");

    gsap.to(visualRef.current, {
      y: -10,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(".floating-badge-1", {
      y: -12,
      x: 4,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".floating-badge-2", {
      y: 10,
      x: -6,
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
            <Button href="#categories">Explore Categories</Button>
            <Button href="#contact" variant="ghost">Get in touch</Button>
          </div>
          <div className="mt-[34px] text-[14px] text-[var(--mute)]">
            A product of <b className="text-[var(--blue)] tracking-[1px]">{siteConfig.parentBrand}</b>
          </div>
        </div>

        {/* Right Side: Tissue Box Image with Animated Badges */}
        <div className="relative w-full aspect-[4/3] flex items-center justify-center">
          
          <div className="absolute w-72 h-72 bg-blue-200/50 rounded-full blur-3xl -z-10 animate-pulse"></div>

          <div ref={visualRef} className="relative w-full h-full max-w-[420px] rounded-3xl overflow-hidden drop-shadow-2xl border border-[var(--line)] bg-white/40 backdrop-blur-xs">
            <Image
              src={HERO_IMAGE_URL}
              alt="Fingersoft Tissues Box Packaging"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Floating Badge 1 */}
          <div className="floating-badge-1 absolute -top-2 left-2 md:-left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[var(--line)] shadow-lg flex items-center gap-3 z-20">
            <div className="w-8 h-8 rounded-full bg-blue-50 grid place-items-center text-[var(--blue)]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-[var(--ink)]">100% Virgin Pulp</p>
              <p className="text-[10px] text-[var(--mute)]">Cashmere softness</p>
            </div>
          </div>

          {/* Floating Badge 2 */}
          <div className="floating-badge-2 absolute -bottom-2 right-2 md:-right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[var(--line)] shadow-lg flex items-center gap-3 z-20">
            <div className="w-8 h-8 rounded-full bg-green-50 grid place-items-center text-green-600">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-[var(--ink)]">Eco Friendly</p>
              <p className="text-[10px] text-[var(--mute)]">Dermatologically safe</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}