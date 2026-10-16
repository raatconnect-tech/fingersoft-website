"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/products", label: "Why Fingersoft" },
    { href: "/blog", label: "Journal" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-blue-600 focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={`sticky top-0 z-40 transition-all duration-200 border-b border-[var(--line)] ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-xs" : "bg-white/88 backdrop-blur-[10px]"
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between h-[68px]">
          {/* Brand Logo Image */}
          <Link href="/" className="flex items-center">
            <div className="relative h-9 w-[160px]">
              <Image
                src="/images/fingersoft-tissues-blue-logo-h.png"
                alt={siteConfig.name}
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          <nav className="hidden md:flex gap-[26px] text-[15px] font-medium text-[var(--mute)]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-[var(--blue)] transition-colors ${
                  pathname === link.href ? "text-[var(--blue)] font-semibold" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-[var(--blue)] !text-white px-[26px] py-[13px] rounded-full font-semibold hover:bg-[var(--blue2)] transition-colors cursor-pointer"
            >
              Enquire
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[var(--ink)] focus:outline-hidden"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="md:hidden absolute top-[68px] left-0 w-full bg-white border-b border-[var(--line)] shadow-lg py-6 px-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-[var(--ink)] hover:text-[var(--blue)]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-center bg-[var(--blue)] !text-white py-3 rounded-full font-semibold mt-2"
            >
              Enquire
            </Link>
          </div>
        )}
      </header>
    </>
  );
}