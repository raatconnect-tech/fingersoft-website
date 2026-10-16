import type { Metadata } from "next";
import { outfit, fraunces } from "@/styles/fonts";
import "@/styles/tokens.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GsapProvider } from "@/components/motion/GsapProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";
import { GoogleAnalytics } from "@next/third-parties/google";
import { MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html  lang="en" data-scroll-behavior="smooth" className={`${outfit.variable} ${fraunces.variable}`}>
      <body className="antialiased selection:bg-[var(--blue)] selection:text-white">
        <JsonLd />
        <GsapProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />

          {/* Floating WhatsApp Chat Button */}
          <a
            href={siteConfig.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform grid place-items-center"
          >
            <MessageSquare className="w-6 h-6 fill-current" />
          </a>
        </GsapProvider>
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}