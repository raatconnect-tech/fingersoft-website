import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-[var(--tint)] py-[44px] text-[var(--mute)] text-[15px]">
      <div className="max-w-[1100px] mx-auto px-6 flex justify-between gap-5 flex-wrap items-center">
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex items-center">
            <div className="relative h-8 w-[150px]">
              <Image
                src="/images/fingersoft-tissues-blue-logo-h.png"
                alt={siteConfig.name}
                fill
                className="object-contain object-left"
              />
            </div>
          </Link>

          <p className="text-sm">
            A product of{" "}
            <strong className="text-[var(--blue)] tracking-wider">
              {siteConfig.parentBrand}
            </strong>
          </p>
        </div>

        <div className="flex gap-6 flex-wrap text-sm font-medium">
          <Link href="/about" className="hover:text-[var(--blue)]">
            About
          </Link>
          <Link href="/products" className="hover:text-[var(--blue)]">
            Why Fingersoft
          </Link>
          <Link href="/blog" className="hover:text-[var(--blue)]">
            Journal
          </Link>
          <Link href="/privacy" className="hover:text-[var(--blue)]">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-[var(--blue)]">
            Terms
          </Link>
          <Link href="/contact" className="hover:text-[var(--blue)]">
            Contact
          </Link>
        </div>

        <div className="text-xs text-[var(--mute)] w-full text-center md:text-right pt-4 border-t border-[var(--line)]">
          © 2026 {siteConfig.parentBrand}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}