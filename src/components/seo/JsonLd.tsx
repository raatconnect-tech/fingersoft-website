import { siteConfig } from "@/config/site";

export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.parentBrand,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.png`,
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
    ],
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
      description: siteConfig.description,
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}